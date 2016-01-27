/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Variable blocks for Arduino.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.variables');

goog.require('Blockly.Arduino');


Blockly.Arduino.variables_get = function() {
  // Variable getter.
  var code = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.variables_declare = function() {
  // Variable setter.
  var dropdown_type = this.getFieldValue('TYPE');
  //TODO: settype to variable
  var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.setups_['setup_var' + varName] = varName + ' = ' + argument0 + ';\n';
  return '';
};

Blockly.Arduino.variables_set = function() {
  // Variable setter.
  var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};

Blockly.Arduino.constants_highlow = function() {
  // Boolean values HIGH and LOW.
  var code = (this.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.constants_boolean = function() {
  // Boolean values true and false.
  var code = (this.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.constants_high = function() {
  var code = "HIGH";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.constants_low = function() {
  var code = "LOW";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.constants_true = function() {
  var code = "true";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.constants_false = function() {
  var code = "false";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// [variable name][array size] 
// Array size is -1 if it is not an array
var varNames = [];
var varSize = [];

// Finds varaible and returns the index it is located at, if not found returns -1
function findVariable(name) {
  var varNum = -1;
  for (var i = 0; i < varNames.length; i++) {
    if (varNames[i] == name) { // FOUND
      varNum = i;
      break;
    }
  }
  return varNum;
}

Blockly.Arduino.variables_array_create = function() {
  var value_variable = Blockly.Arduino.valueToCode(this, 'variable', Blockly.Arduino.ORDER_ATOMIC).replace(/\s/g, "");
  var value_size = Blockly.Arduino.valueToCode(this, 'size', Blockly.Arduino.ORDER_ATOMIC);
  
  var varNum = findVariable(value_variable);
  if(varNum == -1) {
    varNames.push(value_variable);
    varSize.push(value_size);
    Blockly.Arduino.definitions_['vars_array_' + value_variable]="int vec__ABVAR_" + varNames.length + "_" + value_variable + "[" + value_size + "];\n";
    Blockly.Arduino.setups_['setup_array_' + value_variable] = 'for (int i = 0; i < ' + value_size + '; i++) {\n    vec__ABVAR_' + varNames.length + '_' + value_variable + '[i] = 0;\n  }\n';
    var code = '';
    return code;
  }else {
    //ERROR variable already exists
    alert("ERROR: Invalid array name used.\nYou tried to create at least two arrays with the same name\n(Tried: " + value_variable + ")");
  }
};

Blockly.Arduino.variables_array_name_pos = function() {
  var text_varName = this.getFieldValue('varName').replace(/\s/g, "");
  var value_position = Blockly.Arduino.valueToCode(this, 'position', Blockly.Arduino.ORDER_ATOMIC);

  var varNum = findVariable(text_varName);
  if (varNum == -1) {
    // ERROR variable doesn't exist
    alert("ERROR: Invalid array name used.\nMake sure you have created an array variable by using the \'Create an integer array\' block before you try to reference it.\n(Tried: " + text_varName + ")");
  }else if (value_position < 1 || varSize[varNum] < value_position) {
    // ERROR index is less than 1 or index is larager than size of array
    alert("ERROR: Invalid position used.\nMust be between 1 and " + varSize[varNum] + "\n(Tried: " + value_position + ")");
  }
  var code = 'vec__ABVAR_' + (varNum + 1) + '_' + varNames[varNum] + '[' + value_position + ' - 1]';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.variables_array_name = function() {
  var text_varName = this.getFieldValue('variable').replace(/\s/g, "");
  
  var code = text_varName;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.variables_digital = function() {
  var text_variable = this.getFieldValue('variable');
  var code = text_variable.replace(/\s/g, "");

  /*if(findVariable(text_variable) == -1) {
    //ERROR variable doesn't exist yet
    alert("ERROR: Invalid array name used.\nMake sure you have created an array variable by using the \'Create an integer array\' block before you try to reference it.\n(Tried: " + text_variable + ")");
  }*/
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.variables_set_int_array_member = function() {
  var value_variable = Blockly.Arduino.valueToCode(this, 'variable', Blockly.Arduino.ORDER_ATOMIC).replace(/\s/g, "");
  var value_position = Blockly.Arduino.valueToCode(this, 'position', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
  
  var varNum = findVariable(value_variable);
  if (varNum == -1) {
    // ERROR variable doesn't exist
    alert("ERROR: Invalid array name used.\nMake sure you have created an array variable by using the \'Create an integer array\' block before you try to reference it.\n(Tried: " + value_variable + ")");
  }else if (value_position < 1 || varSize[varNum] < value_position) {
    // ERROR index is less than 1 or index is larager than size of array
    alert("ERROR: Invalid position used.\nMust be between 1 and " + varSize[varNum] + "\n(Tried: " + value_position + ")");
  }
  var code = 'vec__ABVAR_' + (varNum + 1) + '_' + value_variable + '[' + value_position + ' - 1] = ' + value_value + ';\n';
  return code;
};

Blockly.Arduino.variables_set_integer = function() {
  var value_variable = Blockly.Arduino.valueToCode(this, 'variable', Blockly.Arduino.ORDER_ATOMIC).replace(/\s/g, "");
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);


  var varNum = findVariable(value_variable);
  if(varNum == -1) {
    varNames.push(value_variable);
    varSize.push(-1);
    Blockly.Arduino.definitions_['vars_integer_' + value_variable]="int _ABVAR_" + varNames.length + "_" + value_variable + "[" + value_size + "];\n";
    var code = '_ABVAR_' + varNames.length + '_' + value_variable + ' = ' + value_value + ';\n';
    return code;
  }else {
    //ERROR variable already exists
    //alert("ERROR: Invalid variable name used.\nYou tried to create at least two variables with the same name\n(Tried: " + value_variable + ")");
    var code = '_ABVAR_' + (varNum + 1) + '_' + value_variable + ' = ' + value_value + ';\n';
  }
  return code;
  };

Blockly.Arduino.variables_integer = function() {
  var text_varName = this.getFieldValue('variable').replace(/\s/g, "");

  var varNum = findVariable(text_varName);
  if(varNum == -1) {
    alert("ERROR: Invalid variable name used.\nYou tried to use a variable without first setting it/declaring it.\n(Tried: " + text_varName + ")");
  }
  
  var code = text_varName;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.resetVariables = function() {
  varNames = [];
  varSize = [];
};
