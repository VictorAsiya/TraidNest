import React, { useState, useEffect } from "react";
import styles from "./navBar.module.css";
import { Link } from "react-router-dom";
import Categories from "../categories/";

const ReusableComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) return null;

  return <Categories className={styles.Categories} />;
};

function NavBar() {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 5 && showNav) {
        setShowNav(false); // Close nav and backdrop on scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showNav]); // re-run effect when showNav changes

  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setShow(true);
    setActive(true);
  };
  const handleClick2 = () => {
    setShow(false);
    setActive(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.first}>
        {showNav && (
          <div
            onClick={() => setShowNav(false)}
            style={{
              height: "100vh",
              width: "100%",
              backgroundColor: "rgba(27, 23, 23, 0.6)",
              position: "absolute",
              top: "0",
              zIndex: "8",
            }}
          ></div>
        )}
        <nav className={`${styles.navBar} ${showNav ? styles.show : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styles.close}
            onClick={() => setShowNav(false)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          <span className={styles.span}>
            <h3 onClick={() => handleClick2()}>Menu</h3>
            <h3 onClick={() => handleClick()}>Categories</h3>
          </span>

          {!show && (
            <ul className={styles.ul_one}>
              <li className={styles.home}>
                <Link
                  to="./"
                  className={styles.line}
                  onClick={() => setShowNav(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="./products"
                  className={styles.line}
                  onClick={() => setShowNav(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="./about"
                  className={styles.no_line}
                  onClick={() => setShowNav(false)}
                >
                  About
                </Link>
              </li>
            </ul>
          )}

          {!show && (
            <ul className={styles.ul_two}>
              <li>
                <Link className={styles.line} onClick={() => setShowNav(false)}>
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link className={styles.line} onClick={() => setShowNav(false)}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className={styles.no_line}
                  onClick={() => setShowNav(false)}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          )}
          {show && <ReusableComponent />}
        </nav>
      </div>

      <div className={styles.second}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={styles.bar}
          onClick={() => setShowNav(!showNav)}
        >
          <path
            stroke="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <Link to='/'><img src="Logo.png" alt="Logo" className={styles.logo} /></Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={styles.bar}
        >
          <path
            stroke="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>

        <div className={styles.label_wrap}>
          <input
            type="text"
            placeholder="Search for Products"
            // value={userPrompt}
            // onChange={(e) => setUserPrompt(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className={styles.search}
            // onClick={handleFilter}
          >
            <path
              stroke="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <div className={styles.container}>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={styles.size}
            >
              <path
                stroke="round"
                strokeLinejoin="round"
                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
              />
            </svg>
            Hotline <br />
            +2349021659462
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={styles.size}
            >
              <path
                stroke="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            #0.00 <br />
            {0} items
          </p>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
