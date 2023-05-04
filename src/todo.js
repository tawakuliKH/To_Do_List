/* eslint-disable no-self-assign */
export default class todo {
  constructor() {
    this.tasks = [];
  }

  addTask = (desc, completed, index) => {
    const task = {
      desc,
      completed,
      index,
    };
    this.tasks.push(task);
    localStorage.setItem('localTasks', JSON.stringify(this.tasks));
    window.location.reload();
  };

  showBG = () => {
    const inputForm = document.querySelectorAll('.item');
    inputForm.forEach((item, index) => {
      item.addEventListener('click', () => {
        const itemContent = document.querySelector(`.item${index}`);
        const trashImage = document.querySelector(`.trash-image${index}`);
        const moreImage = document.querySelector(`.humberger-image${index}`);
        const selected = document.querySelector('.selected');
        const trashImageActive = document.querySelector('.trash-image-show');
        const moreImageHide = document.querySelector('.more-image-hide');
        if (selected != null) {
          selected.classList.remove('selected');
          trashImageActive.classList.remove('trash-image-show');
          moreImageHide.classList.remove('more-image-hide');
        }
        itemContent.classList.add('selected');
        trashImage.classList.add('trash-image-show');
        moreImage.classList.add('more-image-hide');
      });
    });
  }

  deleteItem = (btn) => {
    btn.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.tasks = this.tasks.filter((item, i) => i !== index);
        let lenght = 0;
        this.tasks.forEach((item) => {
          item.desc = item.desc;
          item.index = lenght;
          item.completed = item.completed;
          lenght += 1;
        });
        localStorage.setItem('localTasks', JSON.stringify(this.tasks));
        window.location.reload();
      });
    });
  }

  updateList = (descInput) => {
    descInput.forEach((desc, index) => {
      desc.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          this.tasks[index].desc = desc.value;
          localStorage.setItem('localTasks', JSON.stringify(this.tasks));
          window.location.reload();
        }
      });
    });
  }

  reload = (reloadBtn) => {
    reloadBtn.addEventListener('click', () => {
      window.location.reload();
    });
  }
}
