interface TodoItemProps {
  todo: {
    id: number
    text: string
    completed: boolean
  }
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded">

      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500"
      >
        Delete
      </button>

    </div>
  )
}

export default TodoItem