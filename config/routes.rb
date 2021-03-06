Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'registrations'}


  root to: 'songs#home_page'

  resources :users
  get 'users/:id/info', to: 'users#info'
  get '/all_users', to: 'users#all_users'

  resources :songs
  get 'songs/:id/info', to: 'songs#info'
  get '/unfinished_songs', to: 'songs#unfinished_songs'
  get '/finished_songs', to: 'songs#finished_songs'
  patch '/songs/:id/finish', to: 'songs#finish'
  patch '/songs/:id/reopen', to: 'songs#reopen'

  resources :feature_tracks, only: [:create, :destroy]
  resources :master_tracks, only: [:create, :destroy]
  resources :comments, only: [:create, :destroy]
  resources :likes, only: :create
  delete '/likes', to: 'likes#destroy'
  resources :connections, only: :create
  delete '/connections', to: 'connections#destroy'


  post 'talents/genres_talents', to: 'talents#create_genres_talents'

end
