import _ from 'lodash';
import printMe from './print';
function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');
  button.textContent = 'Click me and check the console!';

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  button.onclick = printMe;

  element.appendChild(button);
  return element;
}

document.body.appendChild(component());