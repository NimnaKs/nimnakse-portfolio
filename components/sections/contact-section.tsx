"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import SectionHeading from "@/components/section-heading";
import AnimationWrapper from "@/components/animation-wrapper";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    setTimeout(() => {
      console.log(data);
      toast.success("Message sent successfully!");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to work together? Drop me a message!"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          <AnimationWrapper>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Let's Connect</h3>
              <p className="text-muted-foreground">
                Whether you have a project in mind, a question about my work, or
                just want to say hello, I'd love to hear from you. Fill out the
                form or reach out directly through the following channels:
              </p>

              <div className="space-y-4 mt-8">
                <a
                  href="https://github.com/NimnaKs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>github.com/NimnaKs</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/nimnakse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/in/nimnakse</span>
                </a>

                <a
                  href="mailto:nimnakse@gmail.com"
                  className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>nimnakse@gmail.com</span>
                </a>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper delay={0.2} direction="left">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What would you like to discuss?"
                          className="min-h-32 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
