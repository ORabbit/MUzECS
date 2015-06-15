### Welcome to BlocklyDuino

BlocklyDuino is a **web-based visual programming editor for [Arduino](http://www.arduino.cc/)**.

MUzECS is based on [Blockly](https://developers.google.com/blockly/) and [BlocklyDuino](https://github.com/gasolin/BlocklyDuino), the web-based, graphical programming editor. Provide static type language blocks and code generators for Arduino programming.

We have a [Google Chrome App](https://github.com/ORabbit/MUzECSChromeApp)

### Features

* Programming Arduino with visually drag and drop code blocks
* Generate fully compatible Arduino source code
* Interactive Arduino board with predefined ECS code blocks
* Load different on-site examples with url parameters

### Demo

MUzECS is a web tool. You can give it a try at
[Web](http://134.48.6.40/) to see the working MUzECS site.

### Integrated Arduino upload

To avoid the tedious step of manually pasting code to the Arduino IDE, you can use our [MUzECS Chrome App](https://github.com/ORabbit/MUzECSChromeApp) to upload the code to a connected Arduino board on Mac OS X, Windows (with driver), Chrome OS, and Linux systems!

### Usage

1. Open browser to MUzECS, drag and drop blocks to make an Arduino program
2. Select the 'Arduino' tab and copy all of the source code into an existing or new project in the Arduino IDE
3. Press the 'Upload' button to send the Arudino code to the webserver to be compiled
4. Open [MUzECS Chrome App](https://github.com/ORabbit/MUzECSChromeApp) and click 'Get Compiled Sketch'
5. Select the port your Arduino is connected to
6. Press the 'Upload' button to burn the code into a connected Arudino board

------

When changing javascript files run '<python build.py>'

To run daemon for ino web server on server run '<sudo nohup /var/www/html/MUBlocklyDuino/ino_web_server.py>'

To run daemon for cleaner on server run '<sudo nohup /var/www/html/MUBlocklyDuino/cleaner.py>'

### ChangeLog

### Authors and Contributors
Marquette University REU Team (@orabbit, @davidxyz, @drummerfreek789)

Thanks Fred Lin (@gasolin) for creating [BlocklyDuino](https://github.com/gasolin/BlocklyDuino)

Thanks [Blockly](https://developers.google.com/blockly/)

Thanks Arduino and Seeeduino guys for Arduino and Grove blocks.

The project is also inspired by [arduiblock](https://github.com/taweili/ardublock) and [modkit](http://www.modk.it/)

### License

Copyright (C) 2012~2015 Fred Lin gasolin+blockly@gmail.com

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
