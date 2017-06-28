#!/usr/bin/env python3

__author__ = 'Ivan Fretes'
__email__ = 'vanfretes@gmail.com'

from math import pow, sqrt, pi, atan


def generate_general_equation(coordenada1, coordenada2):
    '''
    Generamos la estructura ax + by + c (Ec. general de la recta)
    Donde x e y son cadenas literas
    '''
    ec = {}

    ''' Retorna la equation de la recta

        @param coordenada1 array [x,y]
        @param coordenada2 : array
        @return dictonary - (ax + bx + c) '''

    # Elementos dependientes de x e y, sirve para determinar valores
    # Podria llam

    my = (coordenada2[1] - coordenada1[1])
    mx = (coordenada2[0] - coordenada1[0])
    mx = modificar_signo(mx)

    # Genera el extramo de ax
    ec['a'] = my  # remplazar_unidad

    # Genera el extrmo by
    ec['b'] = mx  # remplazar_unidad

    # Genera el extremo c
    ec['c'] = modificar_signo(mx * (coordenada1[1])) + \
        modificar_signo(my * (coordenada1[0]))

    return ec


def char_signo(value):
    ''' retorna el caracter del signo, solo en caso de los positivos
        que no genera el mas en la operacion '''
    if 0 < value:
        return '+' + str(value)

    return '' + str(value)


def remplazar_unidad(value):
    ''' Extrar el nro 1, de la equation, no es muy prolijo asignar 1x
        @param value {number}
        @return {string} '''

    if 1 == int(value):
        return ' + '
    elif -1 == int(value):
        return ' - '

    return ' ' + str(value)


def modificar_signo(value):
    ''' Invierte el signo, para nuestro caso, solo sirve para recordad que  
        'pre' pendientes deben cambiar de signo, tanto de 'x' como de 'y' 
        @return {number} '''

    return value * -1


def generate_intersection_point(ra, rb):
    ''' Generar los puntos de inserccion, entre dos o mas rectas

        @param : ra : {dic} Recta 1
        @param : r2 : {dic} Recta 2
        @return : {array} retorna los valores de[x, y] '''

    # Genera las nuevas los valores temporales de x,
    # con el cual multiplicaremos por toda la operacion
    tempa = ra['a']
    tempb = rb['a']

    xa = tempa * tempb

    ''' Multiplicamos * -1, lo que hace que la operacion sea una suma
        Para cancelar los valores de la 'x' '''
    tempa *= -1
    xb = tempa * tempb

    ya = ra['b'] * tempb
    yb = rb['b'] * tempa

    ca = ra['c'] * tempb
    cb = rb['c'] * tempa

    # Realizamos las operaciones de suma, con el fin de despejar la 'y'
    yResult = ya + yb
    cResult = ca + cb

    # Variable 'y'
    yResult = modificar_signo(cResult) / yResult

    # Remplazamos el remplazo de la variable y en la primera equation
    xResult = modificar_signo(ca + (ya * yResult)) / xa

    # Retornamos el punto de interseccion
    # console.log("(Longitud,Latitud)")
    return [xResult, yResult]


def pendiente_recta(r):
    ''' Determina la pendiente de una recta
        m = -a / b
        @param r : {dic} representa una recta '''
    return - r.a / r.b


def angulo_pendiente(val):
    # Angulo de la pendiente, formula radian a sexagecimal

    # R radian
    r = atan(val)
    s = (r * 180) / pi
    if (s < 0):
        return 180 + s

    return s


def distance_two_point(x, y):
    # Distancia entre dos puntos, pitagoras
    distance = sqrt(pow(x, 2) + pow(y, 2))
    return distance


def compare_two_distance(distance1, distance2):
    ''' Compara dos distancias entre si, retorna la primera, si el primer 
        parametro es mayor al segundo, en caso contrario retorna la segunda distancia '''
    if abs(distance1) >= abs(distance2):
        return distance1

    return distance2


def get_general_equation(r):
    ''' Visualiza la ecuacion, con los literales asignados '''
    ec = remplazar_unidad(r['a']) + 'x'
    ec += remplazar_unidad(r['b']) + 'y'
    ec += char_signo(r['c'])

    print(ec + ' = 0 ')


''' --  Espacio de Implementacion -- '''


def main():
    # Ejemplo de Implementacion con rectas de Generadas en Google Maps
    # ra = generate_general_equation([-57.5516653060913, -25.336896667846172],
    #                       [-57.552150785923, -25.338130579204833])

    # Ejemplo en caso que lo ejecutemos como modulo
    ra = generate_general_equation([-1, 4], [4, -1])
    get_general_equation(ra)

    rb = generate_general_equation([1, 1], [3, 2])
    get_general_equation(rb)

    punto_interseccion = generate_intersection_point(ra, rb)
    print(punto_interseccion)

if __name__ == '__main__':
    main()
