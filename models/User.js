const { model, Schema } = require('mongoose');
import { isEmail } from 'validator';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trimmed: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
        }  
    ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]},
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
    


