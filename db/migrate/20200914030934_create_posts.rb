class CreatePosts < ActiveRecord::Migration[6.0]
  def change #モデルが管理するテーブルの作成。その後マイグレに記述した内容をデータベースに適用するrails db:migrate
    create_table :posts do |t| #ポストというテーブルが作られたよ
      t.text :content #コンテンツというカラムがtextで追加
      t.boolean :checked #既読か未読かを管理するboolean型
      t.timestamps
    end
  end
end
