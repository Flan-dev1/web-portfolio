import { useState, useEffect } from "react";
import Image from "../../assets/picture.webp";
import github from "../../assets/github-big.png";
import linkedin from "../../assets/linkedin.png";

function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    const imageTimer = setTimeout(() => {
      setShowImage(true);

      const headerTimer = setTimeout(() => {
        setShowHeader(true);

        const buttonTimer = setTimeout(() => {
          setShowButtons(true);
          document.body.classList.remove("overflow-hidden");
        }, 650); // 1s after image

        return () => clearTimeout(buttonTimer);
      }, 650); // 1s after header

      return () => clearTimeout(headerTimer);
    }, 500); // 3s after page load

    return () => clearTimeout(imageTimer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className={`text-center flex flex-col items-center z-10 px-4 transition-opacity duration-500 ${showImage ? "opacity-100" : "opacity-0"}`}>
        <img src={Image} alt="" className="rounded-full w-90 my-5" sizes="1056x1056" />
        <h1 className="text-5xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Hi, I'm Clarence Flaviano</h1>
        <h2 className={`text-xl text-white my-2 mx-auto transition-opacity duration-500 ease-in ${showHeader ? "opacity-100" : "opacity-0"}`}>
          Front End Web Developer
        </h2>
        <div className={`flex justify-center space-x-4 gap-2 my-2 transition-opacity duration-500 ${showButtons ? "opacity-100" : "opacity-0"}`}>
          <a
            href="#projects"
            className="border-2 border-blue-500 bg-blue-500 text-white py-3 px-6 rounded-full relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contacts"
            className="border-2 border-blue-800 text-white py-3 px-6 rounded-full font-medium relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Contact Me
          </a>
        </div>
        <div className={`flex items-center justify-center gap-8 my-4 transition-opacity duration-500 ${showButtons ? "opacity-100" : "opacity-0"}`}>
          <a href="https://github.com/Flan-dev1">
            <img src={github} width={36} height={36} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/clarenceflaviano/">
            <img src={linkedin} width={36} height={36} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
