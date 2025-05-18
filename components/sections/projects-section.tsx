"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "@/components/section-heading";
import AnimationWrapper from "@/components/animation-wrapper";

// Project data
const projects = [
  {
    id: 1,
    title: "Lanka Shop – Authentic Sri Lankan Treasures",
    description:
      "UK-based e-commerce storefront importing Ayurvedic remedies, Ceylon tea, handicrafts and premium spices. Built with Next.js, Firebase, Stripe and a CMS. Free UK delivery over £100, secure checkout, dark-mode UI and products shipped from Epsom.",
    image: "lanka-shop.png",
    demoLink: "https://lankashop.co.uk",
    githubLink: "#",
    category: "client",
  },
  {
    id: 2,
    title: "Wishkah Prints – Eco-Friendly Screen Printing",
    description:
      "Six-colour screen-printing studio in Vancouver. Next.js storefront with category browsing, sustainable ink options, real-time WhatsApp chat and secure Stripe payments.",
    image: "wishkah-prints.png",
    demoLink: "https://wishkahprints.ca/",
    githubLink: "#",
    category: "client",
  },
  {
    id: 3,
    title: "Online Marketing System",
    description:
      "PHP + MySQL SaaS that centralises lead capture, campaign scheduling and performance reporting. Integrates PayHere gateway for Sri Lankan payments and role-based access.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600",
    demoLink: "#",
    githubLink: "https://github.com/NimnaKs/online-sales-marketing-system",
    category: "personal",
  },
  {
    id: 4,
    title: "Media Stat Dashboard for DFLIX",
    description:
      "Real-time analytics suite (Next.js + Spring Boot) for Derana’s OTT platform.",
    image:
      "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1600",
    demoLink: "#",
    githubLink: "#",
    category: "company",
  },
  {
    id: 5,
    title: "DFLIX App",
    description:
      "Implemented search and recommendation microservice and  vtt generation microservice from springboot and nest.js respectively.",
    image: "dflix-logo.png",
    demoLink: "https://dflix.com/home",
    githubLink: "#",
    category: "company",
  },
  {
    id: 6,
    title: "CGPLUS Broadcast Graphics App",
    description:
      "Browser-based character generator (CG) built with Next.js and firebase. Powers live score tickers and lower-thirds for sports broadcasts – inspired by Axcel CG+.",
    image:
      "https://images.pexels.com/photos/9750839/pexels-photo-9750839.jpeg?auto=compress&cs=tinysrgb&w=1600",
    demoLink: "#",
    githubLink: "#",
    category: "company",
  },
  {
    id: 7,
    title: "Ad-Replacement Tool (FFmpeg + Python)",
    description:
      "Server-side ad splicing engine that detects cue tones, slices HLS segments with FFmpeg and stitches replacement ads in real time. Integrates ML-based scene change detection.(Still working on it)",
    image:
      "https://images.pexels.com/photos/7679465/pexels-photo-7679465.jpeg?auto=compress&cs=tinysrgb&w=1600",
    demoLink: "#",
    githubLink: "#",
    category: "company",
  },
  {
    id: 8,
    title: "PEOTV OTT Backend Services",
    description:
      "OTT cms service , elastic cache service,screen details service and payment service for PEOTV OTT platform. Built with Spring Boot.",
    image: "peo-mobile.png",
    demoLink: "#",
    githubLink: "#",
    category: "company",
  },
  {
    id: 9,
    title: "SL Cricket Scoring App",
    description:
      "Progressive Web App built with Next.js and Firebase Firestore for ball-by-ball scoring, real-time overlays for vMix and push notifications for fans.",
    image: "Sri-lanka-cricket.webp",
    demoLink: "#",
    githubLink: "#",
    category: "client",
  },
  {
    id: 10,
    title: "JourneyFlex – Commuter Pass App",
    description:
      "React Native app that streamlines daily bus commuting by offering passengers flexible monthly travel bundles, live route tracking via Google Maps and cash-free QR ticketing powered by Firebase Auth and Cloud Firestore.",
    image: "journeyflex-logo.png",
    demoLink: "#",
    githubLink: "#",
    category: "personal",
  },
  {
    id: 11,
    title: "NoteNest – Google Keep Clone",
    description:
      "Cross-platform note-taking app built with React Native, Firebase Cloud Firestore and Expo. Supports color-coded cards, image uploads, offline sync and biometric lock for privacy.",
    image: "google-keep.jpg",
    demoLink: "#",
    githubLink: "https://github.com/NimnaKs/Google-Keep-App",
    category: "personal",
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="My Projects"
          subtitle="A selection of my recent work across various domains"
        />

        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="client">Client</TabsTrigger>
              <TabsTrigger value="company">Company</TabsTrigger>
              <TabsTrigger value="personal">Personal</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <AnimationWrapper key={project.id} delay={index * 0.1}>
                  <ProjectCard project={project} />
                </AnimationWrapper>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    demoLink: string;
    githubLink: string;
    category: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  // Treat DFLIX and JourneyFlex logos differently
  const isLogo = project.id === 5;

  return (
    <Card
      className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-gray-50",
          isLogo ? "h-36 flex items-center justify-center" : "aspect-video"
        )}
      >
        {isLogo ? (
          <Image
            src={project.image}
            alt={project.title}
            width={160}
            height={80}
            className="object-contain transition-transform duration-500"
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={cn("object-cover transition-transform duration-500")}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
