import Container from "./container/Container";
import { Card } from "./reusable/card";

export default function About() {
  const expertise = [
    {
      title: "Frontend Development",
      description:
        "Expert in React, TypeScript, and modern JavaScript. Building responsive, accessible, and performant user interfaces.",
      skills: ["React", "TypeScript", "Next.js", "Gatsby"],
    },
    {
      title: "UI/UX Implementation",
      description:
        "Translating designs into pixel-perfect, interactive experiences with attention to detail and user experience.",
      skills: ["Tailwind CSS", "CSS3", "Figma", "Responsive Design"],
    },
    {
      title: "Backend Integration",
      description:
        "Connecting frontend applications with APIs and backend services. Basic knowledge of server-side technologies.",
      skills: ["REST APIs", "Node.js", "Express.js", "MongoDB"],
    },
  ];

  return (
    <section
      id="about"
      className="scroll-my-8 pt-24 pb-16 sm:scroll-my-32 sm:pt-0 sm:pb-24"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-normal">About</h3>
              <p className="text-muted-foreground">
                I'm a frontend developer with a passion for creating exceptional
                user experiences. With 2+ years of experience in modern web
                development, I specialize in building responsive, accessible
                applications using React and TypeScript.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                My expertise lies primarily in frontend development, where I
                excel at transforming designs into interactive, performant web
                applications. While my focus is on the client-side, I also have
                foundational knowledge of backend technologies like Node.js,
                Express.js, and MongoDB, which helps me collaborate effectively
                with full-stack teams.
              </p>

              <p className="text-muted-foreground">
                I believe in writing clean, maintainable code and staying
                current with the latest frontend technologies and best
                practices. My approach combines technical excellence with a keen
                eye for design and user experience.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {expertise.map((item, index) => (
              <Card
                className="p-6 rounded-2xl border-border bg-card hover:bg-card/80 transtion-colors duration-300"
                key={index}
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        className="px-2.5 py-1 text-xs bg-muted text-muted-foreground rounded-lg"
                        key={skillIndex}
                      >
                        {skill}
                      </span>
                    ))}
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
