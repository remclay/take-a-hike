class Hike < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews
  validates :name, presence: true
  validates :location, presence: true
  validates :difficulty, presence: true
end
