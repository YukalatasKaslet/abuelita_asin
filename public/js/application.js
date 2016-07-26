$(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página. 
  $('form').submit(function(event){
    event.preventDefault();
    var info = $(this).serialize();
    console.log( info );
      //primera forma de resolver el problema :D
      /*    $.post( "/abuelita" ,info, function(data) {
                alert( "success:" + data  );
                
              })
                .done(function(data) {
                  alert( "second success:" + data );
                  //cochinadas xD
                  //var content = $(data).find("#content"); //no es necesario
                  //$("#answer").empty().append( data );  //funciona
                })
                .fail(function() {
                  alert( "error" );
                })
                .always(function() {
                  alert( "finished" );
            );

      //Segunda forma de resolver el problema :3
            var posting = $.post( "/abuelita" ,info);
            posting.done(function(data) {
              console.log(data);
              $( "#answer" ).append( data );
                // var content = $( data ).find( "#content" ); //no es necesario
                // $( "#grandma_says" ).empty().append( content ); //se uso id answer
            });

      //Tercera forma de resolver el problema :P --propuesta--  no corre por si solo INCOMPLETO   
            $.ajax({
              type: "POST",
              url: "/abuelita",
              data: user
        
            });
      */ 
      //Mejor forma de resolver el problema :3     
    $.post('/abuelita', info, function(data){
      console.log(data);
      $( "#answer" ).empty().append( data );//importante usar .empty o las respuestas se acumulan
    });

  });//end $(form).submit

});//end document ready
