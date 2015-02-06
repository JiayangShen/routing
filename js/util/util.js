/* 实用工具。依赖于jQuery
*/
;(function(W)
{
    G.Util = {
        /**
        获取URL查询字符串参数
        @param url{String | Object} URL字符串或者location对象或者DOM元素a
        @param isArr{boolean} 决定返回值的类型。默认返回Object类型，
               当 isArr == true 时，返回查询字符串各个值构成的数组
        @return {Object | Array}
        */
        getUrlArgs: function(url, isArr)
        {
            var urlInfo = typeof url == 'string' ? $('<a>').attr('href', url)[0] : url,
                //get query string without the initial ?
                qs = urlInfo.search.slice(1),
                //object to hold data
                args = {}, argArr = [],
                //get individual items
                items = qs ? qs.split("&") : [];
            
            //assign each item onto the args object
            for (var i = 0; items[i]; i++)
            {
                var item = items[i].split('='),
                    name = decodeURIComponent(item[0]),
                    value = decodeURIComponent(item[1]);
                
                if (name.length)
                {
                    args[name] = value;
                    argArr.push(value);
                }
            }
            
            return isArr ? argArr : args;
        },
        wait: function(t)
        {
            var df = $.Deferred();
            setTimeout(function(){df.resolve(t)}, t);
            return df.promise();
        }

    };
})(window);









