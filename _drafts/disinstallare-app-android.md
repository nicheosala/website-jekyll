---
title: Disinstallare qualsiasi app Android
summary: "Anche quelle mostrate come solo disattivabili, così come quelle a primo impatto non disinstallabili."
---

# Introduzione

Android è un sistema operativo *open source*.

Perciò, i produttori di hardware possono adattarlo alle funzionalità dei propri device e aggiungere applicazioni proprietarie.

L'utente finale può godere delle stesse opportunità di personalizzazione: ad esempio, può scegliere di tenere installate solo le applicazioni a suo parere utili.

In questo post, spiego come disinstallare qualsiasi app Android. Non importa se, dalle impostazioni, questa può solo essere disattivata, o peggio ancora non è proprio possibile rimuoverla: questo metodo non ha limiti.

Eseguiremo dei comandi all'interno di uno smartphone su cui è installato Android, tramite un terminale aperto da un computer. Assicuro che può farlo chiunque. In ogni caso, per ogni difficoltà, io sono disponibile!

Se hai dimestischezza con l'inglese, nella sezione [Fonti](#fonti) trovi l'articolo ispiratorio, che è la versione sintetica del mio post.

# Requisiti

## App Inspector
Ogni app è associata a un nome univoco. Ad esempio, il nome univoco di Instagram è `com.instagram.android`. Quando vogliamo disinstallare un'app, dobbiamo conoscere il suo nome univoco. A tal fine, viene in soccorso [App Inspector](https://play.google.com/store/apps/details?id=com.ubqsoft.sec01&hl=it_IT): ci mostra un elenco di tutte le applicazioni installate, insieme al loro nome univoco.

Installa App Inspector, segnati i nomi univoci di tutte le app che vuoi far scomparire dalla faccia di Android, e prosegui.

## USB debugging
Per inviare comandi allo smartphone tramite un dispotivo collegato a esso con cavo USB (leggi: il tuo computer), bisogna attivare questa funzionalità sullo smartphone stesso. Come?
1. apri le impostazioni dello smartphone
2. nella sezione relativa alle informazioni (rimango vago, perché ogni verisone personalizzata di Android può avere la sezione informazioni in posti diversi), troverai la scritta "numero build". Clicca sopra quella scritta sette volte. Sì, è appena successa una magia: hai attivato le cosiddette "opzioni sviluppatore": un set di funzionalità di Android normalmente precluse all'utente comune, tra cui quella di USB debugging.
3. nelle impostazioni, da qualche parte, dovrebbe essere apparsa la sezione "opzioni sviluppatore". Aprila. Qui cerca l'opzione "debug tramite USB" oppure "USB debugging" o altre espressioni affini: attiva l'opzione.

Lo smartphone è pronto per essere collegato a un computer. Peccato che il computer non sia pronto per il nostro smartphone. Procedi, manca poco.

## Android Debug Bridge (ADB)
Per inviare comandi al dispositivo Android, bisogna installare sul PC un software chiamato Android Debug Bridge (ADB).

Perciò, anzitutto scarica il file .zip che contiene ADB: [qui trovi la versione per Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip) (se usi una distribuzione GNU/Linux, so che puoi farcela da solo).

Poi, estrai il file .zip in un posto che ti piace. Il desktop? Okay.

Siamo pronti!

# Disinstallazione
Collega lo smartphone al tuo computer tramite cavo USB.\
Dopodiché, sul PC, recati nella cartella che hai estratto dal file .zip. Qui dovresti trovare un'altra cartella, chiamata "platform-tools". Entra anche in quella.\
Quando ti trovi dentro "platform-tools", clicca con il tasto destro su una zona vuota. Il menù dovrebbe mostrarti una opzione del tipo: "apri finestra CMD qui". La parola chiave è "CMD" (l'antico terminale di Windows).\

Adesso vedi un terminale. Non spaventarti: se sei arrivato qui, hai fatto il grosso: stiamo per divertirci.

Nel terminale digita `adb shell`. Questo comando apre una shell nel nostro smartphone, ovvero una finestra nella quale, se digitiamo comandi, questi sono eseguiti dallo smartphone.

# Fonti
- [l'articolo ispiratorio](https://www.xda-developers.com/uninstall-carrier-oem-bloatware-without-root-access)
- [il codice sorgente di Android](https://cs.android.com)

