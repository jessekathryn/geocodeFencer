class Api::V1::MapsController < ApplicationController

def index
    maps = Map.all
    render json: maps
end

def show
end

def create 

    if !Field.all.include?(name: params[:name])
      Field.create(field_params)
    else 
      Field.find_by(name: params[:name])
    end
    map = Map.create(map_params)
 
    if map.field_id != 0
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
    map = Map.find_by(id: params[:id])
    map.update(map_params)
    map.save

    map.save
    if map.save
        render json: map, status: :accepted
    else
      render json: { errors: @map.errors.full_messages }, status: :unprocessible_entity
    end
  end
  
  private
  
  def field_params
    params.require(:field).permit(:name, :maps)
  end


  def map_params
    params.require(:map).permit(:lat, :lng, :field_name, :sorted)
  end
end
