/* Javascript Language Extensions.
*/
;(function(W)
{
    W.G = {
        // shalow copy
        extend: function (receiver, giver)
        {
            var _receiver = receiver.prototype || receiver, 
                _giver = giver.prototype || giver, k;
            if(arguments[2])
                for(var i = 2; k = arguments[i]; i++)
                    _receiver[k] = _giver[k];
            else
                for(k in _giver)
                    _receiver[k] = _giver[k];
                    
            return receiver;
        },
        // Creates namespace
        ns: function(nsStr)
        {
            var nsArr = nsStr.split('.'), ret = W;
            
            for(var i = 0, np; np = nsArr[i]; i++)
                ret = ret[np] = ret[np] || {};
            
            return ret;
        }
    };
})(window);









