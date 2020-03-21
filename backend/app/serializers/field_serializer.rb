class FieldSerializer 

  def initialize(field_object)
    @field = field_object
  end 

  def to_serialized_json
    @field.to_json(:include => {
      :maps => {:only => [:coordinates, :field_name]}
    })
  end 

end