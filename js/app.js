$(document).on("ready", function(){
    
    
    // Importante la latitud representa el punto y
    // por ende la longitud representa el punto x
    
    
    
    // Retorna la ecuacion de la recta, de los puntos
    // Por defecto retorna ecuacion general de la recta
    function generarEcuacion(coordenada1, coordenada2){
        // Hayamos pendiende te la ecuacion
        my = (coordenada2.y - coordenada1.y);
        mx = (coordenada2.x - coordenada1.x);
        mx = modificarSigno(mx);
        y = 'y';    
        x = 'x';
        
        var ec = {};
        
        // Genera el extramo de x
        ec.a = remplazarUnidad(my) + x;
        // Genera el extrmo y
        ec.b = remplazarUnidad(mx) + y;
        // Genera el coeficiente 
        ec.c = parseFloat(modificarSigno(mx*(coordenada1.y))) + parseFloat(modificarSigno(my*(coordenada1.x)));
        
        console.log(JSON.stringify(ec));
        return ec;
    }
    
    // retorna el caracter del signo, solo en caso de los positivos 
    // que no genera el mas en la operacion
    function charSigno(value){
        if (value > 0){
            return '+'+value;
        }
        return value;
    }
    
    // remplaza la unidad por ''
    function remplazarUnidad(value){
        if (value == 1){
            return '+';
        }
        else if( value == -1){
            return '-';    
        }
        return value;
    }
    
    // Si la exprecion es negativa returna positiva
    // en caso contrario retorna el mismo valor, Invierte el signo
    function modificarSigno(value){
        if (value < 0){
            return ""+(value * -1);
        }
        return "-"+value;
    }
    
    // Generar los puntos de inserccion, entre dos o mas rectas
    function generarPuntoDeInserccion(ra,rb){
        
        // Genera las nuevas los valores temporales de x, 
        // con el cual multiplicaremos por toda la operacion
        tempa = ra.a.substr(0,ra.a.length - 1);
        tempb = rb.a.substr(0,rb.a.length - 1);
        
        xa = tempa * tempb;
        
        // Multiplicamos * -1, lo que hace que la operacion sea una suma
        // Para cancelar los valores de la x
        tempa *= -1;
        xb = tempa * tempb;
        
        ya = ra.b.substr(0,ra.b.length - 1) * tempb;
        yb = rb.b.substr(0,rb.b.length - 1) * tempa;
        
        ca = ra.c * tempb;
        cb = rb.c * tempa;
        
        // Realizamos las operaciones de suma, con el fin de despejar la y
        
        yResult = ya + yb;
        cResult = ca + cb;
        yResult = (cResult / yResult); // Variable y
        
        // Remplazamos el remplazo de la variable y en la primera ecuacion
        
        xResult = (ca - (ya * yResult)) / xa;
        
    }
    
    
    // === Implementacion ===
    
    
    
    rA = generarEcuacion(
                    {x: 8, y: 9}, 
                    {x: 17, y: 14 });
    
    rc = generarEcuacion(
                    {x:  -57.49733984470367, y: -25.3026209052533}, 
                    {x: -57.498372495174415, y: -25.303062233688724 });
    
    
    rB = generarEcuacion(
                    {x: -57.49825716018677, y: -25.302400240432938}, 
                    {x: -57.497524917125695, y: -25.303265923193795} );
    
    
    generarPuntoDeInserccion(rA,rB);
    
});