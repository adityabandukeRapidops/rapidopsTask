const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const htmlSchema = Schema({
    code : {
        type : String,
        required : true
    }
})


module.exports = mongoose.model('Html', htmlSchema);