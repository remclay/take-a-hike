class CreateHikes < ActiveRecord::Migration[5.1]
  def change
    create_table :hikes do |t|
      t.string :name
      t.string :location
      t.string :difficulty
      t.integer :rating
      t.integer :hike_id

      t.timestamps
    end
  end
end
