#!/bin/bash
cd $1
echo $(pwd)
mainoutfiles=(`ls out*.txt`)

yourfiles=(`ls yout*.txt`)

echo ${mainoutfiles[@]} ${yourfiles[@]}
cmd="vim -c 'set diffopt=filler,vertical' -c 'edit ${mainoutfiles[0]}' -c 'diffsplit ${yourfiles[0]}' "
len=${#mainoutfiles[@]}
for((i=1; i<$len; i++)) do
  cmd="${cmd} -c 'tabe ${mainoutfiles[i]}' -c 'diffsplit ${yourfiles[i]}' "
done

echo $cmd
eval $cmd
cd ..