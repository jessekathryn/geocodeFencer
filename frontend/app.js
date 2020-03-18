class App {
    
    constructor() {
        this.adapter = new Adapter();

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.createFields = this.createFields.bind(this);
        this.addFields = this.addFields.bind(this);
        this.handleNewField = this.handleNewField.bind(this);
        // this.initMap = this.initMap.bind(this);
    }

    attachEventListeners() {
        document.querySelector('#update').addEventListener('submit', this.handleFormSubmit);     
        this.handleNewField(); 
    }

    addFields() {
        document.querySelector('#fields-list').innerHTML = '';      
        Field.all.forEach(
            field => (document.querySelector('#fields-list').innerHTML += field.renderFieldItem()) 
        );
        document.querySelector('#fields-list').addEventListener('click', this.handleEditClick);
    }

    createFields(fields) {  
        fields.forEach(field => { new Field(field); 
        });
        this.addFields();
    }

    handleEditClick(e) {
        const id = parseInt(e.target.dataset.id);
        const field = Field.findById(id);
        document.querySelector('#update').innerHTML = field.renderUpdateForm();
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const id = parseInt(e.target.dataset.id);
        const field = Field.findById(id);
        const name = field.name;
        // const coordinates = e.target.querySelector('input').value
        const coordinates = e.target.querySelector('input').value
        const inputJSON = { name, coordinates };
        this.adapter.updateField(field.id, inputJSON).then(updatedField => {
          const field = Field.findById(updatedField.id);
          field.update(updatedField);
          this.addFields();
        });
      }

    handleNewField() {   
       console.log(this)
           const submitForm = document.getElementById('add');
        submitForm.addEventListener('submit', e => {
            e.preventDefault();
            const name = document.getElementById('name').value
            const coordinates = document.getElementById('input-text').value
            const inputJSON = { name, coordinates };
            this.adapter.createNewField(inputJSON).then(createdField => {
            const newField = new Field(createdField);
            this.addFields(newField); })
    })
}
}
