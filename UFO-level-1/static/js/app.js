// UFO-level-1

//get the data from data.js and copy it into a new array
var ufo = data;

//get table references
var tbody = d3.select("tbody");

function buildTable(data) {
    //clear out existing data
    tbody.html("");

    //loop through object in ufo data and append rows
    ufo.forEach((dataRow) => {
        var row = tbody.append("tr");
    }) 
}