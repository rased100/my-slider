const images = [
    'images/image-(1).jpg',
    'images/image-(2).jpg',
    'images/image-(3).jpg',
    'images/image-(4).jpg',
    'images/image-(5).jpg',
    'images/image-(6).jpg',
    'images/image-(7).jpg',
    'images/image-(8).jpg',
    'images/image-(9).jpg'
];
let imgIndex = 0;
const imgTag = document.getElementById('img-slider');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    // console.log(imgUrl)
    imgTag.setAttribute('src', imgUrl);
    imgIndex++;
}, 1000)