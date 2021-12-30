import { Button, Input } from "@rikopernando/web-components"
import './App.css';

function App() {
  return (
    <div className="App">
      <Input type="text" name="name" placeholder="Name" />
      <Button textColor="blue">Click Me Again!</Button>
    </div>
  );
}

export default App;
