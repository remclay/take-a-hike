require 'pry'

class HikesController < ApplicationController
  before_action :set_hike, only: [:show, :update, :destroy]

  # GET /hikes
  def index
    @hikes = Hike.all
    render json: @hikes
  end

  # GET /hikes/:id
  def show
    render json: @hike
  end

  # POST /hikes
  def create
    @hike = Hike.new(hike_params)
    if @hike.save
      render json: @hike
    else
      render json: {status: "error", message: @hike.errors}
      binding.pry
    end
  end

  # PUT/PATCH /hikes/:id/edit
  def update
    @hike.update(hike_params)
    if @hike.save
      render json: @hike
      binding.pry
    else
      render json: {status: "error", message: @hike.errors}
      binding.pry
    end
  end

  # DELETE /hikes/:id
  def destroy
    if @hike.destroy
      head :no_content, status: :ok
    else
      render json: @hike.errors, status: :unprocessable_entity
    end
  end

  private
    def set_hike
      @hike = Hike.find(params[:id])
    end

    def hike_params
      params.require(:hike).permit(:id, :name, :location, :difficulty, :description)
    end
end
