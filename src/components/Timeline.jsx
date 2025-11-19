"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  // Refs used to measure total timeline height and to attach scroll tracking
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Measure the total height of the timeline content once it's rendered
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  // Track scroll progress relative to the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  // Animate the vertical line height and opacity based on scroll
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">Internships</h2>

      {/* Main timeline wrapper */}
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-6 md:pt-40 md:gap-10"
          >
            {/* Left sticky column: dot + (desktop) text */}
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>

              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-3xl text-neutral-300">
                <h3>{item.date}</h3>
                <h3 className="text-2xl text-neutral-400">{item.title}</h3>
                <h3 className="text-2xl text-neutral-500">{item.job}</h3>
              </div>
            </div>

            {/* Right content column */}
            <div className="relative w-full pl-20 pr-4 md:pl-4">
              {/* Mobile heading */}
              <div className="block mb-4 text-xl font-bold text-left text-neutral-300 md:hidden">
                <h3>{item.date}</h3>
                <h3>{item.job}</h3>
              </div>

              {item.contents.map((content, i) => (
                <p className="mb-3 font-normal text-neutral-400" key={i}>
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Vertical animated line connecting all dots */}
        <div
          style={{ height: `${height}px` }}
          className="
            absolute 
            left-[5px]
            md:left-1
            top-0 
            overflow-hidden 
            w-[2px] 
            bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
            from-transparent from-[0%] 
            via-neutral-700 
            to-transparent to-[99%]
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]
          "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
