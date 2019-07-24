Rails.application.routes.draw do
  root "home#index"

    get "about",              to: "home#about"
    get "projects",           to: "home#projects"
    get "prices",             to: "home#prices"
    get "svg", to: "home#svg"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
