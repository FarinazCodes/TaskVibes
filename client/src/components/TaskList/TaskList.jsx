import Task from "../Task/Task";
import "./TaskList.scss";

const TaskList = ({ tasks, handleTaskToggle }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            handleTaskToggle={() => handleTaskToggle(task)}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
