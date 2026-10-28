package.json is the main setup file or the blueprint of the React project that lists our project's name, version, and metadata, and it records all of the external tools and packages that our UI library depends on.

package-lock.json is a version lock file. It looks at the precise sub-version numbers of every single dependency that we installed in node modules. It guarantees when our Dockerfile run npm install inside the container.

The tsconfig.json file is the TypeScript configuration file. It tells the TypeScript compiler how to convert .tsx or .ts component code into standard JavaScript. It includes the rules like strict type checking or code version and path aliases.

Node module folder is local library cache and it stores all of the downloaded code listed in our package.json and it is never pushed to GitHub because it is git ignored already.

gitignore file is a configuration file that tells Git which files or folders to ignore so they aren't uploaded to your GitHub repository.

#### Total Number of Files: 5 essential root files/folders (plus component files).

1. package.json (Lists project dependencies and npm scripts)
2. package-lock.json (Locks exact package versions for consistency)
3. tsconfig.json (Configures TypeScript compiler rules)
4. Dockerfile (Contains the multi-stage build instructions for Node.js and Nginx)
5. dockerignore (Excludes heavy folders like node_modules from the Docker build)


# The Component Files (Buttons, Cards, Text, etc.):
I built modular, reusable React/TypeScript components that act as building blocks for user interfaces.

# The Subfiles (Types, Styles, and Index files):

1. Each component has its own supporting subfiles (like TypeScript interface/type definitions for props, styling files, and export indices) to keep the code clean, type-safe, and organized.


STEPS FOR DOCKERFILE AND GITHUB REPOSITORY:
1. Create a .dockerignore file in the project root to exclude node_modules, build, and .git.

2. Create a Dockerfile in the project root with multi-stage instructions for building the React app and serving it with Nginx.

3. Build the production Docker image named kaur_manpreet_coding_assignment12 using docker build.

4. Run the container detached on port 8083 mapped to container port 80.

5. Open http://localhost:8083 in your browser to verify that all 13 UI components and media placeholders render cleanly.

docker stop kaur_manpreet_coding_assignment12
docker rm -f kaur_manpreet_coding_assignment12
docker build -t kaur_manpreet_coding_assignment12 .
docker run -d -p 8083:80 --name kaur_manpreet_coding_assignment12 kaur_manpreet_coding_assignment12
direct cmd:   cmd.exe /c start http://localhost:8083

status: docker ps
for all: docker ps -a
to see files inside nginx: docker exec -it kaur_manpreet_coding_assignment12 ls -la /usr/share/nginx/html

direct cmd: cmd.exe /c start https://github.com/mkaur174/kaur-manpreet-ui-garden

git add .
git commit -m "Update project for demo"
git push

## fix storybook:
find src/ -name "*.stories.tsx" -exec sed -i "s/from '@storybook\/react'/from '@storybook\/react-webpack5'/g" {} +

fuser -k 6006/tcp 2>/dev/null || true  (to lock to 6006 browser)
npm run storybook