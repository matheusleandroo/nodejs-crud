const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports = {
    async index(req, res) {
        try {
            const { page = 1 } = req.query;
            const response = await Person.paginate({}, { page, limit: 10 });    
            return res.json(response);

        } catch (error) {
            return error;
        }
    },

    async show(req, res) {
        try {
            const response = await Person.findById(req.params.id);
            return res.json(response);

        } catch (error) {
            return error;
        }
    },

    async store(req, res) {
        try {
            const response = await Person.create(req.body);
            return res.json(response);

        } catch (error) {
            return error;
        }
    },

    async update(req, res) {
        try {
            const response = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.json(response);

        } catch (error) {
            return error;
        }
    },

    async destroy(req, res) {
        try {
            const response = await Person.findByIdAndRemove(req.params.id);
            return res.json(response);

        } catch (error) {
            return error;
        }
    },
}