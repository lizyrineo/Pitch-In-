class OpportunityAddColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :opportunities, :org_name, :string
  end
end
