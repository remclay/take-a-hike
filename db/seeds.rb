# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

hike1 = Hike.create(name: "Royal Arch Trail", location: "Boulder", difficulty: "Hard", description: "This was the greatest hike ever")
hike2 = Hike.create(name: "Bear Peak Trail", location: "Boulder", difficulty: "Hard", description: "Amazing views. Definitely worth the hard work!")
hike3 = Hike.create(name: "Green Mountain West Trail", location: "Boulder", difficulty: "Moderate", description:"Can't recommend enough. Be sure to take lots of water. We packed a light lunch for the top, and would certainly recommend it! There was plenty of flat rocks to rest on and enjoy a hard-earned snack.")
hike4 = Hike.create(name: "Red Rocks Trail", location: "Boulder", difficulty: "Easy", description: "The scenery was incredible throughout the duration of this hike. If you're after a relatively easy journey that still provides world-class views, then this trail is for you.")
hike5 = Hike.create(name: "Flatirons Vista Trail", location: "Boulder", difficulty: "Easy", description: "Fantastic vista at the top.")
