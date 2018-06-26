import mongoose, { Schema, mongo } from 'mongoose';
import BaseDAO from '../baseDAO';

export default class UserDAO extends BaseDAO {
  static _model = mongoose.model('User', new Schema({
    user: String,
    name: String,
    pass: String,
  }));
}
