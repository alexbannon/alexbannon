class CreatePortfolios < ActiveRecord::Migration
  def change
    create_table :portfolios do |t|
      t.string :title
      t.text :description
      t.string :imageUrl
      t.string :projectUrl

      t.timestamps null: false
    end
  end
end
