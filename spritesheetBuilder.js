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
  var i;
  var images;
  var img;
  var maxHeight = 0;
  var maxWidth = 0;
  canvas = document.getElementById('canvas');
  images = [];
  for (i=0; i<sprite.imageSources.length ; i++) {
    img = document.createElement('img');
    img.src = sprite.imageSources[i];
    maxHeight = img.height > maxHeight ? img.height : maxHeight;
    maxWidth = img.width > maxWidth ? img.width : maxWidth;
    images.push(img);
  }
  canvas.style.background = '#000';
  canvas.height = maxHeight;
  canvas.width = maxWidth * images.length;
};
