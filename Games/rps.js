/**
 * Created by TrevorSpear on 5/26/17.
 */


export function RPS_display() {
    var Display = '<h3>Rock Paper Scissor</h3><hr>';
        Display += '<table>';
            Display +='<tr>';

                Display +='<td>';
                    Display +='<div>';
                        Display +='<img src="./../Pictures/rock.png" alt=Rock onclick=RPS_Game("Rock")>';
                    Display +='</div>';
                    Display +='Rock';
                Display +='</td>';

                Display +='<td>';
                    Display +='<div>';
                        Display +='<img src="./../Pictures/paper.png" alt=Paper onclick=RPS_Game("Paper")>';
                    Display +='</div>';
                    Display +='Paper';
                Display +='</td>';

                Display +='<td>';
                    Display +='<div>';
                        Display +='<img src="./../Pictures/scissor.png" alt=Scissor onclick=RPS_Game("Scissor")>';
                    Display +='</div>';
                    Display +='Scissor';
                Display +='</td>';

            Display +='</tr>';
        Display +='</table>';


    document.getElementById("RPS").innerHTML = Display;

}

export function RPS_Game(PlayerChoice){
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
            //Tie += 1;

        }else if(PlayerChoice == "Rock" && ComputerChoice == "Scissor"){
            alert("You win");
            //c = PlayerMoney + Number(Bet);
            //PlayerMoney = c;
            //Win += 1;
            //document.getElementById("Outcome").innerHTML =  "Player Win";

        }else if(PlayerChoice == "Paper" && ComputerChoice == "Rock"){
            alert("You win");
            //PlayerMoney = PlayerMoney + Number(Bet);
            //Win += 1;
            //document.getElementById("Outcome").innerHTML =  "Player Win";

        }else if(PlayerChoice == "Scissor" && ComputerChoice == "Paper"){
            alert("You win");
            //PlayerMoney += Number(Bet);
            //Win += 1;
            //document.getElementById("Outcome").innerHTML =  "Player Win";

        }else{
            alert("You lose");
            //PlayerMoney = PlayerMoney - Number(Bet);
            //Loses += 1;
            //document.getElementById("Outcome").innerHTML =  "Computer Win";
        }
    alert("OOPS");

        //CurrentMoney();

        //document.getElementById("Answer").innerHTML =  PlayerChoice + " vs " + ComputerChoice;
    //}else{
      //  alert("Bets need to be more than 0 and less than the Player's money");
    //}
}

