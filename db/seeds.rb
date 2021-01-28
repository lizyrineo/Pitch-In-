# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

puts "#{User.count} users created"

@habitat_for_humanity=Organization.create!(
  org_name: 'Habitat for Humanity', 
  org_link: 'https://www.habitatmetrodenver.org/', 
  org_phone: '303-534-2929', 
  org_image: 'https://www.habitatmetrodenver.org/static/image/logo-white.png?185013110417')
@saint_francis_center=Organization.create!(
  org_name: 'Saint Francis Center', 
  org_link: 'http://www.sfcdenver.org/', 
  org_phone: '303-832-2456', 
  org_image: 'http://www.sfcdenver.org/wp-content/uploads/2017/02/stfrancis_logo.png')
@extreme_community_makeover=Organization.create!(
  org_name: 'Extreme Community Makeover', 
  org_link: 'https://www.extremecommunitymakeover.org/'
  org_phone: '720-235-8847', 
  org_image: 'https://extremecommunitymakeover.org/wp-content/uploads/2015/08/ECMLogoWebsite.gif')
@ddfl=Organization.create!(
  org_name: 'Denver Dumb Friends League', 
  org_link: 'https://www.ddfl.org/', 
  org_phone: '303-751-5772', 
  org_image: 'https://www.ddfl.org/wp-content/themes/ddfl/img/DFL-logo-w.png')
@luvin_arms=Organization.create!(
  org_name: 'Luvin Arms Animal Sanctuary',
  org_link: 'https://www.luvinarms.org/',
  org_phone: '720-515-8577',
  org_image: 'https://www.luvinarms.org/wp-content/uploads/2021/01/Circle-Ahimsa-Final.png')
@co_pet_pantry=Organization.create!(
  org_name: 'Colorado Pet Pantry',
  org_link: 'https://www.coloradopetpantry.org/',
  org_phone: '720-441-3111',
  org_image: 'https://www.coloradopetpantry.org/wp-content/uploads/2017/06/colorado-pet-pantry-logo-1.png')
@wild_animal_sancutary=Organization.create!(
  org_name: 'The Wild Animal Sanctuary',
  org_link: 'https://www.wildanimalsanctuary.org/',
  org_phone: '303-536-0118',
  org_image: 'https://static.wixstatic.com/media/a16ed6_1b0a4b9aafe84b7a94918d3d3d319581~mv2.png/v1/fill/w_261,h_80,al_c,q_85,usm_0.66_1.00_0.01/NEW-LOGO-with-URL.webp')
