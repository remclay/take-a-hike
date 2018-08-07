class Hike < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  validates :name, :location, :difficulty, presence: true
  validates :name, uniqueness: true
end
