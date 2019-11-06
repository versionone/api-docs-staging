## Error: Create Epic and Subs where Scope is invalid causes cascade of four failures

Demonstrates how the API will return a cascade of failures when an invalid Scope is specified for a top-level Epic that has a collection of Subs. The failure messages can be modified and resubmitted to the API to create the original request's Assets.




#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```yaml

AssetType: Epic
Scope: Scope:9999
Name: My Epic on a Scope that DOES NOT EXIST which will produce a cascade of four failures!
Subs:
- AssetType: Story
  Name: My Story
  Children:
  - AssetType: Test
    Name: My Test
  - AssetType: Task
    Name: My Task

```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "a678052b-17f8-4fd5-9b28-b0c852addb15",
  "createdDate": "2019-11-06T20:01:07.7655844Z",
  "completedDate": "2019-11-06T20:01:07.9706126Z",
  "duration": "00:00:00.2050282",
  "durationSeconds": 0.2050282,
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
        "@1108bf51-72ad-461c-9953-72714eeb0e30": {
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
        "@c266819f-cfc1-4669-971c-bf13fa6ab2b1": {
          "AssetType": "Story",
          "Name": "My Story",
          "#ContextOid": "@1108bf51-72ad-461c-9953-72714eeb0e30"
        },
        "error": {
          "message": "Invalid OID token: @1108bf51-72ad-461c-9953-72714eeb0e30",
          "sourceCommandIndex": 0
        }
      },
      {
        "@065e25b9-71a1-4d69-9dbd-30196fd70426": {
          "AssetType": "Test",
          "Name": "My Test",
          "#ContextOid": "@c266819f-cfc1-4669-971c-bf13fa6ab2b1"
        },
        "error": {
          "message": "Invalid OID token: @c266819f-cfc1-4669-971c-bf13fa6ab2b1",
          "sourceCommandIndex": 0
        }
      },
      {
        "@5ddc2943-3f75-4d4b-a718-c758ab0c1f35": {
          "AssetType": "Task",
          "Name": "My Task",
          "#ContextOid": "@c266819f-cfc1-4669-971c-bf13fa6ab2b1"
        },
        "error": {
          "message": "Invalid OID token: @c266819f-cfc1-4669-971c-bf13fa6ab2b1",
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

