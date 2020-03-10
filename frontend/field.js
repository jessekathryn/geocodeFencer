class Field {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.coordinates = data.coordinates;
    Field.all.push(this);
  }

  update({id, name, coordinates}){
    this.id = id;
    this.name = name;
    this.coordinates = coordinates;
  }

  renderFieldItem() {
    return `
    <h3>${this.coordinates} ${this.name}
    <button data-id=${this.id}>Select </button>
    </h3>`;
  }
  
  renderUpdateForm() {
    return `
    <form data-id=${this.id}>
    <input class="form-control" name="${this.coordinates}" />
    <button type="submit">Save</button>
    </form>
    `;
  }

 static findById(id) {
    return this.all.find(field => field.id === id);
  }
}

Field.all = [];
