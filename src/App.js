import logo from "./logo.svg";
import "./App.css";
import { Container, Box } from "@material-ui/core";
import PersonForm from "./libs/components/PersonForm/PersonForm";
import PersonList from "./libs/components/PersonList/PersonList";
function App() {
  return (
    <div className="grid">
      <Box>
        <PersonForm />
      </Box>
      <Box>
        <PersonList />
      </Box>
    </div>
  );
}

export default App;
