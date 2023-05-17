import s from "./container.module.css";

export default function Container({ children }) {
  return (
    <div className={s.container}>
      <div className={s.bg}> {children}</div>
    </div>
  );
}
