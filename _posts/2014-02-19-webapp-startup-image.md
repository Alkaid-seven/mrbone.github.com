---
layout: post
title: "webapp startup image"
image:
categories:
tag:
---

最近一个项目将一个移动端网站优化，做成类似webapp的效果，才发现ios的各种坑，主要总结下启动图片的各种尺寸：

	<!-- iPhone -->
	<link rel="apple-touch-startup-image"
	      media="(device-width: 320px)"
	      href="apple-touch-startup-image-320x460.png">
	<!-- iPhone (Retina) -->
	<link rel="apple-touch-startup-image"
	      media="(device-width: 320px)
	         and (-webkit-device-pixel-ratio: 2)"
	      href="apple-touch-startup-image-640x920.png">
	<!-- iPad (portrait) -->
	<link rel="apple-touch-startup-image"
	      media="(device-width: 768px)
	         and (orientation: portrait)"
	      href="apple-touch-startup-image-768x1004.png">
	<!-- iPad (landscape) -->
	<link rel="apple-touch-startup-image"
	      media="(device-width: 768px)
	         and (orientation: landscape)"
	      href="apple-touch-startup-image-748x1024.png">
	<!-- iPad (Retina, portrait) -->
	<link rel="apple-touch-startup-image"
	      media="(device-width: 768px)
	         and (orientation: portrait)
	         and (-webkit-device-pixel-ratio: 2)"
	      href="apple-touch-startup-image-1536x2008.png">
	<!-- iPad (Retina, landscape) -->
	<link rel="apple-touch-startup-image"
	      media="(device-width: 768px)
	         and (orientation: landscape)
	         and (-webkit-device-pixel-ratio: 2)"
	      href="apple-touch-startup-image-1496x2048.png">