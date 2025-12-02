import { ExternalLink } from "lucide-react";
import Container from "./container/Container";
import { Card } from "./reusable/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/reusable/button";

export default function Work() {
  const projects = [
    {
      title: "Helvet Finance",
      description:
        "A fast, modern platform for seamless online finance applications.",
      image: "Helvet.png",
      github: "https://github.com/HarshaBordhan/Helvet-Finance",
      preview: "https://helvet-finance.vercel.app",
      category: ["Finance", "Banking", "Loan"],
    },
    {
      title: "Unwynd – The meditation app",
      description:
        "A calming meditation experience with customizable lights, sounds and guidance.",
      image: "Unwynd.png",
      github: "https://github.com/thatpollen/unwynd",
      preview: "https://unwynd.vercel.app",
      category: ["E-commerce", "Product"],
    },
    {
      title: "Design with Pollen",
      description:
        "A portfolio showcasing modern product design and front-end development.",
      image: "Designwithpollen.png",
      github: "https://github.com/thatpollen/designwithpollen",
      preview: "https://www.designwithpollen.com",
      category: ["Portfolio", "Product Design", "Development"],
    },
    {
      title: "Quick Brand",
      description:
        "A rapid branding service that creates a bold, memorable identity.",
      image: "www.quickbrand.work_.png",
      preview: "https://quickbrand.work",
      category: ["Brand", "Logo"],
    },
  ];

  return (
    <section
      className="scroll-my-16 py-16 md:py-24 md:scroll-my-8"
      id="projects"
    >
      <Container>
        <div className="space-y-16">
          <div className="space-y-4">
            <h3 className="text-xl font-normal">Featured Projects</h3>
            <p className="text-base text-muted-foreground max-w-2xl">
              A selection of recent projects showcasing my frontend development
              expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border bg-card hover:bg-card/80 transition-all duration-300 cursor-pointer gap-0"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`/${project.image}`}
                    alt="project-img"
                    width={1280}
                    height={720}
                    className="object-cover aspect-video group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 backdroup-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-light font-dm-sans">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-x-4 flex items-center">
                    {/* {project.preview && (
                      <Link
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="default"
                          size="default"
                          className="py-3 border border-border hover:bg-primary/8 bg-transparent text-white font-dm-sans cursor-pointer"
                        >
                          Preview
                        </Button>
                      </Link>
                    )}

                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="default"
                          size="default"
                          className="py-3 border border-border hover:bg-primary/8 bg-transparent text-white font-dm-sans cursor-pointer"
                        >
                          Github
                        </Button>
                      </Link>
                    )} */}

                    <ProjectButtons href={project.preview} label="Preview" />
                    <ProjectButtons href={project.github} label="Github" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

const ProjectButtons = ({ href, label }: { href?: string; label: string }) => {
  if (!href) return null;

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Button
        variant="outline"
        size="default"
        className="py-3 font-dm-sans cursor-pointer"
      >
        {label}
      </Button>
    </Link>
  );
};
