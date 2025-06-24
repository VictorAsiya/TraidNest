import React from "react";
import styles from "./footer.module.css";
import {
  facebook,
  instagram,
  twitter,
  youtube,
  one,
  two,
  three,
  four,
  lock,
} from "./image";
import Button from "../button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div
        style={{
          display: "flex",
          height: "15vh",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid grey",
        }}
      >
        <Link to="/">
          <img
            src="/Logo.png"
            alt="TraidNest"
            className={styles.logo}
            onClick={handleClick}
          />
        </Link>
        <span className={styles.brand}>
          <p>Social Links</p>
          <img src={facebook} alt="" style={{ height: "5.7vh" }} />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" style={{ height: "5vh" }} />
          <img src={youtube} alt="" />
        </span>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "5vh",
          borderBottom: "1px solid grey",
          paddingBottom: "5vh",
        }} className={styles.parent}
      >
        <div className={styles.mainGet}>
          <div className={styles.get}>
            <ul>
              <p>Get to Know Us</p>
              <li>About Us</li>
              <li>Our Partners</li>
              <li>Work With Us</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className={styles.get}>
            <ul>
              <p>Shop</p>
              <li>Recently Viewed</li>
              <li>Featured Products</li>
              <li>Top Appliances</li>
              <li>Games</li>
            </ul>
          </div>

          <div className={styles.get}>
            <ul>
              <p>Useful Links</p>
              <li>Latest News</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>

        <div className={styles.subscribe}>
          <span className={styles.span1}>
            <div>
              <h3 style={{}}>Subscribe to our Newsletter</h3>
            </div>
            <div style={{ display: "flex" }}>
              <p>
                Join our mailing list to receive any latest updates and
                promotions.
              </p>
              <input type="text" />
              <Button title="Sign Up" />
            </div>
          </span>
          <span className={styles.span2}>
            <p style={{ display: "flex", alignItems: "center", gap: "1vh" }}>
              <img src={lock} alt="" style={{ height: "6vh" }} />
              Safety Payment
            </p>
            <span className={styles.payment}>
              <img src={one} alt="" />
              <img src={two} alt="" style={{ height: "6vh" }} />
              <img src={three} alt="" style={{ height: "4.6vh" }} />
              <img src={four} alt="" />
            </span>
          </span>
        </div>
      </div>

      <div
        style={{
          margin: "auto auto",
          height: "10vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p>&copy; Victor Asiya</p>
      </div>
    </footer>
  );
}

export default Footer;
