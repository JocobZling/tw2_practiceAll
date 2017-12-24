'use strict';
function getMovieReport(url) {
    let request = require('sync-request');
    let res = request('GET', url);
    //console.log(res);
    try {
        let subjects = JSON.parse(res.getBody().toString()).subjects;
        console.log(subjects);
        let result = [];
        subjects.forEach(subject=> {
            result.push({id:subject.id,title:subject.title});
        });
        console.log(result);
        return result;
    }
    catch (err)
    {
        return ''
    }
}

getMovieReport('http://api.douban.com/v2/movie/top250?start=6&count=3');

module.exports = {
    getMovieReport
};