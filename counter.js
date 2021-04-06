'use strict';

const e = React.createElement;
const { useState } = React;

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return e(
    'div',
    {},
    e(
      'button',
      { onClick: () => setCounter(counter + 1) },
      '+1'
    ),
    e(
      'p',
      {},
      `You clicked ${counter} times`
    )
  );
};

function render() {
  const domContainer = document.querySelector('#root');
  ReactDOM.render(e(Counter), domContainer);
}

render();
