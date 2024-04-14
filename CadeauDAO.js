class CadeauDAO{
  lister(action){
    fetch("https://ei6hoevy6d.execute-api.us-east-1.amazonaws.com/default/lister", {mode:'cors'})
      .then(response => response.json())
      .then(data =>
        {
          console.log(data);
          let listeCadeau = [];
          for(let position in data){
            let cadeau = new Cadeau(data[position].nom,
                                    data[position].marque,
                                    data[position].description,
                                    data[position].id);

            console.log(cadeau);
            listeCadeau.push(cadeau);
          }
          action(listeCadeau);
        });
  }
  chercher(id, action){
    fetch("https://ep4iv638fa.execute-api.us-east-1.amazonaws.com/default/chercher-par-id" + '?id=' + id , {mode:'cors'})
      .then(response => response.json())
      .then(data =>
        {
          console.log(data);
          let cadeau = new Cadeau(data.nom,
                                  data.marque,
                                  data.description,
                                  data.id);
          action(cadeau);
        });
  }
  ajouter(cadeau, action){
    fetch("https://n5ag1dxpka.execute-api.us-east-1.amazonaws.com/default/Ajouter",
      {
        method: 'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body: "cadeaujson=" + JSON.stringify(cadeau),
        mode:'cors',
      })
      .then(response => response.text())
      .then(data =>
        {
          console.log('Détail:', data);
          action();
        });
  }
}

