var player = {
    greys: 0,
    lblues: 0,
    blues: 0,
    purples: 0,
    pinks: 0,
    reds: 0,
    money: 0,
    keys: 0,
    idleAccounts: 0,
    SellBots: 0,
    inc: 0,
    click: 1,
    iAccCost: 50,
    SellBotCost: 100
}

var greyPrice = 0.1;
var lbluePrice = 0.3;
var bluePrice = 0.5;
var purplePrice = 1;
var pinkPrice = 5;
var redPrice = 10;

var keyCost = 2.49;

var timeoutID;
var hide;

var inc = 0;

var Grey = document.getElementById("greys");
var LBlue = document.getElementById("lblues");
var Blue = document.getElementById("blues");
var Purple = document.getElementById("purples");
var Pink = document.getElementById("pinks");    
var Red = document.getElementById("reds");
var Money = document.getElementById("moneys");

var GreySell = document.getElementById("greysSell");
var LBlueSell = document.getElementById("lbluesSell");
var BlueSell = document.getElementById("bluesSell");
var PurpleSell = document.getElementById("purplesSell");
var PinkSell = document.getElementById("pinksSell");
var RedSell = document.getElementById("redsSell");

function display() {
    "use strict";
    Grey.firstChild.data = "Comsumer: " + player.greys;
    LBlue.firstChild.data = "Industrial: " + player.lblues;
    Blue.firstChild.data = "Mil-Spec: " + player.blues;
    Purple.firstChild.data = "Restricted: " + player.purples;
    Pink.firstChild.data = "Classified: " + player.pinks;
    Red.firstChild.data = "Covert: " + player.reds;
    var rounded = Math.round(player.money * 10) / 10;
    var fixed = rounded.toFixed(1);
    parseFloat(player.money.toFixed(2));
    Money.firstChild.data = "Money: " + fixed;
    
    GreySell.firstChild.data = "Comsumer: " + player.greys;
    LBlueSell.firstChild.data = "Industrial: " + player.lblues;
    BlueSell.firstChild.data = "Mil-Spec: " + player.blues;
    PurpleSell.firstChild.data = "Restricted: " + player.purples;
    PinkSell.firstChild.data = "Classified: " + player.pinks;
    RedSell.firstChild.data = "Covert: " + player.reds;
    
    document.getElementById("keys").firstChild.data = "Keys: " + player.keys;
    document.getElementById("iAcc").firstChild.data = "Idle Accounts: " + player.idleAccounts;
    document.getElementById("sellbot").firstChild.data = "SellBots: " + player.SellBots;
}

function idle() {
    "use strict";
    var ran = (Math.round(Math.random() * 1000)) + 1;
    if (ran === 1) {
        player.reds = player.reds + 1;
        display();
    } else if (ran > 1 && ran < 5) {
        player.pinks = player.pinks + 1;
        display();
    } else if (ran > 5 && ran < 15) {
        player.purples = player.purples + 1;
        display();
    } else if (ran > 15 && ran < 50) {
        player.blues = player.blues + 1;
        display();
    } else if (ran > 50 && ran < 100) {
        player.lblues = player.lblues + 1;
        display();
    } else if (ran > 100 && ran < 900) {
       player.greys = player.greys + 1;
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

function set_cookie(cookie_name,value) {
    expiry = new Date();   
    expiry.setTime(new Date().getTime() + (10 * 60 * 1000)); 
    var c_value = escape(btoa(JSON.stringify(value))) + 
    "; expires=" + expiry.toUTCString();
    document.cookie=cookie_name + "=" + c_value;
}

function get_cookie(cookie_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + cookie_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(cookie_name + "=");
    }
    if (c_start == -1) return false;
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    if (c_end == -1) {
        c_end = c_value.length;
    }
    c_value = atob(unescape(c_value.substring(c_start,c_end)));
    return JSON.parse(c_value);
}

function sell(x) {
    "use strict";
    switch (x) {
    case 'grey':
        if (greys === 0) {
            showWarning('sellWarning');
        } else {
            player.money = player.money + greyPrice;
           player.greys = player.greys - 1;
            display();
        }
        break;
    case 'lblue':
        if (lblues === 0) {
            showWarning('sellWarning');
        } else {
            player.money = player.money + lbluePrice;
            player.lblues = player.lblues - 1;
            display();
        }
        break;
    case 'blue':
        if (blues === 0) {
            showWarning('sellWarning');
        } else {
            player.money = player.money + bluePrice;
            player.blues = player.blues - 1;
            display();
        }
        break;
    case 'purple':
        if (purples === 0) {
            showWarning('sellWarning');
        } else {
            player.money = player.money + purplePrice;
            player.purples = player.purples - 1;
            display();
        }
        break;
    case 'pink':
        if (pinks === 0) {
            showWarning('sellWarning');
        } else {
            player.money = player.money + pinkPrice;
            player.pinks = player.pinks - 1;
            display();
        }
        break;
    case 'red':
        if (reds === 0) {
            showWarning('sellWarning');
        } else {
            player.money = player.money + redPrice;
            player.reds = player.reds - 1;
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
           player.greys = player.greys - 10;
            player.lblues = player.lblues + 1;
            display();
        }
        break;
    case 'lblue':
        if (lblues < 10) {
            showWarning('tradeupWarning');
        } else {
            player.lblues = player.lblues - 10;
            player.blues = player.blues + 1;
            display();
        }
        break;
    case 'blue':
        if (blues < 10) {
            showWarning('tradeupWarning');
        } else {
            player.blues = player.blues - 10;
            player.purples = player.purples + 1;
            display();
        }
        break;
    case 'purple':
        if (purples < 10) {
            showWarning('tradeupWarning');
        } else {
            player.purples = player.purples - 10;
            player.pinks = player.pinks + 1;
            display();
        }
        break;
    case 'pink':
        if (pinks < 10) {
            showWarning('tradeupWarning');
        } else {
            player.pinks = player.pinks - 10;
            player.reds = player.reds + 1;
            display();
        }
        break;
    default:
        console.log("Something isnt right." + x);
        break;
    }
}

function buy(x) {
    switch (x) {
    case 'key':
        if (player.money - keyCost < 0) {
            showWarning('buyWarning');
            break;
        } else {
            player.keys = player.keys + 1;
            player.money = player.money - keyCost;
            display();
            break;
        }
    case 'idleAccount':
        if (player.money - player.iAccCost < 0) {
            showWarning('buyWarning');
            break;
        } else {
            player.inc = player.inc + 0.5;
            player.idleAccounts += 1;
            player.money = player.money - player.iAccCost;
            display();
            break;
        }
    case 'SellBot':
        if (player.money - player.SellBotCost < 0) {
            showWarning('buyWarning');
            break;
        } else {
            player.SellBots += 1;
            player.money = player.money - player.SellBotCost;
            display();
            break;
        }
    default:
    }
    
}

function load_game() {
    var save_data = get_cookie('IdleCSGO_save');
    console.log(save_data);
    if (!save_data) return;
    console.log(save_data);
    player = save_data;
    display();
}
function save_game() {
    set_cookie('IdleCSGO_save', player);
    showWarning('saveInfo');
}

function showDiv(show) {
    "use strict";
    $('#' + hide).hide();
    $('#' + show).show();
    hide = show;
}

function autoInc() {
    "use strict";
    for (var f = 0; f < player.inc; f++) {
        idle();
    }
    if (player.inc % 1 === 0) {
        setTimeout(autoInc, 1000);
    } else {
        setTimeout(autoInc, 2000);
    }
}

load_game();
autoInc();
setInterval(function () { save_game(); }, 10000);           