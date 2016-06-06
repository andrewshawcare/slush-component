let gulp = require("gulp");

gulp.task("default", (done) => {
  gulp.src(__dirname + "hello-component/**")
    .pipe(gulp.dest("./"))
    .on("end", done)
    .resume();
});
