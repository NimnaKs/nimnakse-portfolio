"use client";

import { Calendar, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import AnimationWrapper from "@/components/animation-wrapper";

const educationItems = [
  {
    id: 1,
    degree: "Ordinary & Advanced Level Examinations",
    institution: "Holy Cross College - Kalutara",
    duration: "2007 – 2019",
    description:
      "Completed primary–secondary studies. Sat for O-Levels (2017) and A-Levels (2019).",
  },
  {
    id: 2,
    degree: "Diploma in English & Diploma in IT",
    institution: "Esoft Metro Campus",
    duration: "2014 - 2018",
    description:
      "Finished twin diploma programme covering academic English and foundational Information Technology.",
  },
  {
    id: 3,
    degree: "BSc (Hons) in Computer Science • in progress",
    institution: "Institute of Software Engineering (IJSE)",
    duration: "2022 – Present",
    description:
      "Core modules: Data Structures, Algorithms, Java/Spring, DevOps, Cloud Computing.",
  },
  {
    id: 4,
    degree: "BSc in Physical Science • in progress",
    institution: "University of Colombo",
    duration: "2023 – Present",
    description:
      "Majoring in Mathematics, Statistics, and Computer Science to strengthen theoretical foundations.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Education & Qualifications"
          subtitle="My academic background and professional certifications"
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-border transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            {educationItems.map((item, index) => (
              <AnimationWrapper
                key={item.id}
                delay={index * 0.2}
                className="mb-12 last:mb-0"
              >
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full bg-primary transform -translate-x-1/2 flex items-center justify-center">
                    <GraduationCap className="h-3 w-3 text-primary-foreground" />
                  </div>

                  {/* Left Side (Date) - Visible on medium+ screens */}
                  <div className="hidden md:flex md:justify-end md:items-start">
                    <div className="bg-muted/50 rounded-lg p-4 max-w-xs ml-auto text-right">
                      <div className="flex items-center justify-end text-sm font-medium space-x-1">
                        <span>{item.duration}</span>
                        <Calendar className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Right Side (Education Details) */}
                  <div className="md:ml-0 ml-8">
                    <div className="bg-muted/50 rounded-lg p-4">
                      {/* Mobile Date - Visible only on small screens */}
                      <div className="md:hidden flex items-center text-sm font-medium text-muted-foreground mb-2">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span>{item.duration}</span>
                      </div>

                      <h3 className="font-bold text-xl">{item.degree}</h3>
                      <p className="text-primary font-medium mt-1">
                        {item.institution}
                      </p>
                      <p className="mt-2 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
