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

