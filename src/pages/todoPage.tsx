import { useState } from "react"
import TodoItem from "../components/todoItem"

interface Todo {
  id: number
  text: string
  completed: boolean
}

function TodoPage() {

  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState("")

  const addTodo = () => {
    if (!input.trim()) return

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    }

    setTodos([...todos, newTodo])
    setInput("")
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  return (
    <div className="max-w-md mx-auto mt-10">

      <h1 className="text-2xl font-bold mb-4">
        Todo List
      </h1>

      <div className="flex gap-2 mb-4">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-1"
          placeholder="Add a task"
        />

        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4"
        >
          Add
        </button>

      </div>

      <div className="flex flex-col gap-2">

        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}

      </div>

    </div>
  )
}

export default TodoPage