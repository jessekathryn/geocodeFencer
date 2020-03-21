
class Api::V1::FieldsController < ApplicationController

  def index
    fields = Field.all
    render json: FieldSerializer.new(fields).to_serialized_json
  end
 
  def show
    field = Field.find_by(id: params[:id])
    render json: FieldSerializer.new(field).to_serialized_json
  end

  def create 
    field = Field.create(field_params)

    if field.save   
      render json: FieldSerializer.new(field).to_serialized_json
    else
      render json: { errors: field.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def update
    field = Field.find_by(id: params[:id])
    map = Map.find_by(id: params[:id])

    field.update(field_params)
    map.update(map_params)
    
    if field.save && map.save
      render json: FieldSerializer.new(field).to_serialized_json
    else
      render json: { errors: @field.errors.full_messages }, status: :unprocessible_entity
    end
  end
  
    private
  
    def field_params
      params.require(:field).permit(:name, :maps)
    end

    def map_params
      params.require(:map).permit(:coordinates, :id, :field_name)
    end
end