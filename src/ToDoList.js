import { useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DataContext } from "./MyContext";

export default function ToDoList() {
  const [data, setData] = useContext(DataContext);

  const deleteItem = (id) => {
    setData(data.filter((x) => x.id !== id));
  };

  return (
    <div className="App">
      <ul>
        {data.map((item, index) => (
          <div key={item.id}>
            <li>
              {index}. {item.name}{" "}
            </li>
            <button onClick={() => deleteItem(item.id)}> Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
