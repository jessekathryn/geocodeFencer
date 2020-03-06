class App {
    attachEventListeners() {
      document.querySelector('#fields').addEventListener('click', e => {
          const id = parseInt(e.target.dataset.id)
          const field = Field.findById(id);
          document.querySelector('#update').innerHTML = Field.renderUpdateForm();
      });

      document.querySelector('#update').addEventListener('submit', e => {
        e.preventDefault();
        const id = parseInt(e.target.dataset.id);
        const field = Field.findById(id);
        const coordinates = e.target.querySelector('input').value;
  
        const bodyJSON = { coordinates };
        fetch(`http://localhost:3000/api/v1/fields/${field.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(bodyJSON),
        })
          .then(res => res.json())
          // our backend responds with the updated note instance represented as JSON
          .then(updatedField => console.log(updatedField));
      });
    }
  }