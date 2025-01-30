import './Task.scss';

const Task = ({ task, handleTaskToggle }) => {
  return (
    <li
      className={`task ${task.isCompleted && 'task--completed'}`}
      onClick={handleTaskToggle}
    >
      {task.goal}
    </li>
  );
};

export default Task;
