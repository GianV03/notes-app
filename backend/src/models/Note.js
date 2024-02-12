const { model, Schema } = require('mongoose');

const noteSchema = new Schema(
    {

    title: String,
    content: { type: String, required: true},
    author: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: false },
    date: { type: Date, default: Date.now() }

    },
    {
        timestamps: true
    }
);

module.exports = model('Note', noteSchema);

