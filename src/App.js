import "./App.css";
import Form from "./Form";
import { DataList } from "./MyContext";
import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="App">
      <DataList>
        <Form />
        <ToDoList />
      </DataList>
    </div>
  );
}

export default App;
