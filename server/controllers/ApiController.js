const {PersonModel} = require('./../models/ApiModel');

const PersonController = {

    allPeople: function(req, response){
    PersonModel
        .getAllNames()
        .then( data => {
            let people = data.map(person => {
                console.log( person );
                return {
                    person: person.name,
                    created_at: person.created_at,
                    updated_at: person.updated_at
                }
            })
        console.log( people );
        response.status( 200 ).json( people );
        })
        .catch( err => {
            console.log( "Something went wrong!" );
            console.log( err );
            response.json( err );
        })
    },

    addPerson: function(request, response){

        let name = request.params.name;
        let created_at = new Date();
        let updated_at = new Date();

        if(name){
            newName = {
                name,
                created_at,
                updated_at
            }

            console.log(newName);

            PersonModel
                .createPerson( newName )
                .then( result => {
                    response.status( 201 ).json( result );
                });
        }
        else{
            response.statusMessage = "You are missing a field to create a new user ('userName')";
            response.status( 406 ).end();
        }  
    },

    findByName : function (request,response) {
        let name = request.params.name;
        console.log("HERE", name);

        PersonModel
            .getPersonByName(name)
            .then( names => {
                let name = names
                console.log("HERE", name);
                response.status( 200 ).json( name );
            })
    },

    removePerson : function(request, response){
        let name = request.params.name;
        console.log("HERE222 :", name);

        PersonModel
            .getPersonByName( name )
            .then( result => {
                if( result === null ){
                    console.log( "Something went wrong!" );
                }
                else{
                    PersonModel
                        .delete( name )
                        .then( result => {
                            response.status( 204 ).end();
                        });
                }
            })
    },

}

module.exports = {PersonController};