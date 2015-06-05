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
    default:
      break;
  }
  var code = 'tone(11, '+value_note+');\n';
  return code;
};

Blockly.Arduino.play_note_time = function() {
  var value_note = Blockly.Arduino.valueToCode(this, 'note', Blockly.Arduino.ORDER_ATOMIC);
  var value_milliseconds = Blockly.Arduino.valueToCode(this, 'milliseconds', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  switch (value_note){
    case "\"A\"":
      value_note = "400";
      break;
    default:
      break;
  }
  var code = 'tone(11, '+value_note+', '+value_milliseconds+');\n';
  return code;
};

Blockly.Arduino.button_pressed = function() {
  // TODO: Assemble JavaScript into code variable.
  var value_button = Blockly.Arduino.valueToCode(this, 'milliseconds', Blockly.Arduino.ORDER_ATOMIC);
  var button_pin;
  switch (value_button){
    case "\"1\"":
      button_pin = 6;
      break;
    case "\"2\"":
      button_pin = 8;
      break;
    case "\"3\"":
      button_pin = 10;
      break;
    case "\"4\"":
      button_pin = 12;
    default:
      break;
  }

  var code = 'digitalRead(6)';
  return code;
};

Blockly.Arduino.play_frequency = function() {
  var value_frequency = Blockly.Arduino.valueToCode(this, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'tone(11, '+value_frequency+');\n';
  return code;
};

Blockly.Arduino.play_frequency_time = function() {
  var value_frequency = Blockly.Arduino.valueToCode(this, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
  var value_milliseconds = Blockly.Arduino.valueToCode(this, 'milliseconds', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'tone(11, '+value_frequency+', '+value_milliseconds+');\n';
  return code;
};

Blockly.Arduino.no_tone = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = 'noTone(11);\n';
  return code;
};

Blockly.Arduino.turn_led_1_on = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.setups_['setup_red_led'] = 'pinMode(5, OUTPUT);';
  var code = 'digitalWrite(5, HIGH);\n';
  return code;
};
Blockly.Arduino.turn_led_1_off = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.setups_['setup_red_led'] = 'pinMode(5, OUTPUT);';
  var code = 'digitalWrite(5, LOW);\n';
  return code;
};

Blockly.Arduino.turn_led_2_on = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.setups_['setup_orange_led'] = 'pinMode(7, OUTPUT);';
  var code = 'digitalWrite(7, HIGH);\n';
  return code;
};

Blockly.Arduino.turn_led_2_off = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.setups_['setup_orange_led'] = 'pinMode(7, OUTPUT);';
  var code = 'digitalWrite(7, LOW);\n';
  return code;
};

Blockly.Arduino.turn_led_3_on = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.setups_['setup_yellow_led'] = 'pinMode(9, OUTPUT);';
  var code = 'digitalWrite(9, HIGH);\n';
  return code;
};

Blockly.Arduino.turn_led_3_off = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.setups_['setup_yellow_led'] = 'pinMode(9, OUTPUT);';
  var code = 'digitalWrite(9, LOW);\n';
  return code;
};

Blockly.Arduino.turn_led_4_on = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.setups_['setup_green_led'] = 'pinMode(13, OUTPUT);';
  var code = 'digitalWrite(13, HIGH);\n';
  return code;
};

Blockly.Arduino.turn_led_4_off = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.setups_['setup_green_led'] = 'pinMode(13, OUTPUT);';
  var code = 'digitalWrite(13, LOW);\n';
  return code;
};

Blockly.Arduino.set_up_keyboard = function() {
  // TODO: Assemble JavaScript into code variable.
Blockly.Arduino.definitions_['var_keysDown_read']="boolean keysDown[36];\n"
  return null;
};

Blockly.Arduino.update_keyboard = function() {
  // TODO: Assemble JavaScript into code variable.
Blockly.Arduino.definitions_['vars_ecs_reads']="int ECSindex;\nint ECSnumAvailable;\nint ECSiteration;\n"
  var code = 'ECSnumAvailable = Serial.available()\n' +
 'char buffer[ECSnumAvailable];\n'+
 'Serial.readBytes(buffer, ECSnumAvailable);\n'+
 'for (ECSiteration = 0; ECSiteration < ( ECSnumAvailable ); ++ECSiteration)\n'+
 '{\n'+
 '	ECSindex = buffer[ECSiteration];\n'+
 '	keysDown[ECSindex] = !keysDown[ECSindex];\n'+
 '}\n';
  return code;
};

Blockly.Arduino.key_pressed = function() {
  var value_name = Blockly.Arduino.valueToCode(this, 'key', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};
