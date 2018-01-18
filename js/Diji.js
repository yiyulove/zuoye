function Diji(){
	//Bask.call(this,boxId);
	var raom=parseInt(Math.random()*2+1);
	var suiji;
	switch(raom)
	{
		case 1:suiji="img/plane1.png";break;
		case 2:suiji="img/plane2.png";break;
		case 3:suiji="img/plane3.png";break;
	}
	this.eles=$("<img src='"+suiji+"' />");
	this.eles.addClass("diji")
	this.eles.css({top:-50,left:Math.random()*parseInt($("body").css("width"))})
	this.eles.appendTo("body");
	this.move();
}
//Diji.prototype={};
//Diji.prototype.move()=Bask.prototype.move();


Diji.prototype.move=function(){
	var self=this;
	this.eles.animate({top:1000},9000,function(){
		this.remove();
	})
	this.panduan();
}
Diji.prototype.panduan=function(){
	var diji=$(".diji");
	var zidan=$(".point");
	console.log(diji.length);console.log(zidan.length);
	for(var k=0;k<diji.length;k++)
	{
	for(var j=0;j<zidan.length;j++)
	{
		if($(".point:eq("+j+")").css("top")==$("diji:eq("+k+")").css("top")&&($("diji:eq("+k+")").css("left")-$(".point:eq("+j+")").css("left")>-40||$("diji:eq("+k+")").css("left")-$(".point:eq("+j+")").css("left")<40))
		{
			console.log("aaa");
		    $("diji:eq("+k+")").remove();
		}
	}
	}
}
