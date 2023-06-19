var clicker = {
    food:0,
    upgrades: { // это апгрейды. каждый апгрейд сопроваждается параметрами как количество, цена и еда в секунду
        japanese_cat:{
            amount:0,
            cost:100,
            fps:1,
            name:"Кот Японец"
        }
    }
};
function food_clicked(ass){ // я хз как это работает, но каждый клик дает 1 еду
    clicker[ass]++;
}
function updatecount(){ // не трогать желательно
    setInterval(() => {
    for(i in clicker.upgrades){
        clicker.food+=clicker.upgrades[i].amount*clicker.upgrades[i].fps/20
    }
    document.querySelector("#food").innerHTML = "У вас "+String(clicker.food).split(".")[0]+" корма"
    }, 50);
}