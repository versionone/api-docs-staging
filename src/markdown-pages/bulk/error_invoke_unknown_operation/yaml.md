## Error: Invoking an unknown Operation

Demonstrates how the API will return a failure when you attempt to invoke an unknown operation on an asset.




#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```yaml

from: Scope:0
execute: NonexistentOperation

```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "ed72b862-8f4a-4457-a6f7-2e6afdeecba8",
  "createdDate": "2019-11-19T20:17:57.5620747Z",
  "completedDate": "2019-11-19T20:17:57.8160767Z",
  "duration": "00:00:00.2540020",
  "durationSeconds": 0.254002,
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
        "@68ae9365-82eb-42c4-8b9c-f75ff0478e82": {
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

