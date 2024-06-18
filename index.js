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

// Insert one document
const user1 = new User({
  name: "adasfsfvm",
  email: "adam@gmail.com",
  age: 45
});

// // Insert many documents
// const users = [
//   { name: "Alice raj", email: "alice@example.com", age: 25 },
//   { name: "Bob kumar", email: "bob@example.com", age: 28 },
//   { name: "Charlie Sai", email: "charlie@example.com", age: 32 },
//   { name: "David Bhasha", email: "david@example.com", age: 30 },
//   { name: "Eve Man", email: "eve@example.com", age: 27 }
// ];

// User.insertMany(users)
//   .then(()=>{
//     console.log('users saved');
//   })
//   .catch(err=>console.log(err));

  User.deleteMany({age:{$lt:28}})
  .then(deletedResult =>{
    console.log('Delted${deletedResult.deleteCount} users ');

  })

  .catch(err=>console.log(err));