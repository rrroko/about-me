// 左側の画像要素を取得
let leftImages = document.querySelectorAll('.left-scrolling-container .scrollingImage');

// 右側の画像要素を取得
let rightImages = document.querySelectorAll('.right-scrolling-container .scrollingImage');

// ページの高さを取得
let siteHeight = document.documentElement.scrollHeight;

// 左側の画像アニメーション
leftImages.forEach((imgElement, index) => {
    let topPosition = -index * imgElement.clientHeight;

    function scrollDown() {
        topPosition += 1;

        if (topPosition > siteHeight) {
            topPosition = -imgElement.clientHeight;
        }

        imgElement.style.top = topPosition + 'px';

        requestAnimationFrame(scrollDown);
    }

    scrollDown();
});

// 右側の画像アニメーション
rightImages.forEach((imgElement, index) => {
    let topPosition = -index * imgElement.clientHeight;

    function scrollDown() {
        topPosition += 1;

        if (topPosition > siteHeight) {
            topPosition = -imgElement.clientHeight;
        }

        imgElement.style.top = topPosition + 'px';

        requestAnimationFrame(scrollDown);
    }

    scrollDown();
});
