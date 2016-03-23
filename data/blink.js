setInterval(function() {
  blinkTags = document.getElementsByTagName('blink')

  if (blinkTags.length == 0) {
    return;
  }

  Array.forEach(blinkTags, function (blinkTag, _, _) {
    if (blinkTag.style.visibility === 'hidden') {
      blinkTag.style.visibility = 'visible';
    } else {
      console.log('hide');
      blinkTag.style.visibility = 'hidden';
    }
  });
}, 700);
