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
var delay = 0;
function food_clicked(ass){
     if(clicker.upgrades[ass].cost <= clicker.food){
    clicker.food-= clicker.upgrades[ass].cost;
    clicker.upgrades[ass].amount++;
    clicker.upgrades[thing].cost += Math.round(clicker.upgrades[ass].cost*0.15); // ну это как бы ебать ваще я не ебу че делает, но это короче формула увеличивающая цену с каждой покупкой
    update_upgrades();
    }
}
function update_upgrades(){
    document.querySelector("#upgrades").innerHTML="";
    for(i in clicker.upgrades){
        document.querySelector("#upgrades").innerHTML+= `<br><button onclick="food_clicked('${i}')">${clicker.upgrades[i].name}</button> у вас ${clicker.upgrades[i].amount}. Цена: ${clicker.upgrades[i].cost}` //втф че это блять 
    }
}
function updatecount(){ // не трогать желательно
    update_upgrades();
    if(Cookies.get("clicker") != null && Cookies.get("clicker") != "undefined"){
        var clicker1 = JSON.parse(Cookies.get("clicker"));
        for(i in clicker.upgrades){
            if(clicker1.upgrades[i] == null){
                clicker1.upgrades[i] == clicker.update_upgrades[i]; //типо когда игра будет обновлятьсчя прогресс не сбросится я хз
            }
        }
        clicker = clicker1
    }
    setInterval(() => {
    for(i in clicker.upgrades){
        clicker.food+=clicker.upgrades[i].amount*clicker.upgrades[i].fps/20;
    }
    document.querySelector("#food").innerHTML = "У вас "+String(clicker.food).split(".")[0]+" корма"
    delay++;
    if(delay >= 40){
        Cookies.set("clicker",JSON.stringify(clicker), {expires: 100000}) // переводит кликер в стринг что бы потом опять перевести в переменную, 100000(дней) - это как долго будут храниться данные
        delay = 0;
    }
    }, 50);
}