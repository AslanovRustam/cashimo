import { useState, useEffect } from "react";
import Modal from "../modal/modal";
import s from "./main3.module.css";
import sectors2 from "../../images/sectors2.png";
import arrow from "../../images/arrow.png";
import wheel2 from "../../images/wheel3.png";
import button2 from "../../images/button2.png";
import points from "../../images/points.png";
import Girls from "../girls/girls";

export default function Main3({ showModal, setShowModal }) {
  const [count, setCount] = useState(2);
  //   const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (count === 1) {
      setTimeout(() => togleModal(), 5000);
    }
    if (count === 0) {
      setTimeout(() => togleModal(), 7000);
    }
  }, [count]);
  function togleModal() {
    return setShowModal(!showModal);
  }

  return (
    <section className={s.wheel}>
      <div className={s.left}>
        <span>
          intentos: <b>{count}</b>
        </span>
      </div>
      <div className={s.center}>
        <img className={s.background} src={wheel2} alt="wheel2" />
        <img className={s.arrow} src={arrow} alt="arrow" />
        <img className={s.points} src={points} alt="points" />
        <img
          className={`${s.sectors}          
          ${count === 1 && s.sectors_1_spin}
          ${count === 0 && s.sectors_2_spin}
          `}
          src={sectors2}
          alt="sector"
        />
        <div className={`${s.button} ${showModal && s.hideIndex}`}>
          <img
            className={`${count !== 2 ? s.buttonActive : s.button2} ${
              showModal && s.hideIndex
            }`}
            onClick={() => setCount(count - 1)}
            src={button2}
            alt="button"
          />
        </div>{" "}
        {showModal && (
          <Modal onClose={togleModal} count={count} setCount={setCount} />
        )}
      </div>
    </section>
  );
}
