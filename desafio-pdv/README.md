# Desafio Nível 1 — PDV com Descontos (Python)

## O que o código faz

Este programa simula a lógica de um PDV (Ponto de Venda) que aplica descontos progressivos. Para cada compra, ele recebe o valor e a idade do cliente, aplica as regras de desconto e mostra o valor final em reais. O caixa pode registrar várias compras seguidas e, ao encerrar, o programa exibe um resumo do dia com a quantidade de compras, o total bruto, o total de descontos e o total final.

## Como ele faz

1. O programa entra em um loop `while` e pede o **valor da compra**.
2. Se o valor for `0`, o loop termina.
3. Se o valor for negativo, mostra um aviso e usa `continue` para pedir novamente.
4. Pede a **idade do cliente**. Se for negativa, mostra um aviso e usa `continue` para recomeçar a compra.
5. **Regra 1:** se a idade for maior ou igual a 65, aplica 20% de desconto.
6. **Regra 2:** se o valor, já com o desconto de idade, for maior que 100, aplica mais 10% sobre esse valor.
7. Arredonda o valor final para duas casas decimais e mostra no formato `R$ 0.00`.
8. Guarda a compra numa lista com `.append()` (valor original, idade, desconto e valor final).
9. Ao sair do loop, percorre a lista com `for`, mostra cada compra (com a idade do cliente), soma os totais e mostra o resumo do dia.
10. **Bônus:** grava o resumo em um arquivo `resumo.txt` usando `open(..., "w")` e um `for` na lista.

## Como rodar

```bash
python pdv.py
```

Digite o valor e a idade de cada compra. Para encerrar, digite `0` no valor da compra.

## Tabela de exemplos (casos de teste)

| # | Valor (R$) | Idade | Desconto idade | Desconto valor | Valor final esperado |
|---|-----------|-------|----------------|----------------|----------------------|
| 1 | 50.00 | 30 | 0% | 0% | R$ 50.00 |
| 2 | 100.00 | 30 | 0% | 0% | R$ 100.00 |
| 3 | 80.00 | 65 | 20% | 0% | R$ 64.00 |
| 4 | 100.00 | 70 | 20% | 0% | R$ 80.00 |
| 5 | 125.00 | 70 | 20% | 0% | R$ 100.00 |
| 6 | 200.00 | 30 | 0% | 10% | R$ 180.00 |
| 7 | 101.00 | 30 | 0% | 10% | R$ 90.90 |
| 8 | 200.00 | 65 | 20% | 10% | R$ 144.00 |
| 9 | 1000.00 | 80 | 20% | 10% | R$ 720.00 |
| 10 | 200.00 | 64 | 0% | 10% | R$ 180.00 |

Todos os 10 casos foram testados e batem com o valor esperado.
