import ProjectCard from "../ProjectCard";
import RevealOnScroll from "../RevealOnScroll";

function Projects() {
  const procurement = ["C#", "Windows Forms", "MSSQL"];
  const game = ["Unity"];

  return (
    <section id="projects" className="flex justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h1>
          <p className="text-gray-300 text-center mb-6 text-xl">Here's what I've worked on so far.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              image=""
              ghlink="https://github.com/Flan-dev1/Procurement-System"
              link=""
              header="Procurement System"
              text="A procurement system made in Windows Forms"
              stack={procurement}
            />
            <ProjectCard
              image=""
              ghlink=""
              link="https://drive.google.com/file/d/1Q8jwwEPUN0f-BhNmKmX3FLZJpijjXswn/view?usp=drive_link"
              header="2D Disaster Preparedness Game"
              text="A 2D game with visual novel elements and varied minigames."
              stack={game}
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
