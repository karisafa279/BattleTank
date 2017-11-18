//http://recursospython.com/guias-y-manuales/actualizar-contenido-via-ajax/

	
/*
function funcionAsync (){
  return $.ajax({
    type: 'POST',
    url: 'Funciones.py',
    success: function aleatorio() {
       
    }});
}*/


function aleatorio(){
       
        return Math.round(Math.random()*(4-1)+1);
        }




function fillBackground(context){
            
        //Dibuja el canvas negro de fondo 
          
        context.fillStyle='#000';
        context.fillRect(300,100,820,450);
            
        //Dibuja el borde de los juegos    
            
        context.fillStyle='#5DC1B9';
        context.fillRect(350,150,700,10);
                
        context.fillStyle='#5DC1B9';
        context.fillRect(350,500,700,10);
                
        context.fillStyle='#5DC1B9';
        context.fillRect(350,150,10,350);
                
        context.fillStyle='#5DC1B9';
        context.fillRect(1050,150,10,360);
                
        //Dibuja las lineas de adentro del juego lado izquierdo    
            
            
        context.fillStyle='#5DC1B9';
        context.fillRect(430,200,100,5);
                
        context.fillStyle='#5DC1B9';
        context.fillRect(430,450,100,5);
                
        context.fillStyle='#5DC1B9';
        context.fillRect(470,280,5,100);
                
        //Dibuja las lineas de adentro del juego lado derecho    
            
            
        context.fillStyle='#5DC1B9';
        context.fillRect(870,200,100,5);
                
        context.fillStyle='#5DC1B9';
        context.fillRect(870,450,100,5);
                
        context.fillStyle='#5DC1B9';
        context.fillRect(920,280,5,100);
    
    
        //Dibuja las lineas de adentro del juego en el centro
        
        context.fillStyle='#5DC1B9';
        context.fillRect(700,225,20,75);
    
        context.fillStyle='#5DC1B9';
        context.fillRect(700,350,20,75);
        
        
}

// Direccion 1- derecha 2- izquierda

function mover(dirtanq,pos_x,pos_y,conttanq){
				
		if(dirtanq == 1 ){
		    pos_x = pos_x +1;
		}else if(dirtanq == 2 ){
		    pos_x = pos_x -1;
		}else if(dirtanq == 3 ){
		    pos_y = pos_y + 1;
		}else{
		    pos_y = pos_y -1;
		}
		
		
		switch (dirtanq){
			case 1:
		        //Restringe el paso en la barra vertical hacia adelante del lado izq
		        if(pos_x ==  438 && ( pos_y > 248 && pos_y < 380 )){
		            pos_x = pos_x - 2;
		            dirtanq = aleatorio();
		            }
		        //Restringe el paso en la barra horizontal hacia adelante del lado izq
		        if(pos_x ==  397 && ( pos_y > 168 && pos_y < 205 )){
		            pos_x = pos_x - 2;
		            dirtanq = aleatorio();
		            }
		        if(pos_x ==  397 && ( pos_y > 418 && pos_y < 455 )){
		            pos_x = pos_x - 2;
		            dirtanq = aleatorio();
		            }
		        //Restringe el paso en la barra horizontal hacia adelante del lado der
		            if(pos_x ==  838 && ( pos_y > 168 && pos_y < 205 )){
		            pos_x = pos_x - 2;
		            dirtanq = aleatorio();
		            }
		            if(pos_x ==  838 && ( pos_y > 418 && pos_y < 455 )){
		            pos_x = pos_x - 2;
		            dirtanq = aleatorio();
		            }
		        //Restringe el paso en la barra vertical hacia adelante del lado der
		            if(pos_x ==  888 && ( pos_y > 248 && pos_y < 380 )){
		            pos_x = pos_x - 2;
		            dirtanq = aleatorio();
		            }
		        //Restringe el paso en las barras verticales hacia adelante del centro
		            if(pos_x ==  668 && ( pos_y > 193 && pos_y < 300 )){
		            pos_x = pos_x - 2;
		            dirtanq = aleatorio();
		            }
		            if(pos_x ==  668 && ( pos_y > 318 && pos_y < 425 )){
		            pos_x = pos_x - 2;
		            dirtanq = aleatorio();
		            }
		            break;
		case 2:
		        //Restringe el paso en la barra vertical hacia atras del lado izq
		        if(pos_x ==  475 && ( pos_y > 248 && pos_y < 380 )){
		            pos_x = pos_x + 2;
		            dirtanq = aleatorio();
		            }
		        //Restringe el paso en la barra horizontal hacia atrasdel lado izq
		            if(pos_x ==  530 && ( pos_y > 168 && pos_y < 205 )){
		            pos_x = pos_x + 2;
		            dirtanq = aleatorio();
		            }
		            if(pos_x ==  530 && ( pos_y > 418 && pos_y < 455 )){
		            pos_x = pos_x + 2;
		            dirtanq = aleatorio();
		            }
		        //Restringe el paso en la barra horizontal hacia atras del lado der
		            if(pos_x ==  970 && ( pos_y > 168 && pos_y < 205 )){
		            pos_x = pos_x + 2;
		            dirtanq = aleatorio();
		            }
		            if(pos_x ==  970 && ( pos_y > 418 && pos_y < 455 )){
		            pos_x = pos_x + 2;
		            dirtanq = aleatorio();
		            }
		        //Restringe el paso en la barra vertical hacia atras del lado der
		            if(pos_x ==  925 && ( pos_y > 248 && pos_y < 380 )){
		            pos_x = pos_x + 2;
		            dirtanq = aleatorio();
		            }
			            
		        //Restringe el paso en las barras verticales hacia atras del centro
		            if(pos_x ==  720 && ( pos_y > 193 && pos_y < 300 )){
		            pos_x = pos_x + 2;
		            dirtanq = aleatorio();
		            }
		            if(pos_x ==  720 && ( pos_y > 318 && pos_y < 425 )){
		            pos_x = pos_x + 2;
		            dirtanq = aleatorio();
		            }
		            break;
		    case 3:
		        //Restringe el paso en las barras horizontales hacia abajo del lado izq
		        if(pos_y ==  168 && ( pos_x > 398 && pos_x < 530 )){
		            pos_y = pos_y - 2;
		            dirtanq = aleatorio();
		            }
		            
		        if(pos_y ==  417 && ( pos_x > 398 && pos_x < 530 )){
		            pos_y = pos_y - 2;
		            dirtanq = aleatorio();
		            }
		            
		        //Restringe el paso en las barras horizontales hacia abajo del lado der
		        if(pos_y ==  168 && ( pos_x > 835 && pos_x < 970 )){
		            pos_y = pos_y - 2;
		            dirtanq = aleatorio();
		            }
		            
		        if(pos_y ==  417 && ( pos_x > 835 && pos_x < 970 )){
		            pos_y = pos_y - 2;
		            dirtanq = aleatorio();
		            }
		        //Restringe el paso en las barras verticales hacia abajo del centro
		           if(pos_y ==  194 && ( pos_x > 665 && pos_x < 720 )){
		            pos_y = pos_y - 2;
		            dirtanq = aleatorio();
		            }
		            if(pos_y ==  318 && ( pos_x > 665 && pos_x < 720 )){
		            pos_y = pos_y - 2;
		            dirtanq = aleatorio();
		            }
		            break;
		    case 4:
		        //Restringe el paso en las barras horizontales hacia arriba del lado izq
		        if(pos_y ==  205 && ( pos_x > 398 && pos_x < 530 )){
		            pos_y = pos_y + 2;
		            dirtanq = aleatorio();
		            }
		            
		        if(pos_y ==  455 && ( pos_x > 398 && pos_x < 530 )){
		            pos_y = pos_y + 2;
		            dirtanq = aleatorio();
		            }
		        //Restringe el paso en las barras horizontales hacia arriba del lado der
		        if(pos_y ==  205 && ( pos_x > 835 && pos_x < 970 )){
		            pos_y = pos_y + 2;
		            dirtanq = aleatorio();
		            }
		            
		        if(pos_y ==  455 && ( pos_x > 835 && pos_x < 970 )){
		            pos_y = pos_y + 2;
		            dirtanq = aleatorio();
		            }
		        
		        //Restringe el paso en las barras verticales hacia arriba del centro
		           if(pos_y ==  300 && ( pos_x > 665 && pos_x < 720 )){
			           pos_y = pos_y + 2;
			           dirtanq = aleatorio();
			           }
			        if(pos_y ==  425 && ( pos_x > 665 && pos_x < 720 )){
			           pos_y = pos_y + 2;
			           dirtanq = aleatorio();
			           }
			           break;
			          }
			    //Delimita los bordes del juego      
			          if(pos_x == 1000 ){
			   	       	dirtanq = aleatorio();
			    		pos_x = pos_x - 2;
				    }else if(pos_x == 370 ){
				    	dirtanq =aleatorio();
						pos_x = pos_x + 2 ;
					}
				
					if(pos_y == 470 ){
				    	dirtanq = aleatorio();
				    	pos_y = pos_y - 2;
					}else if(pos_y == 160 ){
						dirtanq = aleatorio();
				    	pos_y = pos_y + 2 ;
					}
				
		//S el contador llega a 300 mueve el tanque segun su posicion actual		     
						if(conttanq == 300){
			    			if(dirtanq == 1 || dirtanq == 2 ){
			    				if(pos_y > 400){
			    					dirtanq = 4;
			    				}else if(pos_y < 200){
			    					dirtanq = 3;
			    				}
			    			}else if(dirtanq == 3 || dirtanq == 4 ){
			    				if(pos_x > 700){
			    					dirtanq = 2;
			    				}else if(pos_x < 700){
			    					dirtanq = 1;
			    				}
			    			}
						conttanq = 0;
						}	
			conttanq++;
			
			var tanque1 = [pos_x,pos_y,dirtanq,conttanq];
			return tanque1;
			
		}
		
		
	



