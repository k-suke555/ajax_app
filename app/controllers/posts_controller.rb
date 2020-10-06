class PostsController < ApplicationController

  def index  # indexアクションを定義した(ルーティングに対応するアクション)
    @posts = Post.all.order(id: "DESC")  # すべてのレコードを@postsに代入(DESC=降順)
  end

  def create
    Post.create(content: params[:content])
    redirect_to action: :index #メモを保存した後にページにリダイレクト
  end

  def checked
    post = Post.find(params[:id]) #既読したidのメモが渡されるように設定
    if post.checked #既読であるかどうかチェックするプロパティ
      post.update(checked: false) #既読であれば解除するためにfalse
    else
      post.update(checked: true) #既読でなければ解除のためtrue
    end

    item = Post.find(params[:id]) #更新したレコードを取得
    render json: { post: item } #JSON型式（データ）としてchecked.jsに返却
  end
end
