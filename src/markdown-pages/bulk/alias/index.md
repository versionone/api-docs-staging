## Aliasing

Aliasing will allow you to assign the output of a bulk operation to a reference. One of the advantages of this feature is that it will allow users to make a reference to previously created assets in a later part of the payload. For example,  I want to create a brand new scope and use this scope but reference it later on in the payload.

Create a new scope and then create a new story whose scope is the newly created scope.

#### HTTP Request

`POST http://V1Host/V1Instance/api/asset`

```json
[ 
   "@newScope":{  
      "AssetType":"Scope",
      "Name":"New Scope",
      "Super": "Scope:0"
   },
   "@newStory":{  
      "AssetType":"Story",
      "Name":"New Story",
      "Scope": "@newScope"
   },
]
```

#### HTTP Response

```json
{
 "requestId": "767f7870-bc12-46d4-a978-e55e6bc405f1",
 "createdDate": "2018-08-24T15:06:53.1347214Z",
 "completedDate": "2018-08-24T15:06:53.2732206Z",
 "duration": "00:00:00.1384992",
 "durationSeconds": 0.1384992,
 "complete": true,
 "processing": false,
 "assetsCreated": {
  "oidTokens": [
      "Story:3604",
      "Scope:3606"
  ],
  "count": 1
 },
 "assetsModified": {
  "oidTokens": [],
  "count": 0
 },
 "assetsOperatedOn": {
  "oidTokens": [],
  "count": 0
 },
 "queryResult": {
  "results": [],
  "count": -1
 }
}
```