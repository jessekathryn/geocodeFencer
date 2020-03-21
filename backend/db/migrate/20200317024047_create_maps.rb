class CreateMaps < ActiveRecord::Migration[6.0]
  def change
    create_table :maps do |t|
      t.string :coordinates
      t.string :field_name
      t.integer :field_id
      t.timestamps
    end
  end
end
