let PageNo = 0;
var data = new Array();
data.push(["Dhruvi", "dhruviladani2014@gmail.com", "Porbandar"]);
data.push(["Priyanshi", "bhadjapriyanshi@gmail.com", "Junagadh"]);
data.push(["Disha", "dishaodedra@gmail.com", "Porbandar"]);
data.push(["vama", "iam.vama.soni@gmail.com", "Surat"]);
data.push(["Banshi", "banshitilva@gmail.com", "Rajkot"]);
data.push(["Shakshi", "shakshiajagia@gmail.com", "Morbi"]);
data.push(["Hetanshi", "hetanshi1234@gmail.com", "Morbi"]);
data.push(["Mira", "miragareja@gmail.com", "Rajkot"]);


window.onload = function () {
    console.log("loaded");
    createTable(data);
    createButtons();
}



function createTable(arr, index = 0) {
    var table = document.getElementById("TableID").getElementsByTagName("tbody")[0];
    table.innerHTML = "";
    var end = Math.min(index + 4, arr.length);
    for (var i = index; i < end; i++) {
        var row = table.insertRow(-1);
        for (const data of arr[i]) {
            var cell = row.insertCell(-1);
            cell.innerHTML = data;
        }
    }
    var spacing = document.createElement("br");
    body.appendChild(spacing);
}

function createButtons() {
    var body = document.getElementById("body");
    var div = document.createElement("div");

    // prev
    var Prev = document.createElement("button");
    Prev.onclick = function () {
        if (PageNo > 0) {
            PageNo--;
            var index = PageNo * 4;
            createTable(data, index);
        }
    };
    Prev.innerHTML = "Prev";
    div.appendChild(Prev);

    // numbers
    var btns = Math.ceil(data.length / 5);
    for (var i = 0; i < btns; i++) {
        var btn = document.createElement("button");
        btn.innerHTML = i + 1;
        btn.value = i;
        btn.onclick = function () {
            NumberPages(this.value);
        };
        div.appendChild(btn);
    }

    // next
    var Next = document.createElement("button");
    Next.onclick = function () {
        var index = (PageNo + 1) * 4;
        if (index < data.length) {
            PageNo++;
            createTable(data, index);
        }
    };
    Next.innerHTML = "Next";
    div.appendChild(Next);

    // all buttons to div
    body.appendChild(div);
}

function NumberPages(Pages) {
    PageNo = parseInt(Pages);
    createTable(data, PageNo * 4);
}