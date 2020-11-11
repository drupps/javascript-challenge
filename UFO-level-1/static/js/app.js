// UFO-level-1

//get the data from data.js and copy it into a new array
var ufo = data;

//get table references
var tbody = d3.select('tbody');

function buildTable(data) {
    //clear out existing data
    tbody.html("");

    //loop through object in ufo data and append rows
    ufo.forEach((dataRow) => {
        //append a rows to the tbody
        var row = tbody.append('tr');

        //loop through each field in the variable dataRow then add each value to a cell
        Object.values(dataRow).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);
        });
    });
}

// 
function handleClick() {

    // get the datetime value from the filter button
    var date = d3.select('#datetime')
}



buildTable(uf);