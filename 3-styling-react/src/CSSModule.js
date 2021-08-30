import React from "react";
import classNames from "classnames";
import styles from "./CSSModule.module.scss";

const cx = classNames.bind(styles); // 미리 styles 에서 클래스를 받아 오도록 설정

function CSSModule() {
  return (
    // <div className={`${styles.wrapper} ${styles.inverted}`}>
    //   안녕, 나는 <span className="something">CSS Module!</span>
    // </div>
    <div className={cx("wrapper", "inverted")}>
      안녕, 나는 <span className="something">CSS Module!</span>
    </div>
  );
}

export default CSSModule;
