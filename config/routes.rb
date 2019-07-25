Rails.application.routes.draw do
  root "home#index"

    get "about",              to: "home#about"
    get "projects",           to: "home#projects"
    get "prices",             to: "home#prices"

  #Errors routes
    match '/404',                               to: 'errors#not_found',                         via: :all
    match '/422',                               to: "errors#unacceptable",                      via: :all
    match '/500',                               to: "errors#server_errors",                     via: :all
end
