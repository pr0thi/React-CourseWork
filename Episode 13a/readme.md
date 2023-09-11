#setting up testing in our app

- install react testing library
- installed jest
- installed babel dependencies with jest
- configure babel
- configure parcel config file to disable default babel transpilation

#for test cases npm run test
//it'll call test

//before writing test cases make jest config

npx jest --init
(executing the package)
no
jsdom

✔ Would you like to use Typescript for the configuration file? … no
✔ Choose the test environment that will be used for testing › jsdom (browser-like)
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › babel
✔ Automatically clear mock calls, instances, contexts and results before every test? … yes

📝 Configuration file created

Now install jsdom library

Header.test.js
Header.spec.js

or create a folder with \_ _ tests_ \_
\_ \_ this is dunder
//dunder is a reserved word

//But how can you test JSX?
//How to enable JSX testing
//Add @babel/preset-react

//after installing, include it to babel config
["@babel/preset-react", {runtime:"automatic"}]

//this preset is helping jsx code convert to html code

After all this also, this will come

TypeError: expect(...).toBeInTheDocument is not a function
//toBeInTheDocument is also a library function

- Install @testing-library/jest-dom
  npm i D @testing-library/jest-dom
