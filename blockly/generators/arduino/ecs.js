/**
 * Created by Marquette University REU team
 *
 *
 *
 *
 */

goog.provide('Blockly.Arduino.ecs');

goog.require('Blockly.Arduino');

Blockly.Arduino.play_note = function() {
  var value_note = Blockly.Arduino.valueToCode(this, 'note', Blockly.Arduino.ORDER_ATOMIC);
  switch (value_note){
    case "\"A\"":
      value_note = "400";
      break;
    case default:
      break;
  }
  var code = 'tone(11, '+value_note+');\n';
  return code;
};

Blockly.Arduino.play_note_time = function() {
  var value_note = Blockly.Arduino.valueToCode(this, 'note', Blockly.Arduino.ORDER_ATOMIC);
  var value_milliseconds = Blockly.Arduino.valueToCode(this, 'milliseconds', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Arduino.button_pressed = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = '...\n';
  return code;
};

Blockly.Arduino.play_frequency = function() {
  var value_frequency = Blockly.Arduino.valueToCode(this, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Arduino.play_frequency_time = function() {
  var value_frequency = Blockly.Arduino.valueToCode(this, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
  var value_milliseconds = Blockly.Arduino.valueToCode(this, 'milliseconds', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Arduino.turn_led_1_on = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(5, HIGH);\n';
  return code;
};
Blockly.Arduino.turn_led_1_off = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(5, LOW);\n';
  return code;
};

Blockly.Arduino.turn_led_2_on = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(7, HIGH);\n';
  return code;
};

Blockly.Arduino.turn_led_2_off = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(7, LOW);\n';
  return code;
};

Blockly.Arduino.turn_led_3_on = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(9, HIGH);\n';
  return code;
};

Blockly.Arduino.turn_led_3_off = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(9, LOW);\n';
  return code;
};

Blockly.Arduino.turn_led_4_on = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(13, LOW);\n';
  return code;
};

Blockly.Arduino.turn_led_4_off = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(13, HIGH);\n';
  return code;
};

Blockly.Arduino.set_up_keyboard = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Arduino.update_keyboard = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Arduino.key_pressed = function() {
  var value_name = Blockly.Arduino.valueToCode(this, 'key', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};