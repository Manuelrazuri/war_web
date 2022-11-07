import React from "react";
import classes from "./typeButton.module.scss";
// import Image from "next/image";

export const TypeButton = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__firstButton}>
        <a href="https://www.youtube.com/">Registro anual</a>
      </div>
      <div className={classes.container__firstButton}>
        <a href="https://www.youtube.com/">Noticias</a>
      </div>
      <div className={classes.container__firstButton}>
        <a href="https://www.youtube.com/">Nosotros</a>
      </div>
      <div className={classes.container__firstButton}>
        <a href="https://www.youtube.com/">Contactanos</a>
      </div>
    </div>
  );
};
