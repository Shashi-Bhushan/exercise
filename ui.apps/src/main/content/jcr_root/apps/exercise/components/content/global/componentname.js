use(["/libs/wcm/foundation/components/utils/AuthoringUtils.js"], function (AuthoringUtils) {
    var touchmodeidentifier = {};
    if(AuthoringUtils.isTouch){
        touchmodeidentifier.isTouch = true;
    }else{
		touchmodeidentifier.isTouch = false;
    }
    return touchmodeidentifier;
});