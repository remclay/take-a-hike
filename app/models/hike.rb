class Hike < ApplicationRecord
  validates :name, :location, :difficulty, :description, presence: true
  validates :name, uniqueness: true
end
