class Review < ApplicationRecord
  belongs_to :user
  belongs_to :hike

  validates :content, :rating, presence: true
  validates :rating, numericality: true
  validates_inclusion_of :rating, in: 1.0..5.0
end
