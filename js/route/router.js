
;(function($, W)
{
    var R = G.ns('G.Router'), currentPath, 
        location = history.location || document.location,
        $body = $('body'), $pageBody = $body.find('#pageBody');
    G.extend(R, {
        route: function(urlInfo, beforeRoute)
        {
            urlInfo = urlInfo ? urlInfo : '/';
            urlInfo = urlInfo.href ? urlInfo : typeof urlInfo == 'string' ? $('<a>').attr('href', urlInfo)[0] : location;
            var path = decodeURI(urlInfo.pathname).replace(/\/$/, ''),
                route = R.routes[path || '/'];
            
            if(!route || path === currentPath) return;
            
            var args = G.Util.getUrlArgs(urlInfo),
                actions = route.actions || [],
                C = G.Config, A = G.ns(C.ajaxHost),
                moduleName = C.moduleHost + path.replace(/\//g, '.').replace(/\b\w/g, function(m){return m.toUpperCase()}),
                module = G.ns(moduleName),
                routeInfo = {
                    title: route.title || '',
                    path: path || '/',
                    args: args
                };
            
            if(beforeRoute && beforeRoute(route, routeInfo) === false) return;
            
            currentPath = path;
            var needAction = $.when($.needCSS(route.styles), $.needJS(route.scripts));
            !urlInfo.reload && history.pushState(0, 0, urlInfo.href);
            
            !actions.length && needAction.done(function()
            {
                module.init && module.init($pageBody, routeInfo);
            });
            
            for(var i = 0, action; action = actions[i]; i++)
            {
                var ajax = action.ajax,
                    ajaxAction = ajax && A[ajax] && A[ajax](args),
                    methodName = action.method || 'init',
                    arr = methodName.split('.'), ns = module;
                
                if(arr.length > 1)
                {
                    methodName = arr.pop();
                    ns = G.ns(arr.join('.'));
                }
                var method = ns[methodName];
                if(method)
                {
                    method($pageBody, routeInfo, ajaxAction);
                } else
                {
                    (function(ns, methodName, ajaxAction)
                    {
                        needAction.done(function()
                        {
                            var method = ns[methodName];
                            method && method($pageBody, routeInfo, ajaxAction);
                        });
                    })(ns, methodName, ajaxAction);
                }
            }
            
        }
    });
    
    $(function(){ R.route(location, renderPageHeader); });
    
    $(W).on('popstate', function(){ R.route(location, renderPageHeader); });
    
    $(document).on('click', 'a', function(e)
    {
        if(this.getAttribute('href').indexOf('/') == 0)
        {
            e.preventDefault();
            R.route(this, renderPageHeader);
        }
    });
    
    function renderPageHeader(route, routeInfo)
    {
        $body.removeClass().addClass(route.bodyClass || '');
        var $pageNav = $body.find('#pageNav'), 
            routes = R.routes, navs = [], path = routeInfo.path;
        for(var p in routes)
        {
            var ln = p.split('/').length;
            if(ln != 2 || p == '/') continue;
            navs.push($('<li>').addClass(path.indexOf(p) > -1 ? 'active' : '').html($('<a>').attr('href', p).text(routes[p].title)));
        }
        $pageNav.empty();
        path != '/' && $pageNav.html(navs);
        $pageBody.empty();
    }

})(jQuery, window);













