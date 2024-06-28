def write_points ():
   while True:
        print( 'Por favor, introduzca una puntuación en una escala de 1 a 5' )
        point = input()
        if point.isdecimal():
            point = int(point)
            if  point <= 0 or point > 5:
                print( 'Por favor, introduzca una puntuación en una escala de 1 a 5' )
                point = input()
            else:
                print( 'Introduzca sus comentarios.' )
                comment = input()
                post = f'punto: {point} comentario: {comment}'
                file_pc = open("data.txt", 'a')
                file_pc.write( f'{ post } \n' )
                file_pc.close()
                break
        else: 
            print( 'Introduzca los puntos de valoración como números' )

def check_points():
    print( 'Resultados hasta la fecha.' )
    read_file = open("data.txt", "r")
    print( read_file.read() )
    read_file.close()

while True:
    print( 'Seleccione el proceso que desea aplicar' )
    print( '1:Introduzca los puntos de valoración y los comentarios.' )
    print( '2:Comprueba los resultados obtenidos hasta ahora.' )
    print( '3:Terminación.' )
    num = input()
    if num.isdecimal():
        num = int(num)
        if num == 1:
            write_points()
        elif num == 2:
            check_points()
        elif num == 3:
            print( 'Terminación' )
            break
        else:
            print( 'Por favor, introduzca del 1 a 3' )
