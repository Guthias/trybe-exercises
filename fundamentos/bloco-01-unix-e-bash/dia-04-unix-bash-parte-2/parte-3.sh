#!/bin/bash

delay="3"
clear

#Execicio 1
echo "1) Liste todos os processos"

ps 

sleep $delay

clear

#Exercicio 2
echo "2) Agora use o comando sleep 30 &\n"
sleep 30 &

#Exercicio 3
echo "3) Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo)"
ps

echo -n "\nDigite o codigo PID do comando sleep: "
read PIDsleep
kill $PIDsleep

clear

# NÃO É POSSIVEL SOLUCIONAR OS PROXIMOS EXERCICIOS VIA .sh
