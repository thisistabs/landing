$(document).ready(function(){
    var classCycle=['bg1','bg2','bg3','bg4','bg5','bg6','bg7','bg8','bg9','bg10','bg11','bg12','bg13','bg14','b15'];
    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];
    
    $('body').addClass(classToAdd);
    
});