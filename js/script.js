/*

MILESTONE 1
Creiamo un oggetto Movie, con le seguenti proprietà: 
- images che conterrà una lista di immagini
- title che conterrà il titolo del film
- category che conterrà la categoria del film
- length che conterrà la lunghezza del film in minuti

MILESTONE 2
Creare il markup ed utilizzare le direttive vue per stampare a schermo il film in una card. Mostrando la prima immagine, il titolo, la categoria e la lunghezza

MILESTONE 3
Aggiungiamo due frecce al markup e utilizziamole per rendere dimanico lo slider. 
Al click sulla freccia di destra scorriamo all'immagine successiva
Al click sulla freccia di sinistra scorriamo all'immagine precedente

MILESTONE 4
Aggiungiamo le miniature delle altre immagini presenti per il film. Evidenziamo l'immagine selezionata, magari con un border. Quando clicchiamo sulle frecce la miniatura evidenziata cambia.

*/


const { createApp } = Vue;

createApp({
  data() {
    return {
      movie: {
        images: [
          'https://www.themoviedb.org/t/p/w500/b3zVRZ9R2QyV0klRESMLKaBwQqm.jpg',
          'https://www.themoviedb.org/t/p/w500/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg',
          'https://www.themoviedb.org/t/p/w500/d4Ja9AMFoWEtTPKFrzQac0ReYb.jpg',
          'https://www.themoviedb.org/t/p/w500/p6erCET4fvzQiGz0wgwGFvEIdcb.jpg',
          'https://www.themoviedb.org/t/p/w500/pWBgjkG8ASvYnrql3tbjMo0d8tk.jpg'
        ],
        title: 'The Mandalorian',
        category: 'Action',
        duration: 120,
      },
      activeImageIndex: 0,
    }
  },
  
  methods: {
    nextSlide() {
      // ricordatevi che per accedere alle proprietà di data ci serve indicarle con "this."
      if(this.activeImageIndex < this.movie.images.length - 1) {
        this.activeImageIndex++;
      } else {
        this.activeImageIndex = 0;
      }

    },

    prevSlide() {
      
      if(this.activeImageIndex == 0) {
        this.activeImageIndex = this.movie.images.length - 1;
      } else {
        this.activeImageIndex--;
      }
    }
  },
  
}).mount('#app')