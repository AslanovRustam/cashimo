import s from "./modal.module.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import logo from "../../images/logoCashimo.png";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, count, setCount }) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);
  function CloseAndSpin() {
    if (count === 0) {
      return;
    }
    onClose();
    setCount(count - 1);
  }

  return createPortal(
    <div className={s.modalBackDrop} onClick={() => CloseAndSpin()}>
      <div className={s.container}>
        <img src={logo} alt="logo_Cashimo" className={s.logo} />
        <div className={s.textContainer}>
          <div className={s.titleFirst}>
            Ha Ganado{" "}
            <div className={` ${count === 0 ? s.active : s.inActive}`}>
              {" "}
              <p className={s.mobTitle}> un total de</p>
            </div>
          </div>
          <div className={s.titleSecond}>
            ¡150 GIROS GRATIS{`${count === 0 ? "," : "!"}`}{" "}
            <div className={`${count === 0 ? s.activeSecond : s.inActive}`}>
              a $60,000 BONO MXN
            </div>
          </div>
          <p className={s.titleThird}>{`${
            count === 0
              ? "En tus primeros tres depósitos!"
              : "Le quedauna giro restante!"
          }`}</p>
          {/* <p className={`${s.titleThird} ${count === 0 ? s.inActive : ""}`}> */}{" "}
          {/* una giro restante! */}
          {/* </p> */}
        </div>
        {/* <button type="button" onClick={() => CloseAndSpin()} className={s.btn}> */}
        <button
          type="button"
          className={`${s.btn} ${count === 0 && s.shortPading}`}
        >
          {`${count === 0 ? "Reclama recompensas" : "Gira"}`}
        </button>
      </div>
    </div>,
    modalRoot
  );
}
