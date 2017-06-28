/*
    quaJs: A development libraries by Cuantica* Soft
    
    Math : A conjunct libraries of geometry and spatial operations
    FG : A conjunct libraries of maps operations. Available Google Maps

    @library : qua Math
    @autor : Ivan Fretes
    @organization : Cuantica *
    @link : http://cuanti.ca    
    @version : 1.0.1
*/


    var y = 'y'; // Importante la latitud representa el punto y
    var x = 'x'; // por ende la longitud representa el punto x


    // Retorna la ecuacion de la recta
    function generarEcuacion(coordenada1, coordenada2){

        var my = (coordenada2.y - coordenada1.y);
        var mx = (coordenada2.x - coordenada1.x);
        mx = parseFloat(modificarSigno(mx));

        var ec = {};

        // Genera el extramo de ax
        ec.a = remplazarUnidad(my);
        // Genera el extrmo by
        ec.b = remplazarUnidad(mx);
        // Genera el extremo c
        ec.c = parseFloat(modificarSigno(mx*(coordenada1.y))) + parseFloat(modificarSigno(my*(coordenada1.x)));

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

        // Si la expresion es negativa returna positiva
        // en caso contrario retorna el mismo valor, Invierte el signo
        function modificarSigno(value){
            if (value < 0){
                return ""+(value * -1);
            }
            return "-"+value;
        }

	/*
		Generar los puntos de inserccion, entre dos o mas rectas
		@return {array} retorna los valores de [x,y] 
	*/
    function generarPuntoDeInserccion(ra,rb){

        // Genera las nuevas los valores temporales de x,
        // con el cual multiplicaremos por toda la operacion
        var tempa = ra.a;
        var tempb = rb.a;

        var xa = tempa * tempb;

        // Multiplicamos * -1, lo que hace que la operacion sea una suma
        // Para cancelar los valores de la x
        tempa *= -1;
        var xb = tempa * tempb;

        var ya = ra.b * tempb;
        var yb = rb.b * tempa;


        var ca = ra.c * tempb;
        var cb = rb.c * tempa;

        // Realizamos las operaciones de suma, con el fin de despejar la y

        var yResult = ya + yb;
        var cResult = ca + cb;

        yResult = (modificarSigno(cResult) / yResult); // Variable y

        // Remplazamos el remplazo de la variable y en la primera ecuacion
        var xResult = modificarSigno(ca + (ya * yResult)) / xa;


        // Retornamos el punto de interseccion
        // console.log("(Longitud,Latitud)");
        return [xResult , yResult];
    }


    function pendienteRecta(rValue){
        return - rValue.a / rValue.b;
    }

    // Angulo de la pendiente, formula radian a sexagecimal
    function anguloPendiente(val){
        var r,s;
        r = Math.atan(val); // R radian
        s = ( r * 180 ) / Math.PI; // Sº
        if (s < 0){
            return 180 + s;
        }
        return s;
    }

    // Distancia entre dos puntos
    function distanceTwoPoint(x,y){
        var distance = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
        return distance;
    }

    // Realiza el punto media
    /*function middlePoint([x,y],[x,y]){
        distanceTwoPoint(x,y);
    }*/

    

    /*
        Compara dos  distancias entre si, retorna la primera, si el primer parametro 
        es mayor al segundo, en caso contrario retorna la segunda distancia
    */
    function compareTwoDistance(distance1, distance2){
        if(Math.abs(distance1) >= Math.abs(distance2)){
            return distance1;
        }
        return distance2;
    }

	// Ejemplo de Implementacion con rectas de Google Maps 
    function implement(){
        rA = generarEcuacion(
                        {x: -57.5516653060913, y:   -25.336896667846172 },
                        {x: -57.552150785923, y:-25.338130579204833}
        );

        var pInterseccion = generarPuntoDeInserccion(rA,rB);
    }