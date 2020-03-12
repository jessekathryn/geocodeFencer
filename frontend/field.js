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

  renderFieldItem() {
    return `
    <div class="card mb-3">
    <div class="google-maps">
        <iframe
            src="https://www.google.com/maps/embed/v1/view?key=AIzaSyDyTi3j0kAbYveFAqOA_pc7NLCMWn4HI6k&center=${this.coordinates}&zoom=18&maptype=satellite"
            width="shrink-to-fit" height="shrink-to-fit">
        </iframe>
    </div>
            <div class="card-body">
            <img src="https://i.ibb.co/LktdsBP/home-icon.png" width="25" height="25"><img
            src="https://i.ibb.co/C6TgVJJ/cow-copy.png" width="30" height="30"><img
            src="https://i.ibb.co/QJvmTng/noun-Tractor-1192.png" width="27" height="27"><img
            src="https://i.ibb.co/Q88xYfd/Monitor.png" width="25" height="25"><img
            src="https://i.ibb.co/HXW6F3Z/Graph.png" width="25" height="25"><img
            src="https://i.ibb.co/0MzxB8g/Money.png" width="25" height="25"><img
            src="https://i.ibb.co/X3Hmrtq/Clipboard.png" width="25" height="25"> 
            <br>
            <button type="submit" class="btn btn-secondary my-2"data-id=${this.id}>Create Farm</button>
      </div>
    </div>`
    ;
  }

  renderUpdateForm() {
    return `
    
    <div class="card-body">
        <h5 class="card-title">Building a farm with Cattlelog</h5>
        <p class="card-text">Add latitude, longitude of your center.</p>
        <p>
            <form data-id=${this.id}>
            <input class="form-control" name="${this.coordinates}" placeholder="32.9924145,-81.016398"/>
            <button type="submit" class="btn btn-secondary my-2">Reset</button>
            </form>
        </p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    `;
  }

  static findById(id) {
    return this.all.find(field => field.id === id);
  }
}

Field.all = [];
