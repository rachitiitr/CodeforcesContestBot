problem=$1
cd $problem
echo $(pwd)

g++ -std=c++17 sol.cpp -o solD

infiles=(`ls in*.txt`)
# echo ${infiles[@]}
for ((i=0; i<${#infiles[@]}; i++)); do
  ./solD < in$i.txt > yout$i.txt 
done

cd ..
./diff.sh $problem
cd ..
