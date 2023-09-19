# zDebugger for Overte

This is an application for use in [Overte](https://overte.org/).

This app provides an improved console logging experience complete with filtering by keyword or output type.

A copy of this script [is hosted here](https://overte.zetaphor.com/scripts/zDebugger/zDebugger.js), which can be loaded directly into Overte from the script manager.

![image](https://github.com/Zetaphor/overte-zDebugger/assets/3112763/59ebf644-87eb-4770-ac50-a775cdc1a1ba)

### Hosting

The required files to host a copy of this script are as follows:

* zDebugger.html
* zDebugger.js
* output.css
* cash.min.js
* icon-active.png
* icon-inactive.png

The other files in this repo are not required to host an instance of this app.


### Dependencies

This script uses [cash.js](https://github.com/fabiospampinato/cash) for simpler selectors and [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) for CSS classes.

You can update the Tailwind CSS build output by installing `tailwindcss` with NPM and then running:

`npx tailwindcss -i tailwind.css -o output.css`
