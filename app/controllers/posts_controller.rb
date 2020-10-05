class PostsController < ApplicationController

  def index  # indexアクションを定義した(ルーティングに対応するアクション)
    @posts = Post.all  # すべてのレコードを@postsに代入
  end

  def new #newページを表示させるだけなのでこのまま
  end

  def create #新規投稿をしたときのメソッドアクション
    Post.create(content: params[:content])　#フォームから送信されたパラメータを利用してparamsの情報を保存
  end
end
