class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :content
      t.integer :rating
      t.integer :hike_id
      t.integer :user_id

      t.timestamps
    end
  end
end
