const Movie = require('../model/movie');

const getMovies = (() => { // 테스트 데이터 생성
    const movieTitle = ['캡틴 아메리카', '닥터 스트레인지', '아이언맨', '블랙팬서', '스파이더맨', '토르', '헐크'];
    const movies = [];

    for (let i = 0; i < movieTitle.length; i++) {
        const title = movieTitle[i];
        movies.push(new Movie({id: i, title}));
    }
    
    return movies;
});

module.exports = {
    getMovies
};