//Global variables
var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=";
var formData;

//if our input is empty, retrieve a random wikipedia page
$("#search").click(function(){
  if($("#search").val()== ""){
    window.open("https://en.wikipedia.org/wiki/Special:Random")
  }
 //otherwise, search wikipedia for what was typed in our input form 
  else{
    function searchWikipedia(){
      formData = document.getElementById('searchForm').value;
      var wikiApi = api + formData;
      console.log(wikiApi);
      $.ajax({
        url: wikiApi, success: function(response){
          

}
        


      })
    }    
  }
})