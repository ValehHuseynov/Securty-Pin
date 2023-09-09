import { useAppSelector } from "./store";
import Alert from "./components/Alert";
import Numbers from "./components/Numbers";
import Securty from "./components/Securty";
import "./App.css";
function App() {
  const { isFull } = useAppSelector(({ code }) => code);

  return (
    <div className="App">
      {isFull && <Alert variant="success" message="Code is success" />}
      <Securty />
      <Numbers />
    </div>
  );
}

export default App;
