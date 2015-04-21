var greys = 0;
var lblues = 0;
var blues = 0;
var purples = 0;
var pinks = 0;
var reds = 0;

var greyPrice = 0.1;
var lbluePrice = 0.3;
var bluePrice = 0.5;
var purplePrice = 1;
var pinkPrice = 5;
var redPrice = 10;

var money = 0;

var timeoutID;

var Grey = document.getElementById("greys");
var LBlue = document.getElementById("lblues");
var Blue = document.getElementById("blues");
var Purple = document.getElementById("purples");
var Pink = document.getElementById("pinks");
var Red = document.getElementById("reds");

var GreySell = document.getElementById("greysSell");
var LBlueSell = document.getElementById("lbluesSell");
var BlueSell = document.getElementById("bluesSell");
var PurpleSell = document.getElementById("purplesSell");
var PinkSell = document.getElementById("pinksSell");
var RedSell = document.getElementById("redsSell");

function display() {
    "use strict";
    Grey.firstChild.data = "Comsumer: " + greys;
    LBlue.firstChild.data = "Industrial: " + lblues;
    Blue.firstChild.data = "Mil-Spec: " + blues;
    Purple.firstChild.data = "Restricted: " + purples;
    Pink.firstChild.data = "Classified: " + pinks;
    Red.firstChild.data = "Covert: " + reds;

    GreySell.firstChild.data = "Comsumer: " + greys;
    LBlueSell.firstChild.data = "Industrial: " + lblues;
    BlueSell.firstChild.data = "Mil-Spec: " + blues;
    PurpleSell.firstChild.data = "Restricted: " + purples;
    PinkSell.firstChild.data = "Classified: " + pinks;
    RedSell.firstChild.data = "Covert: " + reds;
}

function idle() {
    "use strict";
    var ran = (Math.round(Math.random() * 1000)) + 1;
    if (ran === 1) {
        reds = reds + 1;
        display();
    } else if (ran > 1 && ran < 5) {
        pinks = pinks + 1;
        display();
    } else if (ran > 5 && ran < 15) {
        purples = purples + 1;
        display();
    } else if (ran > 15 && ran < 50) {
        blues = blues + 1;
        display();
    } else if (ran > 50 && ran < 100) {
        lblues = lblues + 1;
        display();
    } else if (ran > 100 && ran < 900) {
        greys = greys + 1;
        display();
    }
}

//function hideWarning() {
//    $("#warning").fadeOut(1);
//}

function showWarning(x) {
    "use strict";
    $('#' + x).stop().dequeue().stop().show().delay(3000).fadeOut(1000);
    //$("#warning").fadeIn(1);
    //clearTimeout(timeoutID);
    //timeoutID = setTimeout(hideWarning, 3000);
}

function sell(x) {
    "use strict";
    switch (x) {
    case 'grey':
        if (greys === 0) {
            showWarning('sellWarning');
        } else {
            money = money + greyPrice;
            greys = greys - 1;
            display();
        }
        break;
    case 'lblue':
        if (lblues === 0) {
            showWarning('sellWarning');
        } else {
            money = money + lbluePrice;
            lblues = lblues - 1;
            display();
        }
        break;
    case 'blue':
        if (blues === 0) {
            showWarning('sellWarning');
        } else {
            money = money + bluePrice;
            blues = blues - 1;
            display();
        }
        break;
    case 'purple':
        if (purples === 0) {
            showWarning('sellWarning');
        } else {
            money = money + purplePrice;
            purples = purples - 1;
            display();
        }
        break;
    case 'pink':
        if (pinks === 0) {
            showWarning('sellWarning');
        } else {
            money = money + pinkPrice;
            pinks = pinks - 1;
            display();
        }
        break;
    case 'red':
        if (reds === 0) {
            showWarning('sellWarning');
        } else {
            money = money + redPrice;
            reds = reds - 1;
            display();
        }
        break;
    default:
        console.log("Something isnt right." + x);
        break;
    }
}

function tradeup(x) {
    "use strict";
    switch (x) {
    case 'grey':
        if (greys < 10) {
            showWarning('tradeupWarning');
        } else {
            greys = greys - 10;
            lblues = lblues + 1;
            display();
        }
        break;
    case 'lblue':
        if (lblues < 10) {
            showWarning('tradeupWarning');
        } else {
            lblues = lblues - 10;
            blues = blues + 1;
            display();
        }
        break;
    case 'blue':
        if (blues < 10) {
            showWarning('tradeupWarning');
        } else {
            blues = blues - 10;
            purples = purples + 1;
            display();
        }
        break;
    case 'purple':
        if (purples < 10) {
            showWarning('tradeupWarning');
        } else {
            purples = purples - 10;
            pinks = pinks + 1;
            display();
        }
        break;
    case 'pink':
        if (pinks < 10) {
            showWarning('tradeupWarning');
        } else {
            pinks = pinks - 10;
            reds = reds + 1;
            display();
        }
        break;
    default:
        console.log("Something isnt right." + x);
        break;
    }
}

//function showIdle() {
//    var e = document.getElementById('idle');
//    var f = document.getElementById('sell');
//    e.style.display = 'block';
//    f.style.display = 'none';
//}

function showSell() {
    "use strict";
    //var e = document.getElementById('idle');
    var f = document.getElementById('sell');
    //e.style.display = 'none';
    f.style.display = 'block';
}