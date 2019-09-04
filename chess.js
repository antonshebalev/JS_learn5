function blockBlack() {
    var divBlack = document.createElement("div");
    divBlack.style.backgroundColor = 'black';
    divBlack.style.width = '50px';
    divBlack.style.height = '50px';
    divBlack.style.cssFloat = 'left';
    return divBlack;
};

function blockWhite() {
    var divWhite = document.createElement("div");
    divWhite.style.backgroundColor = 'white';
    divWhite.style.width = '50px';
    divWhite.style.height = '50px';
    divWhite.style.cssFloat = 'left';
    return divWhite;
};

var lines = document.createElement("div");
lines.style.width = '400px';
lines.style.height = '400px';
lines.style.padding = '20px';

for (var i = 1; i <= 8; i++) {
    var line = document.createElement("div");
   // line.style.whiteSpace = 'nowrap';
    line.style.width = '400px';
    line.style.height = '50px';
    for (var j = 1; j <= 8; j++) {
        if (i % 2 == 1) {
            if (j % 2 == 1) {
                line.appendChild(blockWhite());
            } else {
                line.appendChild(blockBlack());l
            }

        } else if (i % 2 == 0) {

            if (j % 2 == 1) {
                line.appendChild(blockBlack());
            } else {
                line.appendChild(blockWhite());
            }
        }
    }
    lines.append(line);
}

var table = document.createElement("div");
table.style.backgroundColor = 'coral';
table.style.width = '440px';
table.style.height = '440px';

table.appendChild(lines);

document.body.append(table);
