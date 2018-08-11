class AddDescriptionToHikes < ActiveRecord::Migration[5.1]
  def change
    add_column :hikes, :description, :text
  end
end
