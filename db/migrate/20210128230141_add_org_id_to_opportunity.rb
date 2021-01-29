class AddOrgIdToOpportunity < ActiveRecord::Migration[6.1]
  def change
    add_reference :opportunities, :organization, null: false, foreign_key: true
  end
end
