"use client";

import Container from "./container/Container";
import Link from "next/link";
import { FramerButton } from "./FramerButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/harsha-bordhan" },
    { label: "GitHub", href: "https://github.com/HarshaBordhan" },
    { label: "Twitter", href: "https://twitter.com/harsha-bordhan" },
  ];

  const setionScrolled = (href: string) => {
    const element = document.querySelector(href);
    console.log(element);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-24">
      <div className="flex flex-col">
        <Container>
          <div className="grid md:grid-cols-4 gap-16 py-16">
            <div className="min-[480px]:col-span-2 space-y-2">
              <h3 className="text-xl font-medium">
                Building efficient frontend solutions
              </h3>
              <p className="text-base text-muted-foreground">
                Crafting modern web experiences with attention to detail and
                performance.
              </p>
            </div>

            {/* Explore Links */}
            <div className="space-y-4">
              <h4 className="text-sm text-muted-foreground font-light font-dm-sans">
                Explore
              </h4>
              <div className="flex flex-col items-start space-y-2">
                {exploreLinks.map((link, index) => (
                  <div key={index} onClick={() => setionScrolled(link.href)}>
                    <FramerButton className="cursor-pointer font-dm-sans">
                      {link.label}
                    </FramerButton>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm text-muted-foreground font-light font-dm-sans">
                Connect
              </h4>
              <div className="flex flex-col items-start space-y-2">
                {socialLinks.map((link, index) => (
                  <Link href={link.href} key={index} target="_blank">
                    <FramerButton className="cursor-pointer font-dm-sans">
                      {link.label}
                    </FramerButton>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
        <div className="w-full h-px bg-border"></div>
        <Container>
          <p className="text-muted-foreground text-center text-xs py-8">
            ©{currentYear} Harsha. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
