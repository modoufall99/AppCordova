function calculerImc() {
    const poids = document.getElementById('poids');
    const taille = document.getElementById('taille');
    const imc = poids.value / Math.pow(taille.value, 2);
    let message = 'Vous êtes en état ';

    if (imc < 16.5) {
        message += 'de dénutrition. Il est recommandé de consulter un médecin pour un suivi et des conseils nutritionnels.';
    }
    else if (imc >= 16.5 && imc < 18.5) {
        message += 'de maigreur. Il est conseillé de consulter un professionnel de santé pour évaluer votre état de santé et obtenir des conseils nutritionnels.';
    }
    else if (imc >= 18.5 && imc < 25) {
        message = 'Vous avez un poids normal. Continuez à maintenir un mode de vie sain en adoptant une alimentation équilibrée et en pratiquant régulièrement une activité physique.';
    }
    else if (imc >= 25 && imc < 30) {
        message += 'de surpoids. Il est recommandé de suivre un régime alimentaire équilibré et de pratiquer une activité physique régulière pour perdre du poids.';
    }
    else if (imc >= 30 && imc < 35) {
        message += "d'obèsité modérée. Consultez un médecin pour obtenir des conseils sur la gestion du poids et un plan d'action adapté.";
    }
    else if (imc >= 35 && imc < 40) {
        message += "d'obèsité sévère. Il est important de consulter un professionnel de santé pour obtenir un suivi médical régulier et des conseils pour perdre du poids.";
    }
    else {
        message += "d'obésité morbide ou massive. Il est crucial de consulter immédiatement un médecin pour obtenir une prise en charge médicale appropriée.";
    }

    const interpretation = document.getElementById('interpretation');
    interpretation.innerHTML = `Votre IMC est : ${imc.toFixed(2)}<hr>${message}`;
    interpretation.parentNode.hidden = false;
}
