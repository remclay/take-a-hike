class User < ApplicationRecord
  has_secure_password
  has_many :reviews
  has_many :hikes, through: :reviews

  validates :name, :email, presence: true
  validates :password, length: { in: 6..20 }
end
