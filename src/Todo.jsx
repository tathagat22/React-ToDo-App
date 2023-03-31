import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const styles = {
  li: 'flex justify-between bg-slate-200 p-4 my-2 capitalize',
  liComplete: 'flex justify-between bg-slate-400 p-4 my-2 capitalize',
  row: 'flex',
  text: 'ml-2 cursor-pointer',
  textComplete: 'ml-2 cursor-pointer line-through',
  button: 'cursor-pointer flex items-center',
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  const isTodoComplete = todo.completed;
  const liClassName = isTodoComplete ? styles.liComplete : styles.li;
  const textClassName = isTodoComplete ? styles.textComplete : styles.text;

  const handleToggleComplete = () => toggleComplete(todo);
  const handleDeleteTodo = () => deleteTodo(todo.id);

  return (
    <li className={liClassName}>
      <div className={styles.row}>
        <input
          onChange={handleToggleComplete}
          type="checkbox"
          checked={isTodoComplete ? 'checked' : ''}
        />
        <p onClick={handleToggleComplete} className={textClassName}>
          {todo.text}
        </p>
      </div>
      <button onClick={handleDeleteTodo}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
};

export default Todo;
