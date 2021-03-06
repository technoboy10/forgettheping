// Initialize Firebase
// config here
firebase.initializeApp(config);

var database = firebase.database();
var detector;
document.addEventListener("DOMContentLoaded", function (){
    detector = document.querySelector("#player-detect");
});
Leap.loop({background: true}, function (frame){
    if (frame.hands.length == 2) {
        if (detector) {
            detector.innerText = "READY TO PLAY";
        }
        database.ref("/hand/1").set({
            x: frame.hands[0].palmPosition[2],
            y: frame.hands[0].palmPosition[1]
        });

        database.ref("/hand/2").set({
            x: frame.hands[1].palmPosition[2],
            y: frame.hands[1].palmPosition[1]
        });
    } else {
        if (detector) {
            detector.innerText = "NO PLAYERS DETECTED";
        }
    }
});
