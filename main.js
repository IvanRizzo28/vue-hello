'use strict';

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Prova VueJs',
        foto: 'https://www.rainews.it/dl/img/2022/05/29/1653823359813_Immagine__.png',
        stile: 'width: 100px'
      }
    }
  }).mount('#app')