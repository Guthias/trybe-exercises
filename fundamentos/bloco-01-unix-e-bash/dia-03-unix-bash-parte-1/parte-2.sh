#!/bin/bash
clear
delay="4"
longdelay="12"

#Exercicio 1
echo "1) Na pasta unix_tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl\n\n"

cd unix_tests
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
sleep $delay

clear
#Exercicio 2
echo "2) Mostre todo o conteúdo do arquivo countries.txt na tela"
sleep $delay
cat countries.txt
sleep $delay

clear
#Exercicio 3
echo "3) Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia"

echo "\n\nPressione a barra de espaço para avançar as paginas e Q para finalizar"
sleep $longdelay
less countries.txt

clear
#Exercicio 4
echo "4) Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia"
echo "\nPressione / e procure pela palavra Zambia e pressione Q para sair"

sleep $longdelay
less countries.txt

clear
#Exercicio 5
echo "5) Busque por Brazil no countries.txt\n"
grep Brazil countries.txt
sleep $delay

clear
#Exercicio 6
echo "6) Busque novamente por brazil, mas agora utilizando o lower case"
grep -i brazil countries.txt
sleep $delay


#Criar o arquivo phrases.txt e adicionar frases a minha escolha
touch phrases.txt
echo "If you deal with a fox, think of his tricks
We are not superior. There are no clear distinctions between us and animals
The trap is loneliness, and none of us escapes it
A fox is a wolf who sends flowers
On earth, one sees all kinds of things
Playing the fox to another fox
Study nature, love nature, stay close to nature. It will never fail you
A fox should not be of the jury at a goose’s trial
One touch of nature makes the whole world kin
The too-clever fox, finally caught" >> phrases.txt

clear
#Exercicio 7
echo "7) Busque pelas frases que não contenham a palavra fox\n\n"
grep -i fox phrases.txt
sleep $longdelay

clear
#Exercicio 8
echo "8) Conte o número de palavras do arquivo phrases.txt"
wc -w phrases.txt
sleep $delay

clear
#Exercicio 9
echo "9) Conte o número de linhas do arquivo phrases.txt"
wc -l phrases.txt
sleep $delay

clear
#Exercicio 10
echo "10) Crie os arquivos empty.tbt e empty.pdf"
touch empty.tbt
touch empty.pdf
sleep $delay

clear
#Exercicio 11
echo "11) Liste todos os arquivos do diretório unix_tests"
ls -a
sleep $delay

clear
#Exercicio 12
echo "12) Liste todos os arquivos que terminem com txt"
ls *.txt
sleep $delay

clear
#Exercicio 13
echo "13) Liste todos os arquivos que terminem com tbt ou txt"
ls *.txt *.tbt
sleep $delay

clear
#Exercicio 14
echo "14) Acesse o manual do comando ls"
sleep $delay
man ls
clear