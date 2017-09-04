# Basic Startup Project for Web Development

1) Convert this to a JavaScript/NodeJS project

   Since we are building a JavaScript project, it is best to use JavaScript building techniques.  In this case, NodeJS and NPM are used

   Make sure nodeJS and npmJS are installed.

```bash
$ npm init
```

2) Simple Testing HTTP Server

```bash
$ npm install --save-dev lite-server
```

3) Create a simple index.html

4) Edit package.json script section to add "dev" command to start up lite-server

```javascript
"scripts": {
	"dev": "lite-server"
}
```

5) Test out the lite server and index.html by running:

```bash
$ npm run dev
```

[YouTube Video of this github repository](https://youtu.be/IaBZZvsMJMs)