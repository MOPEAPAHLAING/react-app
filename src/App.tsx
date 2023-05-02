import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleAlertOpen = () => {
    setIsAlertOpen(true);
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };
  return (
    <div>
      {isAlertOpen ? <Alert onDismiss={handleAlertClose}>Alert</Alert> : null}
      <Button color="secondary" onClick={handleAlertOpen}>
        My child
      </Button>

      <ListGroup
        items={["New York", "San Francisco"]}
        onSelectItem={console.log}
        heading="Cities"
      />
    </div>
  );
};

export default App;
