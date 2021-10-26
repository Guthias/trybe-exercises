#!/bin/bash

delay="3"
clear

#Execicio 1
echo "1) Navegue até a pasta unix_tests"

cd unix_tests

sleep $delay

clear
#Ecercicio 2

echo "2) Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha"

touch skills2.txt
echo "Internet\nUnix\nBash" > skills2.txt

sleep $delay
clear
#Ecercicio 3

echo "3) Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal\n"

echo "HTML\nCSS\nJavaScript\nReact\nNode.js" >> skills2.txt
cat skills2.txt | sort -d
sleep $delay
clear

#Exercicio 4
echo "4) Conte quantas linhas tem o arquivo skills2.txt"
wc -l skills2.txt
sleep $delay
clear

#Exercicio 5
echo "5) Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética"
touch top_skills.txt
cat skills2.txt | sort -d | head -3 > top_skills.txt

sleep $delay
clear

#Exercicio 6
echo "6) Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha"
touch phrases2.txt

echo "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage
It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends
It takes courage to grow up and become who you really are\nThe heart will break, but broken live on
Angels are bright still, though the brightest fell. Though all things foul would wear the brows of grace, Yet Grace must still look so
May your eye go to the Sun, to the Wind your soul... You are all the colours in one, at full brightness
Everyday gratitude sweetens what appears flavorless and brightens all that appears dim
Brightness of day always end with the darkness of Night" > phrases2.txt

sleep $delay
clear

#Exercicio 7

echo "7) Conte o número de linhas que contêm as letras br\n"

echo -n "Numero de linhas que contem as letras 'br': "
grep -i br phrases2.txt | wc -l
sleep $delay
clear

#Exercicio 8

echo "8) Conte o número de linhas que não contêm as letras br\n"

echo -n "Numero de linhas que não contem as letras 'br': "
grep -i -v br phrases2.txt | wc -l
sleep $delay
clear

#Exercicio 9

echo "9) Adicione dois nomes de países ao final do arquivo phrases2.txt"

echo "Brazil\nRussia" >> phrases2.txt
sleep $delay
clear

#Exercicio 10

echo "10) Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt"


touch bunch_of_things.txt
cat phrases2.txt > countries.txt >> bunch_of_things.txt

sleep $delay
clear
#Exercicio 11

echo "11) Ordene o arquivo bunch_of_things.txt"

sort -d bunch_of_things.txt

sleep $delay
clear