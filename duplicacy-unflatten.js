const fs = require( 'fs' );
const mkdirp = require('mkdirp');

fs.readdir( ".", function( err, files ){
    if( err ) {
        console.error( "Could not list the directory.", err );
        process.exit( 1 );
    } 	

    files.forEach( function( file, index ){
    	fs.stat( file, function( error, stat ){
	        if( error ) {
	            console.error( "Error stating file.", error );
	            return;
	        }    		

	        if( stat.isFile() ){
	        	var first = file.substring( 0,2 );
	        	var second = file.substring( 2,4 );
	        	var rest = file.substring( 4,file.length );
	        	mkdirp( "./" + first + "/" + second, function( error ) {

	        		if( error ){
			            console.error( "Error creating folder.", error );
			            return;	        			
	        		} else {
	        			fs.rename( file, "./" + first + "/" + second + "/" + rest );
	        		}
	        		
	        	});
	        }
    	});
    });
});