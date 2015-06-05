goog.provide('Blockly.Arduino.ecs');

goog.require('Blockly.Arduino');

Blockly.JavaScript['play_note'] = function(block) {
  var value_note = Blockly.JavaScript.valueToCode(block, 'note', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  var code = 'tone(11,'+value_note+');\n';
  return code;
};

Blockly.JavaScript['play_note_time'] = function(block) {
  var value_note = Blockly.JavaScript.valueToCode(block, 'note', Blockly.JavaScript.ORDER_ATOMIC);
  var value_milliseconds = Blockly.JavaScript.valueToCode(block, 'milliseconds', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['button_pressed'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...\n';
  return code;
};

Blockly.JavaScript['play_frequency'] = function(block) {
  var value_frequency = Blockly.JavaScript.valueToCode(block, 'frequency', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['play_frequency_time'] = function(block) {
  var value_frequency = Blockly.JavaScript.valueToCode(block, 'frequency', Blockly.JavaScript.ORDER_ATOMIC);
  var value_milliseconds = Blockly.JavaScript.valueToCode(block, 'milliseconds', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['turn_led_1_on'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(5, HIGH);\n';
  return code;
};
Blockly.JavaScript['turn_led_1_off'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(5, LOW);\n';
  return code;
};

Blockly.JavaScript['turn_led_2_on'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(5, HIGH);\n';
  return code;
};

Blockly.JavaScript['turn_led_2_off'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(5, LOW);\n';
  return code;
};

Blockly.JavaScript['turn_led_3_on'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(5, HIGH);\n';
  return code;
};

Blockly.JavaScript['turn_led_3_off'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(5, LOW);\n';
  return code;
};

Blockly.JavaScript['turn_led_4_on'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(5, LOW);\n';
  return code;
};

Blockly.JavaScript['turn_led_4_off'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(5, HIGH);\n';
  return code;
};

Blockly.JavaScript['set_up_keyboard'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['update_keyboard'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['key_pressed'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};