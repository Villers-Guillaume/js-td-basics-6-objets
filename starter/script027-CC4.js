/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

const john = {
    nom:"John",
    poids:75,
    taille: 1.76,
    calcBMI(){
        let BMI = this.poids/ this.taille * this.taille;
        return BMI;
    }
}

const mark = {
    nom:"Mark",
    poids:135,
    taille: 1.98,
    calcBMI(){
        let BMI = this.poids/ this.taille * this.taille;
        return BMI;
    }
}

if (mark.calcBMI() > john.calcBMI()){
    console.log("Mark a un BMI plus élevé que John");
} else if (mark.calcBMI() < john.calcBMI()) {
    console.log("John a un BMI plus élevé que Mark");
} else {
    console.log("Ils ont le même BMI");
}
