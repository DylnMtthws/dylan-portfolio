import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faPython,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  SiExpo,
  SiFlask,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-2 pb-24 xs:pt-16 xs:pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair text-4xl mb-5 text-gray">
            MY <span className="text-white font-semibold">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-gray text-lg">
            <span className="font-bold text-white">
              I wasn't always crafting lines of code, but I've always thrived in
              problem-solving roles.
            </span>{" "}
            From optimizing logistics for major US markets at Tempur-Sealy to
            leading a startup team at Kentucky Spirits Ltd, I've honed my
            adaptability and data-driven decision-making. Now, fueled by a
            passion for web development, I've leveraged my experience to become
            a full-stack software engineer.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10  before:w-full  before:h-full before:border-2 before:border-white before:z-[-1]">
              <img alt="skills" src="/skills-image.png" className="z-10" />
            </div>
          ) : (
            <img alt="skills" src="/skills-image.png" className="z-10" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 xs:bg-gray absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            From optimizing logistics at a global company to leading a startup
            team, I've fostered a skillset that is now propelling me into the
            future as a software engineer.
          </p>
        </motion.div>
        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Tech Stack
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 xs:bg-gray absolute right-0 top-0 z-[-1]" />
          </div>
          <div
            className="mt-7 flex xs:flex-wrap justify-center"
            style={{ gap: "20px" }}
          >
            <SiTypescript size={32} />
            <SiTailwindcss size={32} />
            <TbBrandNextjs size={32} />
            <SiExpo size={32} />
            {/* <FontAwesomeIcon
              icon={faGithub}
              className="mr-2"
              style={{ fontSize: "32px" }}
            /> */}
          </div>
          <div
            className="mt-7 flex xs:flex-wrap justify-center"
            style={{ gap: "20px" }}
          >
            <FontAwesomeIcon
              icon={faJsSquare}
              className="mr-2"
              style={{ fontSize: "32px" }}
            />
            <FontAwesomeIcon
              icon={faReact}
              className="mr-2"
              style={{ fontSize: "32px" }}
            />
            <FontAwesomeIcon
              icon={faPython}
              className="mr-2"
              style={{ fontSize: "32px" }}
            />
            <SiFlask size={32} />
            <TbBrandReactNative size={32} />
          </div>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Leadership
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 xs:bg-gray absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            From leading a large non-profit to building a startup, I honed my
            strategic leadership, communication efficacy, and collaborative
            spirit – all assets in the software engineering world.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default MySkills;
