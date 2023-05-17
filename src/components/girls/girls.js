import s from "./girls.module.css";
import girlGreen from "../../images/girlgreen.png";
import girlred from "../../images/girlred.png";

export default function Girls({ showModal }) {
  console.log(showModal);
  return (
    <div className={s.girls}>
      <img
        src={girlGreen}
        alt="girlGreen"
        className={`${s.girlLeft} ${showModal && s.hideIndex}`}
      />
      <img
        src={girlred}
        alt="girlred"
        className={`${s.girlRight} ${showModal && s.hideIndex}`}
      />
    </div>
  );
}
