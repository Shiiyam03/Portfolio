import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  // Animation variants for hero text entrance
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        {/* Intro line */}
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Shiyam,
        </motion.h1>

        {/* Main headline and flipping words */}
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer
            <br />
            Shaping Tomorrow with
          </motion.p>

          {/* Flipping keywords for desktop */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={["Software", "AI&ML", "Python"]}
              className="font-black text-white text-8xl"
            />
          </motion.div>

          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Skills.
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        {/* Intro line */}
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Shiyam,
        </motion.p>

        {/* Flipping role titles for mobile */}
        <div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={[
                "Software Developer",
                "AI&ML Engineer",
                "Python Developer",
              ]}
              className="font-bold text-white text-4xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
