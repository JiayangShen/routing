;(function(window)
{
    var M = G.ns('Module.Music');
    M.init = function($container, routeInfo, ajaxAction)
    {
        ajaxAction.done(function(rsp)
        {
            var types = rsp.types, $tiles = $('<div class="tiles"></div>');
            for(var i = 0, type; type = types[i++];)
            {
                $('<a>').attr('href', '/music/list/?i=' + type.id).text(type.name).appendTo($tiles);
            }
            $container.html($tiles);
        });
    }

})(window);











