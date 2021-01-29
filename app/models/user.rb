class User < ApplicationRecord
  has_many :organizations, through: :opportunities

end
