// UFO-level-1

//put the data into an array named
var ufo = data;

//get table references
var tbody = d3.select("tbody");
console.log("tbody")

function buildTable(data) {
    //clear out existing data
    tbody.html("");

    //loop through object in ufo data and append rows
    ufo.forEach((dataRow) => {
        //append a rows to the tbody
        var row = tbody.append("tr");

        //loop through each field in the variable dataRow then add each value to a cell
        Object.values(dataRow).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
console.log(buildTable)
// 
function handleClick() {

      //f'ing refresh
    d3.event.preventDefault();

    //get the date from the button
    var date = d3.select("#datetime").property("value");
    console.log(date)
    let filteredData = ufo;
    console.log(filteredData)
    //if a date was entered, begin filtering data
    if (date) {

        //keep rows that match filtering data
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    console.log(date)
    //build a table with the filtered data
    buildTable(filteredData);
}

//button click
d3.selectAll("#filter-btn").on("click", handleClick);

//default data when page loads for first time
buildTable(ufo);