import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Container } from "./components/Container";
import { Media } from "./components/media/Media";
import { Main } from "./layout/sections/main/Main";
import { Note } from "./layout/sections/note/Note";
import { Projects } from "./layout/sections/projects/Projects";

function App() {
  return (
    <div className="App">
      <Container>
        <Media />
        <Header />
        <Main />
        <Note />
        <Projects />
      </Container>
    </div>
  );
}

export default App;
