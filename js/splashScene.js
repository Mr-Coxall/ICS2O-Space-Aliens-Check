/* global Phaser */

// Copyright (c) 2022 Marcus Wehbi All rights reserved
//
// Created by: Marcus Wehbi
// Created on: May 2022
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
  }

  // get the scene up and running, initialize data object with content of another data object (our particular scene) 
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // handle asynchronous external file loading in a blocking manner
  preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
  }

  // creating a new object by using an existing object as the prototype for the new object.
  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  // replacing old content of the element with new provided content, and returning the element. 
  update (time, delta) {
    if (time > 3000){
      this.scene.switch('titleScene')
    }
  }  
}

export default SplashScene
