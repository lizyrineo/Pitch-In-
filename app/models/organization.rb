class Organization < ApplicationRecord
  belongs_to :user
  has_many :opportunities
end
