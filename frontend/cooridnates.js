 const endPoint = 'http://localhost:3000/api/v1/fields'

document.addEventListener('DOMContentLoaded', () => {
  const endPoint = 'http://localhost:3000/api/v1/fields';
  fetch(endPoint)
    .then(res => res.json())
    .then(json =>
      json.forEach(field => {
        const markup = `
        <li>
          <h3>${field.coordinates}
            <button>view</button>
          </h3>
        </li>`;

        document.querySelector('#fields').innerHTML += markup;
      })
    );
});

