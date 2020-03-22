class Map {
    constructor(data) {
      this.id = data.id;
      this.field_name = data.field_name;
      this.coordinates = data.coordinates;
      this.field_id = data.field_id;
      Map.all.push(this);
    }
  
    update({ id, field_name, field_id, coordinates }) {
      this.id = id;
      this.field_name = field_name;
      this.field_id = field_id;
      this.coordinates = coordinates;
      
    }
  
    post({ id, field_name, coordinates}) {
      this.id = id;
      this.field_name = field_name;
      this.coordinates = coordinates;
      this.field_id = field_id;
    }

}
 Map.all = [];
 