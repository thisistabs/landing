function setProperty(size) {
    getComputedStyle(document.documentElement).getPropertyValue('--bar-size');
    document.documentElement.style.setProperty('--bar-size', size +'%');
}

function changeAnimationSize(min, max) {
    var animationDuration = Math.random() * (max - min) + min;
    setProperty(Math.round(animationDuration));
}
  
changeAnimationSize(70, 100);
