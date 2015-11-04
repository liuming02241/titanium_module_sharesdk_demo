/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 *
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *
 */

//bootstrap and check dependencies
if (Ti.version < 1.8) {
  alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// This is a single context application with multiple windows in a stack
(function() {
  //render appropriate components based on the platform and form factor
  var osname = Ti.Platform.osname,
    version = Ti.Platform.version,
    height = Ti.Platform.displayCaps.platformHeight,
    width = Ti.Platform.displayCaps.platformWidth;

  //considering tablets to have width over 720px and height over 600px - you can define your own
  var win = Ti.UI.createWindow({
  	title: "test",
  	layout: 'horizontal',
  	backgroundColor: "white"
  });
  
  
  var testsharesdk = require("com.mamashai.sharesdk");
  testsharesdk.addEventListener("third_login", function(e){
  	//alert(e);
  	alert(JSON.stringify(e));
  });
  
  testsharesdk.addEventListener("hello_event", function(e){
  	Ti.API.log("~~~~~~~~~hello_event received");
  });
  
  var button = Ti.UI.createButton({
  	title : "分享网址",
  	top: 40,
  	left: 40,
  	color: "#333",
  });
  button.addEventListener("click", function(e){
  	testsharesdk.share({
            title: "测试",
            content: "Hello World!!!",
            url: "http://www.mamashai.com/index/jh",
            imageUrl: "http://img.mamashai.com/upload/user/2015-10-17/1814969/logo/01445033796_thumb48.jpeg"
    });
  });
  win.add(button);
  
  var button = Ti.UI.createButton({
  	title : "分享文字",
  	top: 40,
  	left: 40,
  	color: "#333",
  });
  button.addEventListener("click", function(e){
  	testsharesdk.share({
            title: "测试",
            content: "Hello World!!!",
    });
  });
  win.add(button);
  
  var button = Ti.UI.createButton({
  	title : "分享图片",
  	top: 40,
  	left: 40,
  	color: "#333",
  });
  button.addEventListener("click", function(e){
  	testsharesdk.share({
            title: "测试",
            content: "Hello World!!!",
            imageUrl: "http://img.mamashai.com/upload/user/2015-10-17/1814969/logo/01445033796_thumb48.jpeg"
    });
  });
  win.add(button);
  
  var button = Ti.UI.createButton({
  	title : "登录weibo",
  	top: 40,
  	left: 40,
  	color: "#333",
  });
  button.addEventListener("click", function(e){
  	testsharesdk.login({
            tp: "SinaWeibo"
    });
  });
  win.add(button);
  
  var button = Ti.UI.createButton({
  	title : "登录qq",
  	top: 40,
  	left: 40,
  	color: "#333",
  });
  button.addEventListener("click", function(e){
  	testsharesdk.login({
            tp: "QZone"
    });
  });
  win.add(button);
  
  var button = Ti.UI.createButton({
  	title : "登录微信",
  	top: 40,
  	left: 40,
  	color: "#333",
  });
  button.addEventListener("click", function(e){
  	testsharesdk.login({
            tp: "Wechat"
    });
  });
  win.add(button);
  
  win.open();
})();
