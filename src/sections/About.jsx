import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import PreviewResumeButton from "../components/PreviewResumeButton";
import DownloadResumeButton from "../components/DownloadResumeButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-6 md:mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Shiyam Ravikumar...</p>
            <p className="subtext">
              A Full-Stack Developer with a strong interest in AI and Machine
              Learning. I work with MERN, Python, and Django to build clean and
              scalable web applications. I continuously learn new technologies
              to improve the way I build.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-2xl text-gray-500">
              CODING THE FUTURE; <br /> BYTE BY BYTE
            </p>

            <Card
              style={{ rotate: "0deg", top: "70%", left: "60%" }}
              image="assets/logos/python.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "0deg", bottom: "65%", left: "80%" }}
              image="assets/logos/power-bi.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "0deg", top: "40%", left: "5%" }}
              image="assets/logos/git.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "0deg", top: "10%", left: "50%" }}
              image="assets/logos/colab.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "0deg", top: "50%", left: "80%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "0deg", top: "70%", left: "25%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "0deg", top: "5%", left: "20%" }}
              image="assets/logos/html5.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Timezone? Onsite? Remote? WFH? Yes. All of it. I adapt faster than
              Git branches.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 — moved up only in mobile */}
        <div className="grid-default-color grid-5 relative">
          <div className="-mt-6 md:mt-0 z-10 w-full md:w-[50%] p-4 md:p-0 text-left space-y-4">
            <p className="headtext">Teck Stack</p>

            <p className="subtext">
              I use different languages, frameworks, and tools in my development
              process, helping me create applications that are strong, secure,
              and scalable, while delivering a smooth experience for users.
            </p>

            <div className="mt-4 flex items-center justify-start gap-4">
              <PreviewResumeButton />
              <DownloadResumeButton />
            </div>
          </div>

          <div
            className="
              hidden
              md:block
              absolute 
              inset-y-9 
              w-full h-full 
              start-[50%] 
              md:scale-125
            "
          >
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
