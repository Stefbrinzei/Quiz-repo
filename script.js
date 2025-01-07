const form = document.querySelector('.form-quiz') /*On cible l'élément html avec la fonction query*/
let tableauResults = [];/*on récupère les données dans un tableau*/
form.addEventListener('submit', (e)=>{/*l'évènement "soumettre"*/
    e.preventDefault();
})

/* Mise en place d'une boucle qui va parcourirles 5 questions*/
for(i=1;1 <6 ; i++){
    tableauResults.push(document.querySelector(`input[name="q${i}"]:checked`).value)
}

console.log(tableauResults);
verifFunc(tableauxResults);
tableauResults= [];
/*Déclaration des variables qui vont nous permettre de mettre des messages et des emojis en fonction du score*/
const reponses = ['c', 'a', 'b','a', 'c',]
const emojis = ['✔️', '✨', '👀','👎',]
const titreResultat = document.querySelector('.resultats h2');
const texteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];
/*Déclaration de la fonction de vérif*/
function verifFunc(tableauResults){
    for(let a=0 ; a<5 ; a++){
        if(tableauResults[a]=== reponses[a]){
            verifTableau.push(true);
        }else{
            verifTableau.push(false);
        }
    }
    console.log(verifTableau);
    afficherResultats(verifTableau);/*on déclare une fonction pour vérifier les résultats dans le verif tableau*/
    verifTableau = [];
}
function afficherResultats(tabCheck){

    const nbDeFautes =tabCheck.filter(el => el !==true).lenght;
console.log(nbDeFautes);
/*el (l'élément )on va filtrer chaque élément qui est différent de true*/ 
}
switch (nbDeFautes) {
    case 0:
        titreResultat.innerText ={`emojis`}
}
