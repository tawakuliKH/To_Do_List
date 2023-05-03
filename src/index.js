import './style.css';
import './assets/images/reload.png';
import './assets/images/enter.png';
import './assets/images/more.png';

const tasks = [
  {
    desc: 'Wash the dishes',
    completed: false,
    index: 1,
  },
  {
    desc: 'Complete The Microverse',
    completed: false,
    index: 2,
  },
  {
    desc: 'Go to a travel',
    completed: false,
    index: 3,
  },
  {
    desc: 'Find a good job',
    completed: false,
    index: 4,
  },
];
const items = document.querySelector('.items');
tasks.forEach((task) => {
  items.innerHTML += `<div class="item">
                <div class="item-desc"><div class="check"><input type="checkbox" class="checkbox"></div><div class="desc">${task.desc}</div></div>
                <div class="humberger"><img class="humberger-image" src="assets/images/more.png" alt="humberger"></div>
               </div>`;
});
