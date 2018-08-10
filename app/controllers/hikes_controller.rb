class HikesController < ApplicationController
  before_action :set_hike, only: [:show, :update]

  # GET /hikes
  def index
    @hikes = Hike.all
    render json: @hikes
  end

  # GET /hikes/1
  def show
    render json: @hike
  end

  # POST /hikes
  def create
    @hike = Hike.new(hike_params)
    if @hike.save
      render json: @hike
    else
      render json: @hike.errors
    end
  end

  def update
    @hike.update_attributes(hike_params)
    if @hike.save
      render json: @hike
    else
      render json: @hike.errors
    end
  end

  private
    def set_hike
      @hike = Hike.find(params[:id])
    end

    def hike_params
      params.require(:hike).permit(:name, :location, :difficulty)
    end
end
