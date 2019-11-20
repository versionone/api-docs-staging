## Execute Member.AssignToScopeWithRole operation for list of scopes

Demonstrates how to assign multiple scopes to a member along with scope-specific roles the member will have for each of the assigned scopes.


#### Setup

For the context of this example, the following request will setup the instance with the needed starting conditions:

##### HTTP Request

`POST http://V1Host/V1Instance/api/asset`

###### Payload:

```yaml

from: Member
filter:
- Name='memberForScope1'
execute: Delete
---
from: Scope
filter:
- Name='Project 1 for Member.AssignToScopeWithRole','Project 2 for Member.AssignToScopeWithRole'
execute: Delete
---
AssetType: Scope
Name: Project 1 for Member.AssignToScopeWithRole
Parent: Scope:0
BeginDate: 2019-11-20T20:56:05.985Z
---
AssetType: Scope
Name: Project 2 for Member.AssignToScopeWithRole
Parent: Scope:0
BeginDate: 2019-11-20T20:56:05.985Z
---
AssetType: Member
Name: memberForScope1
Password: memberForScope1
Nickname: memberForScope1
Username: memberForScope1
DefaultRole: Role.Name'Observer

```



#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```yaml

from: Member:1085
execute:
 op: AssignToScopeWithRole
 list:
 - Scope: Scope:1083
   Role: Role:3
   IsOwner: true
 - Scope: Scope:1084
   Role: Role:7
   IsOwner: false

```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "13e528f7-f62d-4ebc-8bce-13ec78dde2b0",
  "createdDate": "2019-11-20T20:56:06.5088252Z",
  "completedDate": "2019-11-20T20:56:06.5288222Z",
  "duration": "00:00:00.0199970",
  "durationSeconds": 0.019996999999999997,
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
    "oidTokens": [
      "Member:1085",
      "Member:1085"
    ],
    "count": 2
  },
  "commandFailures": {
    "commands": [],
    "count": 0
  },
  "queryResult": {
    "results": [],
    "count": -1
  }
}
```

* Notice that the `assetsOperatedOn.oidTokens` array property contains the same token twice. This is because in this example we invoked the `Member.AssignToScopeWithRole` operation on the same member, passing different scope oids each time.

