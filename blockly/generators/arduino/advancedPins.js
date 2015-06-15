/**
 * Created by Marquette University REU team
 *
 *
 *
 * purpose: this code determines what the arduino code will be in the ecs tab
 * further documentation can be found at https://developers.google.com/blockly/custom-blocks/overview 
 */

goog.provide('Blockly.Arduino.advancedPins');

goog.require('Blockly.Arduino');

Blockly.Arduino.get_freq = function(note) {
  var value_note = "-1";
	switch (note){
   	case "\"C1\"":
   		value_note = "33";
  	 	break;
    case "\"C1#\"":
      value_note = "35";
      break;
    case "\"D1\"":
      value_note = "37";
      break;        
    case "\"D1#\"":
      value_note = "39";
      break;        
    case "\"E1\"":
      value_note = "41";
      break;        
    case "\"F1\"":
      value_note = "44";
      break;        
    case "\"F1#\"":
      value_note = "46";
      break;        
    case "\"G1\"":
      value_note = "49";
      break;        
    case "\"G1#\"":
      value_note = "52";
      break;        
    case "\"A1\"":
      value_note = "55";
      break;        
    case "\"A1#\"":
      value_note = "58";
      break;        
    case "\"B1\"":
      value_note = "62";
      break;        
    case "\"C2\"":
      value_note = "65";
      break;        
    case "\"C2#\"":
      value_note = "69";
      break;        
    case "\"D2\"":
      value_note = "73";
      break;        
    case "\"D2#\"":
      value_note = "78";
      break;        
    case "\"E2\"":
      value_note = "82";
      break;        
    case "\"F2\"":
      value_note = "87";
      break;        
    case "\"F2#\"":
      value_note = "93";
      break;        
    case "\"G2\"":
      value_note = "98";
      break;        
    case "\"G2#\"":
      value_note = "104";
      break;        
    case "\"A2\"":
      value_note = "110";
      break;        
    case "\"A2#\"":
      value_note = "117";
      break;        
    case "\"B2\"":
      value_note = "123";
      break;        
    case "\"C3\"":
      value_note = "131";
      break;        
    case "\"C3#\"":
      value_note = "139";
      break;        
    case "\"D3\"":
      value_note = "147";
      break;        
    case "\"D3#\"":
      value_note = "156";
      break;     
    case "\"E3\"":
      value_note = "165";
      break;           
    case "\"F3\"":
      value_note = "175";
      break;        
    case "\"F3#\"":
      value_note = "185";
      break;        
    case "\"G3\"":
      value_note = "196";
      break;        
    case "\"G3#\"":
      value_note = "208";
      break;        
    case "\"A3\"":
      value_note = "220";
      break;        
    case "\"A3#\"":
      value_note = "233";
      break;        
    case "\"B3\"":
      value_note = "247";
      break;        
    case "\"C\"":
      value_note = "262";
      break;        
    case "\"C#\"":
      value_note = "277";
      break;        
    case "\"D\"":
      value_note = "294";
      break;        
    case "\"D#\"":
      value_note = "311";
      break;        
    case "\"E\"":
      value_note = "330";
      break;        
    case "\"F\"":
      value_note = "349";
      break;        
    case "\"F#\"":
      value_note = "370";
      break;        
    case "\"G\"":
      value_note = "392";
      break;        
    case "\"G#\"":
      value_note = "415";
      break;        
    case "\"A\"":
      value_note = "440";
      break;        
    case "\"A#\"":
      value_note = "466";
      break;        
    case "\"B\"":
      value_note = "494";
      break;        
    case "\"C4\"":
      value_note = "262";
      break;        
    case "\"C4#\"":
      value_note = "277";
      break;        
    case "\"D4\"":
      value_note = "294";
      break;        
    case "\"D4#\"":
      value_note = "311";
      break;        
    case "\"E4\"":
      value_note = "330";
      break;        
    case "\"F4\"":
      value_note = "349";
      break;        
    case "\"F4#\"":
      value_note = "370";
      break;        
    case "\"G4\"":
      value_note = "392";
      break;        
    case "\"G4#\"":
      value_note = "415";
      break;        
    case "\"A4\"":
      value_note = "440";
      break;        
    case "\"A4#\"":
      value_note = "466";
      break;        
    case "\"B4\"":
      value_note = "494";
      break;        
    case "\"C5\"":
      value_note = "523";
      break;        
    case "\"C5#\"":
      value_note = "554";
      break;        
    case "\"D5\"":
      value_note = "587";
      break;        
    case "\"D5#\"":
      value_note = "622";
      break;        
    case "\"E5\"":
      value_note = "659";
      break;        
    case "\"F5\"":
      value_note = "698";
      break;        
    case "\"F5#\"":
      value_note = "740";
      break;        
    case "\"G5\"":
      value_note = "784";
      break;        
    case "\"G5#\"":
      value_note = "831";
      break;        
    case "\"A5\"":
      value_note = "880";
      break;        
    case "\"A5#\"":
      value_note = "932";
      break;
    case "\"B5\"":
      value_note = "988";
      break;           
    case "\"C6\"":
      value_note = "1047";
      break;            
    case "\"C6#\"":
      value_note = "1109";
      break;        
    case "\"D6\"":
      value_note = "1175";
      break;        
    case "\"D6#\"":
      value_note = "1245";
      break;        
    case "\"E6\"":
      value_note = "1319";
      break;        
    case "\"F6\"":
      value_note = "1397";
      break;        
    case "\"F6#\"":
      value_note = "1480";
      break;        
    case "\"G6\"":
      value_note = "1568";
      break;        
    case "\"G6#\"":
      value_note = "1661";
      break;        
    case "\"A6\"":
      value_note = "1760";
      break;        
    case "\"A6#\"":
      value_note = "1865";
      break;        
    case "\"B6\"":
      value_note = "1976";
      break;        
    case "\"C7\"":
      value_note = "2093";
      break;        
    case "\"C7#\"":
      value_note = "2217";
      break;        
    case "\"D7\"":
      value_note = "2349";
      break;        
    case "\"D7#\"":
      value_note = "2489";
      break;        
    case "\"E7\"":
      value_note = "2637";
      break;        
    case "\"F7\"":
      value_note = "2794";
      break;        
    case "\"F7#\"":
      value_note = "2960";
      break;        
    case "\"G7\"":
      value_note = "3136";
      break;        
    case "\"G7#\"":
      value_note = "3322";
      break;        
    case "\"A7\"":
      value_note = "3520";
      break;        
    case "\"A7#\"":
      value_note = "3729";
      break;        
    case "\"B7\"":
      value_note = "3951";
      break;        
    case "\"C8\"":
      value_note = "4186";
      break;        
    case "\"C8#\"":
      value_note = "4435";
      break;        
    case "\"D8\"":
      value_note = "4699";
      break;        
    case "\"D8#\"":
      value_note = "4978";
      break;        
    default:
      alert("unrecognized note used in this.\n\n\nHint: Please ask your teacher for a list of available note names.");
      break;
	}
  return value_note;
};


Blockly.Arduino.play_note_adv = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_note = Blockly.Arduino.valueToCode(this, 'note', Blockly.Arduino.ORDER_ATOMIC);
  value_note = Blockly.Arduino.get_freq(value_note);
  value_pin === "" ? (alert("Please add a pin number! Placed as 0 for now."), value_pin = "0") : null;
  var code = 'tone('+value_pin+', '+value_note+');\n';
  return code;
};

Blockly.Arduino.play_note_time_adv = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_note = Blockly.Arduino.valueToCode(this, 'note', Blockly.Arduino.ORDER_ATOMIC);
  var value_milliseconds = Blockly.Arduino.valueToCode(this, 'milliseconds', Blockly.Arduino.ORDER_ATOMIC);
  value_note = Blockly.Arduino.get_freq(value_note);
  value_pin === "" ? (alert("Please add a pin number! Placed as 0 for now."), value_pin = "0") : null;
  value_milliseconds === "" ? (alert("Please add a time in milliseconds! Placed as 0 for now."), value_milliseconds = "0") : null;
  var code = 'tone('+value_pin+', '+value_note+', '+value_milliseconds+');\n';
  return code;
};

Blockly.Arduino.play_frequency_adv = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_frequency = Blockly.Arduino.valueToCode(this, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
  value_pin === "" ? (alert("Please add a pin number! Placed as 0 for now."), value_pin = "0") : null;
  value_frequency === "" ? (alert("Please add a frequency! Placed as 0 for now."), value_frequency = "0") : null;
  var code = 'tone('+value_pin+', '+value_frequency+');\n';
  return code;
};

Blockly.Arduino.play_frequency_time_adv = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_frequency = Blockly.Arduino.valueToCode(this, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
  var value_milliseconds = Blockly.Arduino.valueToCode(this, 'milliseconds', Blockly.Arduino.ORDER_ATOMIC);
  value_pin === "" ? (alert("Please add a pin number! Placed as 0 for now."), value_pin = "0") : null;
  value_frequency === "" ? (alert("Please add a frequency! Placed as 0 for now."), value_frequency = "0") : null;
  value_milliseconds === "" ? (alert("Please add a time in milliseconds! Placed as 0 for now."), value_milliseconds = "0") : null;
  var code = 'tone('+value_pin+', '+value_frequency+', '+value_milliseconds+');\n';
  return code;
};

Blockly.Arduino.no_tone_adv = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  value_pin === "" ? (alert("Please add a pin number! Placed as 0 for now."), value_pin = "0") : null;
  var code = 'noTone('+value_pin+');\n';
  return code;
};

Blockly.Arduino.turn_led_on_adv = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  value_pin === "" ? (alert("Please add a pin number! Placed as 0 for now."), value_pin = "0") : null;
  Blockly.Arduino.setups_['setup_'+value_pin+'_led'] = 'pinMode('+value_pin+', OUTPUT);\n';
  var code = 'digitalWrite('+value_pin+', HIGH);\n';
  return code;
};

Blockly.Arduino.turn_led_off_adv = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  value_pin === "" ? (alert("Please add a pin number! Placed as 0 for now."), value_pin = "0") : null;
  Blockly.Arduino.setups_['setup_'+value_pin+'_led'] = 'pinMode('+value_pin+', OUTPUT);\n';
  var code = 'digitalWrite('+value_pin+', LOW);\n';
  return code;
};

Blockly.Arduino.button_pressed_adv = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  value_pin === "" ? (alert("Please add a pin number! Placed as 0 for now."), value_pin = "0") : null;
  Blockly.Arduino.setups_['setup_pin_'+value_pin] = 'pinMode('+value_pin+', INPUT);';
  var code = 'digitalRead('+value_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.digital_adv = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  value_pin === "" ? (alert("Please add a pin number! Placed as 0 for now."), value_pin = "0") : null;
  Blockly.Arduino.setups_['setup_pin_'+value_pin] = 'pinMode('+value_pin+', INPUT);';
  var code = 'digitalRead('+value_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.set_digital_adv = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_voltage = this.getFieldValue('voltage');
  value_pin === "" ? (alert("Please add a pin number! Placed as 0 for now."), value_pin = "0") : null;
  Blockly.Arduino.setups_['setup_pin_'+value_pin] = 'pinMode('+value_pin+', INPUT);';
  var code = 'digitalWrite('+value_pin+', '+dropdown_voltage+')';
  return code;
};

Blockly.Arduino.analog_adv = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  value_pin === "" ? (alert("Please add a pin number! Placed as 0 for now."), value_pin = "0") : null;
  var code = 'analogRead('+value_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.set_analog_adv = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_analog = Blockly.Arduino.valueToCode(this, 'analog', Blockly.Arduino.ORDER_ATOMIC);
  value_pin === "" ? (alert("Please add a pin number! Placed as 0 for now."), value_pin = "0") : null;
  var code = 'analogWrite('+value_pin+', '+value_analog+');';
  return code;
};
