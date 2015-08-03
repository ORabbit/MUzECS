/**
 * Created by Marquette University REU team
 *
 *
 *
 * purpose: this code changes the way the blocks in the ecs tab look and how it takes input
 * further documentation can be found at https://developers.google.com/blockly/custom-blocks/overview
 */

goog.provide('Blockly.Blocks.ecs');

goog.require('Blockly.Blocks');

Blockly.Blocks['play_note'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendValueInput("note")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/sound_wave.png", 30, 30, "*"))
        .appendField("Play Note  note");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
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
        .appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/sound_wave.png", 30, 30, "*"))
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
         .appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/sound_wave.png", 30, 30, "*"))
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
        .appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/sound_wave.png", 30, 30, "*"))
        .appendField("                 milliseconds");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['no_tone'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
	.appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/sound_nowave.png", 30, 30, "*"))
        .appendField("No Tone");
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
        .appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/led_red_on.png", 30, 30, "*"))
        .appendField("Turn LED 1 On");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['turn_led_1_off'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/led_red.png", 30, 30, "*"))
        .appendField("Turn LED 1 Off");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['turn_led_2_on'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/led_orange_on.png", 30, 30, "*"))
        .appendField("Turn LED 2 On");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['turn_led_2_off'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/led_orange.png", 30, 30, "*"))
        .appendField("Turn LED 2 Off");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['turn_led_3_on'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/led_yellow_on.png", 30, 30, "*"))
        .appendField("Turn LED 3 On");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['turn_led_3_off'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/led_yellow.png", 30, 30, "*"))
        .appendField("Turn LED 3 Off");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['turn_led_4_on'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/led_green_on.png", 30, 30, "*"))
        .appendField("Turn LED 4 On");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['turn_led_4_off'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/led_green.png", 30, 30, "*"))
        .appendField("Turn LED 4 Off");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['set_up_keyboard'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
	.appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/keyboard.png", 30, 30, "*"))
        .appendField("Set Up Keyboard");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['update_keyboard'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
	.appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/keyboard.png", 30, 30, "*"))
        .appendField("Update Keyboard");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['key_pressed'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendValueInput("key")
        .setCheck("String")
        .appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/key.png", 30, 30, "*"))
        .appendField("Key Pressed    key");
    //this.setPreviousStatement(true, "null");
    //this.setNextStatement(true, "null");
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};
Blockly.Blocks['button_pressed'] = {

  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendValueInput("button")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/button_press.png", 30, 30, "*"))
        .appendField("Button Pressed    button");
    //this.setPreviousStatement(true, "null");
    //this.setNextStatement(true, "null");
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};

Blockly.Blocks['get_distance'] = {
  init: function() {
    this.appendDummyInput()
	.appendField(new Blockly.FieldImage("http://134.48.6.40/blockly/media/ruler.png", 30, 30, "*"))
        .appendField("Get Distance");
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
