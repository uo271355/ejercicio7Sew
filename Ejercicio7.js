"use strict";
class Bombilla {
    constructor () {   
    }
    mostrar(){
        $("ul").show();
		$("#ocultar").show();
		$("#mostrar").hide();
    }
    ocultar(){
        $("ul").hide();
		$("#mostrar").show();
		$("#ocultar").hide();
    }
	modificarUO(){
		$("#nombre").html("UO del creador: <input type='text' id='creador' disabled>");
		$("#creador").val("Andrea Maria Delgado Alonso");
		$("#modificarUO").hide();
		$("#modificarNombre").show();

	}
	modificarNombre(){
		$("#nombre").html("Nombre del creador: <input type='text' id='creador' disabled>");
		$("#creador").val("Andrea Maria Delgado Alonso");
		$("#modificarNombre").hide();
		$("#modificarUO").show();
	}
	añade(){
		$("#after").after("<li id=a>Paul Winfield (Ed Traxler): teniente de la policía el cual intenta proteger a Sarah.</li>");
		$("#a").after("<li id=b>Lance Henriksen (Vukovich): miembro de la policia de Los Ángeles</li>");
		$("#b").after("<li id=c>Earl Boen (Dr. Silberman): psicólogo criminalista</li>");
		$("#c").after("<li id=d>Bess Motta (Ginger): compañera de cuarto de sara</li>");
		$("#añade").hide();
		$("#remove").show();
	}
	remove(){
		$("#a").remove();
		$("#b").remove();
		$("#c").remove();
		$("#d").remove();
		$("#remove").hide();
		$("#añade").show();
	}
	ocultarP(){
		$("table tr td").each(function() {
            var celda = $.trim($(this).text());
            if (celda =='Material impreso') {
                $(this).parent().hide();
            }
			if (celda =='Videojuegos') {
                $(this).parent().hide();
            }
			 if (celda =='Serie de Televisión') {
                $(this).parent().hide();
            }
        });
		$('#botonOcultarP').hide();
		$('#botonOcultarS').show();
		$('#botonMostrar').show();
		$('#botonOcultarM').show();
		$('#botonOcultarV').show();
	}
	ocultarV(){
		$("table tr td").each(function() {
            var celda = $.trim($(this).text());
            if (celda =='Material impreso') {
                $(this).parent().hide();
            }
			if (celda =='Pelicula') {
                $(this).parent().hide();
            }
			 if (celda =='Serie de Televisión') {
                $(this).parent().hide();
            }
        });
		$('#botonOcultarP').show();
		$('#botonOcultarS').show();
		$('#botonMostrar').show();
		$('#botonOcultarM').show();
		$('#botonOcultarV').hide();
		
	}
	ocultarM(){
		$("table tr td").each(function() {
            var celda = $.trim($(this).text());
            if (celda =='Videojuegos') {
                $(this).parent().hide();
            }
			if (celda =='Pelicula') {
                $(this).parent().hide();
            }
			 if (celda =='Serie de Televisión') {
                $(this).parent().hide();
            }
        });
		$('#botonOcultarP').show();
		$('#botonOcultarS').show();
		$('#botonMostrar').show();
		$('#botonOcultarM').hide();
		$('#botonOcultarV').show();
	}
	ocultarS(){
		$("table tr td").each(function() {
            var celda = $.trim($(this).text());
            if (celda =='Material impreso') {
                $(this).parent().hide();
            }
			if (celda =='Videojuegos') {
                $(this).parent().hide();
            }
			 if (celda =='Pelicula') {
                $(this).parent().hide();
            }
        });
		$('#botonOcultarS').hide();
		$('#botonOcultarP').show();
		$('#botonMostrar').show();
		$('#botonOcultarM').show();
		$('#botonOcultarV').show(); 
	}
	mostrarTodo(){
		$("table tr").each(function() {
            $(this).show();
        });
		$('#botonMostrar').hide();
		$('#botonOcultarS').show();
		$('#botonOcultarP').show();
		$('#botonOcultarM').show();
		$('#botonOcultarV').show();
	}
	recorrer(){
		$("*", document.body).each(function() {
			var etiquetaPadre = $(this).parent().get(0).tagName;
			$(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
		});
		$('#recorrido').hide();
	}
}
var bombilla = new Bombilla();
