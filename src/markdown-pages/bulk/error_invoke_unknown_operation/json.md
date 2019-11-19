## Error: Invoking an unknown Operation

Demonstrates how the API will return a failure when you attempt to invoke an unknown operation on an asset.




#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```json
{
  "from": "Scope:0",
  "execute": "NonexistentOperation"
}
```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "4b982452-b716-44ba-9445-a249b8adfb6c",
  "createdDate": "2019-11-19T20:17:57.9370732Z",
  "completedDate": "2019-11-19T20:17:57.9430751Z",
  "duration": "00:00:00.0060019",
  "durationSeconds": 0.0060019,
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
        "@a2811f5b-aa87-4ffc-8959-e9d343adfef9": {
          "oid": "Scope:0",
          "execute": {
            "op": "NonexistentOperation",
            "args": {}
          }
        },
        "error": {
          "message": "Unknown Operation 'Scope.NonexistentOperation'",
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

* Notice that objects returned in the `commandFailures.commands` property are in the form of complete commands. In this example, you could correct the operation name to reference a legitimate operation that exists on the Scope asset type.

