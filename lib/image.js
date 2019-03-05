'use strict'

const SDL_image = require('../dep/SDL_image')

class image {
  constructor(file = '') {
    this._texture = null

    this.surface = SDL_image.IMG_Load(file)
    this.file = file
  }

  free() {
    console.log('should be free by SDL_surface')
  }

  static init() {
    SDL_image.IMG_Init(SDL_image.IMG_InitFlags.IMG_INIT_JPG | SDL_image.IMG_InitFlags.IMG_INIT_PNG | SDL_image.IMG_InitFlags.IMG_INIT_TIF | SDL_image.IMG_InitFlags.IMG_INIT_WEBP)
  }

  static quit() {
    SDL_image.IMG_Quit()
  }
}

image.init()

module.exports = image
