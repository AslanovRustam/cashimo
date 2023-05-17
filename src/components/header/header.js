import s from "./header.module.css";
import logo from "../../images/logo.png";

export default function Header() {
  return (
    <header className={s.header}>
      <img src={logo} alt="cashimo_logo" className={s.logo} />
    </header>
  );
}
