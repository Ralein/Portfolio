"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20"> {/* Add id="projects" */}
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-5 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[34vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl backdrop-blur-lg border border-white/20 bg-black-200"
                >
                  <img src="/bg.png" alt="bgimg" className="opacity-50" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
                <div className="absolute bottom-0 bg-black bg-opacity-50 w-full text-center text-white p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="truncate">{item.title}</p>
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-white-200"
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center relative"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                      <div className="absolute bottom-full mb-2 bg-black text-white text-xs p-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  {item.id === 1 ? (
                    <a href="https://norel-ralein.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-gold">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="var(--purple)" />
                    </a>
                  ) : item.id === 2 ? (
                    <a href="https://viola-app-ralein.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-gold">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="var(--purple)" />
                    </a>
                  ) : item.id === 4 ? (
                    <a href="https://novira-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-gold">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="var(--purple)" />
                    </a>
                  ) : item.id === 3 ? (
                    <a href="https://www.behance.net/raleinnova" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-gold">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="var(--purple)" />
                    </a>
                  ) : null}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
