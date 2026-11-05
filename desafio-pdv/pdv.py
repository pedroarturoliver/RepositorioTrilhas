# PDV com descontos progressivos - Desafio Nivel 1

import os

compras = []  # historico de compras: cada item e [valor_original, idade, desconto, valor_final]

print("=== PDV - Ponto de Venda ===")
print("Digite 0 no valor da compra para encerrar.\n")

while True:
    valor = float(input("Valor da compra (R$): "))

    if valor == 0:
        break

    if valor < 0:
        print("Aviso: o valor nao pode ser negativo. Tente novamente.\n")
        continue

    idade = int(input("Idade do cliente: "))

    if idade < 0:
        print("Aviso: a idade nao pode ser negativa. Tente novamente.\n")
        continue

    valor_final = valor

    # Regra 1 - desconto por idade
    if idade >= 65:
        valor_final = valor_final * 0.80

    # Regra 2 - desconto por valor (sobre o valor ja com desconto de idade)
    if valor_final > 100:
        valor_final = valor_final * 0.90

    valor_final = round(valor_final, 2)
    desconto = round(valor - valor_final, 2)

    compras.append([valor, idade, desconto, valor_final])

    print(f"Valor final: R$ {valor_final:.2f}\n")

# Resumo do dia
total_bruto = 0
total_descontos = 0
total_final = 0

for compra in compras:
    total_bruto = total_bruto + compra[0]
    total_descontos = total_descontos + compra[2]
    total_final = total_final + compra[3]

print("\n=== Resumo do dia ===")
numero = 1
for compra in compras:
    print(f"Compra {numero}: bruto R$ {compra[0]:.2f} | idade {compra[1]} | desconto R$ {compra[2]:.2f} | final R$ {compra[3]:.2f}")
    numero = numero + 1
print(f"Quantidade de compras: {len(compras)}")
print(f"Total bruto: R$ {total_bruto:.2f}")
print(f"Total de descontos: R$ {total_descontos:.2f}")
print(f"Total final: R$ {total_final:.2f}")

# Bonus 3 - salvar historico em resumo.txt
caminho_resumo = os.path.join(os.path.dirname(os.path.abspath(__file__)), "resumo.txt")
arquivo = open(caminho_resumo, "w", encoding="utf-8")
arquivo.write("=== Resumo do dia ===\n")
numero = 1
for compra in compras:
    arquivo.write(f"Compra {numero}: bruto R$ {compra[0]:.2f} | idade {compra[1]} | desconto R$ {compra[2]:.2f} | final R$ {compra[3]:.2f}\n")
    numero = numero + 1
arquivo.write(f"Quantidade de compras: {len(compras)}\n")
arquivo.write(f"Total bruto: R$ {total_bruto:.2f}\n")
arquivo.write(f"Total de descontos: R$ {total_descontos:.2f}\n")
arquivo.write(f"Total final: R$ {total_final:.2f}\n")
arquivo.close()

print(f"\nResumo salvo em: {caminho_resumo}")
input("\nPressione Enter para sair...")
