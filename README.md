hackvt-2014
===========

Setup Instructions For Easy Pushing to your Local VM Repo
-----------------------------------------------------------------------

login to your VM box (see google doc instructions from Josh) 
Run the following commands:

     git init --bare repo
     vi repo.git/hooks/post-receive
     

Now edit this to have the following bash script


     #!/bin/sh
     GIT_WORK_TREE=/var/www/repo git checkout -f
     

Make the hook executable with `chmod +x repo.git/hooks/post-receive
Now open up your local repository and add in your local remote like so

     git remote add local root@<your vm's ip>:repo.git
     git push local master

Enjoy. 

For extra fun, edit your commit hook to push automatically:


     #!/bin/sh
     #.git/hooks/post-commit
     git push local master

Then `chmod +x` it and be happy.

