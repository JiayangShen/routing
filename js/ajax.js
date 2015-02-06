
;(function(window)
{
    var ajaxs = [
        {
            //options: {},
            name: 'getHomeData',
            url: '/home/getHomeData.ajax'
        },
        {
            name: 'getMusicCategories',
            url: '/music/getMusicCategories.ajax'
        },
        {
            name: 'getMusicList',
            url: '/music/getMusicList.ajax'
        },
        {
            name: 'getMusicInfo',
            url: '/music/getMusicInfo.ajax'
        },
        {
            name: 'getMovieCategories',
            url: '/movie/getMovieCategories.ajax'
        },
        {
            name: 'getMovieList',
            url: '/movie/getMusicList.ajax'
        },
        {
            name: 'getMoviecInfo',
            url: '/movie/getMovieInfo.ajax'
        }
    ];
    
    var A = G.ns(G.Config.ajaxHost);
    for(var i = ajaxs.length - 1, ajax; ajax = ajaxs[i--];)
    {
        A[ajax.name] = function(ajax)
        {
            return function(params, opts)
            {
                var cfg = ajax.options || {};
                opts && $.isPlainObject(opts) && $.extend(cfg, opts);
                cfg.data = params || {};
                
                return $.ajax(ajax.url, cfg);
            };
        }(ajax);
    }

})(window);












