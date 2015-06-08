/**
 * Copyright (c) 2014-2015, Javier Vaquero
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * required by applicable law or agreed to in writing, software
 * under the License is distributed on an "AS IS" BASIS,
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * the License for the specific language governing permissions and
 * under the License.
 */

// Math.random() devuelve número aleatorio entre 0 y 1.
var numero = Math.random();

var str =' MAYOR que 0,5';

if (numero <= 0.5){
  str = ' MENOR que 0,5';
}

console.log('\n' + numero + str + '\n');
