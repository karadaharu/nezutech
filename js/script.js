function showAbout(slider){
    bgcolor.attr("x",slider);
}

$(function(){
            var w = window.innerWidth, h = window.innerHeight;

            var labelDistance = 0;

            var vis = d3.select("#myGraph").append("svg:svg").attr("width", w).attr("height", h);
            // var bgimg = vis.append("svg:image").attr("xlink:href", "img/texture.jpg").attr("width", w).attr("height", h).attr("x",w).attr("y",h);
            var bgcolor = vis.append("svg:rect").attr("class","bgcolor").style('fill','#000').attr("width", w*3/5).attr("height", h).attr("x",w*2/5).attr("y",0);
            var logo = vis.append("a").attr("xlink:href", "about/").append("svg:image").attr("xlink:href", "img/nezutech.png").attr("width", 300).attr("height", 88).attr("x",w/5 - 170).attr("y",h/2-70);
            var nodes = [];
            var labelAnchors = [];
            var labelAnchorLinks = [];
            var links = [];
            var urls = [];

                var node = {
                    label : "Katsufumi Matsui"
                };
                nodes.push(node);
                labelAnchors.push({
                    node : node
                });
                labelAnchors.push({
                    node : node
                });
                urls.push("http://katsufumi.ws/");


                node = {
                    label : "Kazunori Ogasawara"
                };
                nodes.push(node);
                labelAnchors.push({
                    node : node
                });
                labelAnchors.push({
                    node : node
                });
                urls.push("https://www.facebook.com/kazunori.ogasawara.39");


                node = {
                    label: "Seico Okamoto"
                };
                nodes.push(node);
                labelAnchors.push({
                    node : node
                });
                labelAnchors.push({
                    node : node
                });
                urls.push("http://seicooo.tumblr.com");


                node = {
                    label: "Shinsuke Yasui"
                };
                nodes.push(node);
                labelAnchors.push({
                    node : node
                });
                labelAnchors.push({
                    node : node
                });
                urls.push("http://shinsuka.petit.cc/");


                node = {
                    label : "Tatsuya Ogusu"
                };
                nodes.push(node);
                labelAnchors.push({
                    node : node
                });
                labelAnchors.push({
                    node : node
                });
                urls.push("http://ogsn.org/");

                node = {
                    label : "Kazumasa Kaneko"
                };
                nodes.push(node);
                labelAnchors.push({
                    node : node
                });
                labelAnchors.push({
                    node : node
                });
                urls.push("https://www.facebook.com/kanekokazumasa");

                node = {
                    label : "Sho Mito"
                };
                nodes.push(node);
                labelAnchors.push({
                    node : node
                });
                labelAnchors.push({
                    node : node
                });
                urls.push("https://www.facebook.com/showsatomio");

            var randlink = [];
            for(var i = 0; i < 4; i++){
                randlink.push(Math.floor(Math.random() * 3));
            }
            for(i = 0; i < nodes.length; i++) {

                        links.push({
                            source : 0,
                            target : 1,
                            weight : 1
                        });
                        links.push({
                            source : 1,
                            target : 2,
                            weight : 1
                        });
                        links.push({
                            source : 2,
                            target : 0,
                            weight : 1
                        });
                        links.push({
                            source : randlink[0],
                            target : 3,
                            weight : 1
                        });
                        links.push({
                            source : randlink[1],
                            target : 4,
                            weight : 1
                        });
                        links.push({
                            source : randlink[2],
                            target : 5,
                            weight : 1
                        });
                        links.push({
                            source : randlink[3],
                            target : 6,
                            weight : 1
                        });

                        links.push({
                            source : Math.floor(Math.random() * 4) + 2,
                            target : Math.floor(Math.random() * 4) + 2,
                            weight : 1
                        });

                labelAnchorLinks.push({
                    source : i * 2,
                    target : i * 2 + 1,
                    weight : 1
                });
            }
            // var ran;
            // if(Math.random() >  0.5){
            //     ran = 1;
            // }else{
            //     ran = 0;
            // }
            var force = d3.layout.force().size([w * 3/2, h]).nodes(nodes).links(links).gravity(0.3).linkDistance(function(){return (Math.random() + 0.3)*350;}).charge(-5000).linkStrength(function(x) {
                return (Math.random()+0.5) * 3;
            });


            force.start();

            var force2 = d3.layout.force().nodes(labelAnchors).links(labelAnchorLinks).gravity(0.1).linkDistance(25).linkStrength(8).charge(-100).size([w, h]);
            force2.start();

            var link = vis.selectAll("line.link").data(links).enter().append("svg:line").attr("class", "link").style("stroke", "#CCC").style("stroke-width", 0.1);

            node = vis.selectAll("g.node").data(force.nodes()).enter().append("a").attr("xlink:href", function (d, i) { return urls[i]; }).attr("target","_blank").append("svg:g").attr("class", "node");

            var radius = [];
            for(i = 0 ; i < nodes.length ; i++){
                Math.floor(radius.push((Math.random() + 0.5) * 8));
            }
            node.append("svg:circle").data(radius).attr("r", function(d) { return d; }).style("fill", "#AAA").style("stroke", "#FFF").style("stroke-width", 0);
            

            node.call(force.drag);


            var anchorLink = vis.selectAll("line.anchorLink").data(labelAnchorLinks);//.enter().append("svg:line").attr("class", "anchorLink").style("stroke", "#999");

            var anchorNode = vis.selectAll("g.anchorNode").data(force2.nodes()).enter().append("svg:g").attr("class", "anchorNode");
            anchorNode.append("svg:circle").attr("r", 0).style("fill", "#FFF");
            anchorNode.append("svg:text").text(function(d, i) {
                return i % 2 == 0 ? "" : d.node.label;
            }).style("fill", "#CCC").style("font-family", "Josefin Sans").style("font-size", 18).style("font-weight", "600");

            var updateLink = function() {
                this.attr("x1", function(d) {
                    return d.source.x;
                }).attr("y1", function(d) {
                    return d.source.y;
                }).attr("x2", function(d) {
                    return d.target.x;
                }).attr("y2", function(d) {
                    return d.target.y;
                });

            };

            var updateNode = function() {
                this.attr("transform", function(d) {
                    return "translate(" + d.x + "," + d.y + ")";
                });

            };


            force.on("tick", function() {

                force2.start();

                node.call(updateNode);

                anchorNode.each(function(d, i) {
                    if(i % 2 == 0) {
                        d.x = d.node.x;
                        d.y = d.node.y;
                    } else {
                        var b = this.childNodes[1].getBBox();

                        var diffX = d.x - d.node.x;
                        var diffY = d.y - d.node.y;

                        var dist = Math.sqrt(diffX * diffX + diffY * diffY);

                        var shiftX = b.width * (diffX - dist) / (dist * 2);
                        shiftX = Math.max(-b.width, Math.min(0, shiftX));
                        var shiftY = 5;
                        this.childNodes[1].setAttribute("transform", "translate(" + shiftX + "," + shiftY + ")");
                    }
                });


                anchorNode.call(updateNode);
                link.call(updateLink);
                anchorLink.call(updateLink);

            });

            // $(".logo").on("click",function(){
            //     node.data(radius).style("fill","#CCC");
            //     link.data(links).style("stroke-width", 0);
            //     bgcolor.append("animate").attr("attributeType","XML").attr("attributeName","x").attr("dur","2000ms").attr("from",w*2/5).attr("to",w).attr("repeatCount",1);
            //     bgcolor.attr("x",w);
            // });
            // //logo click
            // $('body').fadeMover({
            //     'effectType':1,
            //     'outSpeed':500,
            //     'inSpeed':500,
            //     'nofadeOut':'nonmover'
            // });
            
});