import { Container } from "@mui/material";
import "./App.css";
import FilterInput from "./components/FilterInput/FilterInput";
import UsersList from "./components/UsersList/UsersList";

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
        <h1>User Management</h1>
        <FilterInput />
        <UsersList />
      </Container>
    </>
  );
}

export default App;
