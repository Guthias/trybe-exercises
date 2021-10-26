#!/bin/bash

delay="3"
clear

#Execicio 1
echo "1) Navegue até a pasta unix_tests"

cd unix_tests

sleep $delay

clear

#Ecercicio 2
echo "2) Rode o comando ls -l e veja quais as permissões dos arquivos"

ls -l

sleep $delay
clear

#Exercicio 3
echo "3) Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l\n"
if [ -e unix_tests/bunch_of_things.txt ]
then
    chmod +r+w bunch_of_things.txt
else
    touch bunch_of_things.txt
    chmod +r+w bunch_of_things.txt
fi

ls -l

sleep $delay
clear

#Exercicio 4
echo "4) Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l\n"

chmod -w bunch_of_things.txt
ls -l

sleep $delay
clear

#Exercicio 5
echo "5) Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt\n"

chmod 644 bunch_of_things.txt
ls -l

sleep $delay
clear