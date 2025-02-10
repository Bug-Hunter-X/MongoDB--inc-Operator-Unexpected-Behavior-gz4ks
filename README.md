# MongoDB $inc Operator Unexpected Behavior
This example demonstrates an uncommon error related to the `$inc` operator in MongoDB when decrementing a counter below zero.  The code attempts to decrement a counter, which results in unexpected behavior.

## Bug
The main issue is using `$inc` without proper error handling or checks to prevent decrementing below zero. This can lead to unexpected outcomes. 

## Solution
The provided solution uses a combination of `$inc` and a conditional statement to handle negative decrements, ensuring that the counter doesn't go below zero. 