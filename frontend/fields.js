class Field {
  constructor(data) {
    this.id = data.id;
    this.coordinates = data.coordinates;
    Field.all.push(this);
  }

  update({coordinates}){
    this.coordinates = coordinates;
  }

  renderListItem() {
    return `
      <p>${this.coordinates}
        <button data-id=${this.id}>submit</button>
      </p>
      `;
  }

  static findById() {
    return this.all.find(field => field.id === id);
  }

  renderUpdateForm() {
    return `
    <form data-id=${this.id}>
      <p>
        <input type="text" value="${this.coordinates}" />
      </p>
      <button type='submit'>Submit</button>
    </form>
    `;
  }
}

Field.all = [];
