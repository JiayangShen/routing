
;(function(window)
{
    //Home init
    Module.init = function($pageBody, routeInfo)
    {
        var routes = G.Router.routes, $tiles = $('<div class="tiles"></div>');
        for(var p in routes)
        {
            var ln = p.split('/').length;
            if(ln != 2 || p == '/') continue;
            $('<a>').attr('href', p).text(routes[p].title).appendTo($tiles);
        }
        $pageBody.html($tiles);
    }

})(window);











