const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: "Please enter a reaction",
        maxlength: [280, "Reaction cannot be more than 280 characters"],
        minLength: [4, "Reaction cannot be less than 4 characters"],
        trim: true
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    }
},
{
    toJSON: {
        getters: true,
        virtuals: true
    }
});

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: [280, 'Thought must be less than 280 characters'],
        minLength: [1, 'Thought must be more than 1 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
}, 
{
    toJSON: {
        getters: true,
        virtuals: true
    },
    id: false
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;

