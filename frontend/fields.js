class Field {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.coordinates = data.coordinates;
    Field.all.push(this);
  }

  renderListItem() {
    return `
    <li>
      <h3>${this.coordinates}
        <button data-id=${this.id}>edit</button>
      </h3>
    </li>`;
  }
}

Field.all = [];
