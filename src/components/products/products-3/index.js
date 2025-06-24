import React from "react";
import styles from "./product3.module.css";
import { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen } from "./images";
import Button from "../../button";

function Product3() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.one}>
          <p
            className={styles.p}
            style={{
              color: "black",
              padding: "1vh 4vh",
              fontSize: "3vh",
              fontWeight: "bold",
            }}
          >
            Latest Products
          </p>

          <div className={styles.parent}>
            <div className={styles.side}>
              <div className={styles.img}>
                <img src={two} alt="" />
              </div>
              <div style={{ color: "black", fontSize: "12px" }}>
                <p style={{ fontSize: "15px" }}>Cat tent</p>
                <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                  2Months Old <br /> Enugu
                </p>
              </div>
            </div>

            <div className={styles.side}>
              <div className={styles.img}>
                <img src={three} alt="" />
              </div>
              <div style={{ color: "black", fontSize: "12px" }}>
                <p style={{ fontSize: "15px" }}>Microwave</p>
                <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                  4Months Old <br /> Onitsha
                </p>
              </div>
            </div>

            <div className={styles.side}>
              <div className={styles.img}>
                <img src={four} alt="" />
              </div>
              <div style={{ color: "black", fontSize: "12px" }}>
                <p style={{ fontSize: "15px" }}>Electric Kettle</p>
                <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                  1year Old <br /> Lagos
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.two}>
          <div className={styles.left}>
            <div className={styles.each}>
              {/* <div className={styles.matchLabel}>
                <Button title={"buy now"}/>
              </div> */}
              <div className={styles.image}>
                <img src={two} alt="" />
                <Button title="-10%" className={styles.Button} />
                <div className={styles.absolute}>
                  <p>Add to Cart</p>
                </div>
              </div>
              <div className={styles.details}>
                <span>
                  <p style={{ fontWeight: "bold" }}>Cat tent</p>
                  <p style={{ color: "rgba(0, 0, 0, .4)" }}>1 month</p>
                  <p
                    style={{
                      fontSize: "11px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    seller: Joseph <img src={two} alt="" height={"20px"} />
                  </p>
                  <p style={{ color: "chocolate", fontWeight: "bold" }}>
                    #2,500
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.right1}></div>
        </div>

        <div className={styles.three}>
          <div style={{height: '10%', padding: '0 4vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2vh' }}>
            <p
              style={{
                color: "black",
                fontSize: "2.5vh",
                bottom: '0'
              }}
            >
              Top 100 Appliancies
            </p>

            <p
              className={styles.text}
              style={{
                color: "black",
                fontSize: "14px",
              }}
            >
              Shop More
            </p>
          </div>

          <div style={{height: '90%', display: 'flex'}}>
            <div className={styles.threeone}>
                <div className={styles.side}>
                <div className={styles.img}>
                  <img src={five} alt="" />
                </div>
                <div style={{ color: "black", fontSize: "12px" }}>
                  <p style={{ fontSize: "15px" }}>Oven</p>
                  <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                    1Months Old <br /> Abakaliki
                  </p>
                </div>
              </div>
              <div className={styles.side}>
                <div className={styles.img}>
                  <img src={six} alt="" />
                </div>
                <div style={{ color: "black", fontSize: "12px" }}>
                  <p style={{ fontSize: "15px" }}>Mixer</p>
                  <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                    brand new <br /> Port Harcourt
                  </p>
                </div>
              </div>
              <div className={styles.side}>
                <div className={styles.img}>
                  <img src={eight} alt="" />
                </div>
                <div style={{ color: "black", fontSize: "12px" }}>
                  <p style={{ fontSize: "15px" }}>Pot Set</p>
                  <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                    7Months Old <br /> Lokoja
                  </p>
                </div>
              </div>
              <div className={styles.side}>
                <div className={styles.img}>
                  <img src={nine} alt="" />
                </div>
                <div style={{ color: "black", fontSize: "12px" }}>
                  <p style={{ fontSize: "15px" }}>Pressure</p>
                  <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                    2years Old <br /> Enugu
                  </p>
                </div>
              </div>
              <div className={styles.side}>
                <div className={styles.img}>
                  <img src={ten} alt="" />
                </div>
                <div style={{ color: "black", fontSize: "12px" }}>
                  <p style={{ fontSize: "15px" }}>Phone</p>
                  <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                    4Months Old <br /> Enugu
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.threetwo}>
                <div className={styles.side}>
                <div className={styles.img}>
                  <img src={eleven} alt="" />
                </div>
                <div style={{ color: "black", fontSize: "12px" }}>
                  <p style={{ fontSize: "15px" }}>Office Chair</p>
                  <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                    2years Old <br /> Kwara
                  </p>
                </div>
              </div>
              <div className={styles.side}>
                <div className={styles.img}>
                  <img src={twelve} alt="" />
                </div>
                <div style={{ color: "black", fontSize: "12px" }}>
                  <p style={{ fontSize: "15px" }}>Sofa</p>
                  <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                    9Months Old <br /> Enugu
                  </p>
                </div>
              </div>
              <div className={styles.side}>
                <div className={styles.img}>
                  <img src={thirteen} alt="" />
                </div>
                <div style={{ color: "black", fontSize: "12px" }}>
                  <p style={{ fontSize: "15px" }}>Mower</p>
                  <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                    1year Old <br /> Calabar
                  </p>
                </div>
              </div>
              <div className={styles.side}>
                <div className={styles.img}>
                  <img src={fourteen} alt="" />
                </div>
                <div style={{ color: "black", fontSize: "12px" }}>
                  <p style={{ fontSize: "15px" }}>Table</p>
                  <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                    5Months Old <br /> Uyo
                  </p>
                </div>
              </div>
              <div className={styles.side}>
                <div className={styles.img}>
                  <img src={seven} alt="" />
                </div>
                <div style={{ color: "black", fontSize: "12px" }}>
                  <p style={{ fontSize: "15px" }}>Tea Mixer</p>
                  <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                     brand new <br /> Awka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product3;
