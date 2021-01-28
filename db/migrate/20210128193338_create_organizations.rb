class CreateOrganizations < ActiveRecord::Migration[6.1]
  def change
    create_table :organizations do |t|
      t.string :org_name
      t.string :org_link
      t.integer :org_phone
      t.string :org_image

      t.timestamps
    end
  end
end
