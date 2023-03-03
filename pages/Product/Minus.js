import React from "react";
import styles from "../../styles/detail.module.css"
const Minus = () => {
  return (
    <>
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className={styles.icon_minus}
        viewBox="0 0 16 16"   
      >
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
      </svg>
    </>
  );
};

export default Minus