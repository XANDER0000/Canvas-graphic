var canvas = document.getElementById('gg');
var ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 300;

ctx.beginPath()
			ctx.moveTo(40, 150);
			ctx.lineTo(80, 200);
			ctx.lineTo(120, 100);
			ctx.lineTo(160, 250);
			ctx.lineTo(200, 190);
			ctx.lineTo(250, 150);

			ctx.lineWidth = 1.5;
			ctx.lineCap = "round"

			ctx.stroke();

			ctx.beginPath()
			ctx.arc(80, 200,7,0,Math.PI*2,true);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

			ctx.beginPath()
			ctx.arc(40, 150,7,0,Math.PI*2,true);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

			ctx.beginPath()
			ctx.arc(120, 100,7,0,Math.PI*2,false);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

			ctx.beginPath()
			ctx.arc(160, 250,7,0,Math.PI*2,false);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

			ctx.beginPath()
			ctx.arc(200, 190,7,0,Math.PI*2,false);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

			ctx.beginPath()
			ctx.arc(250, 150,7,0,Math.PI*2,false);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

var canvas = document.getElementById('gg');
canvas.addEventListener('click', function changes() {

		if (canvas.classList.contains('changed')) {
			canvas.classList.remove('changed')
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.beginPath()
			ctx.moveTo(40, 150);
			ctx.lineTo(80, 200);
			ctx.lineTo(120, 100);
			ctx.lineTo(160, 250);
			ctx.lineTo(200, 190);
			ctx.lineTo(250, 150);

			ctx.lineWidth = 1.5;
			ctx.lineCap = "round"

			ctx.stroke();

			ctx.beginPath()
			ctx.arc(80, 200,7,0,Math.PI*2,true);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

			ctx.beginPath()
			ctx.arc(40, 150,7,0,Math.PI*2,true);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

			ctx.beginPath()
			ctx.arc(120, 100,7,0,Math.PI*2,false);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

			ctx.beginPath()
			ctx.arc(160, 250,7,0,Math.PI*2,false);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

			ctx.beginPath()
			ctx.arc(200, 190,7,0,Math.PI*2,false);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

			ctx.beginPath()
			ctx.arc(250, 150,7,0,Math.PI*2,false);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();
		} else {
			canvas.classList.add('changed')
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.beginPath()
			ctx.moveTo(40, 150);
			ctx.lineTo(70, 210);
			ctx.lineTo(100, 130);
			ctx.lineTo(120, 250);
			ctx.lineTo(180, 100);
			ctx.lineTo(250, 150);

			ctx.lineWidth = 1.5;
			ctx.lineCap = "round"

			ctx.stroke();

			ctx.beginPath()
			ctx.arc(70, 210,7,0,Math.PI*2,true);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

			ctx.beginPath()
			ctx.arc(40, 150,7,0,Math.PI*2,true);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

			ctx.beginPath()
			ctx.arc(100, 130,7,0,Math.PI*2,false);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

			ctx.beginPath()
			ctx.arc(120, 250,7,0,Math.PI*2,false);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

			ctx.beginPath()
			ctx.arc(180, 100,7,0,Math.PI*2,false);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();

			ctx.beginPath()
			ctx.arc(250, 150,7,0,Math.PI*2,false);
			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#333'
			ctx.fill();
			ctx.stroke();
		}
})

