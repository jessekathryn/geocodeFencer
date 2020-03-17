class Field {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.coordinates = data.coordinates;
    // this.map = data.map;
    // this.marker = data.marker;
    Field.all.push(this);
  }

  update({ id, name, coordinates }) {
    this.id = id;
    this.name = name;
    this.coordinates = coordinates;
  }

  // addMarker(latLng) {
  //     let marker = new google.maps.Marker({
  //         map: map,
  //         position: latLng,
  //         draggable: true
  //     });
  //   Field.push(marker);
  // }

  renderFieldItem() {
    return `
    <div class="card mb-3 shadow-lg p-3 mb-5 bg-white rounded">
    <span class="border border-light">
    <div class="map">
        <iframe
            src="https://www.google.com/maps/embed/v1/view?key=AIzaSyDyTi3j0kAbYveFAqOA_pc7NLCMWn4HI6k&center=${this.coordinates}&zoom=18&maptype=satellite&"
            width="shrink-to-fit" height="shrink-to-fit">
        </iframe>
    </div>
    </span>
    <span class="border border-light">
            <button type="submit" class="btn btn-secondary my-2"data-id=${this.id}>Create Farm</button><br>
            <img src="https://i.ibb.co/LktdsBP/home-icon.png" width="50" height="50">
            <img src="https://i.ibb.co/C6TgVJJ/cow-copy.png" width="60" height="60"><img
            src="https://i.ibb.co/QJvmTng/noun-Tractor-1192.png" width="52" height="52"><img
            src="https://i.ibb.co/Q88xYfd/Monitor.png" width="50" height="50"><img
            src="https://i.ibb.co/HXW6F3Z/Graph.png" width="50" height="50"><img
            src="https://i.ibb.co/0MzxB8g/Money.png" width="50" height="50"><img
            src="https://i.ibb.co/X3Hmrtq/Clipboard.png" width="50" height="50"> 
      </span>  
      `
    ;
  }

  renderUpdateForm() {
  return `<div class="shadow-lg p-3 mb-5 bg-info rounded"> 
  <div class="card-body text-white bg-info border-light "> 
        <h5 class="card-title">Add latitude, longitude of your center.</h5>
        <p class="card-text"></p>
        <p>
            <form data-id=${this.id}>
            <input class="form-control-lg" name="${this.coordinates}" placeholder="32.989181, -81.01584" required=""/>
            <br>
            <button type="submit" class="btn btn-secondary my-2 small">Save</button>
            <a href="index.html" class="btn btn-secondary my-2">Reset</a>
            </form>
        </p>
      </div>
    </div>
    </div>
    `;
  }

  renderSubmitForm() {
    return `
    <form data-id=${this.id}>
      <label>Title</label>
      <p>
        <input type="text" value="${this.map}" />
      </p>
      <label>Content</label>
      <p>
        <textarea>${this.coordinates}</textarea>
      </p>
      <button type='submit'>Save Note</button>
    </form>
  `;
  }

  static findById(id) {
    return this.all.find(field => field.id === id);
  }
}

Field.all = [];
