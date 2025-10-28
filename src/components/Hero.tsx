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

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-10">
        <div>
          <div className="h-full flex flex-col">
            <div className="w-1/2 flex flex-col items-start gap-8">
              <div className="space-y-6">
                <h2 className="text-7xl font-medium font-dm-sans whitespace-pre-wrap wrap-break-word">
                  開発者 Harsha
                  {/* Developed by Harsha */}
                  {/* Harsha Development */}
                </h2>
                <p className="max-w-[500px] text-lg font-medium font-dm-sans whitespace-pre-wrap break-words">
                  Building dynamic, efficient and effective frontend
                  experiences, that fit right into your existing processes
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary cursor-pointer"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary cursor-pointer"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary cursor-pointer"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="self-end flex flex-col items-end gap-1 font-dm-sans relative">
              <Link href="" className="font-medium">
                harsha3dev@gmail.com
              </Link>

              <span className="text-muted-foreground">Scroll to explore</span>
              <div className="absolute -bottom-[150%]">
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
    </section>
  );
}
