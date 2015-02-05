
ChromelessWindow = function ()
{
	var a = ChromelessWindow.arguments;
////////////////////////////////////////////////////////////////////PRIVATE PROPERTIES
	var URL = a[0];
	var title = a[1];
	var titlebarImage = a[2];
	var titlebarHeight = a[3];
	var titleFont = a[4];
	var titleSize = a[5];
	var titleColor = a[6];
	var scrollbars = a[7];
	var w = a[8]+(a[14]*2);
	var h = a[9]+a[14]+a[3];
	var centered = a[10];
	var xPos = a[11];
	var yPos = a[12];
	var borderColor = a[13];
	var borderSize = a[14];
	var minimizeButton = a[15];
	var closeButton = a[16];
	this.author = "Last Point-Team";
	this.version = "Last Point-Team Pop-up 1.0";
	
	
	var win = (navigator.appVersion.indexOf("Windows"))?true:false;
	var ie= (navigator.appName == "Microsoft Internet Explorer")?true:false;
	var v = navigator.appVersion;
	var v55 = v.indexOf("MSIE 5.5")?true:false;
	var v60 = v.indexOf("MSIE 6.0")?true:false;
	var chromelessCompatible = null;
	var titlebarContent = null;
	var chromelessWW = null;
////////////////////////////////////////////////////////////////////PUBLIC METHODS
	openChromeless = function(){if(chromelessWW==null || chromelessWW.closed){openParent();setChrome();moveChromeless();setParentSource();}else{chromelessWW.execScript("showChromeless()");}}
	closeChromeless = function(){if(chromelessWW && !chromelessWW.closed)chromelessWW.close();chromelessWW=null}
	minimizeChromeless = function(){if(chromelessWW && !chromelessWW.closed)chromelessWW.execScript("minimizeChromeless()")}
	setURL = function(){URL = arguments[0];if(chromelessWW && !chromelessWW.closed){chromelessWW.execScript("b.all.canvas.URL='"+URL+"'");chromelessWW.execScript("showChromeless()");}}
	moveChromeless= function()
	{
		if (arguments.length == 0)
		{
			if (centered)
			{
				var tempX = w;
				var tempY = h;
				xPos = (screen.availWidth/2)-(tempX/2);
				yPos = (screen.availHeight/2)-(tempY/2);	
			}
		}
		else if(arguments[0]=="center")
		{
			var tempX = w;
			var tempY = h;
			xPos = (screen.availWidth/2)-(tempX/2);
			yPos = (screen.availHeight/2)-(tempY/2);
		}
		else
		{	
			xPos = arguments[0];
			yPos = arguments[1];
			
		}
		if((chromelessWW)&&(arguments.length != 0))
		{
			if(chromelessCompatible)
			{
				chromelessWW.execScript('var cx='+xPos+';');
				chromelessWW.execScript('var cy='+yPos+';');
				chromelessWW.execScript("showChromeless()");
				chromelessWW.execScript("focus()");
			}
			else
			{
				chromelessWW.moveTo(xPos,yPos);
			}
		}
	}
	resizeChromeless = function()
	{
		w = arguments[0];
		h = arguments[1];
		cH = (h-titlebarHeight)-borderSize;
		cW = w -(borderSize*2);
		if(chromelessWW)
		{
			chromelessWW.execScript('var cw='+w+';');
			chromelessWW.execScript('var ch='+h+';');
			chromelessWW.execScript("b.all.canvas.style.width='"+cW+"'");
			chromelessWW.execScript("b.all.canvas.style.height='"+cH+"'");
			chromelessWW.execScript("b.all.closeButton.style.right='"+borderSize+"'");
			chromelessWW.execScript("b.all.minimizeButton.style.right='"+(borderSize+20)+"'");
			chromelessWW.execScript("showChromeless();focus()");
		}
	}
////////////////////////////////////////////////////////////////////PRIVATE METHODS
	openParent = function()
	{
		chromelessCompatible = win && ie && (v55 || v60);
		var sc = (scrollbars)?"yes":"no";
		if (chromelessCompatible)
		{
			chromelessWW = window.open("about:blank","","top=5000,left=5000,width=100,height=100,scrollbars="+sc);
		}
		else
		{	
			chromelessWW = window.open(URL, "chromelessWindow","top="+yPos+",left="+xPos+",width="+w+",height="+(h-20)+",scrollbars="+sc+",resizable=0");
			chromelessWW.document.title = title;
		}	
	}	
	setChrome = function()
	{
		var cH = (h-titlebarHeight)-borderSize;
		var cW = w -(borderSize*2);
		this.c = "<object style='position:absolute;z-index:2;top:"+titlebarHeight+"px;left:"+borderSize+"px;width:"+cW+"px;height:"+cH+"px;' data='"+URL+"' id='canvas'></object>";
	
		if((titlebarImage==undefined)||(titlebarImage==null)||(titlebarImage==""))
		{
			titlebarContent="";
			tb = false;
		}
		else
		{
			titlebarContent="<img id='menu' unselectable='on' src='"+titlebarImage+"' style='position:absolute; top:0px; left:0px;z-index:2'>";
			tb = true;
		}
		menu = "\<div id='Title' unselectable='on' style='font-family:Arial;font-size:11px;font-weight:bold;position:absolute;top:5px;left:"+borderSize+"px;width:70%;height:15px;cursor:default;font-family:"+titleFont+";font-size:"+titleSize+";color:"+titleColor+";z-index:3'>"+title+"</div>\
			<img id='closeButton' unselectable='on' src='"+closeButton+"' width='15' height='15' style='position:absolute; top:5px; right:"+(borderSize)+"px;z-index:3'>\
			"+titlebarContent+"\<img id='minimizeButton' unselectable='on' src='"+minimizeButton+"' width='15' height='15' style='position:absolute; top:5px; right:"+(borderSize+20)+"px;z-index:3'>\
			<div id='fondo' unselectable='on' style='position:absolute; top:0px; left:0px; width:100%; height:100%; background-color:"+borderColor+";z-index:1'></div>";
		
	}	
	setParentSource = function()
	{
		if(chromelessWW)
		{
			chromelessWW.document.open();
			parentSource = '\
			<html>\n\
			<head>\n\
			<META HTTP-EQUIV="imagetoolbar" CONTENT="no">\n\
			<script>\n\
			var idsi = setInterval(objControl,50);\n\
			function objControl(){objContent = b.all("canvas").object;if(objContent!=null){setUpContent();}};\n\
			</script>\n\
			</head>\n\
			<body>\n\
			<script>\n\
			tempOpener = opener;\n\
			opener = self;\n\
			var c=window.createPopup();\n\
			var b=c.document.body;\n\
			var ox=oy=ix=iy=0;\n\
			var allContent =\"<html><head></head><body>'+menu+c+'</body></html>\";\n\
			b.innerHTML=allContent;\n\
			var cx='+xPos+';\n\
			var cy='+yPos+';\n\
			var cw='+w+';\n\
			var ch='+h+';\n\
			window.showChromeless = function(){\n\
			c.show(cx,cy,cw,ch)}\n\
			var mm=false;\n\
			var cmove=b.all("fondo");\n\
			var cmove2=(b.all("menu"))?b.all("menu"):"";\n\
			var ctitle=b.all("Title");\n\
			ctitle.style.visibility=('+tb+')?"hidden":"visible";\n\
			var cclose=b.all("closeButton");\n\
			var cminimize=b.all("minimizeButton");\n\
			self.resizeChromeless = function(){w = arguments[0];h = arguments[1];cH = (h-'+titlebarHeight+')-'+borderSize+';cW = w -('+borderSize+'*2);cw=w;ch=h;b.all.canvas.style.width=cW;b.all.canvas.style.height=cH;b.all.closeButton.style.right='+borderSize+';b.all.minimizeButton.style.right='+(borderSize+20)+';showChromeless();focus()}\n\
			self.moveChromeless = function(){if(arguments[0]=="center"){var tempX = '+w+';var tempY = '+h+';xPos = (screen.availWidth/2)-(tempX/2);yPos = (screen.availHeight/2)-(tempY/2);}else{xPos = arguments[0];yPos = arguments[1];}cx=xPos;cy=yPos;showChromeless();focus()};\n\
			self.setURL = function(){b.all.canvas.URL=arguments[0];showChromeless()};\n\
			self.closeChromeless = function(){opener=self;self.close()};\n\
			self.dragChromeless = function(){m = (arguments[0])?1:0};\n\
			function setUpContent(){\n\
			objContent.parentWindow.resizeChromeless = self.resizeChromeless;\n\
			objContent.parentWindow.moveChromeless = self.moveChromeless;\n\
			objContent.parentWindow.setURL = self.setURL;\n\
			objContent.parentWindow.closeChromeless = self.closeChromeless;\n\
			objContent.parentWindow.dragChromeless = self.dragChromeless;\n\
			};\n\
			cclose.onclick=function(){opener=self;self.close()};\n\
			cminimize.onclick=function(){if(tempOpener&&!tempOpener.closed){tempOpener.window.focus()}else{opener.blur();blur()}};\n\
			var m=ox=oy=ix=iy=0;\n\
			ctitle.onmousedown=cmove.onmousedown=cmove2.onmousedown=function(){m=1};\n\
			ctitle.onmouseup=cmove.onmouseup=cmove2.onmouseup=function(){m=0};\n\
			document.body.onclick=function(){if (m){ focus();cx=ix+event.screenX-ox;cy=iy+event.screenY-oy;c.show(cx,cy,cw,ch) }else {ix=cx; iy=cy; ox=event.screenX; oy=event.screenY } };\n\
			setInterval("document.body.click()",20);\n\
			onfocus=function(){showChromeless();focus()}\n\
			</script>\n\
			</body>\n\
			</html>\n\
			';
			chromelessWW.document.write(parentSource);
			chromelessWW.document.close();
			chromelessWW.document.title = title;
			chromelessWW.focus();
		}
	}
	////////////////////////////
	//     PUBLIC METHODS    ///
	////////////////////////////
	this.openChromeless = openChromeless;
	this.closeChromeless = closeChromeless;
	this.minimizeChromeless = minimizeChromeless;
	this.setURL = setURL;
	this.resizeChromeless = resizeChromeless;
	this.moveChromeless = moveChromeless;
}
