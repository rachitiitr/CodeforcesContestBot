problem=$1
contest=$(echo "${CF_CONTEST//[!0-9]/}")
cd Parsed/$contest/$problem
echo $(pwd)

g++ -std=c++17 sol.cpp -o solD
ls

infiles=(`ls in*.txt`)
# echo ${infiles[@]}
for ((i=0; i<${#infiles[@]}; i++)); do
  ./solD < in$i.txt > yout$i.txt 
done

cd ..
cd ..
cd ..
./diff.sh Parsed/$contest/$problem
cd ..
