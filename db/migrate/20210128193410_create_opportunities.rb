class CreateOpportunities < ActiveRecord::Migration[6.1]
  def change
    create_table :opportunities do |t|
      t.string :opp_name
      t.string :opp_description
      t.string :opp_image

      t.timestamps
    end
  end
end
