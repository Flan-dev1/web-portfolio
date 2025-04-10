import RevealOnScroll from "../RevealOnScroll";
import SkillCard from "../SkillCard";

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">About Me</h1>
          <p className="text-gray-300 text-center mb-6 text-lg">I'm a passionate web developer eager to implement modern web technologies</p>
          <div className="rounded-xl p-8 mb-8 border-white/10 border hover:-translate-y-1 transition-all duration-500">
            <h2 className="text-4xl font-bold text-white text-center mb-8"> Skills </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card Grid */}
              <SkillCard skills={["C#", "C++", "JavaScript", "PHP", "Python", "Ruby", "Typescript"].sort()} header="💻 Programming Languages" />
              <SkillCard skills={["Bootstrap", "HTML/CSS", "jQuery", "SCSS", "Tailwind"]} header="🌐 Web Development" />
              <SkillCard skills={["Git", "Github"]} header="🌳 Version Control" />
              <SkillCard skills={[".NET", "Node.js"]} header="🖥️ Backend & Server-Side" />
              <SkillCard skills={["Canva", "Figma", "MS Visual Studio", "Vite", "Visual Studio Code", "Webflow"]} header="🛠️ Software & Tools" />
              <SkillCard skills={["MSSQL", "MySQL"]} header="🗃️ Database Management" />
              <SkillCard skills={["Agile", "Kanban"]} header="📈 Methodologies" />
              <SkillCard
                skills={["CodeIgniter", "Discord.js", "Express", "GSAP", "Node.js", "React", "Ruby on Rails", "Splide.js"]}
                header="📦 Framework & Libraries"
              />
            </div>
          </div>

          <div className="rounded-xl p-8 mb-8 border-white/10 border hover:-translate-y-1 transition-all duration-500">
            <h2 className="text-3xl font-bold text-white text-center mb-8"> 🏫 Education </h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="border border-white/10 rounded-xl p-6 hover:-translate-y-1 translate-all duration-500">
                <h3 className="text-xl text-white font-bold mb-2"> STI College Malolos </h3>
                <h4 className="text-l text-gray-400 mb-4">2021-2025</h4>
                <p className="text-gray-400 font-mono">
                  This is where I learned the fundamentals of <span className="text-blue-500 font-bold">computer programming</span>,{" "}
                  <span className="text-blue-500 font-bold">database management</span>,{" "}
                  <span className="text-blue-500 font-bold">web development</span>, and{" "}
                  <span className="text-blue-500 font-bold">development methodologies</span>.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all duration-500">
            <h2 className="text-3xl font-bold text-white text-center mb-8"> 💼 Work Experience </h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="border border-white/10 rounded-xl p-6 hover:-translate-y-1 translate-all duration-500">
                <h3 className="text-xl text-white font-bold mb-2"> Digiteer Inc. - Front End Dev Intern </h3>
                <h4 className="text-l text-gray-400 mb-4">Feb - May 2025</h4>
                <ul className="text-gray-400 font-mono">
                  <li>• Collaborated with the design team to implement pixel-perfect UIs.</li>
                  <li>• Assisted in debugging and testing for consistent user experiences.</li>
                  <li>
                    • Applied best practices for code structuring and styling using <span className="text-blue-500 font-bold">SCSS</span> and{" "}
                    <span className="text-blue-500 font-bold">Bootstrap</span>.
                  </li>
                  <li>
                    • Created documentation for front-end components and user guides for <span className="text-blue-500 font-bold">Webflow</span>
                    -based projects.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
