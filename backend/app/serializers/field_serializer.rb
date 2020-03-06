class FieldSerializer < ActiveModel::Serializer
  has_many :coordinates
  attributes :id 
end
