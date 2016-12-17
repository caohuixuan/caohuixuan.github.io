window.onload=function(){
				var runPage,autoPlay,interval;
			/*	autoPlay=function(index){
					clearTimeout(interval);
					interval=setTimeout(function(){
						runPage.go(index)
					},2000);
				}
			    interval=setTimeout(function(){
					runPage.go(runPage.thisPage()+1);
			    },2000);*/
				runPage=new FullPage({
					id:"myFullPage",
					slideTime:800,
					effect:{
						transform:{
							translate:"Y"
						},
						opacity:[0,1],
					},
					mode:"wheel,touch,nav:navBar",
					easing:"ease",
					callback:function(index){
						switch(index){
							case 0:
							break;
							case 1:
							$(".page"+(index+1)).find(".own").find("img").delay(0).animate({left:'0',top:'20'},1000,'easeInQuad');
							$(".tip1").fadeIn("slow","linear").delay(500).next(".tip2").fadeIn("slow","linear").delay(500).next(".tip3").fadeIn("slow","linear");
							break;
							case 2:
							$(".page"+(index+1)).find(".page3line").find("img").delay(0).animate({left:'960',top:'-60'},1000,'easeInQuad');
							$(".page"+(index+1)).find(".pc1").delay(500).animate({top:'150'},500,'easeInQuad');
							$(".page"+(index+1)).find(".pc2").delay(1000).animate({top:'150'},500,'easeInQuad');
							$(".page"+(index+1)).find(".pc3").delay(1500).animate({top:'150'},500,'easeInQuad');
							$(".page"+(index+1)).find(".pc4").delay(500).animate({top:'300'},500,'easeInQuad');
							$(".page"+(index+1)).find(".pc5").delay(1000).animate({top:'300'},500,'easeInQuad');
							$(".page"+(index+1)).find(".pc6").delay(1500).animate({top:'300'},500,'easeInQuad');
							break;
							case 3:
							$(".page"+(index+1)).find(".page4line").find("img").delay(0).animate({top:'480'},1000,'easeInQuad');
							$(".page"+(index+1)).find(".yidong1").delay(500).animate({top:'80',left:'300'},500,'easeInQuad');
							$(".page"+(index+1)).find(".yidong2").delay(500).animate({top:'220',left:'300'},500,'easeInQuad');
							$(".page"+(index+1)).find(".yidong3").delay(500).animate({top:'80',left:'60%'},500,'easeInQuad');
							$(".page"+(index+1)).find(".yidong4").delay(500).animate({top:'220',left:'60%'},500,'easeInQuad');
							break;
							case 4:
							$(".page"+(index+1)).find(".page5line").delay(0).animate({top:'60'},1000,'easeInQuad');
							$(".page"+(index+1)).find(".hunhe1").delay(800).animate({top:'200'},500,'easeInQuad');
							$(".page"+(index+1)).find(".hunhe2").delay(800).animate({top:'300'},500,'easeInQuad');
							$(".page"+(index+1)).find(".hunhe3").delay(800).animate({top:'400'},500,'easeInQuad');
							$(".page"+(index+1)).find(".hunhe4").delay(800).animate({top:'300'},500,'easeInQuad');
							break;
							default:break;
						}
						index=index+1>4?0:index+1;
						//autoPlay(index);
					}
				});
			};