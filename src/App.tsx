import "./App.css";
import FilterInput from "./components/FilterInput/FilterInput";
import UsersList from "./components/UsersList/UsersList";

function App() {
  return (
    <>
      <h1>User Management</h1>
      <FilterInput />
      <UsersList />
    </>
  );
}

export default App;
