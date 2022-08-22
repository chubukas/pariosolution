import "./App.css";
import Background from "./components/background";
import Container from "./components/container";
import PurchaseCompleted from "./components/purchaseCompleted";
import { useAppContext } from "./context";

function App() {
  const [appState] = useAppContext();

  const { completed } = appState;

  return (
    <Background>
      {!completed ? <Container /> : <PurchaseCompleted />}
    </Background>
  );
}

export default App;
