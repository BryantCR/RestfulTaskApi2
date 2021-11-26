const express = require('express');
require('./server/config/database');
const {ApiRouter} = require( './server/routes/ApiRouter' );

const app = express();

app.use( '', ApiRouter );

app.listen( 8080, function(){
    console.log( "The users server is running in port 8080." );
});
