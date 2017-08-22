Rails.application.routes.draw do
  devise_for :users
  root to: "dashboard#index"
  resources :customers, only: %i(index)
end
