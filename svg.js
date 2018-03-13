
var c = document.getElementById("svgg");

var createCircle = function (x, y, r, color, svg) {

	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", x);
	c1.setAttribute("cy", y);
	c1.setAttribute("r", r);
	c1.setAttribute("fill", color);
	c1.addEventListener('click', changeGreen, true);
	return c1;

};

var jp_scores = [4, 5, 4];
var cn_scores = [11, 8, 10];

var circles = d3.selectAll("circle");
circles.data(jp_scores);
circles.attr("r", function(d){return d;});

var c1 = createCircle(50, 50, 10, "yellow", c);
var c2 = createCircle(50, 50, 10, "gray", c);
var c3 = createCircle(50, 50, 10, "red", c);

c.append(c1);