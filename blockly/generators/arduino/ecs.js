/**
 * Created by Marquette University REU team
 *
 *
* purpose: this code determines what the arduino code will be in the ecs tab
 * further documentation can be found at https://developers.google.com/blockly/custom-blocks/overview 
 *
 */

goog.provide('Blockly.Arduino.ecs');

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
      alert("unrecognized note used in block.\n\n\nHint: Please ask your teacher for a list of available note names.");
      break;
	}
  return value_note;
};

Blockly.Arduino.play_note = function() {
  var value_note = Blockly.Arduino.valueToCode(this, 'note', Blockly.Arduino.ORDER_ATOMIC);
  value_note = Blockly.Arduino.get_freq(value_note);
  var code = 'tone(11, '+value_note+');\n';
  return code;
};

Blockly.Arduino.play_note_time = function() {
  var value_note = Blockly.Arduino.valueToCode(this, 'note', Blockly.Arduino.ORDER_ATOMIC);
  var value_milliseconds = Blockly.Arduino.valueToCode(this, 'milliseconds', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  value_note = Blockly.Arduino.get_freq(value_note);
  value_milliseconds === "" ? (alert("Please add a time in milliseconds! Placed as 0 for now."), value_milliseconds = "0") : null;
  var code = 'tone(11, '+value_note+', '+value_milliseconds+');\ndelay(' + value_milliseconds + ');\nnoTone(11);\n';
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
      break;
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
  value_frequency === "" ? (alert("Please add a frequency! Placed as 0 for now."), value_frequency = "0") : null;
  var code = 'tone(11, '+value_frequency+');\n';
  return code;
};

Blockly.Arduino.play_frequency_time = function() {
  var value_frequency = Blockly.Arduino.valueToCode(this, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
  var value_milliseconds = Blockly.Arduino.valueToCode(this, 'milliseconds', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  value_frequency === "" ? (alert("Please add a time in frequency! Placed as 0 for now."), value_frequency = "0") : null;
  value_milliseconds === "" ? (alert("Please add a time in milliseconds! Placed as 0 for now."), value_milliseconds = "0") : null;
  var code = 'tone(11, '+value_frequency+', '+value_milliseconds+');\ndelay(' + value_milliseconds + ');\nnoTone(11);\n';
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
Blockly.Arduino.definitions_['var_keysDown_read']="boolean keysDown[36];\n";
  return "";
};

Blockly.Arduino.update_keyboard = function() {
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.definitions_['vars_ecs_reads']="int ECSindex;\nint ECSnumAvailable;\nint ECSiteration;\n"
  var code = 'ECSnumAvailable = Serial.available();\n' +
 'char buffer[ECSnumAvailable];\n'+
 'Serial.readBytes(buffer, ECSnumAvailable);\n'+
 'for (ECSiteration = 0; ECSiteration < 36; ++ECSiteration)\n'+
 '{\n' +
 '	keysDown[ECSiteration] = 0;\n'+
 '}\n'+
 'for (ECSiteration = 0; ECSiteration < ( ECSnumAvailable - 2); ++ECSiteration)\n'+
 '{\n'+
 '	if (ECSindex >= 0)\n'+
 '	{\n'+
 '		ECSindex = buffer[ECSiteration];\n'+
 '		ECSindex -= (int)\'a\';\n'+
 '		ECSindex += 10;\n'+
 '		keysDown[ECSindex] = true;\n'+
 '	}\n'+
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

Blockly.Arduino.get_distance = function() {
  Blockly.Arduino.definitions_['func_smoothDistance']=
    "int smoothDistance()\n"+
    "{\n"+
    "  int count = 0;\n"+
    "  long avg = 0;\n"+
    "  int dist = 0;\n"+
    "  while (count < 4) {\n"+
    "    dist = getDistance();"+
    "    avg = (avg + dist)/2;\n"+
    "    count = count + 1;\n"+
    "  }\n"+
    "  if (count == 4) {\n"+
    "    count = 0;\n"+
    "  }\n"+
    "  Serial.println(avg, DEC);\n"+
    "  return (int)avg;\n"+
    "}\n";
  Blockly.Arduino.definitions_['func_getDistance()'] = 
    "int getDistance()\n"+
    "{\n"+
    " unsigned long start = micros();\n"+
    " int CYCLES = 4;\n"+
    " int DELAY_PING = 25;\n"+
    " int timeout = 16000;\n"+
    " int T1OUT = 0x10;\n"+
    " \n"+
    " for (int ii = 0; ii < CYCLES; ii++) {\n"+
    "   digitalWrite(2, HIGH);\n"+
    "   digitalWrite(3, LOW);\n"+
    "   delayMicroseconds(DELAY_PING);\n"+
    "   digitalWrite(2, LOW);\n"+
    "   digitalWrite(3, HIGH);\n"+
    "   delayMicroseconds(DELAY_PING);\n"+
    " }\n"+
    " \n"+
    " delayMicroseconds(200);\n"+
    " while((PIND & T1OUT) != 0 && timeout > 0) {\n"+
    "   timeout--;\n"+
    "   delayMicroseconds(1);\n"+
    " }\n"+
    " unsigned long end = micros();\n"+
    " unsigned long time;\n"+
    " if (end > start) {\n"+
    "   time = end - start;\n"+
    " }\n"+
    " else {\n"+
    "   time = (end + ~start) - (start + ~start);\n"+
    " }\n"+
    "\n"+
    " delayMicroseconds(400000);\n"+
    " return ((int) time);\n"+
    "}\n";
  Blockly.Arduino.setups_['setup_dist_1'] = 'Serial.begin(9600);\n';
  Blockly.Arduino.setups_['setup_dist_2'] = 'pinMode(3, OUTPUT);\n';
  Blockly.Arduino.setups_['setup_dist_3'] = 'pinMode(2, OUTPUT);\n';
  var code = 'smoothDistance()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
