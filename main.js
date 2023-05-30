// main.js
import Stars from './stars.js';
let canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
function setup() {

    if (canvas.getContext) {

        document.body.style.backgroundColor = "#000";

        // Move to the center of the canvas
        // Set the canvas width and height
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        //document.body.appendChild(canvas);
        ctx.fillStyle = "#000";

        //ctx.fillRect(1080, 1920, canvas.width, canvas.height);
        ctx.translate(canvas.width / 2, canvas.height / 2);


        // you can start drawing on the canvas now
        //ctx.fillRect(10, 10, 50, 50);
        //let star = new Stars(canvas.width, canvas.height, 10);
        let listOfStars = [];
        let littlestar = []

        for (let i = 0; i < 10000; i++) {

            let randomX = Math.random() + 4.2 * canvas.width;
            let randomY = Math.random() + 4.2 * canvas.height;

            let star = new Stars(randomX, randomY, 2);
            listOfStars.push(star);

            let randomX1 = Math.random() + 4.2 * canvas.width;
            let randomY1 = Math.random() + 4.2 * canvas.height;
            let starLittle = new Stars(randomX1, randomY1, 1.2);
            littlestar.push(starLittle)


        }

        for (let i = 0; i < listOfStars.length; i++) {
            let star1 = listOfStars[i];
            for (let j = 0; j < listOfStars.length; j++) {
                let star2 = listOfStars[j]
                if (star1.x === star2.x && star1.y === star2.y) {
                    star2.x = star2.x * Math.random();
                    star2.y = star2.y * Math.random();

                }
            }
        }


        //animate(listOfStars);
        let allStars = listOfStars.concat(littlestar);
        animate(allStars);




    }


}

function animate(lookatstar) {

    ctx.clearRect(-760, -420, canvas.width/2, canvas.height/2);

    let update = [];

      // Traditional for loop
    for (let i = 0; i < lookatstar.length; i++) {
        let star = lookatstar[i];
        star.update();
        star.show(ctx);

    }


    requestAnimationFrame(() => animate(lookatstar));
}


setup();

