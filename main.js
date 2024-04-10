// window.onload = waits for the window to fully load, then executes the javascript code
window.onload = function () {

    /* Scroll animations - credit: https://www.youtube.com/@beyondfireship */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
    hiddenElementsLeft.forEach((el) => observer.observe(el));
    const hiddenElementsRight = document.querySelectorAll('.hidden-right');
    hiddenElementsRight.forEach((el) => observer.observe(el));

    /* Cursor trail - credit: https://www.youtube.com/@codemorphism */
    /*const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
        "#1cff86", "#11fd7f", "#07fa79", "#07ee72", "#08df6d", "#0ad167", "#0bc361", "#0cb55b", "#0da855", "#0e9a4f", "#0e8d49", "#0e8043",
        "#0e8043", "#0d743d", "#0b6937", "#0a5d31", "#09512b", "#084625", "#063a1e", "#052f18", "#042312", "#03170c", "#010c06", "#000000"

    ];

    circles.forEach(function (circle, index) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function (e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });

    function animateCircles() {

        let x = coords.x;
        let y = coords.y;

        circles.forEach(function (circle, index) {
            circle.style.left = x - 12 + "px";
            circle.style.top = y - 12 + "px";

            circle.style.scale = (circles.length - index) / circles.length;

            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });

        requestAnimationFrame(animateCircles);
    }

    animateCircles();*/

    /* Cursor tracking for aura - credit: https://codepen.io/lcstep/pen/OZmqOy */
    /*document.addEventListener('mousemove', function (e) {
        let sunElement = document.querySelector('.aura');
        if (sunElement) {
            /* Note: offset must be half of .aura width and height 
            sunElement.style.left = e.pageX - 50 + 'px';
            sunElement.style.top = e.pageY - 50 + 'px';
        }
    });*/

    /*let sunElement = document.querySelector('.aura');
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let speed = 0.08; // controls the speed of interpolation

    function moveAura() {
        currentX += (targetX - currentX) * speed;
        currentY += (targetY - currentY) * speed;

        sunElement.style.left = currentX - 50 + 'px';
        sunElement.style.top = currentY - 50 + 'px';

        requestAnimationFrame(moveAura);
    }

    document.addEventListener('mousemove', function (e) {
        targetX = e.pageX;
        targetY = e.pageY;
    });

    moveAura();*/

    let auraContainer = document.getElementById('cursor-effect');
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let speed = 0.08; // controls the speed of interpolation

    function createAura() {
        let auraElement = document.createElement('div');
        auraElement.className = 'aura';
        auraContainer.appendChild(auraElement);
        return auraElement;
    }

    let sunElement = createAura();

    function moveAura() {
        currentX += (targetX - currentX) * speed;
        currentY += (targetY - currentY) * speed;

        sunElement.style.left = currentX - 38 + 'px';
        sunElement.style.top = currentY - 38 + 'px';

        // Create a new aura at the current position
        let newAura = createAura();
        newAura.style.left = currentX - 38 + 'px';
        newAura.style.top = currentY - 38 + 'px';

        // Fade out the new aura over time
        setTimeout(function () {
            newAura.style.opacity = 0;
        }, 0);

        // Remove the new aura after it has faded out
        setTimeout(function () {
            auraContainer.removeChild(newAura);
        }, 1000);

        requestAnimationFrame(moveAura);
    }

    document.addEventListener('mousemove', function (e) {
        targetX = e.pageX;
        targetY = e.pageY;
    });

    moveAura();

    /* Contact input field animations (on focus/click) */
    // A reference to all elements with input-field class
    var inputField = document.getElementsByClassName('input-field');
    var aura = document.getElementById('cursor-effect');

    // Add event listeners to all elements
    for (var i = 0; i < inputField.length; ++i) {

        // Remove the pulseBox class from all elements with input-field class
        inputField[i].addEventListener('focus', function () {
            this.classList.remove('pulseBox')
            this.style.backgroundColor = '#232323' /*131313*/;
            //aura.classList.remove('aura');
        });

        // Re-add the pulseBox class
        inputField[i].addEventListener('blur', function () {
            this.classList.add('pulseBox')
            this.style.backgroundColor = 'rgba(28, 255, 134, 0.151)';
            //aura.classList.add('aura');
        });

    }

    // Alert for redirect on message submission
    document.getElementById('form').addEventListener('submit', function (e) {
        setTimeout(function () {
            alert("Redirecting for a quick security check. Afterwards, a confirmation will be provided if your message was sent. \n\nThanks for your patience!");
        }, 500);
    });
}