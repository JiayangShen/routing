;(function(window)
{
    var M = G.ns('Module.Music.List.Detail');
    M.init = function($pageBody, routeInfo, ajaxAction)
    {
        ajaxAction.done(function(rsp)
        {
            var m = rsp;
            $('<a class="back">&#10132;</a>')
            .attr('href', '/music/list?i=' + m.typeId)
            .appendTo($pageBody);
            $pageBody.append($('<h1>').text(m.name))
            .append($('<h5>').text('Artist: ' + m.artist))
            .append($('<p>').html(m.lrc));
        });
    }

})(window);











