<?php

function NavBar($CurrentPage) { //$CurrentPage holds a number of what page it is on the Nav Bar
	$StringColor =  array(
	    1 = "Black",
        2 = "Black",
        3 = "Black",
        4 = "Black",
        5 = "Black",
        6 = "Black"
    );

    $StringArray[ $CurrentPage ] = "DarkGrey";

    $StringPages = array(
        1 = "Home",
        2 = "About",
        3 = "Games",
        4 = "Music",
        5 = "Login",
        6 = "Sign Up"
    );

    echo "<nav><ul>";

    for ($i = 0; $i <= 10; $i++) {
        echo "<li></li>"
    }

}

?>