/**
 * Created by Marquette University REU team
 *
 *
* purpose: this code determines what the arduino code will be in the ecs tab
 * further documentation can be found at https://developers.google.com/blockly/custom-blocks/overview 
 *
 */

goog.provide('Blockly.Arduino.advancedCode');

goog.require('Blockly.Arduino');

Blockly.Arduino.advanced_code_head = function() {
  var value_code = Blockly.Arduino.valueToCode(this, 'code', Blockly.Arduino.ORDER_ATOMIC);
  value_code = value_code.substring(1, value_code.length - 1);

  Blockly.Arduino.definitions_['definitions_advanced_code_' + value_code] = value_code;
  var code = '';
  return code;
};

Blockly.Arduino.advanced_code_setup = function() {
  var value_code = Blockly.Arduino.valueToCode(this, 'code', Blockly.Arduino.ORDER_ATOMIC);
  value_code = value_code.substring(1, value_code.length - 1);

  Blockly.Arduino.setups_['setups_advanced_code_' + value_code] = value_code;
  var code = '';
  return code;
};

Blockly.Arduino.advanced_code_loop = function() {
  var value_code = Blockly.Arduino.valueToCode(this, 'code', Blockly.Arduino.ORDER_ATOMIC);
  value_code = value_code.substring(1, value_code.length - 1);

  var code = value_code;
  return code;
};

Blockly.Arduino.advanced_code_code = function() {
  // Text value.
  var code = Blockly.Arduino.quote_(this.getFieldValue('CODE'));
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
