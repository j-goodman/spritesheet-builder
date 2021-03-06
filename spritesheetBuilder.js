var sprite;
sprite = {
  imageSources: [],
};

sprite.imageSources = [
  'images/0.png',
  'images/1.png',
  'images/2.png',
  'images/3.png',
  'images/4.png',
];

onload = function () {
  var canvas;
  var ctx;
  var i;
  var images;
  var img;
  var link;
  var labelWidth = document.getElementById('image-width');
  var maxHeight = 0;
  var maxWidth = 0;
  var totalWidth = document.getElementById('total-width');
  canvas = document.getElementById('canvas');
  images = [];
  for (i=0; i<sprite.imageSources.length ; i++) {
    img = document.createElement('img');
    img.src = sprite.imageSources[i];
    maxHeight = img.height > maxHeight ? img.height : maxHeight;
    maxWidth = img.width > maxWidth ? img.width : maxWidth;
    labelWidth.innerText = maxWidth + 'px';
    images.push(img);
  }
  totalWidth.innerText = maxWidth * images.length + 'px';
  canvas.style.background = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')';
  canvas.height = maxHeight;
  canvas.width = maxWidth * images.length;
  ctx = canvas.getContext('2d');
  for (i=0 ; i<images.length ; i++) {
    ctx.drawImage(images[i], maxWidth * i, 0);
  }
  link = document.getElementById('download-link');
};
