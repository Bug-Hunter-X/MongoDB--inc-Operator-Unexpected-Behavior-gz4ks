```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("6500d8684680f8716a6a6e6e")},{$inc:{counter: -1}});
```