function blockBlack(addCssText, s) {
    var divBlack = document.createElement("div");
    divBlack.style.backgroundColor = 'black';
    divBlack.style.width = '50px';
    divBlack.style.height = '50px';
    divBlack.style.cssFloat = 'left';
    return divBlack;
};


function blockWhite(addCssText, s) {
    var divWhite = document.createElement("div");
    divWhite.style.backgroundColor = 'white';
    divWhite.style.width = '50px';
    divWhite.style.height = '50px';
    divWhite.style.cssFloat = 'left';
    return divWhite;
};

function chSymbol(s, w, h, addCssText) {
    var divSymbol = document.createElement("div");
    divSymbol.style.backgroundColor = 'coral';
    divSymbol.style.width = w;
    divSymbol.style.height = h;
    divSymbol.style.cssFloat = 'left';

    var p = document.createElement("p");
    p.style.cssText = 'color: black; font-size: 20px; text-align: center; margin: 0;' + addCssText;
    p.innerText = s;


    divSymbol.appendChild(p);

    return divSymbol;
};

function chessFigure(sFigure, color) {
    var p = document.createElement("p");
    p.style.cssText = 'font-size: 35px; text-align: center; margin: 0; color:' + color;
    p.innerText = sFigure;
    return p;
}

var lines = document.createElement("div");
lines.style.width = '441px';
lines.style.height = '441px';



for (var i = 0; i <= 9; i++) {
    var line = document.createElement("div");

    line.style.width = '440px';
    if (i == 0 || i == 9) {
        line.style.height = '20px';
    } else {
        line.style.height = '50px';
    }
    for (var j = 0; j <= 9; j++) {
        if (i == 0) {
            if (j == 0 || j == 9) {
                line.appendChild(chSymbol(' ', '20px', '20px', ''));
            } else {
                line.appendChild(chSymbol(String.fromCharCode('A'.charCodeAt(0) + 8 - j), '50px', '20px', 'transform: rotate(180deg);'));
            }
            //transform: rotate(<угол>) String.fromCharCode('A'.charCodeAt(0))

        } else
        if (i == 9) {
            if (j == 0 || j == 9) {
                line.appendChild(chSymbol(' ', '20px', '20px', ''));
            } else {
                line.appendChild(chSymbol(String.fromCharCode('A'.charCodeAt(0) + j - 1), '50px', '20px', ''));
            }
            //transform: rotate(<угол>)

        } else {
            if (j == 0) {
                line.appendChild(chSymbol(9 - i, '20px', '50px', 'padding-top: 10px;'));
            } else
            if (j == 9) {
                line.appendChild(chSymbol(9 - i, '20px', '50px', 'padding-bottom: 10px; transform: rotate(180deg);'));
            } else




            if (i % 2 == 1) {
                if (j % 2 == 1) {
                    line.appendChild(blockWhite());
                } else {
                    line.appendChild(blockBlack());
                }

            } else if (i % 2 == 0) {

                if (j % 2 == 1) {
                    line.appendChild(blockBlack());
                } else {
                    line.appendChild(blockWhite());
                }
            }
        }
    }
    lines.append(line);
}


for (var i = 1; i <= 8; i++) {
    lines.childNodes[2].childNodes[i].appendChild(chessFigure('♟', '#996666'));
    lines.childNodes[7].childNodes[i].appendChild(chessFigure('♟', '#cccc66'));
}

    lines.childNodes[1].childNodes[1].appendChild(chessFigure('♜', '#996666'));
    lines.childNodes[8].childNodes[1].appendChild(chessFigure('♜', '#cccc66'));

    lines.childNodes[1].childNodes[2].appendChild(chessFigure('♞', '#996666'));
    lines.childNodes[8].childNodes[2].appendChild(chessFigure('♞', '#cccc66'));

    lines.childNodes[1].childNodes[3].appendChild(chessFigure('♝', '#996666'));
    lines.childNodes[8].childNodes[3].appendChild(chessFigure('♝', '#cccc66'));

    lines.childNodes[1].childNodes[4].appendChild(chessFigure('♛', '#996666'));
    lines.childNodes[8].childNodes[4].appendChild(chessFigure('♛', '#cccc66'));

    lines.childNodes[1].childNodes[5].appendChild(chessFigure('♚', '#996666'));
    lines.childNodes[8].childNodes[5].appendChild(chessFigure('♚', '#cccc66'));

    lines.childNodes[1].childNodes[6].appendChild(chessFigure('♝', '#996666'));
    lines.childNodes[8].childNodes[6].appendChild(chessFigure('♝', '#cccc66'));

    lines.childNodes[1].childNodes[7].appendChild(chessFigure('♞', '#996666'));
    lines.childNodes[8].childNodes[7].appendChild(chessFigure('♞', '#cccc66'));

    lines.childNodes[1].childNodes[8].appendChild(chessFigure('♜', '#996666'));
    lines.childNodes[8].childNodes[8].appendChild(chessFigure('♜', '#cccc66'));

document.body.append(lines);


// line.style.whiteSpace = 'nowrap'; https://reklama-no.ru/spetssimvoly-html/shakhmatnye-figury
