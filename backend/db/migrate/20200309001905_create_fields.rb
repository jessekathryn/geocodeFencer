class CreateFields < ActiveRecord::Migration[6.0]
  def change
    create_table :fields do |t|
      t.string :name
      t.string :locations
      t.string :coordinates
      t.string :field

      t.timestamps
    end
  end
end
