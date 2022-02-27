function setProperty(duration) {
    getComputedStyle(document.documentElement).getPropertyValue('--bar-size');
    document.documentElement.style.setProperty('--bar-size', duration +'%');
}

function changeAnimationTime(min, max) {
    var animationDuration = Math.random() * (max - min) + min;
    setProperty(Math.round(animationDuration));
}
  
changeAnimationTime(70, 100);
