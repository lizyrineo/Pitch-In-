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

@construction_opp=Opportunity.create!(
  org_name: 'Habitat for Humanity',
  opp_name: 'Construction Volunteer',
  opp_description: `Whether you're a group or an individual, construction volunteers make a tangible difference with each and every day they help build and repair homes.  No construction experience necessary!`,
  opp_image: ''
)
@restore=Opportunity.create!(
  org_name: 'Habitat for Humanity',
  opp_name: 'Restore Volunteer',
  opp_description: `Habitat ReStores support the mission by providing valuable funding to the programs.  It's retail with a mission!`,
  opp_image: ''
)
@basic=Opportunity.create!(
  org_name: 'Saint Francis Center',
  opp_name: 'Basic Services Volunteer',
  opp_description: `Provide hands-on caring by participating in many critical on-site services like distributing mail, messages and hygiene items, sort and organize donations.`
  opp_image: ''
)
@employment=Opportunity.create!(
  org_name: 'Saint Francis Center'
  opp_name: 'Employment Services Client Navigator',
  opp_description: `Help men and women develop skills, gain work experience and connect with full-time employment.  Help end the cycle of poverty and promote economic self-sufficiency.`
  opp_image: ''
)
@intake=Opportunity.create!(
  org_name: 'Saint Francis Center',
  opp_name: 'Intake Office Volunteer',
  opp_description: `As the first point of contact for guests new to SFC, guide them through the sometimes confusing paperwork.`,
  opp_image: ''
)
@volunteer=Opportunity.create!(
  org_name: 'Extreme Community Makeover',
  opp_name: 'Volunteer',
  opp_description: `Work on exterior home and neighborhood improvement projects.  Adopt a block project or alley clean-up/graffiti removal project.`,
  opp_image: ''
)
@general_volunteer=Opportunity.create!(
  org_name: 'Denver Dumb Friends League',
  opp_name: 'General Volunteer',
  opp_description: `Help with adoptions and animal care`,
  opp_image: ''
)
@equine=Opportunity.create!(
  org_name: 'Denver Dumb Friends League',
  opp_name: 'Equine Volunteer',
  opp_description: `Work with horses and other equines, mucking stalls and providing enrichment to the animals`
  opp_image: ''
)
@foster=Opportunity.create!(
  org_name: 'Denver Dumb Friends League',
  opp_name: 'Foster Volunteer',
  opp_description: `Bring pets from the shelter into your home on a temporary basis to prepare them for adoption.`
  opp_image: ''
)
@animal_care=Opportunity.create!(
  org_name: 'Luvin Arms Animal Sanctuary',
  opp_name: 'Animal Care Volunteer',
  opp_description: `Animal care shifts include cleaning resident living areas, replenishing feed and water, helping to keep other areas of the sanctuary clean and organized, and giving the animals some love and attention. Each task directly contributes to the absolute best quality of care for our residents!`,
  opp_image: ''
)
@wild_animal=Opportunity.create!(
  org_name: 'Wild Animal Sanctuary'
  opp_name: 'General Volunteer',
  opp_description: `Opportunities include cleaning the facility, office work and educational duties, fence building and habitat construction, fundraising working with animals, and always going on - or managing our cross-country rescue schedule.`
)