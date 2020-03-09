class App {
    constructor() {
        this.adapter = new Adapter();

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.createFields = this.createFields.bind(this);
        this.addFields = this.addFields.bind(this);
    }

    attachEventListeners() {
        document.querySelector('#fields-list').addEventListener('click', this.handleEditClick);
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
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const id = e.target.dataset.id;
        const coordinates = e.target.querySelector('input').value;
        const inputJSON = { name, coordinates };

        this.adapter.updateField(id, inputJSON).then(updatedField => {field = Field.findById(updatedField.id);
            this.addFields();
        });
    }

    handleEditClick(e) {
        const id = parseInt(e.target.dataset.id);
        const field = Field.findById(id);
        document.querySelector('#update').innerHTML = field.renderUpdateForm();
    }
}