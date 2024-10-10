import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showCompleted, setshowCompleted] = useState(true);

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key === "Enter") {
        handleAdd();
      }
    };

    todo.length >= 3 && document.body.addEventListener("keyup", handleKeyUp);

    return () => {
      document.body.removeEventListener("keyup", handleKeyUp);
    };
  }, [todos, todo]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDelete = (e) => {
    let id = e.target.name;
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const toggleShowed = async () => {
    await setshowCompleted(!showCompleted);
    console.log(showCompleted);
  };

  const handleUpdate = async (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    await setTodo(todos[index].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center border-x-slate-800 bg-cyan-300">
        <h1 className="font-serif text-2xl m-7 text-white">Add A TODO</h1>
        <div className="w-full flex items-center justify-center flex-col md:flex-row">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-[40%] rounded-full px-5 py-2 m-5 input-text-box"
          />
          <button
            onClick={handleAdd}
            className="bg-green-600 p-2 px-5 rounded-lg text-white"
            disabled={todo.length <= 3}
          >
            ADD
          </button>
        </div>
      </div>
      <input
        onChange={toggleShowed}
        type="checkbox"
        checked={showCompleted}
        className="p-2"
      />{" "}
      <span>show finished</span>
      {todos.map((item) => {
        return (
          (showCompleted || !item.isCompleted) && (
            <div key={item.id} className="flex w-[45%] gap-4 justify-between">
              <div className="w-[100%] flex m-1 text-lg gap-3">
                <input
                  name={item.id}
                  onChange={handleCheckbox}
                  type="checkbox"
                  checked={item.isCompleted}
                  className="p-2"
                />
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={handleUpdate} name={item.id}>
                  Update
                </button>
                <button onClick={handleDelete} name={item.id}>
                  Delete
                </button>
              </div>
            </div>
          )
        );
      })}
    </>
  );
}

export default App;
