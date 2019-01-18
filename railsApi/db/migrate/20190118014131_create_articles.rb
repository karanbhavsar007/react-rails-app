class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.text :title
      t.text :description
      t.string :author
      t.string :tags

      t.timestamps
    end
  end
end
