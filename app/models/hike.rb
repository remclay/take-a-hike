class Hike < ApplicationRecord
  has_many :comments
  has_many :users, through: :comments
  validates :name, presence: true
  validates :location, presence: true
  validates :difficulty, presence: true
end
