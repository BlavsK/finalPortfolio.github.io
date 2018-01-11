var xAngle = 0, yAngle = 0;
document.addEventListener('keydown', function(e) {
    switch(e.keyCode) {
        
        case 37:
        yAngle -= 90;
        break;
        
        case 38:
        xAngle += 90;
        break;
        
        case 39:
        yAngle += 90;
        break;
        
        case 40:
        xAngle -= 90;
        break;
};
    $('cube').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)"
}, false);