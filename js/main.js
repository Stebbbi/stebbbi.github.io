
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
    sell: 0,
    click: 1,
    iAccCost: 14.99,
    SellBotCost: 50,
    idleAccountsActive: 0,
    SellBotsActive: 0
};

var greyPrice = 0.1;
var lbluePrice = 0.5;
var bluePrice = 1;
var purplePrice = 5;
var pinkPrice = 10;
var redPrice = 50;

var keyCost = 2.49;

var timeoutID;
var hide = 'sell';

function prettify(input) {
    var output = Math.round(input * 100) / 100;
    return output;
}

function display() {
    document.getElementById("greys").firstChild.data = "Consumer: " + player.greys;
    document.getElementById("lblues").firstChild.data = "Industrial: " + player.lblues;
    document.getElementById("blues").firstChild.data = "Mil-Spec: " + player.blues;
    document.getElementById("purples").firstChild.data = "Restricted: " + player.purples;
    document.getElementById("pinks").firstChild.data = "Classified: " + player.pinks;
    document.getElementById("reds").firstChild.data = "Covert: " + player.reds;
    document.getElementById("moneys").firstChild.data = "Money: $" + prettify(player.money);

    document.getElementById("greysSell").firstChild.data = player.greys;
    document.getElementById("lbluesSell").firstChild.data = player.lblues;
    document.getElementById("bluesSell").firstChild.data = player.blues;
    document.getElementById("purplesSell").firstChild.data = player.purples;
    document.getElementById("pinksSell").firstChild.data = player.pinks;
    document.getElementById("redsSell").firstChild.data = player.reds;

    document.getElementById("greysTrade").firstChild.data = player.greys;
    document.getElementById("lbluesTrade").firstChild.data = player.lblues;
    document.getElementById("bluesTrade").firstChild.data = player.blues;
    document.getElementById("purplesTrade").firstChild.data = player.purples;
    document.getElementById("pinksTrade").firstChild.data = player.pinks;
    document.getElementById("redsTrade").firstChild.data = player.reds;

    document.getElementById("keys").firstChild.data = player.keys;
    document.getElementById("iAcc").firstChild.data = player.idleAccounts;
    document.getElementById("sellbot").firstChild.data = player.SellBots;

    document.getElementById("iAccAmount").firstChild.data = player.idleAccountsActive;
    document.getElementById("sellbotAmount").firstChild.data = player.SellBotsActive;

    document.getElementById("iAccCost").firstChild.data = "$" + player.iAccCost;
    document.getElementById("sellbotCost").firstChild.data = "$" + player.SellBotCost;
}

function idle() {
    var ran = (Math.round(Math.random() * 1000)) + 1;
    if (ran === 1) {
        player.reds = player.reds + 1;
        display();
    } else if (ran > 1 && ran < 5) {
        player.pinks += 1;
        display();
    } else if (ran > 4 && ran < 15) {
        player.purples += 1;
        display();
    } else if (ran > 14 && ran < 50) {
        player.blues += 1;
        display();
    } else if (ran > 49 && ran < 100) {
        player.lblues += 1;
        display();
    } else if (ran > 99 && ran < 900) {
        player.greys += 1;
        display();
    }
}

function showWarning(x) {
    $('#' + x).stop().dequeue().stop().show().delay(3000).fadeOut(1000);
}

function set_cookie(cookie_name, value) {
    expiry = new Date();   
    expiry.setTime(new Date().getTime() + (10 * 60 * 1000)); 
    var c_value = escape(btoa(JSON.stringify(value))) + 
        "; expires=" + expiry.toUTCString();
    document.cookie = cookie_name + "=" + c_value;
}

function get_cookie(cookie_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + cookie_name + "=");
    if (c_start === -1) {
        c_start = c_value.indexOf(cookie_name + "=");
    }
    if (c_start === -1) return false;
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    if (c_end === -1) {
        c_end = c_value.length;
    }
    c_value = atob(unescape(c_value.substring(c_start, c_end)));
    return JSON.parse(c_value);
}

function reset_cookie(cookie_name, value) {
    expiry = new Date();   
    expiry.setTime(new Date().getTime() - (10 * 60 * 1000)); 
    var c_value = escape(btoa(JSON.stringify(value))) + 
        "; expires=" + expiry.toUTCString();
    document.cookie = cookie_name + "=" + c_value;
    location.reload();
}

function sell(e, x) {
    switch (x) {
    case 'grey':
        if (player.greys === 0) {
            showWarning('sellWarning');
        } else {
            if (e.altKey) {
                player.money = player.money + (player.greys * greyPrice);
                player.greys = player.greys - player.greys;
                display();
            } else {
                player.money = player.money + greyPrice;
                player.greys -= 1;
                display();
            }
        }
        break;
    case 'lblue':
        if (player.lblues === 0) {
            showWarning('sellWarning');
        } else {
            if (e.altKey) {
                player.money = player.money + (player.lblues * lbluePrice);
                player.lblues = player.lblues - player.lblues;
                display();
            } else {
                player.money = player.money + lbluePrice;
                player.lblues -= 1;
                display();
            }
        }
        break;
    case 'blue':
        if (player.blues === 0) {
            showWarning('sellWarning');
        } else {
            if (e.altKey) {
                player.money = player.money + (player.blues * bluePrice);
                player.blues = player.blues - player.blues;
                display();
            } else {
                player.money = player.money + bluePrice;
                player.blues -= 1;
                display();
            }
        }
        break;
    case 'purple':
        if (player.purples === 0) {
            showWarning('sellWarning');
        } else {
            if (e.altKey) {
                player.money = player.money + (player.purples * purplePrice);
                player.purples = player.purples - player.purples;
                display();
            } else {
                player.money = player.money + purplePrice;
                player.purples -= 1;
                display();
            }
        }
        break;
    case 'pink':
        if (player.pinks === 0) {
            showWarning('sellWarning');
        } else {
            if (e.altKey) {
                player.money = player.money + (player.pinks * pinkPrice);
                player.pinks = player.pinks - player.pinks;
                display();
            } else {
                player.money = player.money + pinkPrice;
                player.pinks -= 1;
                display();
            }
        }
        break;
    case 'red':
        if (player.reds === 0) {
            showWarning('sellWarning');
        } else {
            if (e.altKey) {
                player.money = player.money + (player.reds * redPrice);
                player.reds = player.reds - player.reds;
                display();
            } else {
                player.money = player.money + redPrice;
                player.reds -= 1;
                display();
            }
        }
        break;
    default:
        console.log("Something isnt right." + x);
        break;
    }
}

function tradeup(x) {
    switch (x) {
    case 'grey':
        if (player.greys < 10) {
            showWarning('tradeupWarning');
        } else {
            player.greys -= 10;
            player.lblues += 1;
            display();
        }
        break;
    case 'lblue':
        if (player.lblues < 10) {
            showWarning('tradeupWarning');
        } else {
            player.lblues -= 10;
            player.blues += 1;
            display();
        }
        break;
    case 'blue':
        if (player.blues < 10) {
            showWarning('tradeupWarning');
        } else {
            player.blues -= 10;
            player.purples += 1;
            display();
        }
        break;
    case 'purple':
        if (player.purples < 10) {
            showWarning('tradeupWarning');
        } else {
            player.purples -= 10;
            player.pinks += 1;
            display();
        }
        break;
    case 'pink':
        if (player.pinks < 10) {
            showWarning('tradeupWarning');
        } else {
            player.pinks -= 10;
            player.reds += 1;
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
            player.keys += 1;
            player.money -= keyCost;
            display();
            break;
        }
    case 'idleAccount':
        if (player.money - player.iAccCost < 0) {
            showWarning('buyWarning');
            break;
        } else {
            player.idleAccounts += 1;
            player.idleAccountsActive += 1;
            player.money -= player.iAccCost;

            var AccCost = player.iAccCost * 1.25;
            player.iAccCost = prettify(AccCost);
            display();
            break;
        }
    case 'SellBot':
        if (player.money - player.SellBotCost < 0) {
            showWarning('buyWarning');
            break;
        } else {
            player.SellBots += 1;
            player.sell += 1;
            player.SellBotsActive += 1;
            player.money -= player.SellBotCost;

            var BotCost = player.SellBotCost * 1.25;
            player.SellBotCost = prettify(BotCost);
            display();
            break;
        }
        default:
    }

}

function iAccs(y) {
    if(y == 'minus') {
        if(player.idleAccountsActive == 0) {
            showWarning('notEnough');
        } else {
            player.idleAccountsActive -= 1;
            display();
        }
    } else {
        if(player.idleAccounts <= player.idleAccountsActive) {
            showWarning('tooMany');
        } else {
            player.idleAccountsActive += 1;
            display();
        }
    }
}

function sellbots(y) {
    if(y === 'minus') {
        if (player.SellBotsActive === 0) {
            showWarning('notEnough');
        } else {
            player.SellBotsActive -= 1;
            display();
        }
    } else {
        if (player.SellBots <= player.SellBotsActive) {
            showWarning('tooMany');
        } else {
            player.SellBotsActive += 1;
            display();
        }
    }
}

function load_game() {
    var save_data = get_cookie('IdleCSGO_save');
    console.log(save_data);
    if (!save_data) return;
    $('#welcome').hide();
    console.log(save_data);
    player = save_data;
    display();
}
function save_game() {
    set_cookie('IdleCSGO_save', player);
    showWarning('saveInfo');
}

function reset_game() {
    reset_cookie('IdleCSGO_save', player);
}

function showDiv(show) {
    $('#' + hide).hide();
    $('#' + show).show();
    hide = show;
}

function autoInc() {
    player.inc = player.idleAccountsActive * 0.5;
    if (player.inc % 1 === 0) {
        for (var f = 0; f < player.inc; f++) {
            idle();
        }
        setTimeout(autoInc, 1000);
    } else {
        for (var f = 0; f < player.inc * 2; f++) {
            idle();
        }
        setTimeout(autoInc, 2000);
    }
}

function autoSell() {
    for (var e = 0; e < player.sell; e++) {
        if (player.greys > 0) {
            sell('', 'grey');
        } else if (player.lblues > 0) {
            sell('', 'lblue');
        } else if (player.blues > 0) {
            sell('', 'blue');
        } else if (player.purples > 0) {
            sell('', 'purple');
        } else if (player.pinks > 0) {
            sell('', 'pink');
        } else if (player.reds > 0) {
            sell('', 'red');
        }
    }
    setTimeout(autoSell, 1000);
}

load_game();
autoInc();
autoSell();
setInterval(function () { save_game(); }, 10000);
