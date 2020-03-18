
class Api::V1::FieldsController < ApplicationController

  def index
    fields = Field.all
    render json: FieldSerializer.new(fields).to_serialized_json
  end
 
  def show
    field = Field.find_by(id: params[:id])
    render json: FieldSerializer.new(field).to_serialized_json
  end

  def new
    field = Field.new 
  end

  def create 
    field = Field.new(field_params)
    if field.save
      render json: FieldSerializer.new(field).to_serialized_json
    else
      render json: { errors: field.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def update
    field = Field.find_by(name: params[:name])
    field.update(field_params)
    
    if field.save
      render json: FieldSerializer.new(field).to_serialized_json
    else
      render json: { errors: @field.errors.full_messages }, status: :unprocessible_entity
    end
  end
  
    private
  
    def field_params
      params.require(:field).permit(:name, :coordinates, :maps, :field_id)
    end
end