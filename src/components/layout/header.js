import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { menuItems } from "../../constants/MenuItem";
import { gsap } from "gsap";

const Header = () => {
  const headerRef = useRef();
  const [isFixed, setIsFixed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let windowTop = window.scrollY;
      if (windowTop > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const handleLoad = () => {
      if (headerRef.current) {
        setLoad(true);
      }
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const MenuItem = ({ text, links }) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    };
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    return (
      <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className={styles.gnb_text}>{text}</div>
        <ul
          className={`${styles.depth_list} ${
            isHovering ? styles.depth_on : ""
          } `}
        >
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </li>
    );
  };

  const MobileMenuItem = ({ text, links }) => {
    const [mobileOpenClick, setMobileOpenClick] = useState(false);

    return (
      <li className={styles.mobile_gnb_list}>
        <div
          className={styles.gnb_text}
          onClick={() => setMobileOpenClick((prev) => !prev)}
        >
          {text}
        </div>
        <ul
          className={`${styles.mobile_depth_list} ${
            mobileOpenClick ? styles.mobile_depth_list_on : ""
          } `}
        >
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </li>
    );
  };

  return (
    <header
      className={`${styles.header} ${isFixed ? styles.header_fixed : ""} ${
        load ? styles.header_loaded : ""
      }`}
      ref={headerRef}
    >
      <h1>
        <Link to="/">home</Link>
      </h1>
      <nav className={styles.gnb}>
        <ul>
          {menuItems.map((item, index) => (
            <MenuItem key={index} text={item.text} links={item.links} />
          ))}
        </ul>
      </nav>
      {/* 모바일 메뉴 */}
      <div className={styles.mobile_menu} onClick={() => setMobileOpen(true)}>
        <span className={styles.mobile_menu_line}></span>
      </div>

      <div
        className={`${styles.mobile_gnb_wrapper} ${
          mobileOpen ? styles.mobile_gnb_open : ""
        }`}
      >
        <button
          className={styles.mobile_gnb_close}
          onClick={() => setMobileOpen(false)}
        >
          <div className={styles.mobile_menu_wrap}>
            <div className={styles.mobile_menu_con}>
              <span className={styles.mobile_gnb_close_line}></span>
            </div>
          </div>
        </button>
        <nav className={styles.mobile_gnb}>
          {menuItems.map((item, index) => (
            <MobileMenuItem
              key={index}
              text={item.text}
              links={item.links}
              isActive={activeItemIndex === index}
              onClick={() =>
                setActiveItemIndex(index === activeItemIndex ? null : index)
              }
            />
          ))}
        </nav>
      </div>
      <div className={styles.theme}></div>
    </header>
  );
};

export default Header;
