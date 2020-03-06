document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.attachEventListeners();
  app.adapter.fetchFields().then(app.createFields);
});