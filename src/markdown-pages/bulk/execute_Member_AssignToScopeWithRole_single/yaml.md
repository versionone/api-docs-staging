## Execute Member.AssignToScopeWithRole operation for single scope

Demonstrates how to assign a single scope to a member along with a scope-specific role the member will have for assigned scope.


#### Setup

For the context of this example, the following request will setup the instance with the needed starting conditions:

##### HTTP Request

`POST http://V1Host/V1Instance/api/asset`

###### Payload:

```yaml

from: Member
filter:
- Name='memberForSoloScope'
execute: Delete
---
from: Scope
filter:
- Name='Solo project for Member.AssignToScopeWithRole'
execute: Delete
---
AssetType: Scope
Name: Solo project for Member.AssignToScopeWithRole
Parent: Scope:0
BeginDate: 2019-11-20T20:51:00.126Z
---
AssetType: Member
Name: memberForSoloScope
Password: memberForSoloScope
Nickname: memberForSoloScope
Username: memberForSoloScope
DefaultRole: Role.Name'Observer

```



#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```yaml

from: Member:1080
execute:
 op: AssignToScopeWithRole
 args:
  Scope: Scope:1079
  Role: Role:3
  IsOwner: true

```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "e3c7550d-1a63-475c-87a9-6c21eb97b9a0",
  "createdDate": "2019-11-20T20:51:00.3043712Z",
  "completedDate": "2019-11-20T20:51:00.3153694Z",
  "duration": "00:00:00.0109982",
  "durationSeconds": 0.0109982,
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
      "Member:1080"
    ],
    "count": 1
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

* Notice that the `assetsOperatedOn.oidTokens` array property contains a single member token. This is because in this example we invoked the `Member.AssignToScopeWithRole` operation once on the member for a single scope.

