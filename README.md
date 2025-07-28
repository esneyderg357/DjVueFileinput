# DjVueFileinput -	Custom File Input component for Vue3

Version 1.0.0

The best and simplest File Input component for Vue 3, UI independent and no dependency.

## Features

- without dependency
- works with v-model as standard text input
- Supports simple and multiple selection
- Customizable style with css variables
- Deselect file(s) option
- Preview option with customizable size and type
- Preview shows filename and size

[SHOW DEMO HERE!!!](https://esneyderg357.github.io/DjVueFileinput-docs/en/demo.html)

### Install

    npm install djvuefileinput --save

### Import

    import DjFileinput from 'djvuefileinput'

### Using

	<FileInput  v-model="myfile" />

The type of v-model is 'File' for simple selection and File Array for multiple selection.

### Available properties
	
| Prop      | Type      | Default   | Description|
| --------- | --------  | -------- | --------- |
| preview   | Boolean   | true      |  Indicates if show a thumbnail of the selected image, or an icon if it is not an image. |
| multiple  | Boolean   | false     | Indicates whether or not multiple files are allowed        |
| width  | String   | '100%'     | Width of thumbnail if visible        |
| height  | String   | '100%'     | Height of thumbnail if visible            |
| type  | String   | 'square'     | type of thumbnail if visible ('square' or 'circle')       |


### css vars
- --dj-fileinput-btn-bg
- --dj-fileinput-btn-border
- --dj-fileinput-btn-color
- --dj-fileinput-close-btn-bg
- --dj-fileinput-close-color
	
### Documentation

You can find full documentation and examples [here](https://esneyderg357.github.io/DjVueFileinput-docs/)

## Author

The DjVueFileinput vue component was written by David Esneyder Jerez Garnica.

[Linkedin](https://www.linkedin.com/in/david-esneyder-jerez-garnica-84309b239/)

[esneyderg357@gmail.com](mailto:esneyderg357@gmail.com)

## License

Copyright (c) 2025 David Esneyder Jerez Garnica.
Released under the GPL v3 license.