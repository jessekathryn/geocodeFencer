class Api::V1::MapsController < ApplicationController

def index
    maps = Map.all
    render json: maps
end

 def create 
    field = Field.create(field_params)
    field.save
    map = Map.create(map_params)
    binding.pry
    if map.save
        render json: map, status: :accepted
    else
      render json: { errors: map.errors.full_messages }, status: :unprocessible_entity
    end
  end
  
  def new
    map = Map.new 
  end

  def update
    field = Field.find_by(id: params[:id])
    map = Map.find_by(field_id: params[:field_id])
    map.update(map_params)
    binding.pry
    if map.save
        render json: map, status: :accepted
    else
      render json: { errors: @map.errors.full_messages }, status: :unprocessible_entity
    end
  end
  
  private
  
  def map_params
    params.require(:map).permit(:coordinates, :field_id)
  end

  def field_params
    params.require(:field).permit(:name)
  end
end
