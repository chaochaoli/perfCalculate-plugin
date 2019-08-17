
function perfCalculatePlugin(){}

perfCalculatePlugin.prototype.apply = function(compiler){
    compiler.plugin('done',function(compilation,callback){
        var performance = window.performance;
        var t = performance.timing;
        var times = {};
        //页面加载完成的时间
        times.loadPage = t.loadEventEnd - t.navigationStart;
        //解析 DOM 树结构的时间
        times.domReady = t.domComplete - t.responseEnd;
        //重定向的时间
        times.redirect = t.redirectEnd - t.redirectStart;
        //DNS 查询时间
        times.lookupDomain = t.domainLookupEnd - t.domainLookupStart;
        //内容加载完成的时间
        times.request = t.responseEnd - t.requestStart;
        //执行 onload 回调函数的时间
        times.loadEvent = t.loadEventEnd - t.loadEventStart;
        // DNS 缓存时间
        times.appcache = t.domainLookupStart - t.fetchStart;
        // TCP 建立连接完成握手的时间
        times.connect = t.connectEnd - t.connectStart;
        console.log(times);
        return times;
    })
}
module.exports = perfCalculatePlugin; 