$(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página. 
  $('form').submit(function(event){
      event.preventDefault();
      var info = $(this).serialize();
      console.log( info );
      /*var posting = $.post( "/abuelita" ,info, function(data) {
            alert( "success:" + data  );
            
          })
            .done(function(data) {
              alert( "second success:" + data );
              //cochinadas xD
              //var content = $(data).find("#content");
              //$("#grandma_says").empty().append( data );
            })
            .fail(function() {
              alert( "error" );
            })
            .always(function() {
              alert( "finished" );
      );
      posting.done(function(data) {
        console.log(data);
        $( "#test" ).append( data );
          // var content = $( data ).find( "#content" );
          // $( "#grandma_says" ).empty().append( content );
      });
/*    
    $.ajax({
      type: "POST",
      url: "/abuelita",
      data: user

    });
*/      
  $.post('/abuelita', info, function(data){
    console.log(data);
    $( "#test" ).append( data );
  });


  });

});
