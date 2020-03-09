class FieldSerializer < ActiveModel::Serializer
  has_many :locations
  attributes :id, :name, :coordinates
end 
