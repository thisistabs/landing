$(document).ready(function(){
    var classCycle=['bg1','bg2','bg3','bg4','bg5'];
    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];
    
    $('body').addClass(classToAdd);
    
});