class Api::V1::FieldsController < ApplicationController
    # before_action :find_field, only: [:update] 

    def index
      @fields = Field.all
      render json: @fields
    end
  
    def update
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
      params.permit(:id, :coordinates, :name)
    end
  
    def find_field
      @field = Field.find_by(id: params[:id])
    end
end