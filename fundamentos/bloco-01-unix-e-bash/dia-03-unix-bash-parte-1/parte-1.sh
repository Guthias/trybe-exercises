#!/bin/bash
clear
delay="3"

#Exercicio 1
echo "1) Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele"

mkdir unix_tests
cd unix_tests

sleep $delay

#Exercicio 2
echo "\n2) Crie um arquivo de texto com o nome trybe.txt"

touch trybe.txt

sleep $delay

#Exercicio 3

echo "\n3) Crie uma cópia do arquivo trybe.txt com o nome trybe_backup.txt"

cp trybe.txt trybe_backup.txt

sleep $delay

#Exercicio 4

echo "\n4) Renomeie o arquivo trybe.txt"

mv trybe.txt trybe-2.txt

sleep $delay

#Exercicio 5

echo "\n5) Dentro de unix_tests, crie um novo diretório chamado backup"
mkdir backup

sleep $delay

#Exercicio 6
echo "\n6) Mova o arquivo trybe_backup.txt para o diretório backup"

mv trybe_backup.txt backup

sleep $delay

#Exercicio 7
echo "\n7) Dentro de unix_tests, crie um novo diretório chamado backup2"
mkdir backup2

sleep $delay

#Exercicio 8
echo "\n8) Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2"
cd backup
mv trybe_backup.txt ../backup2

sleep $delay

#Exercicio 9
echo "\n9) Apague a pasta backup"
cd ..
rmdir backup

sleep $delay

#Exercicio 10
echo "\n10) Renomeie a pasta backup2 para backup"

mv backup2 backup
sleep $delay

#Exercicio 11
echo "\n11) Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele\n"

echo -n "Caminho: "
pwd
echo "\nLista de Arquivos"
ls -a

sleep $delay

#Exercicio 12
echo "\n12) Apague o diretório backup"
rm -rf backup
sleep $delay

#Exercicio 13
echo "\n13) Limpe o terminal"

sleep $delay

clear

#Criando o arquivo Skills
touch skills.txt

echo "Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL" >> skills.txt


#Exercicio 14
echo "14) Mostre na tela as 5 primeiras skills do arquivo skills.txt\n"

head -5 skills.txt
sleep $delay

echo "\n15) Mostre na tela as 4 últimas skills do arquivo skills.txt\n"

tail -4 skills.txt
sleep $delay

#Exercicio 16

echo "\n16) Apague todos os arquivos que terminem em txt\n"

rm *.txt
sleep $delay

clear