## Error: Create Epic and Subs where Scope is invalid causes cascade of four failures

Demonstrates how the API will return a cascade of failures when an invalid Scope is specified for a top-level Epic that has a collection of Subs. The failure messages can be modified and resubmitted to the API to create the original request's Assets.




#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```json
{
  "AssetType": "Epic",
  "Scope": "Scope:9999",
  "Name": "My Epic on a Scope that DOES NOT EXIST which will produce a cascade of four failures!",
  "Subs": [
    {
      "AssetType": "Story",
      "Name": "My Story",
      "Children": [
        {
          "AssetType": "Test",
          "Name": "My Test"
        },
        {
          "AssetType": "Task",
          "Name": "My Task"
        }
      ]
    }
  ]
}
```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "adffb44e-f026-4fd2-94e3-d3e6cc8a0f52",
  "createdDate": "2019-11-06T20:01:08.0040847Z",
  "completedDate": "2019-11-06T20:01:08.0525809Z",
  "duration": "00:00:00.0484962",
  "durationSeconds": 0.048496199999999996,
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
        "@839e420a-f395-48ff-a522-4d7c9c8ce37e": {
          "AssetType": "Epic",
          "Scope": "Scope:9999",
          "Name": "My Epic on a Scope that DOES NOT EXIST which will produce a cascade of four failures!"
        },
        "error": {
          "message": "Violation'Invalid'Epic.Scope",
          "sourceCommandIndex": 0
        }
      },
      {
        "@bf084e75-1263-476f-af99-fa8153bf7ebd": {
          "AssetType": "Story",
          "Name": "My Story",
          "#ContextOid": "@839e420a-f395-48ff-a522-4d7c9c8ce37e"
        },
        "error": {
          "message": "Invalid OID token: @839e420a-f395-48ff-a522-4d7c9c8ce37e",
          "sourceCommandIndex": 0
        }
      },
      {
        "@4622a696-c001-414d-8749-fd620fd6a284": {
          "AssetType": "Test",
          "Name": "My Test",
          "#ContextOid": "@bf084e75-1263-476f-af99-fa8153bf7ebd"
        },
        "error": {
          "message": "Invalid OID token: @bf084e75-1263-476f-af99-fa8153bf7ebd",
          "sourceCommandIndex": 0
        }
      },
      {
        "@b92be85b-5039-4a84-93b7-e602bee7ab4b": {
          "AssetType": "Task",
          "Name": "My Task",
          "#ContextOid": "@bf084e75-1263-476f-af99-fa8153bf7ebd"
        },
        "error": {
          "message": "Invalid OID token: @bf084e75-1263-476f-af99-fa8153bf7ebd",
          "sourceCommandIndex": 0
        }
      }
    ],
    "count": 4
  },
  "queryResult": {
    "results": [],
    "count": -1
  }
}
```

* Notice that objects returned in the `commandFailures.commands` property are in the form of complete commands. In this particular example, you would be able to edit the `Scope` value to point to an actual scope and resubmit either the original payload that had the nested assets, or simply submit the array of four commands in the failure details. Since the descendant nodes have been auto-aliased by the server and linearized, they will get processed properly by reference when resubmitted. The special `#ContextOid` keys that the server generated tell the server how to relate the descendant assets back to original hierarchy from the source command.
* Also notice that each failure has a `sourceCommandIndex` property that identifies a zero-based index of the command that generated this error from your original payload. Because our original payload contained nested assets, each of these commands has `0` for this value.

