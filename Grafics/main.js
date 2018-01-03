var Products = [["Carne","Cereal", "Pasta"],["Jeans","Camisas","Zapatos"],["Ninios","Ninias","Mixto"]];
var food = [["Cerdo","Res", "Pollo"],["FANS","Kellogs","Suli"],["Coditos","Caracolitos","Marmaón"]];
var clothes = [["Pepe","Jons", "Elegante"],["Formal","Sin manga","Deportiva"],["Tenis","Formales","Sandalias"]];
var toys = [["Carros","Muniecos", "Balones"],["Muniecas","Trastes","Cuerdas"],["Mables","Trompos","Patines"]];

function Category(){
    let select = document.getElementById("Category");
    let value = select.options[select.selectedIndex].value;
    ChangeProduct(value);
}

function ChangeProduct(value = 0 ){
    let select = document.getElementById("Product");
    for (let index = 0; index < Products[value].length; index++) {
        select.options[index].text = Products[value][index];
    }
    let value2 = select.options[select.selectedIndex].value;
    ChangeSpecific(value, value2);
}

function ChangeSpecific(value = 0 ,value2 = 0){
    let select = document.getElementById("Specific");
    let things = getThings(value);
    for (let index = 0; index < things[value2].length; index++) {
        select.options[index].text = things[value2][index];
    }
    let specificProduct = select.options[select.selectedIndex].value;
    var name = select.options[select.selectedIndex].text;
    
    if (specificProduct == 0) {
        firstChart(name);
    } else if (specificProduct == 1) {
        secondChart(name);
    } else {
        thirdChart(name);
    }
}

function getThings(value = 0){
    let things;
    if(value == 0){
        things = food;
    }else if(value == 1){
        things = clothes;
    }else{
        things = toys;
    }
    return things;
}

function secondDependency(){
    let select = document.getElementById("Category");
    let categorySelected = select.options[select.selectedIndex].value;
    ChangeProduct(categorySelected);    
}

function drawGraph(){
    let select = document.getElementById("Category");
    let categorySelected = select.options[select.selectedIndex].value;
    select = document.getElementById("Product");    
    let productSelected = select.options[select.selectedIndex].value;
    ChangeSpecific(categorySelected, productSelected);
}

//Drawing Graphs
google.charts.load('current', {
    'packages': ['corechart']
});


function firstChart(name) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Enero', 40],
        ['Febrero', 200],
        ['Marzo', 100],
        ['Junio', 75],
        ['Julio', 90]
    ]);
    var options = {
        title: 'Estadísticas de '+name,
        width: 400,
        height: 300
    };
    var chart = new google.visualization.PieChart(document.getElementById('graph'));
    chart.draw(data, options);
}

function secondChart(name) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Enero', 300],
        ['Febrero', 562],
        ['Marzo', 102],
        ['Junio', 77],
        ['Julio', 75]
    ]);
    var options = {
        title: 'Estadísticas de '+name,
        width: 400,
        height: 300
    };
    var chart = new google.visualization.PieChart(document.getElementById('graph'));
    chart.draw(data, options);
}

function thirdChart(name) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Enero', 400],
        ['Febrero', 100],
        ['Marzo', 120],
        ['Junio', 865],
        ['Julio', 94]
    ]);
    var options = {
        title: 'Estadísticas de '+name,
        width: 400,
        height: 300
    };
    var chart = new google.visualization.PieChart(document.getElementById('graph'));
    chart.draw(data, options);
}