import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const DownloadResumeButton = () => {
  const [downloading, setDownloading] = useState(false);
  const resumeUrl = "assets/resume/Shiyam ATS.pdf";

  // Trigger resume download
  const downloadResume = () => {
    setDownloading(true); // Start loading animation

    // Create a temporary link to download the resume
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Shiyam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset loading state after animation timeout
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={downloadResume}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {downloading ? (
          // Downloading animation UI
          <motion.p
            key="downloading"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src="assets/resume/download.png" className="w-5" alt="done" />
            Downloading...
          </motion.p>
        ) : (
          // Default button text
          <motion.p
            key="download"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            Download Resume
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default DownloadResumeButton;
