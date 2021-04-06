'use strict';

const e = React.createElement;
const { useState } = React;

const AddTodoForm = ({ addTodo }) => {
  const [taskText, setTaskText] = useState("");

  return e(
    'div',
    {},
    e(
      'input',
      {
        value: taskText,
        onChange: (e) => setTaskText(e.target.value),
        onKeyDown: (e) => {
          if (e.key === 'Enter' && taskText !== "") {
            addTodo(taskText);
            setTaskText("")
          }
        }
      }
    ),
    e(
      'button',
      { onClick: () => addTodo(taskText) },
      'Add Task'
    )
  );
};

const TodoList = ({ tasks }) => {
  console.log("current tasks", tasks);

  const taskNodes = tasks.map(({ taskText, id }) => e(
    'li',
    { key: id },
    taskText
  ));  

  return e(
    'ul',
    {},
    taskNodes
  );
};

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  return e(
    'div',
    {},
    e(
      AddTodoForm,
      { addTodo: (taskText) => setTasks([{ taskText, id: tasks.length }, ...tasks]) }
    ),
    e(
      TodoList,
      { tasks }
    )
  );
};

function render() {
  const domContainer = document.querySelector('#root');
  ReactDOM.render(e(TodoApp), domContainer);
}

render();
