'use strict';
let orm = require('orm');
let getMovieReport = require("./spider");
orm.connect(`sqlite:///home/zl/WebstormProjects/tw2_PracticeAll/spiderPractice/movie.db`,
    function (err, db) {
        if(err) throw err;
        let Movie = db.define("movie_id",{
            id:String,
            name:String
        });
        let movieDetail= getMovieReport("http://api.douban.com/v2/movie.db/top250?start=25&count=2");
        for (let movie of movieDetail) {
            Movie.create({ id : movie.id, name:movie.title}, function (err, result) {
                if (err) console.log(err);
                if (err) throw err;
            });
        }
    });