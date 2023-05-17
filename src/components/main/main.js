import { useState, useEffect } from "react";
import Modal from "../modal/modal";
import s from "./main.module.css";
import girlGreen from "../../images/girlgreen.png";
import girlred from "../../images/girlred.png";
import mainCircle from "../../images/wheel.png";
import spinnerCircle from "../../images/wheel_with_text.png";
import button from "../../images/button.png";

export default function Main() {
  const [count, setCount] = useState(2);
  const [showModal, setShowModal] = useState(false);

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
      <div className={s.circle}>
        <div className={s.counter}>
          intentos:&nbsp;
          <p className={s.countNumber}>
            <b>{count}</b>
          </p>
        </div>{" "}
        <img
          src={spinnerCircle}
          alt="mainCircle"
          className={`${s.spinner}          
          ${count === 1 && s.spinner_1_spin}
          ${count === 0 && s.spinner_2_spin}
          `}
        />
        <img src={mainCircle} alt="mainCircle" className={s.mainCircle} />{" "}
        <img
          src={button}
          alt="mainCircle"
          className={`${count !== 2 ? s.buttonActive : s.button}`}
          onClick={() => setCount(count - 1)}
        />
      </div>
      <div className={s.girls}>
        <img src={girlGreen} alt="girlGreen" className={s.girlLeft} />

        <img src={girlred} alt="girlred" className={s.girlRight} />
      </div>
      {showModal && (
        <Modal onClose={togleModal} count={count} setCount={setCount} />
      )}
    </section>
  );
}
