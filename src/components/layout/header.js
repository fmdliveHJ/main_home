import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        <Link to='/'>home</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <div>Front Experience</div>
            <ul>
              <li>
                <Link to='/baronote'>BaroNote</Link>
              </li>
            </ul>
          </li>
          <li>
            <div>Publishing Experience</div>
            <ul>
              <li>
                <Link to='/Webjangi'>웹쟁이</Link>
              </li>
              <li>
                <Link to='/Hswf'>화성시여성가족청소년재단</Link>
              </li>
              <li>
                <Link to='/Nowon'>노원평생교육포털</Link>
              </li>
            </ul>
          </li>
          <li>
            <div>works Experience</div>
            <ul>
              <li>
                <Link to='/baronote'>Jeep</Link>
              </li>
              <li>
                <Link to='/baronote'>Nudie Jeans</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className='theme'></div>
    </div>
  );
};

export default Header;
