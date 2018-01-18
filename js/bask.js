function Bask(){
	this.ele=$("<div></div>");
	this.ele.addClass("point");
	this.ele.css({top:parseInt($("#box2").css("top"))-10,left:parseInt($("#box2").css("left"))+parseInt($("#box2").css("width"))/2})
	this.ele.appendTo("body");
	this.move();
}
Bask.prototype.move=function(){
	var self=this;
	this.ele.animate({"top":0 },1000,function(){
		this.remove();
	})
}
