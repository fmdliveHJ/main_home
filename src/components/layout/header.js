import React, { useEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const headerRef = useRef();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      let windowTop = window.scrollY;
      if (windowTop > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
          }`}
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

  const menuItems = [
    {
      text: "Front Experience",
      links: [{ path: "/baronote", name: "Lorem Ipsum" }],
    },
    {
      text: "Publishing Experience",
      links: [
        { path: "/Hswf", name: "Lorem Ipsum" },
        { path: "/Nowon", name: "Lorem Ipsum" },
        { path: "/Webjangi", name: "Lorem Ipsum" },
      ],
    },
    {
      text: "Work Experience",
      links: [
        { path: "/Webjangi", name: "Lorem Ipsum" },
        { path: "/Webjangi", name: "Lorem Ipsum" },
      ],
    },
  ];

  return (
    <header
      className={`${styles.header} ${isFixed ? styles.header_fixed : ""}`}
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
      <div className={styles.theme}></div>
    </header>
  );
};

export default Header;
