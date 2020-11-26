#!/bin/bash

echo Running diff report
cd $1
echo $(pwd)
mainoutfiles=(`ls out*.txt`)

yourfiles=(`ls yout*.txt`)

echo ${mainoutfiles[@]} ${yourfiles[@]}
len=${#mainoutfiles[@]}
echo $len
# showing only success/fail status per testcase
for((i=0; i<$len; i++)) do
# ToDo: Handle blank lines at end and do file comparison in bash
#  cmp -s ${mainoutfiles[i]} ${yourfiles[i]} && echo "Test #$i passed" || echo "Test #$i failed"
  echo TestCase $i...
  echo ===================
  echo Expected Output
  cat ${mainoutfiles[i]} && echo
  echo Your Output
  cat ${yourfiles[i]} && echo
  sed ':a;N;$!ba;s/\r\n/\n/g' ${yourfiles[i]} > check1.txt
  sed ':a;N;$!ba;s/\r\n/\n/g' ${mainoutfiles[i]} > check2.txt
  RED='\033[0;31m'
  NC='\033[0m'
  GREEN='\033[0;32m'
  cmp -s check1.txt check2.txt && echo -e "${GREEN}Test #$i passed${NC}" || echo -e "${RED}Test #$i failed${NC}"
  rm check1.txt check2.txt
  echo ===================
  echo
  done
#   cmd="vim -c 'set diffopt=filler,vertical' -c 'edit ${mainoutfiles[0]}' -c 'diffsplit ${yourfiles[0]}' "
#   for((i=1; i<$len; i++)) do
#   cmd="${cmd} -c 'tabe ${mainoutfiles[i]}' -c 'diffsplit ${yourfiles[i]}' "
# done

# eval $cmd
cd ..
