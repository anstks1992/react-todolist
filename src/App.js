import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === " ") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    //처음에 hello입력시 todo에 hello가 들어가고 currentArray에는 빈값
    //두번째에 bye입력시 todo에 bye가 들어가고 currentArray에는 hello
    //세번째에 good입력시 currentArray에는 [bye,hello]
    setTodo("");
  };

  console.log(todos);

  return (
    <div>
      <h1>My to do list({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="write"
        />
        <button>Add to do</button>
      </form>
      <hr />
      {todos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
    //map은 하나의 배열에 있는 item을 내가 원하는 무엇이든지로 바꾸는 역할을 하고
    //새로운 배열로 return
  );
}

export default App;
