import { connectDB } from './db';
import User from './models/user';

connectDB();

// User.create({
//   user: 'gene',
//   name: 'Gabriel',
//   pass: 'gene123',
// });


// User.remove();
const user = User.find();

user.then(e => console.log(e));
// console.log(User.findById(user._id));
