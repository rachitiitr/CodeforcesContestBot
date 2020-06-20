#!/bin/bash
problem=$1
cd $problem
echo $(pwd)

g++ -std=c++17 sol.cpp -o solD || { echo "$problem/sol.cpp failed to build. Check for errors."; exit 1; }
echo Compiled successfully...
ls -l solD

infiles=(`ls in*.txt`)
# echo ${infiles[@]}
for ((i=0; i<${#infiles[@]}; i++)); do
  ./solD < in$i.txt > yout$i.txt 
done

cd ..
./diff.sh $problem
cd ..
