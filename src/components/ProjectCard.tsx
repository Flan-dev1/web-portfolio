import github from "../assets/github.svg";
import download from "../assets/download.svg";

function ProjectCard({
  image,
  ghlink,
  link,
  header,
  text,
  stack,
}: {
  image: string;
  ghlink: string;
  link: string;
  header: string;
  text: string;
  stack: Array<string>;
}) {
  return (
    <div className="border border-white/10 rounded-xl p-6 hover:-translate-y-1 translate-all duration-50">
      {image ? (
        <div className="flex overflow-hidden object-cover rounded-xl mb-4">
          <img src={image} alt="" />
        </div>
      ) : (
        ""
      )}

      <div>
        <h3 className="text-xl text-white font-bold mb-1"> {header} </h3>
        <p className="text-gray-400 font-mono mb-4">{text}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {stack.map((tech, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-md text-sm hover:bg-blue-500/20 hover:shadow-[0_2[x_8px_rgba(59,130,2246,0.2)]] transition"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        {ghlink ? (
          <a href={ghlink}>
            <img className="inline mt-5" src={github} width={24} height={24} alt="" />
          </a>
        ) : (
          ""
        )}
        {link ? (
          <a href={link}>
            <img className="inline mt-5" src={download} width={24} height={24} alt="" />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
