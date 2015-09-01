Rails.application.routes.draw do
  get "/", to: "portfolios#main"
  get "/portfolio", to: "portfolios#index"
  get "/portfolio/:id", to: "portfolios#show"
end
