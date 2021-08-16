# International Pencil Drawing Exhibition

Note: All of the following commands must be run in the root folder of the project.

## npm commands

These commands are used to set up or deploy the React app.

### `npm install`

Installs the code libraries required for the app to run

### `npm run start`

Runs the app on your local machine at localhost:3000

### `npm run deploy`

Deploys the app to https://pencilde.com

## git commands

These commands are used to sync the code between your local machine and the GitHub repository (where the app is stored online).

### `git status`

Shows which branch you are on and whether you have any changes on your local machine that have not been committed yet

### `git pull origin master`

Get the changes from the GitHub repository onto your local machine

### `git add .`

Tell git to include all your edits in the next commit

### `git commit -m "<message>"`

Commit the changes on your local machine (all your commits are tracked, so you can revert to a previous commit if the new commit contains errors)

### `git push origin master`

Push your new commit(s) to the GitHub repository

## cd commands

These commands are used to navigate between folders in the command line (Git Bash).

### `cd ../`

Move to the parent folder

### `cd ../../`

Move up to the parent folder of the parent folder (you can type in `../` as many times at once as necessary)

### `cd <name of folder>`

Move into a folder (i.e. `cd folder1` would move into the "folder1" folder)

### `cd folder1/folder2`

Move into the "folder2" folder inside the "folder1" folder (can use `/` as many times as necessary)

### `ls`

List all the files and folders inside the current folder

## Complete workflow

1. Open Git Bash.
2. Use `cd` commands to navigate to the root folder of the app.
3. Run `git pull origin master` to get the latest changes from the repository.
4. If needed, run `npm install` to install new code libraries.
5. Run `npm run start` to start the app.
6. Open the code for the app in Atom and make your changes.
    * The app that is running on your local machine updates every time you save your code.
    * `File > Add Project Folder...` adds a project to the Atom workspace.
    * Right click a project and press `Remove Project Folder` to remove a project from the Atom workspace. (This does not delete the project.)
7. When you're done making changes, go back to Git Bash and press Ctrl+C to stop the app.
8. Run `git add .`
9. Run `git commit -m "<message>"`
10. Run `git push origin master`
11. Run `npm run deploy` - the changes should show on https://pencilde.com within the next 5 minutes.
