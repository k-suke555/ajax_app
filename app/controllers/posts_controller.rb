class PostsController < ApplicationController

  def index  # indexアクションを定義した(ルーティングに対応するアクション)
    @posts = Post.all.order(id: "DESC")  # すべてのレコードを@postsに代入(DESC=降順)
  end

  def create
    Post.create(content: params[:content])
    redirect_to action: :index #メモを保存した後にページにリダイレクト
  end

end
