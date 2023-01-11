function aujourdhuiDate() {
    let aujourdhui = new Date();
    let nombrejour = aujourdhui.getDay();
    let jour = aujourdhui.getDate();
    let mois = aujourdhui.getMonth() + 1;
    let annee = aujourdhui.getFullYear();

    switch (nombrejour) {
        case 1:
          nomjour = 'lundi';
          break;
        case 2:
          nomjour = 'mardi';
          break;
        case 3:
          nomjour = 'mercredi';
          break;
        case 4:
          nomjour = 'jeudi';
          break;
        case 5:
          nomjour = 'vendredi';
          break;
        case 6:
          nomjour = 'samedi';
          break;
        case 7:
          nomjour = 'dimanche';
          break;
      }

      switch (mois) {
        case 1:
          nomois = 'janvier';
          break;
        case 2:
          nomois = 'fevrier';
          break;
        case 3:
          nomois = 'mars';
          break;
        case 4:
          nomois = 'avril';
          break;
        case 5:
          nomois = 'mai';
          break;
        case 6:
          nomois = 'juin';
          break;
        case 7:
          nomois = 'juillet';
          break;
        case 8:
          nomois = 'août';
          break;
        case 9:
          nomois = 'septembre';
          break;
        case 10:
          nomois = 'octobre';
          break;
        case 11:
          nomois = 'novembre';
          break;
        case 12:
          nomois = 'décembre';
          break;
      }
      alert('Nous sommes le ' + nomjour + ' ' + jour + ' ' + nomois + ' ' + annee);
}

function getMois () {
    let lesMois_arr = [
        '',
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
    ];
    let question = prompt('Écrivez la date du mois que vous voulez voir', '1,2,3...');
    let txt = lesMois_arr[question];
    alert(txt);
}