import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Container } from "./components/Container";
import { Media } from "./components/media/Media";
import { Main } from "./layout/main/Main";

function App() {
  return (
    <div className="App">
      <Container>
        <Media />
        <Header></Header>
        <Main></Main>
      </Container>
    </div>
  );
}

export default App;
