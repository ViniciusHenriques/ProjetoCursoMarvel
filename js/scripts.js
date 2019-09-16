$(window).scroll(function() {

    if ($(this).scrollTop()==0) {			       
		document.getElementById("menu").className = "col-md-12 navbar navbar-inverse navbar-fixed-top menu";
		document.getElementById("logo").className = "col-md-3 col-sm-4 col-xs-7";
     	 document.getElementById("meumenu").className = "col-lg-9 col-sm-8 col-xs-5 collapse navbar-collapse";						
	
						
     }else{
     	

     	 document.getElementById("menu").className = "col-md-12 navbar navbar-inverse navbar-fixed-top menu_scroll";
     	 document.getElementById("logo").className = "col-md-2 col-sm-3 col-xs-6";
     	 document.getElementById("meumenu").className = "col-lg-10 col-sm-9 col-xs-6 collapse navbar-collapse";
		
     }		 
});



function sinopse(imagem,sinopse,nome,titulo){
    document.getElementById(imagem).style.display = 'none';
    document.getElementById(nome).style.display = 'none';
    document.getElementById(titulo).style.display = 'block';
    document.getElementById(sinopse).style.display = 'block';
}

function imagem(imagem,sinopse,nome,titulo){
    document.getElementById(imagem).style.display = 'block';
    document.getElementById(nome).style.display = 'block';
    document.getElementById(titulo).style.display = 'none';
    document.getElementById(sinopse).style.display = 'none';
}

function trailer(trailer,foto,sinopse){
    document.getElementById(foto).style.display = 'none';
    document.getElementById(trailer).style.display = 'block';

    document.getElementById(sinopse).style.display = 'none';
    
}
function sinopse2(foto,trailer,sinopse){
    document.getElementById(foto).style.display = 'none';
    document.getElementById(trailer).style.display = 'none';

    document.getElementById(sinopse).style.display = 'block';
}
function imagem2(foto,trailer,sinopse){
    document.getElementById(foto).style.display = 'block';
    document.getElementById(trailer).style.display = 'none';

    document.getElementById(sinopse).style.display = 'none';
}

$(function(){
    
    // container is the DOM element;
    // userText is the textbox
    
    var container = $("#container_titulo")
        userText = $('#userText'); 
    
    // Shuffle the contents of container
    container.shuffleLetters();

    // Bind events
    userText.click(function () {
        
      userText.val("");
      
    }).bind('keypress',function(e){
        
        if(e.keyCode == 13){
            
            // The return key was pressed
            
            container.shuffleLetters({
                "text": userText.val()
            });
            
            userText.val("");
        }

    }).hide();

    // Leave a 4 second pause

    setTimeout(function(){
        
        // Shuffle the container with custom text
        container.shuffleLetters({
            "text": "Próximos lançamento!"
        });
        
        userText.val("Próximos lançamentos").fadeIn();
        
    },25000);
    
});

