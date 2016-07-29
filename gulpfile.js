"use strict"; // подсказки в консоли при ошибках

const gulp          = require('gulp');

const sass          = require('gulp-sass');    // компилирует sass
const sourcemaps    = require('gulp-sourcemaps'); // создает sourcemaps
const autoprefixer  = require('gulp-autoprefixer'); // для добавления префиксов

const wiredep       = require('wiredep').stream; //автоматическое подключение файлов из bower
const rename        = require('gulp-rename'); // переименование файлов
const concat        = require('gulp-concat');  // конкатенации файлов
const browserSync   = require('browser-sync'); // виртуальный сервер
const del           = require('del');  // удаление файлов/директорий

const useref        = require('gulp-useref'); // парсинг-перенос файлов
const gulpif        = require('gulp-if');
const cache         = require('gulp-cache');  // для кеширования
const uglify        = require('gulp-uglify'); //минификация js
const csso          = require('gulp-csso'); //минификация css
const imagemin      = require('gulp-imagemin'); //минификация img
const pngquant      = require('gulp-pngquant'); //минификация png


// ============ компиляция sass ============
gulp.task('sass', function() {
    return gulp.src('app/sass/style.scss')  //находим наш файл стилей
        .pipe(sourcemaps.init())      // создаем sourcemaps
        .pipe(sass().on('error', sass.logError))  // преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer([                     // создаем префиксы
            'last 15 versions',
            '> 1%',
            'ie 9',
            'ie 10']
        ))
        .pipe(sourcemaps.write())   // записываем изменения в soursemaps
        .pipe(gulp.dest('app/css')) // выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})); // обновляем CSS на странице при изменении
});


// ============ обработка фоточек ============
gulp.task('img', function() {
    return gulp.src('app/img/**/*') // берем все изображения из app
        .pipe(cache(imagemin({  // сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // выгружаем на продакшен
});


// ============ запуск Browser Sync ============
gulp.task('browser-sync', function() { // создаем таск browser-sync
    browserSync({ // выполняем browserSync
        server: { // определяем параметры сервера
            baseDir: 'app' // директория для сервера - app
        },
        notify: false // отключаем уведомления
    });
});


// ============ автоматическое прописывание путей к файлам Bower ============
gulp.task('bower', function () {
  gulp.src('app/*.html')
    .pipe(wiredep({
      directory : 'app/bower_components/'
    }))
    .pipe(gulp.dest('app/'));
});


// ============ слежение за изменениями в файлах ============
gulp.task('watch', ['browser-sync', 'sass', 'bower'], function() {
    gulp.watch('bower.json', ['bower']);                // bower
    gulp.watch('app/sass/**/*.scss', ['sass']);         // sass
    gulp.watch('app/js/**/*.js', browserSync.reload);   // js
    gulp.watch('app/*.html', browserSync.reload);       // html
});



// ============ очистка папки DIST перед боевой сборкой ============
gulp.task('clean', function() {
    return del('dist'); // удаляем папку dist перед сборкой
});

// ============ сборка в DIST ============
gulp.task('build', ['clean', 'img'], function () {
    var buildFonts = gulp.src('app/fonts/**/*') // переносим шрифты в продакшен
        .pipe(gulp.dest('dist/fonts'))

    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify())) //минифицируем js
        .pipe(gulpif('*.css', csso())) //минифицируем css
        .pipe(gulp.dest('dist'));
});