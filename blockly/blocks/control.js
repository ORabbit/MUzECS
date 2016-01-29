/**
 * Created by Marquette University REU team
 *
 *
 *
 * purpose: this code changes the way the blocks in the ecs tab look and how it takes input
 * further documentation can be found at https://developers.google.com/blockly/custom-blocks/overview
 */

goog.provide('Blockly.Blocks.control');

goog.require('Blockly.Blocks');

Blockly.Blocks['delay_micro'] = {
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
    this.setColour(60); // Yellow
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField("delay MICROS microseconds")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay for \"microseconds\" indicated.\nNOTE: 1000000 = 1 second');
  }
};

Blockly.Blocks['delay_milli'] = {
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
    this.setColour(60); // Yellow
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField("delay MILLIS milliseconds")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay for \"milliseconds\" indicated.\nNOTE: 1000 = 1 second');
  }
};

Blockly.Blocks['control_while'] = {
  init: function() {
    this.appendValueInput("test")
        .setCheck("Boolean")
        .appendField("while        test");
    this.appendStatementInput("commands")
        .setCheck(null)
        .appendField("    commands");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('Execute the command as long as \"test\" is true');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['control_do_while'] = {
  init: function() {
    this.appendStatementInput("commands")
        .setCheck(null)
        .appendField("         commands");
    this.appendDummyInput()
        .appendField("do while");
    this.appendValueInput("test")
        .setCheck("Boolean")
        .appendField("                      test");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('Execute the list of commands. Then, if \'test\' is true keep on repeating it until \'test\' is false.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['control_repeat_times'] = {
  init: function() {
    this.appendValueInput("times")
        .setCheck("Number")
        .appendField("                         times");
    this.appendStatementInput("commands")
        .appendField("repeat      commands");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('Repeat the commands. Stop after \"times\" repititions.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['control_repeat_and_count'] = {
    init: function() {
        this.appendValueInput("variable")
             .setCheck("Variable_int")
             .appendField("                    variable");
        this.appendValueInput("times")
             .setCheck("Number")
             .appendField("repeat and count       times");
        this.appendStatementInput("commands")
             .appendField("                    commands");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip('Repeat the commands. Stop after \"times\" repititions. Variable keeps count of iterations.');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['control_repeat_between'] = {
    init: function() {
        this.appendValueInput("variable")
             .setCheck("Variable_int")
             .appendField("                    variable");
        this.appendValueInput("start")
             .setCheck("Number")
             .appendField("                       start");
        this.appendValueInput("stop")
             .setCheck("Number")
             .appendField("repeat between          stop");
        this.appendValueInput("steps")
             .setCheck("Number")
             .appendField("                    steps of");
        this.appendStatementInput("commands")
             .appendField("                    commands");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip('Repeat the commands. Start iterating on \"start\" and stop iterating on \"stop\" in steps of \"steps of\" between the two');
        this.setHelpUrl('http://www.example.com/');
    }
};