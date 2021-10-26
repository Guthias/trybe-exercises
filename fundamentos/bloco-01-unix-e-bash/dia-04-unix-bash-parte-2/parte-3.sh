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

# PENSAR EM NOVA FORMA PARA CONTINUAR SEM INTERFERIR A EXECUÇÃO DO ARQUIVO
# PENSAR EM NOVA FORMA PARA CONTINUAR SEM INTERFERIR A EXECUÇÃO DO ARQUIVO
# PENSAR EM NOVA FORMA PARA CONTINUAR SEM INTERFERIR A EXECUÇÃO DO ARQUIVO
# PENSAR EM NOVA FORMA PARA CONTINUAR SEM INTERFERIR A EXECUÇÃO DO ARQUIVO
# PENSAR EM NOVA FORMA PARA CONTINUAR SEM INTERFERIR A EXECUÇÃO DO ARQUIVO
# PENSAR EM NOVA FORMA PARA CONTINUAR SEM INTERFERIR A EXECUÇÃO DO ARQUIVO
# PENSAR EM NOVA FORMA PARA CONTINUAR SEM INTERFERIR A EXECUÇÃO DO ARQUIVO
# PENSAR EM NOVA FORMA PARA CONTINUAR SEM INTERFERIR A EXECUÇÃO DO ARQUIVO
# PENSAR EM NOVA FORMA PARA CONTINUAR SEM INTERFERIR A EXECUÇÃO DO ARQUIVO
# PENSAR EM NOVA FORMA PARA CONTINUAR SEM INTERFERIR A EXECUÇÃO DO ARQUIVO
# PENSAR EM NOVA FORMA PARA CONTINUAR SEM INTERFERIR A EXECUÇÃO DO ARQUIVO
# PENSAR EM NOVA FORMA PARA CONTINUAR SEM INTERFERIR A EXECUÇÃO DO ARQUIVO

#Exercicio 4
echo "4) Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background\n"

#Exercicio 5
echo "5) Crie um processo em background que rode o comando sleep por 300 segundos\n"

#Exercicio 6
echo "6) Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente"

#Exercicio 7
echo "7) Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo\n"

#Exercicio 8
echo "8) Retome a execução do processo sleep 100 em background com o comando bg"

#Ecercicio 9
echo "9) Termine a execução de todos os processos sleep (mate os processos"