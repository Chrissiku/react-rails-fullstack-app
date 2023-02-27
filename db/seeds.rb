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
    tag: "All",
    likes_count: 0,
    dislikes_count: 0,
  },

  {
    title: "What is the difference between strings and symbols?",
    tag: "All",
    likes_count: 0,
    dislikes_count: 0,
  },

  {
    title: "What happened if you add two same key Hash?",
    tag: "React",
    likes_count: 0,
    dislikes_count: 0,
  },

  { title: "How to delete a given key from a Hash?",
    tag: "All",
    likes_count: 0,
    dislikes_count: 0 },

  { title: "How to check if two Hashes are identical?",
    tag: "React",
    likes_count: 0,
    dislikes_count: 0 },

  { title: "How to combine two Hashes in Ruby?",
    tag: "All",
    likes_count: 0,
    dislikes_count: 0 },

  {
    title: "How to get unique keys from two Hashes in React?",
    tag: "All",
    likes_count: 0,
    dislikes_count: 0,
  },

  {
    title: "What does the Hash? key member ? and include method in a Hash",
    tag: "React",
    likes_count: 0,
    dislikes_count: 0,
  },

  {
    title: "What are blocks in Ruby?",
    tag: "Ruby",
    likes_count: 0,
    dislikes_count: 0,
  },

  {
    title: "Does the order of hashes matter in Ruby?",
    tag: "React",
    likes_count: 0,
    dislikes_count: 0,
  },

])
puts "... Questions seeded!"
