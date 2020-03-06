class Field {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.coordinates = data.coordinates;
    Field.all.push(this);
  }

  renderCoordinatesElement() {
    return `
      <p>${this.coordinates}
        <button data-id=${this.id}>edit</button>
      </p>`;
  }
}

Field.all = [];
