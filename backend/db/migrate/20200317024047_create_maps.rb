class CreateMaps < ActiveRecord::Migration[6.0]
  def change
    create_table :maps do |t|
      t.string :lat
      t.string :lng
      t.string :field_name
      t.integer :field_id
      t.timestamps
    end
  end
end
