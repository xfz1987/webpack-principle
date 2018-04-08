//同步loader
module.exports = function(content, map, meta){
	console.log('得到的数据', content);
	console.log('loader预先得到的数据', this.data.value);
	return '{};'+content;
	// this.callback(null, content, map, meta);
};

// 异步loader
// module.exports = function(content, map, meta){
// 	var callback = this.async();
// 	().then(function(){
// 		if(err){
// 			callback(err);
// 		}else{
// 			callback(null, ......)
// 		}
// 	})
// };

//loader执行之前
module.exports.pitch = function(r1,r2,data){
	data.value = 'yd';
}

//流的方式
module.exports.raw = true;