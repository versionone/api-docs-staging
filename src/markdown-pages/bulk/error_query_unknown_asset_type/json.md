## Error: Query unknown asset type

Demonstrates how the API will return a failure when you attempt to query for an unknown asset type.




#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```json
{
  "@user-alias": {
    "from": "Animal"
  }
}
```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "82a33f29-2a19-496c-979f-8009e3c82983",
  "createdDate": "2019-11-19T22:11:31.0308504Z",
  "completedDate": "2019-11-19T22:11:31.0318466Z",
  "duration": "00:00:00.0009962",
  "durationSeconds": 0.0009962,
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
  "commandFailures": {
    "commands": [
      {
        "@user-alias": {
          "from": "Animal"
        },
        "error": {
          "message": "Unknown AssetType: Animal",
          "sourceCommandIndex": 0
        }
      }
    ],
    "count": 1
  },
  "queryResult": {
    "results": [],
    "count": -1
  }
}
```

* Notice that object returned in the `commandFailures.commands` property is in the form of a complete command. In this example, you could correct the asset type in the `from` clause to referebce a legitimate asset type.

