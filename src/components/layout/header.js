import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li>
            <div>Front Experience</div>
            <ul>
              <li>
                <Link to="/baronote">BaroNote</Link>
              </li>
            </ul>
          </li>
          <li>
            <div>Publishing Experience</div>
            <ul>
              <li>
                <Link to="/baronote">화성시여성가족청소년재단</Link>
              </li>
              <li>
                <Link to="/baronote">화성시여성가족청소년재단</Link>
              </li>
              <li>
                <Link to="/baronote">화성시여성가족청소년재단</Link>
              </li>
            </ul>
          </li>
          <li>
            <div>works Experience</div>
            <ul>
              <li>
                <Link to="/baronote">Jeep</Link>
              </li>
              <li>
                <Link to="/baronote">Nudie Jeans</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
