let x = Math.floor((Math.random() * 6) + 1);

console.log(x)


function D6() {
    let x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("D6").innerHTML=x;
}

function D8() {
    let x = Math.floor((Math.random() * 8) + 1);
    document.getElementById("D8").innerHTML=x;
    if (x = 0)
        alert('Number below limit');
    if (x=9)
        alert('Number above limit');
    }
