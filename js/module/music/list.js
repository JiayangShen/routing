;(function(window)
{
    var M = G.ns('Module.Music.List');
    M.init = function($pageBody, routeInfo, ajaxAction)
    {
        ajaxAction.done(function(rsp)
        {
            var ms = rsp.records, $mList = $('<ul class="m-list">');
            if(ms.length)
            {
                $pageBody.append($('<h2>').text(ms[0].typeName));
            }
            for(var i = 0, m; m = ms[i++];)
            {
                $('<li>').append($('<a>').attr('href', '/music/list/detail/?i=' + m.id).text(m.name)).appendTo($mList);
            }
            $pageBody.append($mList);
        });
    }

})(window);











