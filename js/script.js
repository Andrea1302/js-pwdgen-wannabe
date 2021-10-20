/* Chiedi all’utente il suo nome,
 poi chiedi il suo cognome,
 poi chiedi il suo colore preferito
Infine scrivi sulla pagina “La password assegnata è: ” nomecognomecolorepreferito21  */


    // Chiediamo all utente il suo nome 
        let nome = prompt('Inserisci il tuo nome');
        // console.log(nome);
        
    // chiediamo all utente il suo cognome 
        let cognome = prompt('Inserisci il tuo cognome');
        // console.log(cognome);

    // Chiediamo all utente il suo colore preferito
        let colore_preferito = prompt ('Quale è il tuo colore preferito?');
        // console.log(colore_preferito);

    // definiamo un valore ipotetico (finale anno)
        const finale_anno =('21');

    // Generazione password 
        let genera_password= `${nome}${cognome}${colore_preferito}${finale_anno}`;
        /* console.log(
            `${nome}${cognome}${colore_preferito}${finale_anno}`
           );*/

    // Restituiamo all utente la password generata 
        document.getElementById('ms_password').innerHTML = `La password generata per te &egrave: ${genera_password}` ;
    