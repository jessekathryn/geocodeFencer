class Api::V1::MapsController < ApplicationController

def index
    maps = Map.all
    render json: maps
end

 def create 
    map = Map.create(map_params)
 
    if map.field_id != 1
        map.field_id = 1
    else map.field_id += 1
    end
  
    if map.save
      render json: map, status: :accepted
    else
      render json: { errors: map.errors.full_messages }, status: :unprocessible_entity
    end
  end
  
  def new
    maps = Map.new 
  end

  def update
    field = Field.find_by(id: params[:id])
    map = Map.find_by(name: params[:name])
    map.update(map_params)

    if map.save
        render json: map, status: :accepted
    else
      render json: { errors: @map.errors.full_messages }, status: :unprocessible_entity
    end
  end
  
  private
  
  def map_params
    params.require(:map).permit(:coordinates, :fieldName, :field_name)
  end
end
