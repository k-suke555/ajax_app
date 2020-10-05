Rails.application.routes.draw do
  #トップページを表示するためのHTTPメソッド
  get 'posts', to: 'posts#index'
  get 'posts/new', to: 'posts#new'#新規投稿選んだ時にページを表示するためのメソッド
  post 'posts', to: 'posts#create' #新規投稿をしたときのメソッド
end
