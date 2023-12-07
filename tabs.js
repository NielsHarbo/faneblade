/*
--------------VARIABLER----------------------
*/
//Samling med alle knapperne/fanerne
const BUTTONS = document.querySelectorAll(".tabs-header button")

//Samling med alle afsnit/destinationer der passer til fanerne
const DESTINATIONS = document.querySelectorAll(".tab-dest>li")

/*
    ------------LOOP------------------
    For hver eneste knap (uanset hvor mange der er) kører koden
    element repræsenterer selve HTML elementet
    index repræsenterer nummeret på elementet.
    Hvis der f.eks. er 4 knapper har den første knap index = 0, næste knap index = 1 osv.  
*/
BUTTONS.forEach(function(element, index){
    
    //Vi tilføjer en klik event på hver knap
    element.onclick = function(){
       
        //Nyt loop hvor vi skjuler/ resetter alle (evt.) synlige destinationer
        //Bemærk at element i denne funktion peger på destinationerne (IKKE KNAPPERNE)
        DESTINATIONS.forEach(function(element){
            element.style.display= "none"
        })

        //Vi gør det nummer af destnation der macher knap-nummeret synligt
        DESTINATIONS[index].style.display="block"
    }

})