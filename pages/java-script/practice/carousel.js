let image1 = "https://t3.ftcdn.net/jpg/08/27/09/20/360_F_827092074_tUV40nTZFcjGT69jkS2EJErmYQ9HaDK6.jpg";
let image2 = "https://thumbs.dreamstime.com/b/vibrant-abstract-background-featuring-fusion-colorful-smoke-patterns-blending-warm-cool-tones-to-create-mesmerizing-visual-337209891.jpg";
let image3 = "https://img.freepik.com/free-photo/spectrum-flashes-coloured-light_23-2151792429.jpg?semt=ais_hybrid&w=740&q=80";
let images = [image1, image2, image3]
let i = 0;
function next() {
    i++;
    if (i >= images.length) {
        i = 0
    }
    document.getElementById("images").src = images[i];
}

function back() {
    i--;
    if (i < 0) {
        i = 2;
    }
    document.getElementById("images").src = images[i];
}
let x = 0;
function startStop() {
    if (x = 0) {
        x = 1;
    }
    else {
        x = 0
    }
    if(x = 1){
        setInterval(
            function () {
                next();
            }
            , 5000);
        }

}