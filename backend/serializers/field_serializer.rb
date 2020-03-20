class FieldSerializer 

  def initialize(field_object)
    @field = field_object
  end 

  def to_serialized_json
    options = { 
      include: {
        maps: {
          only: [:id, :coordinates, :field_id]
        },
      }
    }
    @field.to_json(options)
  end 

end