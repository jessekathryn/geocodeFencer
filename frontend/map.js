class Map {
    constructor(data) {
      this.id = data.id;
      this.field_name = data.field_name;
      this.lat = data.lat;
      this.lng = data.lng;
      this.field_id = data.field_id;
      Map.all.push(this);
    }
  
    update({ id, field_name, field_id, lat, lng }) {
      this.id = id;
      this.field_name = field_name;
      this.field_id = field_id;
      this.lat = lat;
      this.lng = lng;
    }
  
    post({ id, field_name, lat, lng}) {
      this.id = id;
      this.field_name = field_name;
      this.lat = lat;
      this.lng = lng;
      this.field_id = field_id;
    }

}
 Map.all = [];
 