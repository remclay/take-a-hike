class Hike < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  validates :difficulty, presence: true
end
