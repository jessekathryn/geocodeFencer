class FieldSerializer < ActiveModel::Serializer
  has_many :longitude, :latitude
  attributes :id, :longitude, :latitude
end
