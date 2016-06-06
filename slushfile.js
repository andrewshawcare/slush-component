var gulp = require("gulp");
var install = require("gulp-install");
var conflict = require("gulp-conflict");
var inquirer = require("inquirer");

gulp.task("default", (done) => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your component?",
      default: "hello-component"
    },
    {
      type: "confirm",
      name: "confirm",
      message: "Create component?"
    }
  ], function (answers) {
    if (!answers.confirm) {
      return done();
    }

    gulp.src(__dirname + "/hello-component/**")
      .pipe(conflict("./" + answers.name))
      .pipe(gulp.dest("./" + answers.name))
      .pipe(install())
      .on("end", done)
      .resume();
  });
});
