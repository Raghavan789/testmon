const mongoose = require('mongoose');

async function main() {
  await mongoose.connect("mongodb://localhost:27017/testuu");
  console.log("Connected to MongoDB");
}

main().catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

const user1 = new User({
  name: "adam",
  email: "adam@gmail.com",
  age: 45
});

user1.save()
  .then(() => console.log('User saved'))
  .catch(err => console.log(err));



