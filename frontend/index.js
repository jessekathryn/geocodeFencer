const endPoint = 'http://localhost:3000/api/v1/fields'

document.addEventListener('DOMContentLoaded', () => {
  const endPoint = 'http://localhost:3000/fields';
  fetch(endPoint)
    .then(res => res.json())
    .then(json =>
      json.forEach(note => {
        const markup = `
        <li>
          <h3>${field.name}
            <button>edit</button>
          </h3>
        </li>`;

        document.querySelector('#field-list').innerHTML += markup;
      })
    );
});