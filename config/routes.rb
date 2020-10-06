Rails.application.routes.draw do
  #トップページを表示するためのHTTPメソッド
  root to: 'posts#index'
  post 'posts', to: 'posts#create' #新規投稿をしたときのメソッド
  get 'posts/:id', to: 'posts#checked' #メモのidを取得するためのルーティング
end
