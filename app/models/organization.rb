class Organization < ApplicationRecord
  has_many :users, through: :opportunities
end
