# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Portfolio.create(title: "Flake", description: "Flake was my second project at General Assembly and was a social media platform centered around events. The app was based in rails and and is centered around hand-rolled user auth as well as 5 back-end models: users, events, posts, comments, and a self-referential relationship between users and friends.", imageUrl: "http://i.imgur.com/wNeZws0.png", projectUrl: "http://alexbannon-flake.herokuapp.com/")
Portfolio.create(title: "Wander-List", description: "A single page web app done in node.js and express that utilizes ajax calls and jquery to prevent page refreshes. A collaborative project that employed the mapbox api and bootstrap. The app gives users a space to pin green and red pins onto a map in order to visualize their travels. Clicking a pin pops up with photos and comments", imageUrl: "http://i.imgur.com/s39Qq2N.png", projectUrl: "http://wander-list.herokuapp.com")
Portfolio.create(title: "Trip-Me", description: "A collaborative project done alongside UX designers. Project was completed in rails and utilizes bootstrap. This was a very fast sprint that focused more on the designing process before implementing.", imageUrl: "http://i.imgur.com/BkPX2Nk.png", projectUrl: "https://trip-me.herokuapp.com")
Portfolio.create(title: "Final Project", description: "I am still working on my final project for General Assembly. I decided to use this placeholder to keep up to date those that are interested. However, if you are impressed by my other portfolio pieces, I would be more than willing to finalize my project during non-work hours, hint hint.", imageUrl: "http://i.imgur.com/jBId2Ml.png", projectUrl: "http://www.github.com/alexbannon")
