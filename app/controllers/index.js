// controllers/index.js
// Defining the Collection in the controller and not the view
Alloy.Collections.instance("cars");

// create a new controller for view-controller pair that will eventually render the table
var carsController = Alloy.createController("cars");

//add the data to collection after the view-controller pair is created
Alloy.Collections.cars.reset([{
	"make" : "Honda",
	"model" : "Civic"
}, {
	"make" : "Honda",
	"model" : "Accord"
}, {
	"make" : "Ford",
	"model" : "Escape"
}, {
	"make" : "Nissan",
	"model" : "Altima"
}]);

// open the view to show table
carsController.mainWindow.open();
