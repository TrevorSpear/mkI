/**
 * Created by TrevorSpear on 5/26/17.
 */

var Wins = 0;
var Loses = 0;
var Ties = 0;

function RPS_display() {
    var Display = '<h3>Rock Paper Scissor</h3><hr>';
        Display += '<table >';
        Display +='<tr>';

        Display +='<td style="float: left;">';
        Display +='<div>';
        Display +='<h4>Score</h4><br>';
        Display +=`<p>Wins: ${Wins}</p>`;
        Display +=`<p>Loses: ${Loses}</p>`;
        Display +=`<p>Ties: ${Ties}</p>`;
        Display +='</div>';
        Display +='</td>';

        Display +='<td style="float: right;border: 1px solid black;margin-left: 20px;margin-right: auto;">';
        Display +='<div style="border: solid">';
        Display +='<img src="./../Pictures/scissor.png" alt=Scissor onclick=RPS_Game("Scissor")>';
        Display +='</div>';
        Display +='Scissor';
        Display +='</td>';

        Display +='<td style="float: right;border: 1px solid black;margin-left: 20px;margin-right: auto;">';
        Display +='<div style="border: solid">';
        Display +='<img src="./../Pictures/paper.png" alt=Paper onclick=RPS_Game("Paper")>';
        Display +='</div>';
        Display +='Paper';
        Display +='</td>';

        Display +='<td style="float: right;border: 1px solid black;margin-left: 120px;margin-right: auto;">';
        Display +='<div style="border: solid">';
        Display +='<img src="./../Pictures/rock.png" alt=Rock onclick=RPS_Game("Rock")>';
        Display +='</div>';
        Display +='Rock';
        Display +='</td>';

        Display +='</tr>';
        Display +='</table>';


    document.getElementById("RPS").innerHTML = Display;

}

function RPS_Game(PlayerChoice){
    //Bet = document.getElementById("Betting").value;

    //if(Number(Bet) <= PlayerMoney && Number(Bet) > 0){
        var Computer = Math.floor((Math.random() * 3) + 1);
        var ComputerChoice;
        //var c;

        if(Computer == 1){
            ComputerChoice = "Rock";

        }else if(Computer == 2){
            ComputerChoice = "Paper";

        }else{
            ComputerChoice = "Scissor";
        }

        if(PlayerChoice == ComputerChoice){
            alert("Tie");
            Ties++;

        }else if(PlayerChoice == "Rock" && ComputerChoice == "Scissor"){
            alert("You win");
            Wins++;

        }else if(PlayerChoice == "Paper" && ComputerChoice == "Rock"){
            alert("You win");
            Wins++;

        }else if(PlayerChoice == "Scissor" && ComputerChoice == "Paper"){
            alert("You win");
            Wins++;

        }else{
            alert("You lose");
            Loses++;
        }

        RPS_display();
}

