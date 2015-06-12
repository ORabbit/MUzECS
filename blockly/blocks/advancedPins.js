/**
 * Created by Marquette University REU team
 *
 *
 *
 *
 */

goog.provide('Blockly.Blocks.advancedPins');

goog.require('Blockly.Blocks');

Blockly.Blocks['play_note_adv'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Play Note    pin#");
    this.appendValueInput("note")
        .setCheck("String")
        .appendField("                    note");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['play_note_time_adv'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("                               pin#");
    this.appendValueInput("note")
        .setCheck("String")
        .appendField("Play Note               note");
    this.appendValueInput("milliseconds")
        .setCheck("Number")
        .appendField("                  milliseconds");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['play_frequency_adv'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField(" Play Frequency            pin#");
    this.appendValueInput("frequency")
        .setCheck("Number")
        .appendField("                             frequency");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['play_frequency_time_adv'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("                                                 pin#");
    this.appendValueInput("frequency")
        .setCheck("Number")
        .appendField("Play Frequency               frequency");
    this.appendValueInput("milliseconds")
        .setCheck("Number")
        .appendField("                                    milliseconds");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['no_tone_adv'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("No Tone     pin#");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['turn_led_on_adv'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Turn LED On     pin#");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['turn_led_off_adv'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Turn LED Off     pin#");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['button_pressed_adv'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Button Pressed    pin#");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};

Blockly.Blocks['digital_adv'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Digital    pin#");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};

Blockly.Blocks['set_digital_adv'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Set Digital    pin#");
    this.appendDummyInput()
        .appendField("  Voltage")
        .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "voltage");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['analog_adv'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Analog    pin#");
    this.setOutput(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['set_analog_adv'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Analog    pin#");
    this.appendValueInput("analog")
        .setCheck("Number");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
