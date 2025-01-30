import './TaskForm.scss';
import { useState } from 'react';

function TaskForm({ handleTaskAdd }) {
  const [taskGoal, setTaskGoal] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (taskGoal === '') {
      alert('Enter task goal text please');
      return;
    }

    handleTaskAdd(taskGoal);

    setTaskGoal('');
  };

  const handleFormInput = (e) => {
    setTaskGoal(e.target.value);
  };

  return (
    <form className="task-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="taskGoal"
        placeholder="Add a new task"
        className="task-form__input"
        onChange={handleFormInput}
        value={taskGoal}
      />
      <button type="submit" className="task-form__submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
