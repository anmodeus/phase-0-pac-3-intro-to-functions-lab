function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    let reply 
    if  (string !== string.toUpperCase() && string !== "Let's have dinner together!") {
        reply = "I can\'t hear you!";
    }
    else if (string = string.toUpperCase() && string !== "Let's have dinner together!") {
        reply = "YES INDEED!";
    
    }else if (string = "Let's have dinner together!") {
        return "I would love to!";
    }
    return reply;
}
