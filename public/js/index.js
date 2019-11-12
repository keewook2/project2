// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");


function ShowTheSectors(){
  var queryURL = "https://financialmodelingprep.com/api/v3/stock/sectors-performance";
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function(response){
      //console.log(response.sectorPerformance);
      var dataArr = response.sectorPerformance;
      dataArr.forEach(function(sector, item ,array){
      var sector = response.sectorPerformance[item].sector; 
      var changes =  response.sectorPerformance[item].changesPercentage ; 
      var changes2 =  parseFloat(response.sectorPerformance[item].changesPercentage) ; 
      var status ;
      //console.log(sector);
     // console.log(changes2);
      if(changes2 < 0){
        status = "negative";
      }else{
        status = "";
      }
      var SectorPercentage =  "<tr> <th> <a href='/company'>"+ sector + "</a></th> <th class='"+ status +"'> "+ changes +" </th> </tr>" ; 
      $(".tbody").append(SectorPercentage);
      });
  });
}
ShowTheSectors();

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

function createUSer(obl){
  $.ajax("/findUser", {
    type: "POST",
    data: user
  }).then(
    function(dbdata) {
      console.log(""+ dbdata.email);
    }
  );
}

$("#add-user").on("click", function(event) {
  console.log("form upload")
  // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var user = {
    email: $("#emailinput").val().trim(),
    password : $("#password").val().trim(),
  };
  // Send the POST request.
  $.ajax("/findUser", {
    type: "POST",
    data: user
  }).then(
    function(dbdata) {
      console.log(""+ dbdata.email);
    }
  );
});