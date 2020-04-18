window.scrollTo(0, 0);
var topicElement = document.getElementsByClassName("topic");
var tablinks = document.getElementsByClassName("tablink");
var footer = document.getElementById("footer");
var previous = document.getElementById("previousButton");
var next = document.getElementById("nextButton");
var navButtons = document.getElementById("navButtons");
var currentTopic = "home";
var clickedStyle = "w3-bar-item w3-button tablink w3-hover-none w3-border-yellow w3-bottombar w3-text-yellow w3-hover-text-yellow";
var nonClickedStyle = "w3-bar-item w3-button tablink w3-hover-none w3-border-black w3-bottombar w3-hover-border-yellow w3-hover-text-yellow";
var d = new Date();
var year = d.getFullYear();
var msg = "© " + year + " Associação Nacional de Estudantes de Medicina";
document.getElementById("info").innerHTML = msg + "<br>Em parceria com: <a href = 'http://www.metis.med.up.pt/index.php/P%C3%A1gina_principal'>METIS</a> ";
openTopic(event, "home");


function loadView(topic) {
    switch (topic) {
        case "home":
            previous.style.display = "none";
            next.style.display = "block";
            footer.style.display = "block";
            break;
        case "gripe":
            previous.style.display = "block";
            next.style.display = "none";
            footer.style.display = "block";
            break;
        default:
            previous.style.display = "block";
            next.style.display = "block";
            footer.style.display = "block";
    }
}


function openTopic(evt, topicName, flag) {
    currentTopic = topicName;
    for (var i = 0; i < topicElement.length; i++) {
        topicElement[i].style.display = "none";
    }
    for (var i = 0; i < tablinks.length; i++) {
        if (tablinks[i].id != topicName + "-tab") {
            tablinks[i].className = nonClickedStyle;
        } else {
            tablinks[i].className = clickedStyle;
        }
    }
    loadView(topicName);
    document.getElementById(topicName).style.display = "block";
    if (flag != null) {
        closeFunction();
    }
    window.scrollTo(0, 0);
}

function changeTopic(evt, op) {
    var topicArray = ["home", "hepB", "hib2", "dtpa", "vaspr", "meuc", "pn13v", "hpv", "novasVacinas", "bcg", "gripe"];
    var index = topicArray.indexOf(currentTopic);
    index = op == 'next' ? index + 1 : index - 1;
    openTopic(evt, topicArray[index]);
}


function myFunction(x) {
    document.getElementById("sidebarM").style.display = "block";
    document.getElementById("pageOverlay").style.display = "block";
    document.getElementById("content").style.position = "fixed";
}

function closeFunction(x) {
    document.getElementById("sidebarM").style.display = "none";
    document.getElementById("pageOverlay").style.display = "none";
    document.getElementById("content").style.position = "";
}
