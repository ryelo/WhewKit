# WhewKit


## File Structure
```
WhewKit/
├── dist/ - distribution used for testing
│   └── css
│       └── base.css
│   └── html
│       └── index.html
├── kit/
│   ├── extends
│   ├── helpers
│   ├── mixins
│   └── variables
├── base.scss - testing sass file
├── index.pug - testing pug file
└── whewkit.scss - importing partials from /kit
```

### Kit folders
- Extends
- Helpers
  - Not necessarily sass oriented, but useful classes for rapid development
- Mixins
- Variables: any global variables or colors
  - If you need a new variable for a partial that can be used globally, create the variable here and reference it in your new partial.


## Setup

`git clone: https://github.com/ryelo/WhewKit.git`

`npm install`


## Running Gulp

You have three different ways to gulp

`gulp sass` - compiles `./base.scss` to `./dist/css/base.css`
`gulp pug` - compiles `./index.pug` to `./dist/html/index.html`
`gulp watch` - compiles both files above, starts browsersync, and loads localhost


## Development

1. Place new sass partial in appropriate `./kit` folder
2. Import the file in `./whewkit.scss`
3. Test using `./index.pug` and `./base.scss`


## Using WhewKit in another project (for now)

Clone the directory and `@import '/path/to/whewkit.scss'
