function playClick() {
    document.getElementById("current").style.display = "none";
    var span = document.getElementById("current_span");
    span.style.display = "block";
    $("#current_span").addClass("count");
    var click = new Audio("sounds/click_effect.mp3");
    click.play();
    var building_started = new Audio("sounds/building_started.mp3")
    building_started.play();
    construction_going();
}

function construction_going(){
    var buildings = document.querySelectorAll(".buildings");
    for (let i = 0; i < buildings.length; i++) {
        buildings[i].classList.add('constructing_going');
        setTimeout((construction_complete), 5000);
    }
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

function construction_complete(){
    var construction_complete = new Audio("sounds/construction_complete.mp3");
    RemoveClass();
    construction_complete.play();
}

function RemoveClass() {
    document.getElementById("current_span").style.display = "none";
    document.getElementById("current_span").innerHTML = 100;
    document.getElementById("current").style.display = "flex";
    $("#current_span").removeClass("count");
    $('.buildings').removeClass("constructing_going");
    $('.buildings').removeClass("count");
}

var buildingController = (function(){
    class Building{
        constructor(id, name, price, isBuilt = 0, onBuild = 0, built = 0) {
            this.id = id;
            this.name = name;
            this.price = price;
        }

        build = new Building(0, "War Factory", 0, 0, 0);
    }
    
    return {
        getBuild(){
            console.log(build);
        }
    }

    
});

var UIController = (function(){
    var DOMStrings = {

    };

    return {
        getDOMstrings: function () {
            return DOMstrings;
        }
    };
});

var controller = (function(buildingCtrl, UICtrl){
   
})(buildingController, UIController);
console.log(buildingController.getBuild);



