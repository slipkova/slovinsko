let yellow = "#ffd500";
let gray = "rgb(204, 204, 204)";
let lightBlue = "#00bebe";
let darkBlue = "#003752";
let activeRegion;
let activeCity;

function toggleItems(items, curr){
    if(curr == items[0])
        return items[1];
    else
        return items[0];
}

function mouseover(curr){
    $(curr).css("fill", toggleItems([gray, yellow], $(curr).css("fill")));
}

function changeColor(curr, color){
    $(curr).css("fill", color);
    $(curr).on("mouseleave", function (){
        $(curr).css("fill", color);
    })
}

function changeInfo(element, idName){
    $("#info").fadeOut("fast", function(){
        document.getElementById("info").innerText = $(element).attr("info");
        $("#info").fadeIn("fast", function(){
            document.getElementById(idName).innerText = $(element).attr("name");
        });
    });
}

function changeBorder(color){
    $("#names").css("border-color", color);
}

function changeImg(element){
    console.log($(element).attr("id"));
    $("#foto").addClass("col-4");
    $("#info").addClass("col-8");
    document.getElementById("foto").innerHTML = "<img src='../img/geo/" + $(element).attr("id") + ".jpg'>";
}

function removeImg(){
    $("#foto").removeClass("col-4");
    $("#info").removeClass("col-8");
    document.getElementById("foto").innerHTML = "";
}

$(()=>{
    let path = "#pol-map g path";
    let regions = true;

    $("#regions").css("background-color", yellow);
    changeColor("ellipse#ljubljana", lightBlue);
    changeInfo("ellipse#ljubljana", "city");
    activeRegion = document.getElementById("osrednjeslovenska");
    activeCity = document.getElementById("ljubljana");
    changeImg(activeCity);
    document.getElementById("region").innerText = $("#osrednjeslovenska").attr("name");
    for(let town of $("#pol-map #osrednjeslovenska *"))
        changeColor(town, yellow);

    $("#regions, #townships").on("click", function(){
        for(let town of $(path))
            changeColor(town, gray);
        $("#regions, #townships").css("background-color", "white");
        $(this).css("background-color", yellow);
        if($(this).attr("id") == "regions"){
            regions = true;
            $("#region").removeClass("region-off").addClass("region");
            for(let town of $("#pol-map #osrednjeslovenska *"))
                changeColor(town, yellow);
            document.getElementById("region").innerText = $("#osrednjeslovenska").attr("name");
            document.getElementById("township").innerText = "";
            $("#township").removeClass("township");
        }else{
            regions = false;
            $("#region").removeClass("region").addClass("region-off");
            changeBorder(darkBlue);
            document.getElementById("region").innerText = "";
            changeImg(activeCity);
            changeInfo(activeCity, "city");
        }
        console.log(regions);
    })



    $(path).on("mouseenter mouseleave", function(){
        if(regions && this.parentElement != activeRegion){
            for(let town of $(this.parentElement.children)){
                if($(town).attr("fill") != yellow)
                    mouseover(town);
            }

        }
        else if(!regions && this.parentElement != activeRegion)
            mouseover(this);
    })

    $(path).on("click", function (){
        for(let town of $(path)){
            changeColor(town, gray);
        }
        if(regions){
            activeRegion = this.parentElement;
            for(let town of $(this.parentElement.children)){
                changeColor(town, yellow);
            }
            removeImg();
            changeInfo(activeRegion, "region");
            changeBorder(yellow);
        }else{
            changeColor(this, yellow);
            document.getElementById("township").innerText = $(this).attr("name");
            $("#township").addClass("township");
        }

    })

    $("ellipse").on("mouseenter mouseleave", function(){
        $(this).css("stroke-width", toggleItems(["1.5px", "3px"], $(this).css("stroke-width")));
    })

    $("ellipse").on("click", function(){
        activeCity = $(this);
        for(let city of $("ellipse")){
            changeColor(city, darkBlue);
        }
        changeColor(this, lightBlue);
        changeImg(activeCity);
        changeInfo(activeCity, "city");
        changeBorder(darkBlue);
    })

    $("#city").on("click", function(){
        changeBorder(darkBlue);
        changeInfo(activeCity, "city");
        changeImg(activeCity);
    })

    $("#region").on("click", function(){
        if(regions){
            changeBorder(yellow);
            removeImg();
            changeInfo(activeRegion, "region");
        }
    })
})
