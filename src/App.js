import Container from "./components/container/container";
import Header from "./components/header/header";
import Title from "./components/title/title";
import Main from "./components/main/main3";
import Girls from "./components/girls/girls";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Header />
      <Title />
      <Main showModal={showModal} setShowModal={setShowModal} />
      <Girls showModal={showModal} />
    </Container>
  );
}

export default App;
