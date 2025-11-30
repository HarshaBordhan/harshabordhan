import Container from "./container/Container";
import { Linkedin, Github, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "./reusable/button";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "",
      description: "View my code and projects",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "",
      description: "Connect professionally",
    },
    {
      name: "Twitter",
      icon: FaXTwitter,
      href: "",
      description: "Get in touch via tweets",
    },
  ];

  return (
    <section
      className="py-16 scroll-my-16 md:py-24 md:scroll-my-8"
      id="contact"
    >
      <Container>
        <div className="text-center space-y-16">
          <div className="space-y-4">
            <h3 className="text-2xl ">Get In Touch</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and collaborations.
              Whether you have a project in mind or just want to say hello, feel
              free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-auto h-full p-8 border border-border rounded-lg hover:bg-card transition-all duration-300 group-hover:border-primary/12">
                    <div className="space-y-4 text-center">
                      <div className="w-12 h-12 mx-auto bg-muted rounded-full flex justify-center items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-semibold">{link.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="">
            <Button size="lg" className="gap-2 cursor-pointer">
              <Mail className="w-5 h-5" />
              Start a conversation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
