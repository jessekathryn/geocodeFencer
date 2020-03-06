class App {
    attachEventListeners() {
      document.querySelector('#fields').addEventListener('click', e => {
        console.log('clicked');
      });
    }
  }