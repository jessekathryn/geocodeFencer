class FieldSerializer < ActiveModel::Serializer
  has_many :maps
  attributes :id, :name, :coordinates

  def initialize(field_object)
    @field = field_object
  end 

  def to_serialized_json
    @field.to_json(:include => {
      :map => {:only => [:coordinates]}
    })
  end 

end