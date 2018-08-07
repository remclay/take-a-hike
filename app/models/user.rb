class User < ApplicationRecord
  has_many :reviews
  has_many :hikes, through: :reviews
end
