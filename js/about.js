$(function(){

            var w = window.innerWidth, h = window.innerHeight;

            var labelDistance = 0;

            var vis = d3.select("#myGraph").append("svg:svg").attr("width", w).attr("height", h);

            var bgcolor = vis.append("svg:rect").attr("class","bgcolor").style('fill','#000').attr("width", w*3/5).attr("height", h).attr("x",w*2/5).attr("y",0);
            var logo = vis.append("a").attr("xlink:href", "../").append("svg:image").attr("xlink:href", "../img/nezutech.png").attr("width", 300).attr("height", 88).attr("x",w/5 - 170).attr("y",h/2-70);
            var about1 = vis.append("svg:text").text("NEZUTECH : is an emergent unit based in Nezu, Tokyo, founded in 2014.");
            about1.style("fill", "#CCC").style("font-family", "Josefin Sans").style("font-size", 16).style("font-weight", "600")
            .attr("x",w*0.5).attr("y",h*0.435);

			var about2 = vis.append("svg:text").text("We offer interdisciplinary creation and experience. NEZUTECH consists of \"artist\",");
            about2.style("fill", "#CCC").style("font-family", "Josefin Sans").style("font-size", 16).style("font-weight", "600")
			.attr("x",w*0.5).attr("y",h*0.475);

			var about3 = vis.append("svg:text").text("\"director\", \"engineer\", \"programmer\", \"researcher\", \"designer\" and \"photographer\".");
            about3.style("fill", "#CCC").style("font-family", "Josefin Sans").style("font-size", 16).style("font-weight", "600")
			.attr("x",w*0.5).attr("y",h*0.515);

});
