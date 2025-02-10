```javascript
db.collection('myCollection').updateOne(
  { "_id": ObjectId("6500d8684680f8716a6a6e6e") },
  {
    $inc: { counter: -1 },
    $min: { counter: 0 } // Prevents counter from going below 0
  }
);
```