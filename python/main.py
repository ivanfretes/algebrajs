#!/usr/bin/env python3

__author__ = 'Ivan Fretes'
__email__ = 'vanfretes@gmail.com'

from basic_geometry import *
from util.estante import Estante
from util.repl import REPL
from util.repl import strip


class Application():
    '''
    Para este caso solo implemento la opcion de generar recta, pero podemos importar todas las funciones del basic_geometry '''

    list_rectas_generadas = []
    cant_rectas = 0
    comandos = {}

    @staticmethod
    def menu():
        ''' REPL de las opciones de modulo de 
            geometria basica (basic geometry) '''

        Application.comandos = {'ayuda': Application.ayuda,
                                'g-recta': Application.generar_recta,
                                'g-interseccion': Application.generar_interseccion,
                                'salir': Application.salir}

        print(Application.ayuda())

        REPL(Application.comandos, '-- Geometría Básica --').ciclo()

    @staticmethod
    def ayuda():

        t = ''' Comandos\n
        g-recta [1,2] [2,5] -> genera una recta \n
        g-interseccion -> genera una interseccion entre dos rectas \n
        ayuda -> nuestra indicaciones de comandos \n
        salir -> sale de la aplicacion
        '''
        return t

    @staticmethod
    def main():
        Application.menu()

    @staticmethod
    def generar_recta(coordenada1, coordenada2=0):
        '''comando : g-recta [2,-3] [1,2] '''

        try:
            # si coordenada2 es cero, hacemos una distancia al origen
            if 0 == coordenada2:
                coordenada2 = [0, 0]
            else:
                coordenada2 = eval(coordenada2)

            coordenada1 = eval(coordenada1)

            ra = generate_general_equation(coordenada1, coordenada2)
            get_general_equation(ra)

            list_rectas_generadas[cant_rectas] = ra

            Application.cant_rectas += 1

        except Exception as e:
            print(__doc__)

    @staticmethod
    def generar_interseccion():
        ''' Generar la interseccion de las dos ultimas rectas
        '''

        # try:
        pts_interseccion = generate_intersection_point(
            Application.list_rectas_generadas[Application.cant_rectas - 1],
            Application.list_rectas_generadas[Application.cant_rectas])

        print(pts_interseccion)
        # except Exception as e:
        #     print('Genere las rectas previamente')

    @staticmethod
    def salir():
        quit()


if __name__ == '__main__':
    Application.main()
