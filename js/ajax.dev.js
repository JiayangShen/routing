
;(function(window)
{
    var A = G.ns(G.Config.ajaxHost);
    A.getMusicCategories = function(params, opts)
    {
        return $.ajax('/server/music/music.json');
    };
    
    A.getMusicList = function(params, opts)
    {
        var df = $.Deferred();
        $.ajax('/server/music/list.json')
        .done(function(rsp)
        {
            var typeId = params.i, list = rsp.list, ret = [];
            for(var i = 0, m; m = list[i++];)
                if(m.typeId == typeId) ret.push(m);
            df.resolve({records: ret, msg: '', code: '0'});
        })
        .fail(function(){ df.reject(arguments[0], arguments[1], arguments[2]); });
        
        return df.promise();
    };
    
    A.getMusicInfo = function(params, opts)
    {
        var df = $.Deferred();
        $.ajax('/server/music/list.json')
        .done(function(rsp)
        {
            var id = params.i, list = rsp.list;
            for(var i = 0, m; m = list[i++];)
            {
                if(m.id == id) 
                {
                    df.resolve(G.extend(m, {msg: '', code: '0'}));
                    break;
                }
            }
        })
        .fail(function(){ df.reject(arguments[0], arguments[1], arguments[2]); });
        
        return df.promise();
    };
    

})(window);












