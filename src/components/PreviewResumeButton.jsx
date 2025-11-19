import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const PreviewResumeButton = () => {
  const [opening, setOpening] = useState(false);
  const resumeUrl = "assets/resume/Shiyam ATS.pdf";

  const previewResume = () => {
    setOpening(true);

    // Open resume file in a new browser tab
    window.open(resumeUrl, "_blank");

    setTimeout(() => {
      setOpening(false);
    }, 1500);
  };

  return (
    <motion.button
      onClick={previewResume}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {opening ? (
          <motion.p
            key="opening"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src="assets/resume/download.png" className="w-5" alt="open" />
            Opening...
          </motion.p>
        ) : (
          <motion.p
            key="preview"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            Preview Resume
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default PreviewResumeButton;
