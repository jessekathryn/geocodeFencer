class Field {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.lat = data.lat;
    this.lng = data.lng;
    Field.all.push(this);
  }

  update({id, name, lat, lng}) {
    this.id = id;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
  }

  post({id, name, lat, lng }) {
    this.id = id;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
  }

  renderMapItem() {
    return `    
    ${this.lat} 
    ${this.lng} 
      `;
  }

  renderFieldItem() {
    return `${this.lat}, ${this.lng}
    <button type="submit" id="" class="btn btn-secondary my-2 small" data-id=${this.id}>Edit</button>
       `;
  }

  renderUpdateForm() {
    return `
    <div class="shadow-lg p-3 mb-5 bg-info rounded"> 
      <div class="card-body text-white bg-info border-light "> 
        <h5 class="card-title">Add latitude, longitude of your center.</h5>
        <p class="card-text"></p>
          <form data-id=${this.id} ${this.name}>
            <input id="lat" class="lat form-control-sm" name="lat" data-id="lat" ${this.lat} placeholder="32.989181" "lat" required=""/>
            <input id="lng" class="lng form-control-sm" name="long" data-id="lng"  ${this.lng} placeholder="-81.01584" "lng" required=""/>
            <button type="submit" class="latLng btn btn-secondary my-2 small">Submit</button>
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
