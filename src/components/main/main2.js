import { useState, useEffect } from "react";
import Modal from "../modal/modal";
import s from "./main2.module.css";
import sectors2 from "../../images/sectors2.png";
import arrow from "../../images/arrow.png";
import wheel2 from "../../images/wheel3.png";
import button2 from "../../images/button2.png";
import points from "../../images/points.png";
import Girls from "../girls/girls";

export default function Main2({ showModal, setShowModal }) {
  const [count, setCount] = useState(2);
  // const [showModal, setShowModal] = useState(false);

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
    <section className={s.section}>
      <div className={s.counter}>
        intentos:&nbsp;
        <p className={s.countNumber}>
          <b>{count}</b>
        </p>
      </div>{" "}
      <div className={s.wheel__center}>
        <img className={s.background} src={wheel2} alt="wheel" />
        <img className={s.arrow} src={arrow} alt="arrow" />
        <img
          className={`${s.sectors}          
          ${count === 1 && s.sectors_1_spin}
          ${count === 0 && s.sectors_2_spin}
          `}
          src={sectors2}
          alt="sectors"
        />
        <img className={s.points} src={points} alt="points" />
        <img
          className={`${count !== 2 ? s.buttonActive : s.button} ${
            showModal && s.hideIndex
          }`}
          onClick={() => setCount(count - 1)}
          src={button2}
          alt="button2"
        />
      </div>
      <Girls />
      {showModal && (
        <Modal onClose={togleModal} count={count} setCount={setCount} />
      )}
    </section>
  );
}
