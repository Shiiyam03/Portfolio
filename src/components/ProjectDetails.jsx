import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription = [],
  image,
  tags = [],
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative w-[90%] max-w-lg md:max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-3 right-3 md:top-5 md:right-5 bg-midnight hover:bg-gray-500"
          aria-label="Close"
        >
          <img
            src="assets/close.svg"
            className="w-5 h-5 md:w-6 md:h-6"
            alt="close"
          />
        </button>

        <img
          src={image}
          alt={title}
          className="w-full rounded-t-2xl h-44 object-cover md:h-auto"
        />

        <div className="p-4 md:p-5">
          <h5 className="mb-2 text-xl font-bold text-white md:text-2xl">
            {title}
          </h5>
          <p className="mb-3 text-sm font-normal text-neutral-400 md:text-base">
            {description}
          </p>

          {subDescription.map((subDesc, index) => (
            <p
              key={index}
              className="mb-3 text-sm font-normal text-neutral-400 md:text-base"
            >
              {subDesc}
            </p>
          ))}

          <div className="flex flex-col items-start justify-between gap-4 mt-4 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg w-8 h-8 md:w-10 md:h-10 hover:scale-105 transition-transform"
                />
              ))}
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium md:text-base hover:underline"
            >
              View Project
              <img
                src="assets/arrow-up.svg"
                className="w-4 h-4 ml-1"
                alt="open"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
