import DjFileinput from './src/FileInput.vue'

DjFileinput.install = (app) => {
  app.component('DjFileinput', DjFileinput)
}

export default DjFileinput