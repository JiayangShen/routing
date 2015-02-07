
;(function(W)
{
    G.ns('G.Router').routes = {
        '/': {
            title: 'Home',
            bodyClass: 'home',
            //styles: [],
            scripts: ['/js/module/home.js']
        },
        '/music': {
            title: 'Music',
            bodyClass: 'music',
            styles: ['/music.min.css'],
            scripts: ['/js/module/music/music.min.js'],
            actions: [
                //{method: 'preInit'},
                //{ajax: 'getHeaderInfo', method: 'renderHeader'},
                {ajax: 'getMusicCategories'}
            ]
        },
        '/music/list': {
            title: 'Music List',
            bodyClass: 'music-list',
            styles: ['/music.min.css'],
            scripts: ['/js/module/music/music.min.js'],
            actions: [
                {ajax: 'getMusicList'}
            ]
        },
        '/music/list/detail': {
            title: 'Music Detail',
            bodyClass: 'music-detail',
            styles: ['/music.min.css'],
            scripts: ['/js/module/music/music.min.js'],
            actions: [
                {ajax: 'getMusicInfo'}
            ]
        },
        '/movie': {
            title: 'Movie',
            bodyClass: 'movie',
            styles: ['/music.min.css'],
            scripts: ['/js/module/movie/movie.min.js'],
            actions: [
                //{method: 'preInit'},
                //{ajax: 'getHeaderInfo', method: 'renderHeader'},
                {ajax: 'getMovieCategories'}
            ]
        },
        '/movie/list': {
            title: 'Movie List',
            bodyClass: 'movie-list',
            styles: ['/music.min.css'],
            scripts: ['/js/module/movie/movie.min.js'],
            actions: [
                {ajax: 'getMovieList'}
            ]
        },
        '/movie/list/detail': {
            title: 'Movie Detail',
            bodyClass: 'movie-detail',
            styles: ['/music.min.css'],
            scripts: ['/js/module/movie/movie.min.js'],
            actions: [
                {ajax: 'getMovieInfo'}
            ]
        },
        '/literature': {
            title: 'Literature',
            bodyClass: 'literature'
        },
        '/photography': {
            title: 'Photography',
            bodyClass: 'photography',
        }
    };

})(window);








