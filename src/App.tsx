import { Container } from "@mui/material";

import FilterInput from "./components/FilterInput/FilterInput";
import UsersList from "./components/UsersList/UsersList";
import Title from "./components/Title/Title";

import "./App.css";

function App() {
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title />
        <FilterInput />
        <UsersList />
      </Container>
    </>
  );
}

export default App;
