(function(window,document){
	//判断是否生成过
	if(document.getElementById('sharePop')){
		document.getElementById('sharePop').style.display = 'block';
		document.getElementById('shadow').style.display = 'block';
		css.call(document.body,{paddingRight:17+'px',overflow:'hidden'});
		return;
	};
	var document = window.document,
		imgs = document.getElementsByTagName('img'),
		body = document.body,
		pop = document.createElement('div'),
		shadow = document.createElement('div'),
		oStyle = document.createElement('style'),
		wHeight = window.innerHeight || document.documentElement.clientHeight,
		wWidth = window.innerWidth || document.documentElement.clientWidth,
		bHeight = body.clientHeight,
		ua = navigator.userAgent.toLowerCase().replace(/[ ]/g,''),
		av = navigator.appVersion.toLowerCase().replace(/[ ]/g,''),
		version = av.split(';')[1],
		title = document.getElementsByTagName('title')[0].text,
		metas = document.getElementsByTagName('meta'),
		shareCon,
		des,
		keywords;
	
	oStyle.type='text/css';
	
	for(var i = 0;i<metas.length;i++){
		metas[i].name == 'keywords' ? keywords = metas[i].content : '';
		metas[i].name == 'description' ? des = metas[i].content : '';
	}
		
		
	//console.log(ua.indexOf('msie')!=-1 && parseFloat(version.substring(4))<8)
	if(ua.indexOf('msie')!=-1 && parseFloat(version.substring(4))<9){
		//IE7
		
		oStyle.styleSheet.cssText= "#sharePop{width:100%;position:absolute;z-index:100;overflow-x:hidden;overflow-y:scroll;left:0;top:0;}#shadow{lefT:0;top:0;right:0;bottom:0;position:fixed;_position:absolute;background:#000;filter:alpha(opacity=60);opacity:0.6;zoom:10;}.unit{width:200px;height:200px;line-height:200px;*font-size:175px;margin:10px;overflow:hidden;zoom:1;float:left;background:#fff;font-size:0;position:relative;}.unit img{vertical-align:middle;border:none;max-width:100%;max-height:100%;width:auto;height:auto;}.unit .uImg{width:100%;height:100%;text-align:center}.unit span{position:relative;display:block;font-size:12px;line-height:16px;width:56px;margin:-16px auto 0;background:#000;border-radius:3px;color:#fff;text-align:center;padding:1px 2px;}.con{position:relative;max-width:100%;max-height:100%;width:auto;height:auto;}#shareCon{width:910px;margin:0 auto;}#closePanel{position:relative;z-index:9999;float:right;}#closePanel a{display:block;top:20px;right:20px;position:absolute;}";
	}
	else{
		oStyle.innerHTML = "#sharePop{width:100%;position:absolute;z-index:100;overflow-x:hidden;overflow-y:scroll;top:0;left:0;}#shadow{position:fixed;top:0;left:0;right:0;bottom:0;background:#000;filter:alpha(opacity=60);opacity:0.6;z-index:10;}.unit{width:200px;height:200px;margin:10px;overflow:hidden;zoom:1;float:left;background:#fff;line-height:200px;text-align:center;font-size:0;position:relative;}.unit img{vertical-align:middle;border:none;max-width:100%;max-height:100%;width:auto;height:auto;}.unit .uImg{width:100%;height:100%;}.unit span{position:relative;display:block;font-size:12px;line-height:16px;width:56px;margin:-16px auto 0;background:#000;border-radius:3px;color:#fff;}.con{position:relative;}#shareCon{width:910px;margin:0 auto;}#closePanel{position:relative;z-index:9999;float:right;}#closePanel a{display:block;top:20px;right:20px;position:absolute;}";
	}
	
	pop.setAttribute('id','sharePop');
	
	shadow.setAttribute('id','shadow');
	css.call(pop,{width:(wWidth+'px'),height:(wHeight+'px'),overflowX:'hidden',overflowY:'scroll'});
	css.call(shadow,'height',(wHeight+'px'));
	css.call(body,{overflow:'hidden',paddingRight:'17px'});
	
	//遍历图片
	var list = '',
		l = imgs.length,
		urlArr = [],arr=[],
		same;
		
	for(var i = 0; i < l; i++){
		//去重
		var url = imgs[i].getAttribute('src'),
			tImg = new Image();
			same = false,
			error = false;
		
		tImg.src=url;
		tImg.onerror = function(){
			error = true;
		};
		
		if(tImg.complete){
			for(var j=0;j < urlArr.length && urlArr.length >0; j++){
			
			if(urlArr[j] == url){
					same = true ;
					break;
				} 
			}
			if(same || error)continue;
			
			list +="<div class='unit'><div class='uImg'><a href='javascript:void(window.open(\"http%3A//www.zhuangfangke.com/zfk_index/collect.html?img="+imgs[i].src+"&url="+window.location.href+"&title="+encodeURIComponent(title)+"&desc="+encodeURIComponent(des)+"&tags="+encodeURIComponent(keywords)+"\",\"newwindow"+new Date().getTime()+"\",\"height=560,width=840,left=60,top=80,menubar=no,scrollbar=yes\"))'><img src='"+url+"' width='"+tImg.width+"' height='"+tImg.height+"' ></a></div><span>"+tImg.width+"x"+tImg.height+"</span></div>";
			urlArr.push(url);
		}
		//ie9以上需要onload之后
		else{
			if(ua.indexOf('msie')!=-1 && parseFloat(version.substring(4))>8 && imgs[i].complete){
				for(var j=0;j < urlArr.length && urlArr.length >0; j++){
				
				if(urlArr[j] == url){
						same = true ;
						break;
					} 
				}
				if(same || error)continue;
				
				list +="<div class='unit'><div class='uImg'><a href='javascript:void(window.open(\"http%3A//www.zhuangfangke.com/zfk_index/collect.html?img="+imgs[i].src+"&url="+window.location.href+"&title="+encodeURIComponent(title)+"&desc="+encodeURIComponent(des)+"&tags="+encodeURIComponent(keywords)+"\",\"newwindow"+new Date().getTime()+"\",\"height=560,width=840,left=60,top=80,menubar=no,scrollbar=yes\"))'><img src='"+url+"' width='"+tImg.width+"' height='"+tImg.height+"' ></a></div><span>"+imgs[i].width+"x"+imgs[i].height+"</span></div>";
				urlArr.push(url);
			}
		}
	};
	
	
	pop.innerHTML = "<div id='shareCon'></div><div id='closePanel'><a id='shareClose' href='javascript:void(0)'>close</a></div>"
	
	document.getElementsByTagName('head')[0].appendChild(oStyle);
	body.appendChild(pop);
	body.appendChild(shadow);
	shareCon = document.getElementById('shareCon');
	shareCon.innerHTML = list;
	document.getElementById('shareClose').onclick = function(){
		pop.style.display = 'none';
		shadow.style.display = 'none';
		css.call(body,{paddingRight:0,overflow:'visible'})
	};
	
	function css(key,value){
		if(arguments.length == 1){
			for(var name in key){
				this.style[name] = key[name];
			}
		}
		else {
			this.style[key] = value;
		}
		
	}
})(window,document)