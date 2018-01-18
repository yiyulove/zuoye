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
	this.eles=$("<div style='background:url("+suiji+") no-repeat'></div>");
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
	
	
	var timer=setInterval(function(){
			for(var k=0;k<diji.length;k++)
		{
			for(var j=0;j<zidan.length;j++)
			{
				
				if(isTouch($(".point:eq("+j+")"),$(".diji:eq("+k+")")))
				{
					 $(".diji:eq("+k+")").css({"background":"img/plain1_die2.png"});
					 $(".diji:eq("+k+")").remove();
					 $("#panbian").text(parseInt($("#panbian").html())+10);
				}
				if(isTouch($("#box2"),$(".diji:eq("+k+")")))
				{
					 alert("游戏结束");
				}
				
			}
		}
	
	},30)
}
//		if(parseInt($(".point:eq("+j+")").css("top"))-parseInt($(".diji:eq("+k+")").css("top"))<10)
//		{
//			if(parseInt($(".diji:eq("+k+")").css("left"))-parseInt($(".point:eq("+j+")").css("left"))>-40&&parseInt($(".diji:eq("+k+")").css("left"))-parseInt($(".point:eq("+j+")").css("left"))<40)
//			{console.log("aaa");
//			  
//		     
//		      $(".diji:eq("+k+")").css({"background":"img/plain1_die2.png"});
//		       $(".diji:eq("+k+")").remove();
//		      $("#panbian").text(parseInt($("#panbian").html())+10);
//		   }
//		}
//		
//		if(parseInt($(".point:eq("+j+")").css("top"))-parseInt($("#box2").css("top"))<5)
//		{
//			if(parseInt($(".point:eq("+j+")").css("left"))-parseInt($("#box2").css("left"))<-10&&parseInt($(".point:eq("+j+")").css("left"))-parseInt($("#box2").css("left"))>40)
//			{
//	          	alert("游戏结束");
//	        }
//	     }
//	}
