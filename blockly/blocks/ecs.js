goog.provide('Blockly.Blocks.ecs');

goog.require('Blockly.Blocks');

Blockly.Blocks['play_note'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendValueInput("note")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Play Note  note");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['play_note_time'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendValueInput("note")
        .setCheck("String")
        .appendField("Play Note Time    note");
    this.appendValueInput("milliseconds")
        .setCheck("Number")
        .appendField("                milliseconds");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['play_frequency'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendValueInput("frequency")
        .setCheck("Number")
        .appendField("Play Frequency     frequency");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['play_frequency_time'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendValueInput("frequency")
        .setCheck("Number")
        .appendField("Play Frequency     frequency");
    this.appendValueInput("milliseconds")
        .setCheck("Number")
        .appendField("                          milliseconds");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['turn_led_1_on'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://www.mscs.mu.edu/~cohare/BlocklyDuino-master/blockly/media/red_led.png", 30, 30, "*"))
        .appendField("Turn LED 1 On");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
}
Blockly.Blocks['turn_led_1_off'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://www.mscs.mu.edu/~cohare/BlocklyDuino-master/blockly/media/red_led.png", 30, 30, "*"))
        .appendField("Turn LED 1 Off");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Blocks['turn_led_2_on'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://www.mscs.mu.edu/~cohare/BlocklyDuino-master/blockly/media/led_orange.png", 30, 30, "*"))
        .appendField("Turn LED 2 On");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
