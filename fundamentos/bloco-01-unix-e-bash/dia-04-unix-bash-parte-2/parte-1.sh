#!/bin/bash

delay="3"
clear

#Execicio 1
echo "1) Navegue até a pasta unix_tests"

if [ -e unix_tests ]
then
    cd unix_tests
else
    mkdir unix_tests
    cd unix_tests
fi

sleep $delay

clear
#Ecercicio 2

echo "2) Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha"

touch skills2.txt
echo "Internet\nUnix\nBash" > skills2.txt

sleep $delay
clear
#Ecercicio 3

echo "3) Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal"

echo "HTML\nCSS\nJavaScript\nReact\nNode.js" >> skills2.txt
sleep $delay
clear