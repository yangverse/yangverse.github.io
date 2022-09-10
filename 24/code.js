var operations = [add, mul, sub1, div1, sub2, div2];
var operators  = [" + ", " * ", " - ", " / ", " - ", " / "];
document.getElementById("btn").addEventListener("click", onclick);

function onclick(){
    var n = [Number(document.getElementById("n0").value),
             Number(document.getElementById("n1").value),
             Number(document.getElementById("n2").value),
             Number(document.getElementById("n3").value)];
    var formula = "";
    for (var i = 0; i < n.length; ++i) {
        var a = n[i];
        for (var j = i+1; j < n.length; ++j) {
            var b = n[j];
            for (var x = 0; x < operations.length; ++x) {
                var ab = operations[x](a, b);
                for (var k = 0; k < n.length; ++k){
                    var c = n[k];
                    if (c == a || c == b) continue;
                    var d = n.reduce(add, 0)-n[i]-n[j]-n[k];
                    for (var y = 0; y < operations.length; ++y) {
                        var abc = operations[y](ab, c);
                        for (var z = 0; z < operations.length; ++z) {
                            var abcd = operations[z](abc, d);
                            if (abcd == 24)
                            formula += translate1(a, b, c, d, x, y, z)+'<br>';
                        }
                    }
                }
                for (var k = 0; k < n.length; ++k) {
                    var c = n[k];
                    if (c == a || c == b) continue;
                    var d = n.reduce(add, 0)-n[i]-n[j]-n[k];
                    for (var y = 0; y < operations.length; ++y) {
                        var cd = operations[y](c, d);
                        for (var z = 0; z < operations.length; ++z) {
                            var abcd = operations[z](ab, cd);
                            if (abcd == 24)
                            formula += translate2(a, b, c, d, x, y, z)+'<br>';
                        }
                    }
                    break;
                }
            }
        }
    }

    document.getElementById("title").innerHTML =  formula == "" ? "Impossible" : "Formula:";
    document.getElementById("formula").innerHTML = formula;
}

function add  (a, b) {return a + b;}
function mul  (a, b) {return a * b;}
function sub1 (a, b) {return a - b;}
function div1 (a, b) {return a / b;}
function sub2 (a, b) {return b - a;}
function div2 (a, b) {return b / a;}

function translate1 (a, b, c, d, x, y, z) {
    var ab,abc,abcd;
    if (x == 4 || x == 5) {
        ab = "( " +  b.toString() + operators[x] + a.toString() + " )";
    } else {
        ab = "( " +  a.toString() + operators[x] + b.toString() + " )";
    }
    if (y == 4 || y == 5) {
        abc = "( " +  c.toString() + operators[y] + ab + " )";
    } else {
        abc = "( " +  ab + operators[y] + c.toString() + " )";
    } 
    if (z == 4 || z == 5) {
        abcd = d.toString() + operators[z] + abc;
    } else {
        abcd = abc + operators[z] + d.toString();
    } 
    return abcd;    
}

function translate2 (a, b, c, d, x, y, z) {
    var ab, cd, abcd;
    if (x == 4 || x == 5) {
        ab = "( " +  b.toString() + operators[x] + a.toString() + " )";
    } else {
        ab = "( " +  a.toString() + operators[x] + b.toString() + " )";
    }
    if (y == 4 || y == 5) {
        cd = "( " +  c.toString() + operators[y] + d.toString() + " )";
    } else {
        cd = "( " +  d.toString() + operators[y] + c.toString() + " )";
    } 
    if (z == 4 || z == 5) {
        abcd = cd + operators[z] + ab;
    } else {
        abcd = ab + operators[z] + cd;
    } 
    return abcd;    
}



