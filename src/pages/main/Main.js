import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./main.module.css";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Metatag from "../../components/metatag/Metatag";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const visualText = useRef();

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
      .from(visualText.current, {
        duration: 0.5,
        opacity: 0,
        x: "-15%",
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
            <div className={styles.visual_text} ref={visualText}>
              <h2>
                <p>Lorem ipsum</p>
                <p>Lorem ipsumfdjksafd</p>
              </h2>
              <p className={styles.visual_text_info}>
                amet consectetur adipisicing elit. Quas exercitationem sapiente
                impedit, nobis adipisci iste! Obcaecati
              </p>
            </div>
            <div className={styles.visual_img}>
              <img src="" alt="" />
            </div>
          </div>
          <section className={styles.contact}>
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
          <section className={styles.experience}>
            <div className={styles.experience_wrapper}>
              <h2>Front Experience</h2>
              <div className={styles.experience_list}>
                <ul>
                  <li>
                    <div className={styles.experience_list_pic}>
                      <img src="" alt="" />
                    </div>
                    <div className={styles.exprience_list_text}>
                      <span>프로젝트 기간 : 2023:02 ~ 2023.03</span>
                      <div>
                        <h3>Lorem ipsum</h3>
                        <p>
                          사용한 기술스택 : React, Redux-toolkit, tailwind.css
                          검색
                        </p>
                        <p>
                          페이지 프론트 개발 및 질문 검색 기능 구현 반응형 구현
                        </p>
                      </div>
                      <Link to="http://www.baronote.com/" target="_blank">
                        View Link
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className={styles.experience}>
            <div className={styles.experience_wrapper}>
              <h2>Publishing Experience.</h2>
              <div className={styles.experience_list}>
                <ul>
                  <li>
                    <div className={styles.experience_list_pic}>
                      <img src="" alt="" />
                    </div>
                    <div className={styles.exprience_list_text}>
                      <span>프로젝트 기간 : 2023:02 ~ 2023.03</span>
                      <div>
                        <h3>Lorem ipsum</h3>
                        <p>
                          사용한 기술스택 : React, Redux-toolkit, tailwind.css
                          검색
                        </p>
                        <p>
                          페이지 프론트 개발 및 질문 검색 기능 구현 반응형 구현
                        </p>
                      </div>
                      <Link to="http://www.baronote.com/" target="_blank">
                        View Link
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className={styles.experience_list_pic}>
                      <img src="" alt="" />
                    </div>
                    <div className={styles.exprience_list_text}>
                      <span>프로젝트 기간 : 2023:02 ~ 2023.03</span>
                      <div>
                        <h3>Lorem ipsum</h3>
                        <p>
                          사용한 기술스택 : React, Redux-toolkit, tailwind.css
                          검색
                        </p>
                        <p>
                          페이지 프론트 개발 및 질문 검색 기능 구현 반응형 구현
                        </p>
                      </div>
                      <Link to="http://www.baronote.com/" target="_blank">
                        View Link
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className={styles.experience}>
            <div className={styles.experience_wrapper}>
              <h2>Work Experience</h2>
              <div className={styles.experience_list}>
                <ul>
                  <li>
                    <div className={styles.experience_list_pic}>
                      <img src="" alt="" />
                    </div>
                    <div className={styles.exprience_list_text}>
                      <span>프로젝트 기간 : 2023:02 ~ 2023.03</span>
                      <div>
                        <h3>Lorem ipsum</h3>
                        <p>
                          사용한 기술스택 : React, Redux-toolkit, tailwind.css
                          검색
                        </p>
                        <p>
                          페이지 프론트 개발 및 질문 검색 기능 구현 반응형 구현
                        </p>
                      </div>
                      <Link to="http://www.baronote.com/" target="_blank">
                        View Link
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className={styles.experience_list_pic}>
                      <img src="" alt="" />
                    </div>
                    <div className={styles.exprience_list_text}>
                      <span>프로젝트 기간 : 2023:02 ~ 2023.03</span>
                      <div>
                        <h3>Lorem ipsum</h3>
                        <p>
                          사용한 기술스택 : React, Redux-toolkit, tailwind.css
                          검색
                        </p>
                        <p>
                          페이지 프론트 개발 및 질문 검색 기능 구현 반응형 구현
                        </p>
                      </div>
                      <Link to="http://www.baronote.com/" target="_blank">
                        View Link
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Main;
