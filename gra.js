	//CONFIG SECTION
		
		//set the radius of circle in pixels
		var circle_radius = 20;
		//set circle color
		var circle_color = "#FF0000";
		
		//set picture size in pixels
		var picture_width = 250;
		var picture_height = 381;
		//set the coordinates [px,py,0] of points with differences (as many as You want)
		var points_table = [
			[21,  92,	0],
			[132, 33,	0],
			[157, 170,	0],
			[232, 166,	0],
			[26,  307,	0]
			];
		
		//Texts:
		var s_find_diff = "Znajdź różnice: ";
		var s_congrat = "Gratulacje! Zagadka rozwiązana!<br />Kliknij tutaj, aby zagrać ponownie.";
		
		//END OF CONFIG SECTION
		
		var found = 0;
		
		function isPointInCircle(x, y, center_x, center_y, radius)
		{
			var dx = x - center_x, dy = y - center_y;
			var distsq = dx * dx + dy * dy;
			var rsq = radius * radius;
			
			return distsq < rsq;
		}
		
		$(document).ready(function() {
			
			var ctx = $("#spot_diff_image")[0].getContext("2d");
			$('#spot_diff_image').attr({width:picture_width,height:picture_height,});
			$('#spot_diff_image2').css({width:picture_width,height:picture_height});
			$("#spot_diff_container").css("width", picture_width*2);
			$("#spot_diff_message").html(s_find_diff+ (points_table.length-found));
			
			$("#spot_diff_message").click(function(){
				if(found == points_table.length)
				{
					ctx.clearRect(0, 0, picture_width, picture_height);
					found = 0;
					$("#spot_diff_message").html(s_find_diff+ (points_table.length-found));
					//restore table
					for(var i=0; i<points_table.length; i++)
					points_table[i][2] = 0;
				}
			});
			
			$("#spot_diff_image,#spot_diff_image2").click(function(e){ //Click on one image
				var x = e.pageX-$(this).offset().left;	//Calculate click coordinates
				var y = e.pageY-$(this).offset().top;
				//check if click was near points in table
				for(var i=0; i<points_table.length; i++)
				{
					if(isPointInCircle(x,y,points_table[i][0],points_table[i][1], circle_radius) && (points_table[i][2] == 0)) //Correct!
					{
						++found; //Increment points counter
						
						//draw a circle
						ctx.beginPath();
						ctx.strokeStyle=circle_color;
						ctx.lineWidth=3;
						ctx.arc(points_table[i][0], points_table[i][1], circle_radius, 0, Math.PI*2, true); 
						ctx.closePath();
						ctx.stroke();
						
						//mark point in table as found
						points_table[i][2] = 1;
						//Update message
						$("#spot_diff_message").html(s_find_diff+ (points_table.length-found));
						//If all points all done
						if(found == points_table.length)
						{
							$("#spot_diff_message").html(s_congrat);
						}
					} //if(isPointInCircle(...
				} //for(...)
			}); //$("#image,#image2").click(...
		});