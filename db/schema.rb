# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_28_230413) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "opportunities", force: :cascade do |t|
    t.string "opp_name"
    t.string "opp_description"
    t.string "opp_image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "org_name"
    t.bigint "organization_id", null: false
    t.bigint "user_id", null: false
    t.index ["organization_id"], name: "index_opportunities_on_organization_id"
    t.index ["user_id"], name: "index_opportunities_on_user_id"
  end

  create_table "organizations", force: :cascade do |t|
    t.string "org_name"
    t.string "org_link"
    t.integer "org_phone"
    t.string "org_image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "opportunities", "organizations"
  add_foreign_key "opportunities", "users"
end
