const endPoint = 'http://localhost:3000/api/v1/fields'

document.addEventListener('DOMContentLoaded', () => {
  const endPoint = 'http://localhost:3000/api/v1/fields';
  fetch(endPoint)
    .then(res => res.json())
    .then(json => {
      json.forEach(field => {
        const newField = new Field(field);
        document.querySelector('#fields').innerHTML += newField.renderCoordinatesElement();
      });
    });
});
