'use strict';

const e = React.createElement;
const { useState } = React;

const Greetings = ({ name }) => e(
  'h1',
  {},
  `Hello, ${name}!`
);

const InputField = ({ text, onChange }) => e(
  'input',
  { value: text, onChange: (event) => { onChange(event.target.value) } }
);

const Wrapper = () => {
  const [text, setText] = useState("");

  return e(
    'div',
    {},
    e(
      InputField,
      { text, onChange: setText }
    ),
    e(
      Greetings,
      { name: text }
    )
  );
};

function render() {
  const domContainer = document.querySelector('#root');
  ReactDOM.render(e(Wrapper), domContainer);
}

render();
