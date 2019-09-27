const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
    },
    birthday: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    cellphone: {
        type: Number,
    }
});

PersonSchema.plugin(mongoosePaginate);

mongoose.model('Person', PersonSchema);