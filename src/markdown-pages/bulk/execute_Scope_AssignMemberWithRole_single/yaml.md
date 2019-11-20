## Execute Scope.AssignMemberWithRole operation for single Member

Demonstrates how to assign a single Member to a Scope along with a Scope-specific role the Member will have for the target Scope.


#### Setup

For the context of this example, the following request will setup the instance with the needed starting conditions:

##### HTTP Request

`POST http://V1Host/V1Instance/api/asset`

###### Payload:

```yaml

from: Member
where:
 Name: scopeMember1
execute: Delete
---
AssetType: Scope
Name: Project for Members
Parent: Scope:0
BeginDate: 2019-11-20T20:49:37.357Z
---
AssetType: Member
Name: scopeMember1
Password: scopeMember1
Nickname: scopeMember1
Username: scopeMember1
DefaultRole: Role.Name'Observer

```



#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```yaml

from: Scope:1063
execute:
 op: AssignMemberWithRole
 args:
  Member: Member:1064
  Role: Role:3
  IsOwner: true

```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "92ca853c-41d6-4ddc-8c21-d73163141f96",
  "createdDate": "2019-11-20T20:49:37.6774473Z",
  "completedDate": "2019-11-20T20:49:37.689442Z",
  "duration": "00:00:00.0119947",
  "durationSeconds": 0.011994699999999999,
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
      "Scope:1063"
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

* Notice that the `assetsOperatedOn.oidTokens` array property contains a single scope token. This is because in this example we invoked the `Scope.AssignMemberWithRole` operation once on the scope for a single member.

