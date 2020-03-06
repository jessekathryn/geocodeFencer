class App {
    attachEventListeners() {
      document.querySelector('#fields').addEventListener('click', e => {
          const id = parseInt(e.target.dataset.id)
          const field = Field.findById(id);
          console.log('field');
      });
    }
  }