class OpportunitiesController < ApplicationController
  before_action :set_opportunity, only: [:show, :update, :destroy]
  before_action :get_organization, except: [:destroy, :show, :update]
  before_action :authorize_request, only: [:create, :update, :destroy]
  # GET /opportunities
  def index
    # @opportunities = Opportunity.all
    
    render json: @organization.opportunities
    # render json: @opportunities
  end

  # GET /opportunities/1
  def show
    
    render json: @opportunity
  end

  # POST /opportunities
  def create
    # @opportunity = @organization.opportunity.build()
    @opportunity = Opportunity.new(opportunity_params)
    @opportunity.organization = @organization
    @opportunity.user = @current_user
    if @opportunity.save
      render json: @opportunity, status: :created
    else
      render json: @opportunity.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /opportunities/1
  def update
    if @opportunity.update(opportunity_params)
      render json: @opportunity
    else
      render json: @opportunity.errors, status: :unprocessable_entity
    end
  end

  # DELETE /opportunities/1
  def destroy
    @opportunity.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_opportunity
      @opportunity = Opportunity.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def opportunity_params
      params.require(:opportunity).permit(:body, :opp_name, :opp_description, :opp_image, :user_id)
    end

    def organization_params
      params.require(:organization)
    end

    def get_organization
      @organization = Organization.find(params[:organization_id])
    end
end
