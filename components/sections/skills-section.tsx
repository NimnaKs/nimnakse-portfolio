"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/section-heading";
import AnimationWrapper from "@/components/animation-wrapper";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const skills = [
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    cat: "languages",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    cat: "languages",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    cat: "languages",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    cat: "languages",
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    cat: "languages",
  },

  {
    name: "Spring Boot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
    cat: "frameworks",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
    cat: "frameworks",
  },
  {
    name: "NestJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    cat: "frameworks",
  },
  {
    name: "Flask",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    cat: "frameworks",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    cat: "frameworks",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    cat: "frameworks",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    cat: "frameworks",
  },
  {
    name: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    cat: "frameworks",
  },

  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    cat: "databases",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    cat: "databases",
  },
  {
    name: "Redis",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain.svg",
    cat: "databases",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    cat: "devops",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    cat: "devops",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    cat: "devops",
  },
  {
    name: "Linux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    cat: "devops",
  },
  {
    name: "Elasticsearch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
    cat: "devops",
  },

  {
    name: "TensorFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    cat: "ml",
  },
  {
    name: "PyTorch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    cat: "ml",
  },
  {
    name: "FFmpeg",
    logo: "https://img.icons8.com/color/48/ffmpeg.png",
    cat: "ml",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    cat: "frameworks",
  },
] as const;

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? skills
      : skills.filter((s) =>
          activeTab === "languages"
            ? s.cat === "languages"
            : activeTab === "frameworks"
            ? s.cat === "frameworks"
            : activeTab === "databases"
            ? s.cat === "databases"
            : activeTab === "devops"
            ? s.cat === "devops"
            : activeTab === "ml"
            ? s.cat === "ml"
            : false
        );

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Everything I tap into when building products"
        />

        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid auto-cols-fr grid-flow-col gap-1 max-w-5xl w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="frameworks">
                Frameworks&nbsp;&amp;&nbsp;Libraries
              </TabsTrigger>
              <TabsTrigger value="databases">
                Databases&nbsp;&amp;&nbsp;Caching
              </TabsTrigger>
              <TabsTrigger value="devops">
                DevOps&nbsp;&amp;&nbsp;Cloud
              </TabsTrigger>
              <TabsTrigger value="ml">ML&nbsp;&amp;&nbsp;Media</TabsTrigger>
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8">
                {filtered.map((skill, idx) => (
                  <AnimationWrapper key={skill.name} delay={idx * 0.04}>
                    <SkillTile skill={skill} />
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

function SkillTile({ skill }: { skill: { name: string; logo: string } }) {
  const [hovering, setHovering] = useState(false);

  const needsWhiteBg = skill.name === "Express" || skill.name === "Flask";

  return (
    <motion.div
      className={cn(
        "aspect-square bg-background rounded-lg p-3 flex items-center justify-center border transition-shadow",
        hovering ? "shadow-lg" : "shadow-sm"
      )}
      whileHover={{ scale: 1.07 }}
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={skill.logo}
          alt={skill.name}
          width={64}
          height={64}
          unoptimized
          className={cn(
            "transition-transform duration-300",
            needsWhiteBg && "bg-white rounded p-1"
          )}
        />

        {hovering && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-2 left-0 right-0 bg-background/90 text-xs text-center py-1 rounded shadow"
          >
            {skill.name}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
