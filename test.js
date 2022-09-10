import { mqttTopicIsValid } from '@teamcoder/mqtttopicvalidator';

console.log( "Testing Condition 1 Passed = " + mqttTopicIsValid(  "myhome/groundfloor/livingroom/temperature" , "myhome/groundfloor/livingroom/temperature"     ) );
console.log( "Testing Condition 2 Passed = " + mqttTopicIsValid(  "myhome/groundfloor/livingroom/temperature" , "#"                                             ) );
console.log( "Testing Condition 3 Passed = " + mqttTopicIsValid(  "myhome/groundfloor/livingroom/temperature" , "myhome/groundfloor/#"                          ) );
console.log( "Testing Condition 4 Passed = " + mqttTopicIsValid(  "myhome/groundfloor/livingroom/temperature" , "myhome/groundfloor/+/temperature"              ) );
console.log( "Testing Condition 5 Passed = " + !mqttTopicIsValid( "myhome/groundfloor/livingroom/temperature" , "myhome/topfloor/livingroom/temperature"        ) );
console.log( "Testing Condition 6 Passed = " + !mqttTopicIsValid( "myhome/groundfloor/livingroom/temperature" , "myhome/groundfloor/livingroom/temperature/max" ) );
console.log( "Testing Condition 7 Passed = " + mqttTopicIsValid(  "myhome/groundfloor/livingroom/temperature" , "myhome/groundfloor/+/temperature"              ) );