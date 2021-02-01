class DeleteOrgName < ActiveRecord::Migration[6.1]
  def change
    remove_column :opportunities, :org_name
  end
end
