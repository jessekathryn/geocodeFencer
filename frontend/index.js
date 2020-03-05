const endPoint = 'http://localhost:3000/fields'

document.addEventListener('DOMContentLoaded', () => {
  const endPoint = 'http://localhost:3000/fields';
  fetch(endPoint)
    .then(res => res.json())
    .then(json =>
      json.forEach(note => {
        const markup = `
        <li>
          <h3>${field.id}
            <button>edit</button>
          </h3>
        </li>`;

        document.querySelector('#field-list').innerHTML += markup;
      })
    );
});