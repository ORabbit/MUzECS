/**
 * Created by Marquette University REU team
 *
 *
 *
 * purpose: this code changes the way the blocks in the ecs tab look and how it takes input
 * further documentation can be found at https://developers.google.com/blockly/custom-blocks/overview
 */

goog.provide('Blockly.Blocks.communications');

goog.require('Blockly.Blocks');

Blockly.Blocks['serial_print'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("message2")
        .setCheck("String")
	.appendField("Serial print       message2");
    this.appendValueInput("newline")
	.setCheck("Boolean")
	.appendField("                         newline");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('send message via serial port');
  }
};

Blockly.Blocks['serial_read'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendDummyInput("serial read")
	.appendField("serial read");
    this.setOutput(true, "Number");
    this.setTooltip('read data fromt he serial port');
  }
};

Blockly.Blocks['serial_data_available'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendDummyInput("serial data")
	.appendField("serial data available");
    this.setOutput(true, "Number");
    this.setTooltip('returns available data from the serial port');
  }
};

Blockly.Blocks['serial_println'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("message")
        .setCheck("String")
	.appendField("Serial println");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('send message via serial port');
  }
};


Blockly.Blocks['glue_number'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("NUM")
        .setCheck("Number")
	.appendField("glue number");
    this.setOutput(true, "String");
    this.setTooltip('glue number to string');
  }
};


Blockly.Blocks['glue_boolean'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("BOOL")
        .setCheck("Boolean")
	.appendField("glue booelan");
    this.setOutput(true, "String");
    this.setTooltip('glue boolean to string');
  }
};





