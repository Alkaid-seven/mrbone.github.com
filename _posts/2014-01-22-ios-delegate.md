---
layout: post
title: "ios的事件代理"
image:
categories:
tag:
---

最近开发一个项目在上线后发现了不少bug，移动端的适配问题很是头疼，最奇葩的是ios的一个问题，在使用jq的事件代理后发现ios下面不工作，遂上网求救，一番搜索下来原来是ios下面除了a和input，其他标签的click事件不冒泡。奶奶的，看来除了IE，奇葩问题在其他浏览器下面也不少啊,这是当时给的说明：

<font color="blue">Let’s not mince words: this is a bug. Safari does not support something that has been supported since 1998 by absolutely every browser ever released.</font>


解决方案有两个
1.为需要冒泡的标签加行内属性onclick=""
2.给需要冒泡的dom增加cursor:pointer属性（我知道你很想说我艹，的确，当时用这个办法解决后我第一句话就是我艹！）

还是贴个代码吧，顺便测试下插件好用不。
	
	    $(function() {
	        // The trick
	        if (/ip(hone|od)|ipad/i.test(navigator.userAgent)) {
	           $("body").css ("cursor", "pointer");
	        }
	        // The test
	        $("body").on("click", "#click", function() {
	            alert("This also works on iOS !");
	        });
	    });
	
	<div id="click">Click here</div>