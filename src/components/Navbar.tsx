"use client";

import Container from "@/components/container/Container";
import { FramerButton } from "@/components/FramerButton";
import { useEffect, useState } from "react";
import { Button } from "./reusable/button";
import { Download } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    // { label: "Blog", href: "#blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const setionScrolled = (href: string) => {
    const element = document.querySelector(href);
    console.log(element);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        ${isScrolled ? "bg-background/90 backdrop-blur-lg" : "bg-transparent"}
      `}
    >
      <Container>
        <div>
          <div className="flex justify-between items-center py-6">
            <div className="text-lg cursor-pointer hover:text-muted-foreground duration-200">
              HarshaDev
            </div>
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  onClick={() => setionScrolled(item.href)}
                  className="hidden md:block"
                >
                  <FramerButton className="cursor-pointer font-dm-sans">
                    {item.label}
                  </FramerButton>
                </div>
              ))}
              <Button
                variant="outline"
                size="lg"
                className="self-start gap-2 cursor-pointer"
              >
                <Download size={5} />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
