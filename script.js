const messages = [
    "Welcome to CCS!", 
    "Enjoy your stay!", 
    "Hello, Freshies!", 
    "Hello, World!", 
    "Trojans! Charge!", 
    "Trojans! Hya Tigidig!", 
    "Laban lang, Freshies!", 
    "Compiling memories....", 
    "Missing semicolon! Missing you <3",
    "He's the GOAT!",
    "CS > IT ??",
    "IT > CS ??",
    "BLIS > everyone ??",
    "Shoutout to BLIS Students !",
    "PCs not included",
    "We can't use the IOS stuff btw",
    "Linux superiority",
    "#HeartforGov2025",
    "Shifting? But you just got here!",
    "C++++++++++++++++++++",
    "Basically a math major.",
    "Hah! Nerd!",
    "We don't build PCs here",
    "The better UCS",
    "Why is ComEng in a different college?",
    "Where the white sands and the corals",
    "Kiss the dark blue southern seas",
    "Loyal will we be to Silliman",
    "You came here expecting video games?",
    "Love yourself as always!",
    "Expect the minors to be harder",
    "ChatGPT not included.",
    "That's what she said!!",
    "Gemini is better than ChatGPT",
    "Bantay Sa Computer Shop..",
    "If you have questions, go to Shawn",
    "Bantay Sa Internet-Tan..",
    "Tig-ayo og printer (??)",
    "switch(courses)",
    "printf('hello world');",
    "scanf(&food)",
    "Shawn Lawrence Alpas, Remember that",
    "Carlos Macalolot has all your answers",
    "Joy to the world",
    "GRRRRRRRRRRRRRRRRRRRRR",
    "Skibi- SHUT UP !!",
    "Our color is gray btw !!",
    "New CCS Shirt incoming !!!",
    "Glory to our AI overlords (ew)",
    "We have all the weird kids- Shush!",
    "You'll make it! Fighting!",
    "Why are you reading this?",
    "Say hi to Joey for me!",
    "Rise!, Fellow Sillimanians!",
    "The future is now, old man!",
    "Please fund us",
    "Damn that's crazy",
    "Imma throw this plate like I'm Plato",
    "Do NOT copy code directly",
    "If you copied code, change it a bit",
    "No, we don't just make video games",
    "For the last time, No video games!",
    "At least we're close to Crosscut",
    "Careful, the School of Law is next door",
    "If you see a badminton match, run",
    "UCS Building, New Badminton court!",
    "Tables not included(?)",
    "Someone give the CRs a trash can (tru)",
    "We have bidets tho",
    "The rooms are colder than Antarctica",
    "REAL",
    "Home of the Riveras",
    "Join the Aesthetics Committee (pls)",
    "We don't bite!, We promise!",
    "NOT Made with Wix",
    "Made purely in vanilla",
    "Homemade websites. best websites",
    "Made with love !",
    "Segmentation Fault!",
    "This is a list element",
    "Welcome to %#@!%@%^*&}",
    "Goodbye brodie!",
    "You too can make a website like this",
    "One word. Javascript.",
    "They're not like us",
    "Naming things and cache invalidation",
    "Go to sleep already",
    "Press Alt + F4 for a secret",
    "No Windows 11 support (Boooo)",
    "Good day, mga real people!",
    "Javascript is not the same as Java",
    "public static void main(String[] args)",
    "Wait, PHP is a programming language?",
    "Shine bright like a ruby!",
    "We got free cookies",
    "Sorry Roblox players, we don't do Lua",
    "Wassup my Rustaceans!",
    "Indention, needed in essays and Python",
    "It's best to learn C but not use it",
    "TypeScript is the GOAT",
    "My favorite note is C#",
    "Go Go Go!, Gophers!",
    "Hello, My Nim is *******",
    "Password:hahauthought",
    "You gotta be swift!",
    "Learn Kotlin only with Android Studio",
    "Visual Studio is NOT Visual Studio Code",
    "The fastest language is still Assembly",
    "Stack Overflow!, Too much awesomeness!",
    "Discrete Structures. Ugh.",
    "Shine like a star with gleam!",
    "Learning Esolangs are fun!",
    "-. .. -.-. . / ..-. . . -",
    "\\(@^v^@)//",
    "//This is a comment",
    "CCS? CSS?? (Unsa gud)",
    "Touch Haskell only if you dare",
    "I use neovim btw",
    "It works in my computer",
    "Regex is never the best",
    "Ta, Valo?",
    "Naunsa mana",
    "DRY is good but it's better to WET",
    "pfffkckkcckckcj",
    "cp5-lastname-finallllll-final.c",
    "Ctrl+z is not your best friend",
    "don't forget to save after every line",
    "DevC. Grr.",
    "When in doubt? Go to Google",
    "Goodluck with flexbox !!",
    "Embrace your adventurous spirit for GE10",
    "beware the pancit",
    "welovesirte",
    "The 5 C's",
    "TAKE NOTE OF THE FINES",
    "NO iD? No problem! Go inside quick!",
    "HAVE PLASTIC CONTAINERS? ASK FOR PAPER BAG",
    "If you love the winter, go to CC10!",
    "CCS, ARE YOU THEEREEE?",
    "some of us are as red as SILLIMAN'S FLAG",
    "aesthetics com? no. suffering.",
    "Are we reminiscing the 'good' 'old' 'days'",
    "Ninings?",
    "Committee? Nah, new friends!",
    "Aesthetics committee is not arts club.",
    "Looking for willing mo canvas",
    "Kadaniels?",
    "Got any unused art materials?",
    "Don't be a ghoster!",
    "Remember to have fun in college!",
    "Your IP Address is mine >:3",
    "YOU CANNOT BEAT US!",
    "Use of moved value",
    "ZA WARUDO !!",
    "SASUKEEEEEEE",
    "Trojan Virus detected!",
    "69 malware detected",
    "Not in my christian minecraft server!",
    "Please DON'T KISS THE WATER FOUNTAIN!",
    "https://dayssincelastjavascriptframework.com/"
];
const watery = [
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc29mbGc1Z2djZ3hrN2ZyM2tjNDY3Y3Z5bDI5YzJsZmpva2E5ZXhxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lkceXNDw4Agryfrwz8/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmZmcmppZzJiaWx6cXVlM3Jrc3BkdDNmZjEwMW16ZWNoanhhM3Z5ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fcuGxOs0piPwRjjL1h/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTE2ZWF1dmIyaGxvbDk2bmY2YndwanFrOXh6NjRmODNuMHo5enYwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fAnLIgBzSTOfe/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW90eWJkemViems5bXVnNTJ0eXhsZXYyM3dleDY3cmNkcmpkNTl6ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CQl0tM5gYyqQg/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWhsaGM1eHEwNXdzN2dhZ25tbjJ2cG9xODZ2Zjdwb3owZzlnMm05MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l19ipdY2pjK3d8Omtz/giphy.gif"
];
const afternoon = [
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnFsandvZ3o2YnY3dDRsdW03dmR3cDE1NHRvMjJ6ZzVzYXV6MDljaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xWMPYx55WNhX136T0V/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG5iOGc3OXlxNzR2MjFiNnlhenJrcHlwdXNrMWNmZjd4ODIzZHlrMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MHboUUIoxzOKs/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWlqYTVveGd0YTczb3lzbmU5YWE2a3E0Zjc1NXh6aWk2c3gyemIyeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CN9sOyaRT7YVG/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWw5YTYwNTJjYzFzbjRpaTNjaG16ZGtldWNlNWt4eHgyOThiYm5oMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J5A1a5C0j1bQuteCtq/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmlvMGpvY3I1c2lldm9kd3Y3bGg5eGVyNjB4a2x1ZzhuYWl4aXN4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TexuKBfvpWjaIuACrz/giphy.gif"
];
const morning = [
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXJrd3FnMXc4OXMwajlxbGJpOHh3anI4cTAybHB5Y3dpZWVlYzBwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IeSXccYMz3K4U/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXdkYm5vYzYyZzV5ZmN1OXE3dWJmcW4wb2lxeGd3MzAwcXJ0Z2c4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pI43YlhMoPqsE/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHRiaTNwNW9vd2VpMXJxd3lwdno5aXN3dWQ5d2sxNmFma2NoMjdydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LXxWO0pgGEma8W40A9/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2YzdDcwMzk1M2IydnE0bXB2eWMxNHU4eXN1MWlhN3UwMTBueWxmMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10GVNnqO2ZoAh2/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmtkdjNrOW90bjVienRudTlxd2JiNWszbGF2ZW4zdHhjcmhmOGJ5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2wh8ugh52dGSJYrA26/giphy.gif"
];
const night = [
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW90eGM5YzZtYXp2NzJ2bmZmNTMxbmhvYmt6bzFwbzlkZ2JtODVwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RkDZq0dhhYHhxdFrJB/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDgyeWlueGc2NGVwNXBreGx6NjE3Z3g1MG5tcWpxM3BueGE1ZmJxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OMFfLpauGoT4c/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjVwM3R4Ym84cG9veDV2OGRxMHk3ZGxlajhjN3BjbTl3dm1wcW5iMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Cxpnv3zHkwFpRbVQ1K/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDg2czNwNGJ4MnE5cXd5amd2YzVuYzkwdm5idXI0NTYzaDZlN3NyayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1yld7nW3oQ2IyRubUm/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW00bTA0amFjYTB0bzV2eXVubGRueHJyN3kyMm9ya2w1YzNydWNqZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o72F45uO7dRw4sEWQ/giphy.gif"
];
const jukebox = [
    new Audio("./jukebox/Aigokeros.mp3"),
    new Audio("./jukebox/capricorntalks.ogg"),
    new Audio("./jukebox/Inst.ogg"),
    new Audio("./jukebox/Militaristic.mp3"),
    new Audio("./jukebox/Pause.ogg"),
    new Audio("./jukebox/Rebellion.mp3"),
    new Audio("./jukebox/Steady Bustling.mp3"),
];
const songs = ["aigokeros", "capricorni", "fishes", "militaristic", "stargaze", "rebellion", "steady"];
let currentsong;
let msgBox;
let blink;
let cc = 1;
let typing = true;
let deleted = true;
let chosen;
let page = "one";
let srng = 0;
let bps = 0;

function showMod(mode, name) {
    let modal = document.querySelector('.modal');
    let target = document.getElementById(name);
    let head = document.querySelector('.head');
    switch (mode) {
        case "prof":
            head.style.backgroundImage = `${target.style.getPropertyValue('--pfp')}`;
            head.style.borderRadius = '100px';
            document.querySelector('.body').textContent = target.style.getPropertyValue('--name');
            document.querySelector('.foot').textContent = target.style.getPropertyValue('--pos');
            document.getElementById("modal").style.visibility = 'visible';
            modal.style.visibility = 'visible';
            break;
    }
}

function closeMod() {
    document.querySelector('.modal').style.visibility = 'hidden';
    document.getElementById("modal").style.visibility = 'hidden';
}

function themer(t) {
    let trng = Math.floor(Math.random() * 5);
    let rooty = document.querySelector(":root");
    switch(t) {
        case 'w':
            document.querySelector('main.wrap').style.backgroundImage = `url("${watery[trng]}")`;
            rooty.style.setProperty('--prim', 'rgb(65, 85, 128)');
            rooty.style.setProperty('--primT', 'rgba(65, 85, 128, 0.4)');
            rooty.style.setProperty('--lightprim', 'rgb(136, 152, 187)');
            rooty.style.setProperty('--darkprim', 'rgb(19, 22, 43)');
            rooty.style.setProperty('--monochrom', 'white');
            rooty.style.setProperty('--monocont', 'black');
            rooty.style.setProperty('--monochromT', '#FFFFFFSS');
            rooty.style.setProperty('--keybbot', 'rgb(64, 70, 87)');
            rooty.style.setProperty('--keybright', 'rgb(156, 169, 202)');
            rooty.style.setProperty('--keybleft', 'rgb(87, 100, 131)');
            rooty.style.setProperty('--keybtop', 'rgb(39, 40, 44)');
            rooty.style.setProperty('--keybg', 'linear-gradient(90deg, rgb(50, 60, 77), rgb(112, 118, 138))');
            document.querySelector('div.mainwelcome').style.background = "linear-gradient(var(--prim), var(--darkprim))";
            document.querySelector('.meetcsc.events').style.background = "linear-gradient(var(--monochromT), transparent, var(--monochromT))";
            break;
        case 'm':
            document.querySelector('main.wrap').style.backgroundImage = `url("${morning[trng]}")`;
            rooty.style.setProperty('--prim', '#EEEEEE');
            rooty.style.setProperty('--primT', '#FAFAD266');
            rooty.style.setProperty('--lightprim', 'lightgoldenrodyellow');
            rooty.style.setProperty('--darkprim', '#DDDDDD');
            rooty.style.setProperty('--monochrom', 'black');
            rooty.style.setProperty('--monocont', 'white');
            rooty.style.setProperty('--monochromT', '#000000SS');
            rooty.style.setProperty('--keybbot', '#BBBBBB');
            rooty.style.setProperty('--keybright', '#EEEEEE');
            rooty.style.setProperty('--keybleft', '#AAAAAA');
            rooty.style.setProperty('--keybtop', 'gray');
            rooty.style.setProperty('--keybg', 'linear-gradient(90deg, #DFDFDF, #A8A8A8)');
            document.querySelector('div.mainwelcome').style.background = "linear-gradient(var(--prim), var(--darkprim))";
            document.querySelector('.meetcsc.events').style.background = "linear-gradient(var(--monochromT), transparent, var(--monochromT))";
            break;
        case 'a':
            document.querySelector('main.wrap').style.backgroundImage = `url("${afternoon[trng]}")`;
            rooty.style.setProperty('--prim', 'coral');
            rooty.style.setProperty('--primT', '#E9967A66');
            rooty.style.setProperty('--lightprim', 'pink');
            rooty.style.setProperty('--darkprim', 'darksalmon');
            rooty.style.setProperty('--monochrom', 'black');
            rooty.style.setProperty('--monocont', 'white');
            rooty.style.setProperty('--monochromT', '#000000SS');
            rooty.style.setProperty('--keybbot', '#5e473d');
            rooty.style.setProperty('--keybright', '#d47461');
            rooty.style.setProperty('--keybleft', '#8a564c');
            rooty.style.setProperty('--keybtop', '#402e27');
            rooty.style.setProperty('--keybg', 'linear-gradient(90deg, #4a3d3a,#8c6a62)');
            document.querySelector('div.mainwelcome').style.background = "linear-gradient(var(--prim), var(--darkprim))";
            document.querySelector('.meetcsc.events').style.background = "linear-gradient(var(--monochromT), transparent, var(--monochromT))";
            break;
        case 'n':
            document.querySelector('main.wrap').style.backgroundImage = `url("${night[trng]}")`;
            rooty.style.setProperty('--prim', '#555555');
            rooty.style.setProperty('--primT', '#69696966');
            rooty.style.setProperty('--lightprim', 'dimgray');
            rooty.style.setProperty('--darkprim', '#111111');
            rooty.style.setProperty('--monochrom', 'white');
            rooty.style.setProperty('--monocont', 'black');
            rooty.style.setProperty('--monochromT', '#FFFFFFSS');
            rooty.style.setProperty('--keybbot', '#444444');
            rooty.style.setProperty('--keybright', '#AAAAAA');
            rooty.style.setProperty('--keybleft', '#666666');
            rooty.style.setProperty('--keybtop', '#222222');
            rooty.style.setProperty('--keybg', 'linear-gradient(90deg, #202020, #696969)');
            document.querySelector('div.mainwelcome').style.background = "linear-gradient(var(--prim), var(--darkprim))";
            document.querySelector('.meetcsc.events').style.background = "linear-gradient(var(--monochromT), transparent, var(--monochromT))";
            break;
    }
}

function showHistory() {
    let inform = Array.from(document.querySelectorAll(".infoblock"));
    let i = 0;
    setInterval(function() {if(i < inform.length)inform[i++].id = "";}, 50);
}

function playJuke() {
    document.querySelector(".cd").classList.remove(songs[srng]);
    srng = Math.floor(Math.random() * 7);
    if(currentsong != null) currentsong.pause();
    currentsong = jukebox[srng];
    // bps = 60 / 182;
    // document.querySelector(":root").style.setProperty("--bpm", `${bps}s`);
    currentsong.play();
    document.querySelector(".cd").classList.add("tuned");
    document.querySelector(".cd").classList.add(songs[srng]);
    document.querySelector(".songer").textContent = songs[srng].toUpperCase();
    currentsong.removeEventListener("ended", repeatS);
    currentsong.addEventListener('ended', repeatS);
}

function repeatS(e) {e.target.currentTime = 0; e.target.play();}

function switchLights(com) {
    let pic = document.querySelector(`.${com}.pic`);
    if(pic.id == "off") {
        pic.classList.remove("dark");
        pic.id = "on";
        document.querySelector(`.${com}.switch`).textContent = "OFF";
    } else if(pic.id == "on") {
        pic.classList.add("dark");
        pic.id = "off";
        document.querySelector(`.${com}.switch`).textContent = "ON";
    }
}

function flipcard(crs) {
    let el = document.querySelector(`.courses.${crs}`);
    if (el.id != "flipped") { el.id = "flipped"; }
    else { el.id = ""; }
}

function changePage(name) {
    if (page != name) {
        let appear = document.querySelector(`div.pg.${name}`);
        appear.style.display = "flex";
        setTimeout(function() {appear.style.translate = "0px 0px"; appear.style.opacity = "1"; }, 0.5);
        document.querySelector(`div.pg.${page}`).style.display = "none";
        document.querySelector(`div.pg.${page}`).style.opacity = "0";
        document.getElementById(page).classList.remove("pressed");
        document.getElementById(name).classList.add("pressed");
        page = name;
    }
}

function caratBlink() { 
    if(blink == false) { msgBox.textContent += "_"; blink = true; }
    else { msgBox.textContent = msgBox.textContent.replace("_", ""); blink = false; }
}

function deleting(msg) {
    if (cc >= 0 && typing == false && deleted == false) {
        msgBox.textContent = [msgBox.textContent.slice(0, 1), msg.slice(0, cc), msgBox.textContent.slice(cc+1, cc+2)].join('');
        cc--; 
        if (cc < 0) msgBox.textContent = [msgBox.textContent.slice(0, 1), msg.slice(0, 0), msgBox.textContent.slice(cc+2, cc+2)].join('');
    } else if (cc < 0 && deleted == false) {
        deleted = true;
        if (deleted == true) { setTimeout(function() { 
            chosen = messages[Math.floor(Math.random() * messages.length)];
            cc = 1; 
            typing = true;
        }, 2000)}
    }
}

function type(msg) {
    if (cc <= msg.length && typing == true && deleted == true) {
        msgBox.textContent = [msgBox.textContent.slice(0, 1), msg.slice(0, cc), msgBox.textContent.slice(cc+1, cc+2)].join('');
        cc++;
    } else if(cc > msg.length && deleted == true) {
        deleted = false;
        setTimeout(function() {typing = false;}, 2024);
    }
}

window.addEventListener("load", function () {
    blink = false;
    msgBox = document.getElementById("msgbox");
    setInterval(function () {caratBlink();}, 300);
    document.querySelectorAll(".dark").forEach(function (el) {
        el.addEventListener("mousemove", function(e) {
            let y = e.clientY - el.getBoundingClientRect().top;;
            let x = e.clientX - el.getBoundingClientRect().left;
            el.style.setProperty('--mx', `${x}px`);
            el.style.setProperty('--my', `${y}px`);
        });
    });
    let descr = document.querySelector(".msdescholder");
    descr.addEventListener("mousemove", function(e) {
        let y = e.clientY - descr.getBoundingClientRect().top;;
        let x = e.clientX - descr.getBoundingClientRect().left;
        descr.style.setProperty('--dx', `${x}px`);
        descr.style.setProperty('--dy', `${y}px`);
    });
    chosen = messages[Math.floor(Math.random() * messages.length)];
    setInterval(function () { if (typing == true) {type(chosen)}}, 80);
    setInterval(function() { if (typing == false) {deleting(chosen)}}, 90);
});