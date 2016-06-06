var gulp = require("gulp");
var install = require("gulp-install");

gulp.task("default", (done) => {
  gulp.src(__dirname + "/hello-component/**")
    .pipe(gulp.dest("./hello-component"))
    .pipe(install())
    .on("end", done)
    .resume();
});
