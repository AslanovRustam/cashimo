import s from "./title.module.css";

export default function Title() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Gira la ruleta</h1>
      <p className={s.subTitle}>¡Gana tesoros mexicanos!</p>
    </div>
  );
}
