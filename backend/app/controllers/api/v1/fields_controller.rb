class Api::V1::FieldsController < ApplicationController

    def index
      @fields = Field.all
      render json: @fields
    end
  
    def show
      @field = Field.find_by(params[:id])
      render json: @field
    end

    def update
      @field = Field.find_by(params[:id])
      
      @field.update(field_params)
     
      if @field.save
        render json: @field, status: :accepted
      else
        render json: { errors: @field.errors.full_messages }, status: :unprocessible_entity
      end
    end
  
    private
  
    def field_params
      params.require(:field).permit(:id, :name, :coordinates, :locations)
    end

end