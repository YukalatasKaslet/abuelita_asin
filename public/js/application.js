$(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página. 
  $('form').submit(function(event){
      event.preventDefault();
      var user = $(this).serialize();
      console.log( user );
      $.post( "/abuelita" ,user, function() {
            alert( "success" );
          })
            .done(function() {
              alert( "second success" );
            })
            .fail(function() {
              alert( "error" );
            })
            .always(function() {
              alert( "finished" );
      });
    
/*    
    $.ajax({
      type: "POST",
      url: "/abuelita",
      data: user

    });
*/      

  });

});
