## Execute Scope.AssignMemberWithRole operation using a subquery

Demonstrates how to use a subquery to assign a single Member to a Scope along with a Scope-specific role the Member will have for the target Scope.


#### Setup

For the context of this example, the following request will setup the instance with the needed starting conditions:

##### HTTP Request

`POST http://V1Host/V1Instance/api/asset`

###### Payload:

```json
[
  {
    "from": "Member",
    "where": {
      "Name": "scopeMember1"
    },
    "execute": "Delete"
  },
  {
    "AssetType": "Scope",
    "Name": "Project for Members",
    "Parent": "Scope:0",
    "BeginDate": "2019-11-21T16:56:22.438Z"
  },
  {
    "AssetType": "Member",
    "Name": "scopeMember1",
    "Password": "scopeMember1",
    "Nickname": "scopeMember1",
    "Username": "scopeMember1",
    "DefaultRole": "Role.Name'Observer"
  }
]
```



#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```json
{
  "from": "Scope:1117",
  "execute": {
    "op": "AssignMemberWithRole",
    "args": {
      "Member": {
        "from": "Member",
        "where": {
          "Username": "scopeMember1"
        }
      },
      "Role": {
        "from": "Role",
        "where": {
          "Name": "Role.Name'Project Lead"
        }
      },
      "IsOwner": true
    }
  }
}
```

* Notice that in the `args` property, the values for the `Member` and the `Role` properties are specified as subqueries. This makes it easier to create scripts which manipulate members and their project roles in the system using commonly shared values instead of having to separately query for oids first and then construct an HTTP request.
* Note that when using subqueries, only the very first query result will be used as the property value. This means you may need to use sorting to get the correct value if your subquery has a chance of returning more than one asset.
#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "2d1ac0a5-918d-4332-8d01-ba6607b8b8cd",
  "createdDate": "2019-11-21T16:56:22.5630306Z",
  "completedDate": "2019-11-21T16:56:22.589028Z",
  "duration": "00:00:00.0259974",
  "durationSeconds": 0.0259974,
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
      "Scope:1117"
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

