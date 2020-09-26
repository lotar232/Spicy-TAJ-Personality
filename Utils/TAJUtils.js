let StopWatch = Java.type("org.apache.commons.lang.time.StopWatch");

function incrementVar(varName, object, defaultValue = 0) {
    setVar(varName, getVar(varName, defaultValue) + object);
}

function isImagesLocked() {
    return Java.type('me.goddragon.teaseai.api.media.MediaHandler').getHandler().isImagesLocked();
}
