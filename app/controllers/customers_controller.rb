class CustomersController < ApplicationController
  def ng
    @base_url = "/customers/ng"
    render :index
  end

  def index
    if params[:keywords]
      @keywords = params[:keywords]
      customer_search_term = CustomerSearchTerm.new(@keywords)
      @customers = Customer.where(
        customer_search_term.where_clause,
        customer_search_term.where_args,
      ).order(customer_search_term.order).page(params[:page]).per(10)
    else
      @customers = []
    end

    respond_to do |format|
      format.html do
        redirect_to customers_ng_path
      end
      format.json do
        render json: { customers: @customers }
      end
    end
  end

  def show
    customer_detail = CustomerDetail.find(params[:id])

    respond_to do |format|
      format.json do
        render json: { customer: customer_detail }
      end
    end
  end

  def update
    customer_detail = CustomerDetail.find(params[:id])
    customer_detail.update(params)
    head :ok
  end
end
