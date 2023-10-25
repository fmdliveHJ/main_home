import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./main.module.css";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Metatag from "../../components/metatag/Metatag";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sections } from "../../constants/MainList";
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const visualText = useRef();
  const visualTextTopLine = useRef();
  const visualTextBottomLine = useRef();
  const visualTextInfo = useRef();

  const experienceRef = useRef([]);
  const experienceListTopLine = useRef([]);
  const experienceListBottomLine = useRef([]);
  const experienceListPic = useRef([]);
  const experienceListText = useRef([]);
  const experienceList = useRef([]);

  useEffect(() => {
    let visual = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.visual}`,
        start: "top center",
        toggleActions: "play none none none",
      },
    });

    visual
      .fromTo(
        `.${styles.visual}`,
        { opacity: 0 },
        {
          y: 0,
          duration: 0.5,
          opacity: 1,
          ease: "linear",
        }
      )
      .from(visualTextTopLine.current, {
        duration: 0.2,
        opacity: 0,
        width: "0%",
        ease: "ease-in",
      })
      .to(visualTextTopLine.current, {
        width: "100%",
        duration: 0.2,
        ease: "ease-out",
      })
      .from(visualTextBottomLine.current, {
        duration: 0.1,
        opacity: 0,
        width: "0%",
        ease: "ease-in",
      })
      .to(visualTextBottomLine.current, {
        width: "100%",
        duration: 0.1,
        ease: "ease-out",
      })
      .from(visualText.current, {
        duration: 0.5,
        opacity: 0,
        y: "5%",
        ease: "ease-in",
      })
      .from(visualTextInfo.current, {
        duration: 0.5,
        opacity: 0,
        y: "5",
        ease: "ease-in",
      })
      .from(`.${styles.visual_img}`, {
        duration: 0.5,
        opacity: 0,
        y: "5%",
        ease: "ease-in",
      });
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  useEffect(() => {
    let contact = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.contact}`,
        start: "top center",
        toggleActions: "play none none none",
      },
    });
    contact
      .fromTo(
        `.${styles.contact}`,
        { opacity: 0 },
        {
          y: 0,
          duration: 0.5,
          opacity: 1,
          ease: "linear",
        }
      )
      .from(`.${styles.contact_backdrop}`, {
        duration: 0.3,
        opacity: 0,
        width: "0%",
        ease: "ease-in",
      })
      .to(`.${styles.contact_backdrop}`, {
        width: "100%",
        duration: 0.2,
        ease: "ease-out",
      })
      .from(`.${styles.contact_box}`, {
        duration: 0.5,
        opacity: 0,
        y: "5%",
        ease: "ease-in",
      });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  useEffect(() => {
    experienceRef.current.forEach((section, index) => {
      const listItems = section.querySelectorAll("li");
      let experience = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center",
          toggleActions: "play none none none",
        },
      });

      experience
        .fromTo(
          section,
          { opacity: 0 },
          {
            y: 0,
            duration: 0.2,
            opacity: 1,
            ease: "linear",
          }
        )
        .from(experienceListTopLine.current[index], {
          duration: 0.2,
          opacity: 0,
          width: "0%",
          ease: "ease-in",
        })
        .to(experienceListTopLine.current[index], {
          width: "100%",
          duration: 0.2,
          ease: "ease-out",
        })
        .from(listItems, {
          duration: 0.2,
          opacity: 0,
          borderBottomWidth: "0%",
          borderBottomColor: "transparent",
          ease: "ease-in",
        })
        .to(listItems, {
          duration: 0.2,
          borderBottomWidth: "1px",
          borderBottomColor: "#000",
        })
        .from(experienceListBottomLine.current[index], {
          duration: 0.2,
          opacity: 0,
          width: "0%",
          ease: "ease-in",
        })
        .to(experienceListBottomLine.current[index], {
          width: "100%",
          duration: 0.2,
          ease: "ease-out",
        })
        .from(experienceListPic.current[index], {
          duration: 0.3,
          opacity: 0,
          y: "5%",
          ease: "ease-in",
        })
        .from(experienceListText.current[index], {
          duration: 0.3,
          opacity: 0,
          y: "5",
          ease: "ease-in",
        });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const ExperienceSection = ({ section, index }) => {
    return (
      <section
        className={styles.experience}
        ref={(el) => (experienceRef.current[index] = el)}
      >
        <div className={styles.experience_wrapper}>
          <h2>{section.title}</h2>
          <div className={styles.experience_list}>
            <span
              className={styles.experience_list_line}
              ref={(el) => (experienceListTopLine.current[index] = el)}
            ></span>
            <ul>
              {section.projects.map((project, projectIndex) => (
                <>
                  <li
                    key={projectIndex}
                    ref={(el) => (experienceList.current[index] = el)}
                  >
                    <div
                      className={styles.experience_list_pic}
                      ref={(el) => (experienceListPic.current[index] = el)}
                    >
                      <img src="" alt="" />
                    </div>
                    <div
                      className={styles.exprience_list_text}
                      ref={(el) => (experienceListText.current[index] = el)}
                    >
                      <span>프로젝트 기간 : {project.period}</span>
                      <div>
                        <h3>{project.title}</h3>
                        <p>사용한 기술스택 : {project.techStack}</p>
                        <p>{project.description}</p>
                        <Link to={project.link} target="_blank">
                          View Link
                        </Link>
                      </div>
                    </div>
                  </li>
                </>
              ))}
            </ul>
            <span
              className={styles.experience_list_line}
              ref={(el) => (experienceListBottomLine.current[index] = el)}
            ></span>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Metatag />
      <div
        className={`${styles.container} ${
          isDarkTheme ? "theme--dark" : "theme--light"
        }`}
      >
        <Header />
        <main>
          <div className={styles.visual}>
            <div className={styles.visual_text}>
              <h2>
                <span
                  className={styles.visual_text_line}
                  ref={visualTextTopLine}
                ></span>
                <div ref={visualText}>
                  <p>Lorem ipsum</p>
                  <p>Lorem ipsumfdjksafd</p>
                </div>
              </h2>
              <p className={styles.visual_text_info} ref={visualTextInfo}>
                amet consectetur adipisicing elit. Quas exercitationem sapiente
                impedit, nobis adipisci iste! Obcaecati
              </p>
              <span
                className={styles.visual_text_line}
                ref={visualTextBottomLine}
              ></span>
            </div>
            <div className={styles.visual_img}>
              <img src="" alt="" />
            </div>
          </div>
          <section className={styles.contact}>
            <div className={styles.contact_backdrop}></div>
            <div className={styles.contact_box}>
              <h3>
                Lorem ipsum <br />
                Lorem ipsum
              </h3>
              <p>
                amet consectetur adipisicing elit. Quas exercitationem sapiente
                impedit, nobis adipisci iste! Obcaecati
              </p>
              <span></span>
              <ul>
                <li>
                  <Link to="tel:01047250335">PHONE: 01047250335</Link>
                </li>
                <li>
                  <Link to="mailto:gdalove@naver.com">
                    EMAIL: gdalove@naver.com
                  </Link>
                </li>
                <li>
                  <Link
                    to={{ pathname: "https://github.com/fmdliveHJ" }}
                    target="_blank"
                  >
                    GITHUB: https://github.com/fmdliveHJ
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {sections.map((section, sectionIndex) => (
            <ExperienceSection
              key={sectionIndex}
              section={section}
              index={sectionIndex}
            />
          ))}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Main;
