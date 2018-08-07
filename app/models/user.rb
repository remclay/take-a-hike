class User < ApplicationRecord
  has_many :comments
  has_many :hikes, through: :comments
end
