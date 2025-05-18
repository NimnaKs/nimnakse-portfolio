"use client";

import { useState } from "react";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Users, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "@/components/section-heading";
import AnimationWrapper from "@/components/animation-wrapper";

type EventType = "participated" | "organized";

interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  location: string;
  type: EventType;
  badge?: "Winner" | "Finalist";
}

const events: Event[] = [
  {
    id: 101,
    title: "Genesys III Hackathon",
    description:
      "Main organiser of a Java-focused hackathon for IJSE GDSE cohorts 71 & 72 (51 curated algorithm/OOP challenges).",
    date: new Date(2024, 8, 3),
    location: "IJSE, Sri Lanka",
    type: "organized",
  },
  {
    id: 102,
    title: "Circle Edge Hackathon",
    description:
      "Reached the top-8 finalist stage with team Future Tech Solutions.",
    date: new Date(2024, 5, 1),
    location: "Colombo, Sri Lanka",
    type: "participated",
    badge: "Finalist",
  },
  {
    id: 103,
    title: "Innovesta 2023",
    description:
      "Won “Most Innovative Software Solution” with team Future Tech Solutions.",
    date: new Date(2023, 1, 16), // 16 Feb 2023
    location: "Turyaa Hotel, Kalutara",
    type: "participated",
    badge: "Winner",
  },
];

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const sorted = [...events].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  const filtered =
    activeTab === "all" ? sorted : sorted.filter((e) => e.type === activeTab);

  return (
    <section id="events" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Events & Engagements"
          subtitle="Conferences, meet-ups, and hackathons I’ve joined or organised"
        />

        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="participated">Participated</TabsTrigger>
              <TabsTrigger value="organized">Organised</TabsTrigger>
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-3xl mx-auto space-y-8">
                {filtered.map((event, idx) => (
                  <AnimationWrapper key={event.id} delay={idx * 0.08}>
                    <EventCard event={event} />
                  </AnimationWrapper>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <div
      className={cn(
        "p-6 border rounded-lg bg-background transition-all duration-300 hover:shadow-md",
        event.type === "organized" ? "border-l-4 border-l-primary" : ""
      )}
    >
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold flex items-center gap-2">
            {event.title}
            {event.badge && (
              <span className="inline-flex items-center gap-1 text-xs font-medium bg-emerald-600/10 text-emerald-700 px-2 py-0.5 rounded">
                <Award className="w-3 h-3" />
                {event.badge}
              </span>
            )}
          </h3>

          <p className="text-muted-foreground mt-2">{event.description}</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="mr-1 h-4 w-4" />
              {format(event.date, "MMM dd, yyyy")}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="mr-1 h-4 w-4" />
              {event.type === "organized" ? "Organiser" : "Participant"}
            </div>
          </div>
        </div>

        <div className="text-sm font-medium text-right">{event.location}</div>
      </div>
    </div>
  );
}
