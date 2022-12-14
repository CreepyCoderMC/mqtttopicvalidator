# MQTT Topic Validator
This module is small but easy to use. The purpose of this module is to check the topic of a MQTT object if t valid. Why a simple compare function is not always sufficient. A topic must sometimes be compared with wildcards to validate that it is a valid topic. So this library can tell you if a topic is valid against a compared topic which can contain MQTT wildcards.
## Validation processes
The code contains seven methods to validate that the topic is valid against the compared topic.
### Compare method 1
The first method it to compare the topic as a whole string with the compared topic. Meaning that the compared topic does not contain any wildcards.
### Compare method 2
This compare method will actually find each and every topic as valid against the compared, but this is only true if the compared topic only contains a # wildcard.
### Compare method 3
From here on all methods will start doing a section compare between the topic and the compared topic. It will loop through each section to compare it with the topic until a # wildcard is found. And then will see it as a valid topic.
### Compare method 4
This compare method will validate all section to compare that topic and the compare topic is similar, but it will check for the + wildcard in the compares topics. So when it sees a section with a + it will go on and validate the rest of the sections.
### Compare method 5
This compare method check each section between the topic and the compared topic is similar.
### Compare method 6
Will check that both the topic and the compared topic have the same amount of section.
### Compare method 7
This method confirms is basically when all checks is confirmed to be valid and there no more sections left to test.
## Code sample
This following code is actually how I tested that all methods correctly functioned as intended, is also provided in this module.
```
import { mqttTopicIsValid } from '@teamcoder/mqtttopicvalidator';

console.log( "Testing Condition 1 Passed = " + mqttTopicIsValid(  "myhome/groundfloor/livingroom/temperature" , "myhome/groundfloor/livingroom/temperature"     ) );
console.log( "Testing Condition 2 Passed = " + mqttTopicIsValid(  "myhome/groundfloor/livingroom/temperature" , "#"                                             ) );
console.log( "Testing Condition 3 Passed = " + mqttTopicIsValid(  "myhome/groundfloor/livingroom/temperature" , "myhome/groundfloor/#"                          ) );
console.log( "Testing Condition 4 Passed = " + mqttTopicIsValid(  "myhome/groundfloor/livingroom/temperature" , "myhome/groundfloor/+/temperature"              ) );
console.log( "Testing Condition 5 Passed = " + !mqttTopicIsValid( "myhome/groundfloor/livingroom/temperature" , "myhome/topfloor/livingroom/temperature"        ) );
console.log( "Testing Condition 6 Passed = " + !mqttTopicIsValid( "myhome/groundfloor/livingroom/temperature" , "myhome/groundfloor/livingroom/temperature/max" ) );
console.log( "Testing Condition 7 Passed = " + mqttTopicIsValid(  "myhome/groundfloor/livingroom/temperature" , "myhome/groundfloor/+/temperature"              ) );
```
The results will look as follows
```
Testing Condition 1 Passed = true
Testing Condition 2 Passed = true
Testing Condition 3 Passed = true
Testing Condition 4 Passed = true
Testing Condition 5 Passed = true
Testing Condition 6 Passed = true
Testing Condition 7 Passed = true
```
## Function Parameters
### Parameters Passed
```
@param  { String  }  source  The source string to be compared
@param  { String  }  target  The target string to be compared
```
### Parameters Returned
```
@return { Boolean }          Validation passed or failed
```
## Notes Before You Start
Very important to remember to always include the following in your main project package.json file:
```
"type": "module"
```
Without this entry in the package file you will get the following error if you try to run your project
```
(node:15500) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use 'node --trace-warnings ...' to show where the warning was created)
C:\Users\ ... \mqtttopicvalidator\mqtttopicvalidator.js:1
import { mqttTopicIsValid } from '@teamcoder/mqtttopicvalidator';
```
## Version History
| Version  | Date                   | Remark                                                                                                |
|----------|------------------------|-------------------------------------------------------------------------------------------------------|
| 1.0.0    | 06 September 2022      | Official first release                                                                                |
| 1.0.1    | 06 September 2022      | Correcting documentation                                                                              |
| 1.0.2    | 09 September 2022      | Fixed package.json so that npm can install on any os                                                  |
| 1.0.3    | 10 September 2022      | Fixed code to be proper npm package                                                                   |
| 1.0.4    | 10 September 2022      | Correcting documentation                                                                              |
| 1.0.5    | 11 September 2022      | Removed Default from export function in longervalidator.js file                                       |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/mqtttopicvalidator
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
MqttTopicValidator ?? 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)