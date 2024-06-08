import React, { useRef } from "react";
import { educationData } from "../assets/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";

const Education: React.FC = () => {
  const { ref } = useSectionInView("Education");
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const paragraphs =
    language === "DE"
      ? educationData.paragraphs_DE
      : educationData.paragraphs_EN;

  return (
    <React.Fragment>
      <section className="education relative mt-16 " id="education" ref={ref}>
        <div className="title-container flex flex-col gap-6 justify-center items-center p-32 w-1/2 max-lg:w-full max-lg:p-16 max-lg:items-start">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "left",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-orange">&lt;</span>
              {language === "DE" ? educationData.title : educationData.title_EN}
              <span className="text-orange">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center max-lg:text-left break-words">
              {language === "DE"
                ? educationData.description
                : educationData.description_EN}
            </h2>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center gap-6 items-center pl-32 pr-32 mb-16  max-lg:flex-col max-lg:p-16 min-[1921px]:px-[45rem] min-[1921px]:mb-48">
          <div className="bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-12 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all text-left max-lg:p-10 cursor-grab w-full md:w-1/2">
            {paragraphs.map((paragraph, index) => (
              <div
                key={index}
                className="flex flex-col gap-10 items-start md:flex-row"
              >
                <div>
                  <img
                    src={paragraph.icon}
                    alt={paragraph.icon}
                    className="w-24"
                  />
                </div>
                <div className="flex flex-col gap-4 items-start justify-between">
                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-white">
                        <span className="text-orange">&lt;</span>
                        {paragraph.end}
                        <span className="text-orange">/&gt;</span>
                      </p>
                      <p className="text-white">
                        <span className="text-orange">&lt;</span>
                        {paragraph.start}
                        <span className="text-orange">/&gt;</span>
                      </p>
                    </div>
                    <div>
                      <span className="text-orange text-4xl">
                        {paragraph.degree}
                      </span>
                      <p className="text-white text-2xl mt-2">
                        {paragraph.institute}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Education;
