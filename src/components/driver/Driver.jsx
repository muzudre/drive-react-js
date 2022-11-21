import React from "react";
import styles from "./Driver.module.css";

const Driver = () => {
  return (
    <div className={styles.drive}>
      <div className={styles.left}>
        <img
          src="https://swtdt.com/wp-content/uploads/2016/04/hero2.png"
          alt="/"
        />
      </div>
      <div>
        <h2>
          Find you perfect car <span> to try before you buy</span>
        </h2>
        <p>
          Make sure your future wheels work well with your lifestyle by taking
          your time in the driver's seat.
        </p>
        <button>Browser Cars</button>
      </div>
    </div>
  );
};

export default Driver;
