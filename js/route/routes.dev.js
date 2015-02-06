
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
            styles: [],
            scripts: ['/js/module/music/music.js'],
            actions: [
                //{method: 'preInit'},
                //{ajax: 'getHeaderInfo', method: 'renderHeader'},
                {ajax: 'getMusicCategories'}
            ]
        },
        '/music/list': {
            title: 'Music List',
            bodyClass: 'music-list',
            styles: [],
            scripts: ['/js/module/music/list.js'],
            actions: [
                {ajax: 'getMusicList'}
            ]
        },
        '/music/list/detail': {
            title: 'Music Detail',
            bodyClass: 'music-detail',
            styles: [],
            scripts: ['/js/module/music/detail.js'],
            actions: [
                {ajax: 'getMusicInfo'}
            ]
        },
        '/movie': {
            title: 'Movie',
            bodyClass: 'movie',
            styles: [],
            scripts: ['/js/module/movie/movie.js'],
            actions: [
                //{method: 'preInit'},
                //{ajax: 'getHeaderInfo', method: 'renderHeader'},
                {ajax: 'getMovieCategories'}
            ]
        },
        '/movie/list': {
            title: 'Movie List',
            bodyClass: 'movie-list',
            styles: [],
            scripts: ['/js/module/movie/list.js'],
            actions: [
                {ajax: 'getMovieList'}
            ]
        },
        '/movie/list/detail': {
            title: 'Movie Detail',
            bodyClass: 'movie-detail',
            styles: [],
            scripts: ['/js/module/movie/detail.js'],
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








