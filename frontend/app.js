class App {
    
    constructor() {
        this.adapter = new Adapter();

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.createFields = this.createFields.bind(this);
        this.addFields = this.addFields.bind(this);
        // this.initMap = this.initMap.bind(this);
    }

    attachEventListeners() {
        document.querySelector('#update').addEventListener('submit', this.handleFormSubmit);
    }

    createFields(fields) {
        fields.forEach(field => {
            new Field(field);
        });
        this.addFields();
    }

    addFields() {
        document.querySelector('#fields-list').innerHTML = '';
        Field.all.forEach(
            field => (document.querySelector('#fields-list').innerHTML += field.renderFieldItem())
        );
        document.querySelector('#fields-list').addEventListener('click', this.handleEditClick);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const id = parseInt(e.target.dataset.id);
        const field = Field.findById(id);
        const coordinates= e.target.querySelector('input').value
        const inputJSON = { name, coordinates };
        this.adapter.updateField(field.id, inputJSON).then(updatedField => {
          const field = Field.findById(updatedField.id);
          field.update(updatedField);
          this.addFields();
        });
      }

//    initMap() {
//         const id = parseInt(e.target.dataset.id);
//         const field = Field.findById(id);
//         const map = new google.maps.Map(document.getElementById('map') = field.addMarker(), {
//         center: {lat: 32.397, lng: -80.644},
//         zoom: 18
//       });
    
//       map.addListener('click', function(e) {
//           console.log(e);
//           addMarker(e.latLng);
//       });
//     }

   handleEditClick(e) {
        const id = parseInt(e.target.dataset.id);
        const field = Field.findById(id);
        document.querySelector('#update').innerHTML = field.renderUpdateForm();
    }
}
