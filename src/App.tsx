import FilterInput from "./components/FilterInput/FilterInput";
import UsersList from "./components/UsersList/UsersList";
import Title from "./components/Title/Title";

import Container from "./components/Container/Container";

function App() {
  return (
    <>
      <Container>
        <Title />
        <FilterInput />
        <UsersList />
      </Container>
    </>
  );
}

export default App;
