function calculate() {
    var depth = parseFloat(document.getElementById('userInput').value);
    var unit = document.getElementById('unitSelect').value;
    if (unit === "in") {
        depth *= 25.4; 
    }

    var result1 = calculate10Deg(depth); 
    var result2 = calculate7Deg(depth); 
    var result3 = calculate5Deg(depth); 

    document.getElementById('result1').innerText = '10 deg Taper: ' + result1.toFixed(10);
    document.getElementById('result2').innerText = '7 deg Taper: ' + result2.toFixed(10);
    document.getElementById('result3').innerText = '5 deg Taper: ' + result3.toFixed(10);
}

function calculateTaper() {
    var taperDegrees = parseFloat(document.getElementById('taperInput').value);
    var depth = parseFloat(document.getElementById('depthInput').value);
    var unit = document.getElementById('unitSelectTaper').value;
    
    if (unit === "in") {
        depth *= 25.4; 
    }

    var taperRadians = taperDegrees * (Math.PI / 180);

    var taperCalculationResult = Math.tan(taperRadians) * depth;

    document.getElementById('taperResult').innerText = 'Taper Result: ' + taperCalculationResult.toFixed(10);
}


function calculate10Deg(depth) {
    return depth * 0.1763; 
}

function calculate7Deg(depth) {
    return depth * 0.1227845609; 
}

function calculate5Deg(depth) {
    return depth * 0.08748866352; 
}
