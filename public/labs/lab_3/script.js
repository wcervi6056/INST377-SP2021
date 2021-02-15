let i = 0;
let imgs = [];
            
imgs[0] = "images/onigiri_1.png";
imgs[1] = "images/onigiri_2.png";
imgs[2] = "images/onigiri_3.png";
imgs[3] = "images/onigiri_4.png";
imgs[4] = "images/roll_1.png";
imgs[5] = "images/roll_2.png";
imgs[6] = "images/roll_3.png";

function cycle() {
    document.carousel.src = imgs[i];
	if (i < imgs.length - 1) {
        i++;
    } else {
        i = 0;
    }

	setTimeout(cycle, 3000);
}


cycle();