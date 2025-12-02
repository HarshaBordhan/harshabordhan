"use client";

import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "./reusable/button";
import Link from "next/link";

export default function Hero() {
  const scrollProjects = () => {
    const element = document.querySelector("#projects");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialButtons = [
    { icon: Github, href: "https://github.com/HarshaBordhan" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/harsha-bordhan" },
    { icon: Mail, href: "mailto:harshabordhanc@gmail.com" },
  ];

  return (
    <section
      className="min-h-[80vh] sm:min-h-screen flex justify-center items-center"
      id="hero"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-10">
        <div>
          <div className="h-full relative">
            <div className="flex flex-col items-center sm:items-start gap-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium font-dm-sans whitespace-pre-wrap wrap-break-word text-center sm:text-left">
                  Harsha Bordhan
                  {/* Developed by Harsha */}
                  {/* Harsha Development */}
                </h2>
                <p className="max-w-[500px] text-lg font-medium font-dm-sans whitespace-pre-wrap break-words text-center sm:text-left">
                  Creating fast, flexible, and effective frontend solutions that
                  fit effortlessly into your established systems
                </p>
              </div>

              <div className="flex gap-4">
                {socialButtons.map((button, index) => {
                  const Icon = button.icon;

                  return (
                    <Link
                      key={index}
                      href={button.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-primary cursor-pointer"
                      >
                        <Icon className="w-5 h-5" />
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="absolute max-[768px]:left-0 right-0 bottom-[-80%] sm:bottom-[-40%]">
              <div className="flex flex-col items-start sm:items-end gap-1 font-dm-sans relative">
                <Link
                  href="mailto:harshabordhanc@gmail.com"
                  className="font-medium"
                >
                  harsh@bordhan.dev
                </Link>

                <span className="text-muted-foreground">Scroll to explore</span>
                <div className="absolute -bottom-[110%] sm:-bottom-[140%]">
                  <Button
                    className="w-10 h-10 rounded-full border border-border cursor-pointer hover:bg-muted transition-all duration-300 animate-bounce"
                    variant="ghost"
                    size="icon"
                    onClick={scrollProjects}
                  >
                    <ArrowDown size={5} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
