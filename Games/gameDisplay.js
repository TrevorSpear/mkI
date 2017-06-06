/**
 * Created by TrevorSpear on 5/30/17.
 */

window.onload = function openFame() {
    alert("fuck");
};

function openGame(event, gameName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(gameName).style.display = "block";
    event.currentTarget.className += " active";
}