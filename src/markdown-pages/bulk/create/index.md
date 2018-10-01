## Create

A single asset can be created.

#### HTTP Request

`POST http://V1Host/V1Instance/api/asset`

```json
{
    "AssetType": "Story",
    "Name": "New Story",
    "Scope": "Scope:0"
}
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
      "Story:3604"
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