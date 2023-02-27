# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding to database..."
questionsList = Question.create([
  {
    title: "How to check if a key is present in a Hash?",
    tag: "Ruby",
  },
  {
    title: "What is the difference between strings and symbols?",
    tag: "Ruby",
  },
  {
    title: "What happened if you add two same key Hash?",
    tag: "Ruby",
  },
  { title: "How to delete a given key from a Hash?", tag: "Ruby" },
  { title: "How to check if two Hashes are identical?", tag: "Ruby" },
  { title: "How to combine two Hashes in Ruby?", tag: "Ruby" },
  {
    title: "How to get unique keys from two Hashes in Ruby?",
    tag: "Ruby",
  },
  {
    title: "What does the Hash? key member ? and include method in a Hash",
    tag: "Ruby",
  },
  { title: "What are blocks in Ruby?", tag: "Ruby" },
  { title: "Does the order of hashes matter in Ruby?", tag: "Ruby" },
])
puts "... Questions seeded!"
