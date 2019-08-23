## Query Assets

Query for assets with a single query specification and retrieve a single result set.

### Example: Query for stories associated with `Scope:0`

#### HTTP Request

`POST http://V1Host/V1Instance/api/asset`

###### Payload:

```json
{
  "from": "Story",
  "where": {
    "Scope": "Scope:0"
  },
  "select": [
    "Name"
  ]
}
```

#### HTTP Response:

```json
{
  "requestId": "b71c55f7-8a5a-4465-b87f-73ea428fc92a",
  "createdDate": "2019-08-23T18:56:38.5865376Z",
  "completedDate": "2019-08-23T18:56:38.6835443Z",
  "duration": "00:00:00.0970067",
  "durationSeconds": 0.0970067,
  "complete": true,
  "processing": false,
  "assetsCreated": {
    "oidTokens": [],
    "count": 0
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
    "results": [
      [
        {
          "_oid": "Story:4014",
          "Name": "API Users can Read Error Details"
        },
        {
          "_oid": "Story:1692",
           "Name": "Product Managers can specfify priority"
        }
      ]
    ],
    "count": 1
  }
}
```