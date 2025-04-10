import ProjectCard from "../ProjectCard";
import ProjectImg from "../../assets/project.png";
import RevealOnScroll from "../RevealOnScroll";

function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h1>
          <p className="text-gray-300 text-center mb-6 text-xl">Here's what I've worked on so far.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              image={ProjectImg}
              header="Something"
              text="somethingsomethingsomethingsometh-
              something
            "
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
