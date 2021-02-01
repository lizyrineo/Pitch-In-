class Organization < ApplicationRecord
  has_many :users, through: :opportunities
  has_many :opportunities
end
