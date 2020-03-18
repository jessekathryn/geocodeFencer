class Field {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.coordinates = data.coordinates;
    this.maps = data.maps;
    Field.all.push(this);
  }

  update({ id, name, maps, coordinates }) {
    this.id = id;
    this.name = name;
    this.maps = maps;
    this.coordinates = coordinates;
    
  }

  post({ id, name, coordinates, maps}) {
    this. id = id;
    this.name = name;
    this.coordinates = coordinates;
    this.maps = maps;
  }

  renderFieldItem() {
    return `
    (${this.name})
    ${this.maps.coordinates}
    <button type="submit" class="btn btn-secondary my-2"data-id=${this.id}>Edit</button>
      `
    ;
  }

  renderUpdateForm() {
  return `<div class="shadow-lg p-3 mb-5 bg-info rounded"> 
  <div class="card-body text-white bg-info border-light "> 
        <h5 class="card-title">Add latitude, longitude of your center.</h5>
        <p class="card-text"></p>
        <p>
            <form data-id=${this.id} ${this.name}>
            <input class="form-control-lg" name="maps[coordinates]" ${this.maps[0].coordinates} placeholder="32.989181, -81.01584" required=""/>
           
            <br>
            <button type="submit" class="btn btn-secondary my-2 small">Save</button>
          </form>
        </p>
      </div>
    </div>
    </div>
    `;
  }

  renderNewForm() {
    return `
    <form data-id= #new>
    ${this.name}
      <p>
      <input class="form-control-lg" name="${this.maps[0].coordinates}" placeholder="32.989181, -81.01584" required=""/>
      <br>
      <button type="submit" class="btn btn-secondary my-2 small">Save</button>
    </form>
  `;
  }
 
  static findById(id) {
    return this.all.find(field => field.id === id);
  }
}

Field.all = [];
