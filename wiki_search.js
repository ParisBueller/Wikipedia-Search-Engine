$(document).ready(function(){
  $("#search").click(function(){ 
  var searchTerm = $('#searchTerm').val();
  var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?"
 //if searchTerm is empty, open a new page with a random wiki    
    if(searchTerm == '') {
      window.open("https://en.wikipedia.org/wiki/Special:Random");
    }

    $.ajax({
      type:'GET',
      url: api,
      async:false,
      dataType:'json',
      success: (data) => {
       //Get Heading console.log(data[1][0]);
       //Get Description console.log(data[2][0]);
       //Get Link URL console.log(data[3][0]);
        //Clear prior search results
      $("#searchResults").html(''); 
        //Iterate through our results and prepend them to a list
        for(var i =0; i < data[1].length; i++) {        
          $("#searchResults").prepend("<li><a href="+data[3][i]+">"+data[1][i] +"</a><p>"+data[2][i]+"</p></li>");
        }
        //Empty out search bar once something has been searched for
        $("#searchTerm").val('');
      },
      error: (error) => {
        console.log(error);
      }
    });
  });
});