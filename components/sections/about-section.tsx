"use client";

import Image from "next/image";
import { FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";
import AnimationWrapper from "@/components/animation-wrapper";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="About Me"
          subtitle="Engineer · Builder · Lifelong Student"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimationWrapper>
            <div className="aspect-square relative mx-auto md:mx-0 max-w-md rounded-lg overflow-hidden">
              <Image
                src="/nimnakse-img.jpg"
                alt="Nimna Kaveesha portrait"
                fill
                /*className="object-cover grayscale hover:grayscale-0 transition-all duration-500"*/
                sizes="(max-width:768px) 100vw, 50vw"
                priority
              />
            </div>
          </AnimationWrapper>

          <AnimationWrapper delay={0.2} direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Hi, I’m Nimna&nbsp;Kaveesha 👋
              </h3>

              <p className="text-muted-foreground">
                I’m an{" "}
                <strong>
                  Associate Backend Developer at Rumex&nbsp;Pvt.&nbsp;Ltd.
                </strong>{" "}
                where I architect and maintain high-throughput APIs that power
                video-streaming and live-production platforms used by thousands
                of sports fans every match day.
              </p>

              <p className="text-muted-foreground">
                My day-to-day toolbox includes{" "}
                <em>
                  Spring&nbsp;Boot, Node.js/Express, Next.js, React, Docker, AWS
                  (ECS&nbsp;&amp;&nbsp;Lambda), MySQL&nbsp;and&nbsp;MongoDB
                </em>
                . On the front end I craft responsive UIs with TypeScript and
                Tailwind, ensuring pixel-perfect hand-off from design to
                deployment.
              </p>

              <p className="text-muted-foreground">
                Beyond traditional web stacks, I’m deeply interested in{" "}
                <strong>machine learning</strong>. I prototype models in{" "}
                <em>Python, TensorFlow&nbsp;&amp;&nbsp;PyTorch</em>—from
                real-time content-recommendation engines to computer-vision
                pipelines for sports analytics. Marrying backend engineering
                discipline with ML experimentation lets me deliver intelligent
                features without sacrificing reliability.
              </p>

              <p className="text-muted-foreground">
                I’m currently finishing a <em>B.Sc. in Physical Science</em> and
                a <em>Diploma in Software Engineering</em>. Learning energizes
                me, so you’ll often find a new Coursera tab open or a side
                project spinning up on an EC2 spot instance. My guiding
                principle is simple:{" "}
                <em>build things that reduce friction for real people</em>.
              </p>

              {/*<Button asChild className="rounded-full">
                <Link
                  href="/docs/NimnaKaveesha_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>*/}
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
