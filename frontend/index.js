const endPoint = 'http://localhost:3000/api/v1/fields'

document.addEventListener('DOMContentLoaded', () => {
  const endPoint = 'http://localhost:3000/api/v1/fields';
  fetch(endPoint)
    .then(res => res.json())
    .then(json =>
      console.log(json)
      // json.forEach(field => {
      //   const coordinates = `
      //   <li>
      //     <h3>${field.name}
      //       <button>edit</button>
      //     </h3>
      //   </li>`;

      //   document.querySelector('#fields').innerHTML += coordinates;
      // })
    );
});