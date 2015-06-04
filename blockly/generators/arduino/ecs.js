goog.provide('Blockly.Arduino.ecs');

goog.require('Blockly.Arduino');

Blockly.JavaScript['play_note'] = function(block) {
  var value_note = Blockly.JavaScript.valueToCode(block, 'note', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  var code = 'tone(11,'+value_note+');\n';
  return code;
};

Blockly.JavaScript['turn_led_1_on'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(5, HIGH);\n';
  return code;
};