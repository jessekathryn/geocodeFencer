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


  renderFieldItem() {
    return `
    <a href="#" class="list-group-item list-group-item-action light">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${this.lat}, ${this.lng}</h5>
      <small>${Date(Date.now()).toString()}</small>
      <div class="btn-group"><button type="submit" id="submit" value="Geocode"" class="btn btn-sm btn-outline-secondary">View</button><button type="submit" class="btn btn-sm btn-outline-secondary" data-id=${this.id}>Edit</button></div>
    </div>
    
    </li> 

  </a> 
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
