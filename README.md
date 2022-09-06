# MQTT Topic Validator
This library is small but easy to use. The purpose of this library is to check the topic of a MQTT object. Why a simple compare function is not always sufficient. A topic must sometimes be compared with wildcards to validate that it is a valid topic. So this library can tell you if a topic is valid against a compared topic which can contain MQTT wildcards.
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
import mqttTopicIsValid from './mqtttopicvalidator.js';

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
```
@param  { String  }  source  The source string to be compared
@param  { String  }  target  The target string to be compared 
@return { Boolean }          The string passed/failed validation
```
## Version History
| Version  | Date                   | Remark                              |
|----------|------------------------|-------------------------------------|
| 1.0.0    | 06 September 2022      | Official first release              |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/mqtttopicvalidator
## Operating Systems Tested On
>Windows and Linux
## License Information
BiggerValidator © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)