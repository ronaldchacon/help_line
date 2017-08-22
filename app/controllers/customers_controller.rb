class CustomersController < ApplicationController
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
      format.html
      format.json do
        render json: { customers: @customers }
      end
    end
  end
end
