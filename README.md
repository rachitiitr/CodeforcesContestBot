# Live Demo
Watch the YouTube video showing the live demo -> [here](https://www.youtube.com/watch?v=MXYmbJO4bqU)

# Setup/Installation
```bash
INSTALLATION_PATH="<directory_path_where_you_want_to_clone>"; # also the dir where you will write solution
cd $INSTALLATION_PATH
git clone https://github.com/rachitiitr/CodeforcesContestBot.git
cd CodeforcesContestBot
npm install
```

# Usage
```bash
export CF_CONTEST=https://codeforces.com/contest/1330
node script.js
# will parse all the problems of the contest
# download their testcases
# create multiple directories A B C D E depending on the number of problems in contest
# each directory created will have 
#    in0.txt out0.txt 
#    in1.txt out1.txt and so on 
# which represent the testcases downloaded
```

# Running sol.cpp on multiple testcases and viewing output
```bash
./runall.sh A #if you want to test A/sol.cpp
./runall.sh D #if you want to test D/sol.cpp against your output vs sample output
# this will run your code on downloaded test cases
# and print to console your output vs expected output
```
