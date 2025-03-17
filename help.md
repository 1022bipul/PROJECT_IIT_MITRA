# Steps to save code on github through terminal
  
## Clone the repository from github using the following command:
   
         git clone <-links-> html wala

## To see status:

         git status


### Untracked :- new files that are not tracked by git
### Modified :- files that are modified but not committed
### Staged :- files that are staged for commit
### Unmodified :- files that are not modified

## Add & Commit

### Add :- add new or changed files in your working directory to the git staging area
   
         git add <file name> or  git add .


### Commit:- it saves the changes in the staging area to the local repository or it is the record of changed
          
         git commit -m "<message>"

### Push :- upload local repository to a remote repo server to make it public
        

         git push -u origin main
         git push origin main