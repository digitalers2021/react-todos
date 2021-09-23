

def upper(elemento):
    def mostrar(e):
        print("Mostrando: ", e)

    mostrar(elemento)
    return elemento.upper()


lista = ["Estudiar react", "instalar nodejs", "crear proyecto"]


resultado = list(map(upper, lista))
# resultado = list(map(lambda x: x.upper(), lista))
print(resultado)