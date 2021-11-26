var mongoose = require("mongoose");

var PeopleSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 3
    },
    created_at : {
        type : Date,
    },
    updated_at : {
        type : Date,
    }
});

const Person = mongoose.model("peoples", PeopleSchema);

const PersonModel = {
    createPerson : function( newName ){
        return Person.create( newName );
    },
    getAllNames : function(){
        return Person.find();
    },
    getPersonByName : function( name ){
        return Person.findOne({ name });
    },
    delete : function( name ){
        return Person.remove({ name });
    }
};

module.exports = {PersonModel};