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
	alert("unrecognized note used in block.\n\n\nHint: Please ask your teacher for a list of available note names.");
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
	alert("unrecognized note used in block.\n\n\nHint: Please ask your teacher for a list of available note names.");
      break;
  }
  var code = 'tone(11, '+value_note+', '+value_milliseconds+');\n';
  return code;
};

Blockly.Arduino.button_pressed = function() {
  // TODO: Assemble JavaScript into code variable.
  var value_button = Blockly.Arduino.valueToCode(this, 'button', Blockly.Arduino.ORDER_ATOMIC);
  var button_pin;
  switch (value_button){
    case "1":
  Blockly.Arduino.setups_['setup_pin_6'] = 'pinMode(6, INPUT);';
      button_pin = 6;
      break;
    case "2":
  Blockly.Arduino.setups_['setup_pin_8'] = 'pinMode(8, INPUT);';
      button_pin = 8;
      break;
    case "3":
  Blockly.Arduino.setups_['setup_pin_10'] = 'pinMode(10, INPUT);';
      button_pin = 10;
      break;
    case "4":
  Blockly.Arduino.setups_['setup_pin_12'] = 'pinMode(12, INPUT);';
      button_pin = 12;
    default:
	//error
	alert("invalid button used in block.\n\n\nHint: Valid button numbers are 1-4.");
      break;
  }
  var code = 'digitalRead('+button_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
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
  Blockly.Arduino.setups_['setup_red_led'] = 'pinMode(5, OUTPUT);\n';
  var code = 'digitalWrite(5, HIGH);\n';
  return code;
};
Blockly.Arduino.turn_led_1_off = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.setups_['setup_red_led'] = 'pinMode(5, OUTPUT);\n';
  var code = 'digitalWrite(5, LOW);\n';
  return code;
};

Blockly.Arduino.turn_led_2_on = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.setups_['setup_orange_led'] = 'pinMode(7, OUTPUT);\n';
  var code = 'digitalWrite(7, HIGH);\n';
  return code;
};

Blockly.Arduino.turn_led_2_off = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.setups_['setup_orange_led'] = 'pinMode(7, OUTPUT);\n';
  var code = 'digitalWrite(7, LOW);\n';
  return code;
};

Blockly.Arduino.turn_led_3_on = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.setups_['setup_yellow_led'] = 'pinMode(9, OUTPUT);\n';
  var code = 'digitalWrite(9, HIGH);\n';
  return code;
};

Blockly.Arduino.turn_led_3_off = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.setups_['setup_yellow_led'] = 'pinMode(9, OUTPUT);\n';
  var code = 'digitalWrite(9, LOW);\n';
  return code;
};

Blockly.Arduino.turn_led_4_on = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.setups_['setup_green_led'] = 'pinMode(13, OUTPUT);\n';
  var code = 'digitalWrite(13, HIGH);\n';
  return code;
};

Blockly.Arduino.turn_led_4_off = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.setups_['setup_green_led'] = 'pinMode(13, OUTPUT);\n';
  var code = 'digitalWrite(13, LOW);\n';
  return code;
};

Blockly.Arduino.set_up_keyboard = function() {
  // TODO: Assemble JavaScript into code variable.
Blockly.Arduino.definitions_['var_keysDown_read']="boolean keysDown[36];\n"
  return "";
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
  var value_key = Blockly.Arduino.valueToCode(this, 'key', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
 var key_code;
  if(value_key.length==3){// its valid
	var key=value_key.charAt(1);
	if(key.charCodeAt()>47&&key.charCodeAt()<58){
		//0=0
		key_code= (key.charCodeAt()-48);
	}else if(key.charCodeAt()>96&&key.charCodeAt()<123){
		// a =10
		key_code = (key.charCodeAt()-97)+10;
	}
}
//key code = null error alert box
if(key_code==null){
	alert("unrecognized key used in block.\n\n\nHiny: Valid keys are a-z and 0-9.");
}
  var code = 'keysDown['+key_code+']';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
