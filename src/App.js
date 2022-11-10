import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Counter } from "./Pages/Counter";
import UserSignUp from "./Pages/UserSignUp";
import { makeStyles } from "@mui/styles";
import AdminsTable from "./Components/UserTable/AdminsTable";

function App() {
  return (
    <div className="App">
      <br></br>
      {/* <Counter></Counter> */}
      <br></br>
      <br></br>
      <UserSignUp></UserSignUp>
      <br></br>
      <br></br>
      <AdminsTable />
    </div>
  );
}

export default App;
