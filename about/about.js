let leftImage = document.getElementById('leftImage');
let rightImage = document.getElementById('rightImage');

// ページの高さを取得
let pageHeight = document.body.clientHeight;

function animateImage(imgElement, initialTop) {
    let topPosition = initialTop;

    function scrollDown() {
        topPosition += 1;

        if (topPosition > window.innerHeight) {
            topPosition = -imgElement.clientHeight;
        }

        imgElement.style.top = topPosition + 'px';


        requestAnimationFrame(scrollDown);
    }

    scrollDown();
}

animateImage(leftImage, -leftImage.clientHeight);
animateImage(rightImage, -rightImage.clientHeight);