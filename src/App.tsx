import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("Clicked")}>My child</Button>
    </div>
  );
};

export default App;
