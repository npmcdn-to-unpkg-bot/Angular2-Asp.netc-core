/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        clean: ["wwwroot/app/*"],
        ts: {
            default: {
                src: ["./app/**/*.ts"],
                dest: "wwwroot/app",
                options: {
                    "target": "es5",
                    "module": "commonjs",
                    "moduleResolution": "node",
                    "sourceMap": true,
                    "emitDecoratorMetadata": true,
                    "experimentalDecorators": true,
                    "removeComments": false,
                    "noImplicitAny": false
                }
            }
        },
        watch: {
            scripts: {
                files: ["./app/**/*.ts"],
                tasks: ['ts']
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-ts");
};