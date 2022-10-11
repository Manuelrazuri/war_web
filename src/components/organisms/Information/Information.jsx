import React from "react";
import Image from "next/image";
import classes from "./information.module.scss";
export const Information = () => {
  return (
    <>
      <div className={classes.containerInformation}>
        <div className={classes.containerInformation__whoisWar}>
          <div className={classes.containerInformation__infoWar}>
            <h1>¿Que es war?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              perspiciatis quo voluptatibus obcaecati optio quasi suscipit
              eligendi! Animi, modi aperiam facilis fuga magni nostrum, cum,
              asperiores reprehenderit cumque dolorum consequuntur?
            </p>
          </div>
          <div className={classes.containerInformation__facherito}>
            <Image
              src="/image/information/perroFachero.png"
              alt="Facherito"
              width={500}
              height={500}
            />
          </div>
          <div className={classes.containerInformation__playVideo}>
            <Image
              src="/image/information/captureVideo.png"
              alt="Marilyn Manson"
              width={500}
              height={300}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque placeat repellendus ullam consectetur quae nam
              voluptatum culpa facere expedita ea nostrum, omnis soluta laborum
              provident fuga, pariatur velit natus! Sint.
            </p>
          </div>
        </div>
        <div className={classes.containerInformation__functionality}>
          <div className={classes.containerInformation__register}>
            <h1>¿Como funciona el Registro?</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              sapiente, magni aperiam ullam architecto dolor perspiciatis eum
              facere sit similique distinctio cumque iusto. Voluptates quisquam
              animi ratione eos. Placeat, tempore!
            </p>
          </div>
          <div className={classes.containerInformation__microChip}>
            <Image
              src="/image/information/dogChip.png"
              width={650}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};
