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

var varNames = [];

function isVariable(name) {
  var isFound = false;
  for (var i = 0; i < varNames.length; i++) {
    if (varNames[i] == name) {
      isFound = true;
      break;
    }
  }
  return isFound;
}

Blockly.Arduino.variables_array_create = function() {
  var value_variable = Blockly.Arduino.valueToCode(this, 'variable', Blockly.Arduino.ORDER_ATOMIC).replace(/\s/g, "");
  var value_size = Blockly.Arduino.valueToCode(this, 'size', Blockly.Arduino.ORDER_ATOMIC);
  
  if(!isVariable(value_variable)) {
    varNames.push(value_variable);
    Blockly.Arduino.definitions_['vars_array' + value_variable]="int vec_ABVAR_" + varNames.length + "_" + value_variable + "[" + value_size + "];\n";
    Blockly.Arduino.setups_['setup_array'] = 'for (int i = 0; i < ' + value_size + '; i++) {\n    vec__ABVAR_' + varNames.length + '_' + value_variable + '[i] = 0;\n  }\n';
    var code = '';
    return code;
  }else {
    //ERROR variable already exists
  }
};

Blockly.Arduino.variables_digital = function() {
  var text_variable = this.getFieldValue('variable');
  var code = text_variable.replace(/\s/g, "");

  if(!isVariable(value_variable)) {
    //ERROR variable doesn't exist yet
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
