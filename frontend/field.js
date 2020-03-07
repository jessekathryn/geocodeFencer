class Field {
  constructor(data) {
    this.id = data.id;
    this.coordinates = data.coordinates;
    Field.all.push(this);
  }

  update({id, coordinates}){
    this.id = id;
    this.coordinates = coordinates;
  }

  renderFieldItem() {
    return `
    ${this.coordinates}
    <button data-id=${this.id}>Select</button>
    `;
  }

  renderUpdateForm() {
    return `
    <form data-id=${this.id}>
    <p>
    <input type="text" value="${this.coordinates}" />
    </p>
    <button data-id=${this.id}type='submit'>Save</button>
    </form>
    `;
  }

 static findById(id) {
    return this.all.find(field => field.id === id);
  }
}

Field.all = [];
