'use strict';

goog.provide('Blockly.Arduino.communications');

goog.require('Blockly.Arduino');

Blockly.Arduino.serial_print = function() {
  var message = Blockly.Arduino.valueToCode(this, 'message2', Blockly.Arduino.ORDER_ATOMIC);
  var newline = Blockly.Arduino.valueToCode(this, 'newline', Blockly.Arduino.ORDER_NONE);
  var code;
  if(newline){
   code = 'Serial.print('+message+');\n';
   code += 'Serial.print(\" \");\n';
   code += 'Serial.println();\n'
  }else{
   code = 'Serial.print('+message+');\n';
  }
  return code;
};

Blockly.Arduino.serial_println = function() {
  var message = Blockly.Arduino.valueToCode(this, 'message', Blockly.Arduino.ORDER_ATOMIC);
   var code = 'Serial.print('+message+');\n';
   code += 'Serial.println();\n'
  return code;
};

Blockly.Arduino.serial_read = function() {
   var code = 'Serial.parseInt();\n';
  return code;
};

Blockly.Arduino.serial_data_available = function() {
  var code = 'Serial.available();\n';
  return code;
};

Blockly.Arduino.glue_number = function() {
  var order = Blockly.Arduino.ORDER_NONE;
  var number = Blockly.Arduino.valueToCode(this, 'NUM', order);
  var code = ""+number;
  return [code, order];
};

Blockly.Arduino.glue_boolean = function() {
  var order = Blockly.Arduino.ORDER_NONE;
  var bool = Blockly.Arduino.valueToCode(this, 'BOOL', order);
  var code = ""+bool; 
  return [code, order];
};


