// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
// console.log(data);  


// function clearData(){
//     datetime.value = "";
//     state.value = "";
//     city.value = "";
//     country.value = "";
//     shape.value = "";   
// };


function buildData(data){
  var fData = tableData;
  tbody.html("");
    data.map((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).map(([key,value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });    
};

function filterData(inputData){
    d3.event.preventDefault();
    tbody.html("");
    // tbody.empty();
    // let filteredData = inputData;

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value").trim();
    if (inputValue != ""){
      console.log(`Filter Date: ${inputValue}`);
      var filteredData = tableData.filter(data => data.datetime === inputValue.toLowerCase()); 
      console.log(filteredData);
    }

    var inputElement = d3.select("#City");
    var inputValue = inputElement.property("value").trim();
    if (inputValue != ""){
      console.log(`Filter Date: ${inputValue}`);
      var filteredData = tableData.filter(data => data.city === inputValue.toLowerCase()); 
      console.log(filteredData);
    }

    var inputElement = d3.select("#State");
    var inputValue = inputElement.property("value").trim();
    if (inputValue != ""){
      console.log(`Filter Date: ${inputValue}`);
      var filteredData = tableData.filter(data => data.state === inputValue.toLowerCase()); 
      console.log(filteredData);
    }

    var inputElement = d3.select("#Country");
    var inputValue = inputElement.property("value").trim();
    if (inputValue != ""){
      console.log(`Filter Date: ${inputValue}`);
      var filteredData = tableData.filter(data => data.country === inputValue.toLowerCase()); 
      console.log(filteredData);
    }    

    var inputElement = d3.select("#Shape");
    var inputValue = inputElement.property("value").trim();
    if (inputValue != ""){
      console.log(`Filter Date: ${inputValue}`);
      var filteredData = tableData.filter(data => data.shape === inputValue.toLowerCase()); 
      console.log(filteredData);
    }

    filteredData.map((ufo) => {
      var row = tbody.append("tr");
      Object.entries(ufo).map(([key,value]) => {
          var cell = tbody.append("td");
          cell.text(value);
      });
      
   return filteredData;


});  
};

d3.select("#filter-btn").on("click", filterData);
buildData(data);

// submit.on("click", function() {
//     d3.event.preventDefault();

//     var inputElement = d3.select("#datetime");
//     var inputValue = inputElement.property("value");

//     console.log(inputValue);
    // console.log(tableData);

//     var filterData = tableData.filter(data => data.datetime === inputValue);
//     console.log(filterData);

//     var inputElement2 = d3.select("#City");
//     var inputValue2 = inputElement2.property("value");

//     console.log(inputValue2);
//     // console.log(tableData);

//     var filterData2 = tableData.filter(data => data.city === inputValue2);
//     console.log(filterData2);

//     var inputElement3 = d3.select("#State");
//     var inputValue3 = inputElement3.property("value");

//     console.log(inputValue3);
//     // console.log(tableData);

//     var filterData3 = tableData.filter(data => data.state === inputValue3);
//     console.log(filterData3);

//     var inputElement4 = d3.select("#Country");
//     var inputValue4 = inputElement4.property("value");

//     console.log(inputValue4);
//     // console.log(tableData);

//     var filterData4 = tableData.filter(data => data.country === inputValue4);
//     console.log(filterData4);

//     var inputElement5 = d3.select("#Shape");
//     var inputValue5 = inputElement5.property("value");

//     console.log(inputValue5);
//     // console.log(tableData);

//     var filterData5 = tableData.filter(data => data.shape === inputValue5);
//     console.log(filterData5);

// });










