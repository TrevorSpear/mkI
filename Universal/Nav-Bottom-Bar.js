/**
 * Created by TrevorSpear on 5/26/17.
 */


window.onload = function Normal_Page_Setup() {

    NavBar();

    BottomBar();

};

//TopBar - NavBar in every page
function NavBar() {
    var NavBar = '<ul class="navbar-list" >';
        NavBar +='<li class="navbar-item navbar-left" id="main"><a href="main.html">Home</a></li>';
        NavBar +='<li class="navbar-item navbar-left" id="aboutMain"><a href="aboutMain.html">About</a></li>';
        NavBar +='<li class="navbar-item navbar-right" id="games"><a href="games.html">Games</a></li>';
        NavBar +='<li class="navbar-item navbar-right" id="music"><a href="music.html">Music</a></li>';
        NavBar +='<li class="navbar-item navbar-right" id="login"><a href="login.html">Login</a></li>';
        NavBar +='<li class="navbar-item navbar-right" id="signUp"><a href="signUp.html">Sign Up</a></li>';
        NavBar +='</ul>';

    document.getElementById("NavBar").innerHTML = NavBar;
}


//BottomBar - The bottom of the page where it will tell who made this
function BottomBar() {
    var BottomBar = '<div class="bottomBar" align="center">';
        BottomBar +='By: Amedee Kirkpatrick and Trevor Spear';
        BottomBar +='</div>';

    document.getElementById("BottomBar").innerHTML = BottomBar;
}