//div access to output tabs
let content = document.getElementById('content');
//
let tabs = [];

let frets = document.getElementsByClassName('fretBox');

//div contains guitar neck
let neck = document.getElementById('neck');

let cursor = document.getElementById('cursor');
cursor.style.left = "24px"

let tabCounter = 0;

neck.onclick = function(event) {
    if(event.target.className.baseVal == 'fretBox') {
        let pos = event.target.id.split('_');
        let string = pos[1];
        let fret = pos[2]
        //content.append(pos[1] + ',' + pos[2] + "  ");
        for (let i = 1; i < 7; i++) {
            //if string = i then output number of fret else output '-'
            if (string == i) {
                content.getElementsByClassName('str' + i)[0].append(fret+'-');
            } else {
                if (fret <= 9){ 
                    content.getElementsByClassName('str' + i)[0].append('--');
                } else {
                    content.getElementsByClassName('str' + i)[0].append('---');
                }
            }
        }
    }
}





function spacePressed (event) {
    for (let i = 1; i < 7; i++) {
        content.getElementsByClassName('str' + i)[0].append('--');
    }
}

function bcspPressed(event) {
    for(let i = 1; i < 7; i++) {
        let str = content.getElementsByClassName('str' + i)[0].innerHTML.slice(0,-2);
        if (str.length > 2) {
            content.getElementsByClassName('str' + i)[0].innerHTML = str
        }
    }
}



function cursorMove(e, dx, dy) {
    if (dx !== null) {
        cursor.style.left = parseFloat(cursor.style.left) + (7.86 * dx) +'px'
    }
}



document.onkeydown = function (event) {
    switch (event.code) {
    case "Space": 
        spacePressed(event);
        break;
    case "Backspace": 
        bcspPressed(event);
        break;
    case "ArrowLeft":
        cursorMove(event, -1);
        break;
        case "ArrowRight":
            

    }
}


//document.querySelectorAll('.fretBox:hover')


//if (document.getElementsByName('guitarTuning')[0].selectedIndex === 0) {
    //content.append('eBGDAE')
//}