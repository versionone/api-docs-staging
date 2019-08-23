## Create Many

Create many assets via a single HTTP request.

### Example: Create two stories and a new scope

#### HTTP Request

`POST http://V1Host/V1Instance/api/asset`

###### Payload:
```json
[
  {
    "AssetType": "Story",
    "Name": "New Story",
    "Scope": "Scope:0"
  },
  {
    "AssetType": "Story",
    "Name": "Another New Story",
    "Scope": "Scope:0"
  },
  {
    "AssetType": "Scope",
    "Name": "New Scope",
    "Scope": "Scope:0"
  }
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
    "Story:3605"
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
