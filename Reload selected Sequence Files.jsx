// Created in 2018 by github.com/Innerwolf

var repItems = app.project.selection;
var selectionErrors = 0;
var newFrameRate = prompt("Enter footage frame rate (enter 0 for default frame rate): ");

for( i = 0; i < repItems.length; i++ )
{
	if( !( repItems[i] instanceof FootageItem ) ){
		selectionErrors += 1;
	}
}

if( ( repItems.length > 0 ) && ( selectionErrors == 0 ) ){
	for( i = 0; i < repItems.length; i++ ){
		var path = String(repItems[i].mainSource.file);
		try{
			repItems[i].replaceWithSequence(File(path),true);
			repItems[i].mainSource.conformFrameRate = newFrameRate;
			repItems[i].mainSource.reload();
		}
		catch( err ){
			alert( "The following file is not a sequence: " + path )
		}
	}
} else {
	alert( "Please select footage layers!" );
}