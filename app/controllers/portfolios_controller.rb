class PortfoliosController < ApplicationController
  def index
    @pieces = Portfolio.all
    respond_to do |format|
      format.json { render :json => @pieces}
    end
  end

  def show
    @piece = Portfolio.find(params[:id])
    respond_to do |format|
      format.json { render :json => @piece}
    end
  end

  def main

  end

end
