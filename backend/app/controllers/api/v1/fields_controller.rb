class Api::V1::FieldsController < ApplicationController

    def index
      @fields = Field.all
      render json: @fields
    end
  
    def update
      binding.pry

      @field = Field.find_by(id: params[:id])
      @field.update(field_params)
     
      if @field.save
        render json: @field, status: :accepted
      else
        render json: { errors: @field.errors.full_messages }, status: :unprocessible_entity
      end
    end
  
    private
  
    def field_params
      params.permit(:id, :name, :coordinates)
    end
  

end