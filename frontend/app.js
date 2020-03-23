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
		document
			.querySelector("#update")
			.addEventListener("submit", this.handleFormSubmit);
		this.handleNewField();
	}

	addFields() {
		document.querySelector("#fields-list").innerHTML = "";
		Field.all.forEach(
			field =>
				(document.querySelector(
					"#fields-list"
				).innerHTML += field.renderFieldItem())
		);
		document
			.querySelector("#fields-list")
			.addEventListener("click", this.handleEditClick);
	}

	addMaps() {
		document.querySelector("#maps-list").innerHTML = "";
		Field.all.forEach(
			field =>
				(document.querySelector(
					"#maps-list"
				).innerHTML += field.renderMapItem())
		);
		document
			.querySelector("#maps-list")
			.addEventListener("click", this.handleEditClick);
	}

	createFields(fields) {
		fields.forEach(field => {
			new Field(field);
		});
		this.addFields();
	}

	createMaps(maps) {
		maps.forEach(map => {
			new Map(map);
		});
		this.addMaps();
	}

	handleEditClick(e) {
		const id = parseInt(e.target.dataset.id);
        const field = Field.findById(id);
		document.querySelector("#update").innerHTML = field.renderUpdateForm();
	}

	handleFormSubmit(e) {
		e.preventDefault();
		const id = parseInt(e.target.dataset.id);
        const field = Field.findById(id);  
        const name = document.getElementById('name').value
        const field_name = name;
        const lat = e.target.querySelector('#lat').value;
        const lng = e.target.querySelector('#lng').value;
		const inputJSON = { name };
		this.adapter.updateField(field.id, inputJSON, lat, lng, field_name).then(updatedField => {
			const field = Field.findById(updatedField.id);
			field.update(updatedField);
			this.addFields();
		});
	}

	handleNewField() {
		console.log(this);
		const submitForm = document.getElementById("add");
		submitForm.addEventListener("submit", e => {
			e.preventDefault();
			const name = document.getElementById("name").value;
			const field_name = name;
            const lat = document.getElementById("input-lat").value;
            const lng = document.getElementById("input-lng").value;
			const inputJSON = { name };
			this.adapter
				.createNewMap(inputJSON, lat, lng, field_name)
				.then(createdField => {
					const newField = new Field(createdField);
					this.addFields(newField);
				});
		});
	}
}
