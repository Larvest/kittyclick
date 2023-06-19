var clicker = {
    food:0,
    upgrades: { // это апгрейды. каждый апгрейд сопроваждается параметрами как количество, цена и еда в секунду
        japanese_cat:{
            amount:0,
            cost:100,
            fps:1,
            name:"Кот Японец"
        },
        gentleman_cat:{
            amount:0,
            cost:500,
            fps:5,
            name:"Кот Джентельмен"
        }
    }
};
function food_clicked(ass){ // я хз как это работает, но каждый клик дает 1 еду
    clicker.upgrades[ass].amount++;
    update_upgrades();
}
function update_upgrades(){
    document.querySelector("#upgrades").innerHTML="";
    for(i in clicker.upgrades){
        document.querySelector("#upgrades").innerHTML+= `<br><button onclick="food_clicked('${i}')">${clicker.upgrades[i].name}<button> у вас ${clicker.upgrades[i].amount}` //втф че это блять
    }
}
function updatecount(){ // не трогать желательно
    update_upgrades();
    setInterval(() => {
    for(i in clicker.upgrades){
        clicker.food+=clicker.upgrades[i].amount*clicker.upgrades[i].fps/20
    }
    document.querySelector("#food").innerHTML = "У вас "+String(clicker.food).split(".")[0]+" корма"
    }, 50);
}