var bb8 = document.getElementById("bb8"),
    tween;

// TweenLite.fromTo($bb8, 4, {x: '+1000px', repeat: 10, yoyo:true, onRepeat:onRepeat}, {x: -1000, ease:Power4.SlowMo});

tween = TweenMax.to(bb8, 4, {left: "-450px", delay: 3, yoyo:false, ease:Power0.SlowMo});
