/**
 * Created by Marquette University REU team
 *
 *
 *
 * purpose: this code changes the way the blocks in the ecs tab look and how it takes input
 * further documentation can be found at https://developers.google.com/blockly/custom-blocks/overview
 */

goog.provide('Blockly.Blocks.advancedCode');

goog.require('Blockly.Blocks');

Blockly.Blocks['advanced_code_head'] = {
  init: function() {
    this.appendValueInput("code")
        .setCheck(["Code", "String"])
        .appendField("head");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('add raw codes to head');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['advanced_code_setup'] = {
  init: function() {
    this.appendValueInput("code")
        .setCheck(["Code", "String"])
        .appendField("setup");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('add raw codes to setup()');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['advanced_code_loop'] = {
  init: function() {
    this.appendValueInput("code")
        .setCheck(["Code", "String"])
        .appendField("loop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('add raw codes to loop()');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['advanced_code_code'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput(''), 'CODE')
        .appendField(this.newQuote_(false));
    this.setOutput(true, 'Code');
    this.setTooltip('Glue a text message');
  },
  newQuote_: function(open) {
    if (open == Blockly.RTL) {
      var file = 'quote1.png';
    } else {
      var file = 'quote0.png';
    }
    return new Blockly.FieldImage(Blockly.pathToMedia + file, 12, 12, '"');
  }
};
