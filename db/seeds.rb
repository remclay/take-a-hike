# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: "Bob Seegar", email: "bob@gmail.com", password: "myPassword")
user2 = User.create(name: "Tracey Clark", email: "tracey@bigpond.com", password: "hiking-rules")
user3 = User.create(name: "Vicki Lee", email: "vicki_lee@gmail.com", password: "rememberme")

hike1 = Hike.create(name: "Royal Arch Trail", location: "Boulder", difficulty: "Hard")
hike2 = Hike.create(name: "Bear Peak Trail", location: "Boulder", difficulty: "Hard")
hike3 = Hike.create(name: "Green Mountain West Trail", location: "Boulder", difficulty: "Moderate")
hike4 = Hike.create(name: "Red Rocks Trail", location: "Boulder", difficulty: "Easy")
hike5 = Hike.create(name: "Flatirons Vista Trail", location: "Boulder", difficulty: "Easy")

review1 = Review.create(content: "This was the greatest hike ever", rating: 5.0, hike_id: 1, user_id: 2)
review2 = Review.create(content: "Amazing views", rating: 4.0, hike_id: 2, user_id: 1)
review3 = Review.create(content: "Definitely worth the hard work", rating: 4.5, hike_id: 3, user_id: 1)
review4 = Review.create(content: "I would rate this hike 'moderate' but was still very enjoyable.", rating: 3.5, hike_id: 4, user_id: 3)
review5 = Review.create(content: "Can't recommend enough", rating: 5.0, hike_id: 4, user_id: 2)
review6 = Review.create(content: "Take lots of water.", rating: 5.0, hike_id: 5, user_id: 2)
