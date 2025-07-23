import ProjectCard from "../ProjectCard";
import RevealOnScroll from "../RevealOnScroll";
import gameImage from "../../assets/game.jpg";
import mernImage from "../../assets/mern.png";

function Projects() {
  const procurement = ["C#", "Windows Forms", "MSSQL"];
  const game = ["Unity"];
  const mern = ["MongoDB", "Express", "React", "NodeJS", "Tailwind"];
  const scraper = ["Python", "Discord.py", "BeautifulSoup4"];
  const bot = ["Discord.js", "Javascript", "Google Generative AI"];

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
              image={mernImage}
              ghlink="https://github.com/Flan-dev1/mern-game"
              link="https://mern-game.vercel.app/"
              header="MERN Stack Game"
              text="A simple 'Name Game' where users can add their name. When the list exceeds 10 entries, a random entry is replaced."
              stack={mern}
            />
            <ProjectCard
              image={gameImage}
              ghlink=""
              link="https://drive.google.com/file/d/1Q8jwwEPUN0f-BhNmKmX3FLZJpijjXswn/view?usp=drive_link"
              header="2D Disaster Preparedness Game"
              text="A 2D game with visual novel elements and varied minigames."
              stack={game}
            />
            <ProjectCard
              image=""
              ghlink="https://github.com/Flan-dev1/linkedin-scraper"
              link=""
              header="LinkedIn Job Scraper with Discord Bot Integration"
              text="A Python web scraper that scrapes 'developer' job postings from LinkedIn and sends them to a Discord channel using the Discord API."
              stack={scraper}
            />
            <ProjectCard
              image=""
              ghlink="https://github.com/Flan-dev1/yapbot"
              link=""
              header="Discord Message Bot"
              text="A Discord bot that sends random lines and gives AI-generated lore using Google Gemini. Reacting to the bot's messages increases a combo counter."
              stack={bot}
            />
            <ProjectCard
              image=""
              ghlink="https://github.com/Flan-dev1/Procurement-System"
              link=""
              header="Procurement System"
              text="A procurement system made in Windows Forms"
              stack={procurement}
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
