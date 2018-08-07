class RemoveRatingFromHikes < ActiveRecord::Migration[5.1]
  def change
    remove_column :hikes, :rating, :float
  end
end
