class Field {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.coordinates = data.coordinates;
    Field.all.push(this);
  }

  update({ id, name, coordinates }) {
    this.id = id;
    this.name = name;
    this.coordinates = coordinates;
    
  }

  post({ id, name, coordinates}) {
    this. id = id;
    this.name = name;
    this.coordinates = coordinates;
  }

  renderFieldItem() {
    return  ` 
    ${this.coordinates} 
    <button type="submit" id="" class="btn btn-secondary my-2 small" data-id=${this.id}>Edit</button>
       `
     ;
   }
  renderMapItem() {
    return  ` 
    ${this.coordinates} 
      `
    ;
  }

  renderUpdateForm() {
    return `
    <div class="shadow-lg p-3 mb-5 bg-info rounded"> 
      <div class="card-body text-white bg-info border-light "> 
        <h5 class="card-title">Add latitude, longitude of your center.</h5>
        <p class="card-text"></p>
          <form data-id=${this.id}>
            <input class="form-control-sm" name="maps[coordinates]" data-id=${this.id} ${this.name} ${this.coordinates} placeholder="32.989181, -81.01584" required=""/>
            <button type="submit" class="btn btn-secondary my-2 small">Submit</button>
          </form>
      </div>
    </div>
    </div>
    `;
  }
 
  static findById(id) {
    return this.all.find(field => field.id === id);
  }
}

Field.all = [];
