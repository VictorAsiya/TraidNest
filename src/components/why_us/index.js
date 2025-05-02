import styles from "./why.module.css";

const Why = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <div className={styles.item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styles.svg}
          >
            <path
              stroke="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <span >
            <p>Free Shipping</p>
            <p style= {{fontSize: '12px', color: 'var(--background)'}}>On products about $50</p>
          </span>
        </div>
        <div className={styles.item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styles.svg}
          >
            <path
              stroke="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <span >
            <p>Verified Traders</p>
            <p style= {{fontSize: '12px', color: 'var(--background)'}}>be sure you'll get your order</p>
          </span>
        </div>
        <div className={styles.item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styles.svg}
          >
            <path
              stroke="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <span >
            <p>Discounted sales</p>
            <p style= {{fontSize: '12px', color: 'var(--background)'}}>Discount when you buy above $50</p>
          </span>
        </div>
        <div className={styles.item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styles.svg}
          >
            <path
              stroke="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <span >
            <p>Expert Customer's Service</p>
            <p style= {{fontSize: '12px', color: 'var(--background)'}}>always available</p>
          </span>
        </div>
        <div className={styles.item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styles.svg}
          >
            <path
              stroke="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <span >
            <p>Exclusive Products</p>
            <p style= {{fontSize: '12px', color: 'var(--background)'}}>We review every product</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Why;
