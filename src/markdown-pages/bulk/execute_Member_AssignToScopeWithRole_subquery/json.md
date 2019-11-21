## Execute Member.AssignToScopeWithRole operation using a subquery

Demonstrates how to use a subquery to assign a single scope to a member along with a scope-specific role the member will have for assigned scope.


#### Setup

For the context of this example, the following request will setup the instance with the needed starting conditions:

##### HTTP Request

`POST http://V1Host/V1Instance/api/asset`

###### Payload:

```json
[
  {
    "from": "Member",
    "filter": [
      "Name='memberForSubqueryScope'"
    ],
    "execute": "Delete"
  },
  {
    "from": "Scope",
    "filter": [
      "Name='Subquery project for Member.AssignToScopeWithRole'"
    ],
    "execute": "Delete"
  },
  {
    "AssetType": "Scope",
    "Name": "Subquery project for Member.AssignToScopeWithRole",
    "Parent": "Scope:0",
    "BeginDate": "2019-11-21T16:45:34.822Z"
  },
  {
    "AssetType": "Member",
    "Name": "memberForSubqueryScope",
    "Password": "memberForSubqueryScope",
    "Nickname": "memberForSubqueryScope",
    "Username": "memberForSubqueryScope",
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
  "from": "Member:1114",
  "execute": {
    "op": "AssignToScopeWithRole",
    "args": {
      "Scope": {
        "from": "Scope",
        "where": {
          "Name": "Subquery project for Member.AssignToScopeWithRole"
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

* Notice that in the `args` property, the values for the `Scope` and the `Role` properties are specified as subqueries. This makes it easier to create scripts which manipulate members and their project roles in the system using commonly shared values instead of having to separately query for oids first and then construct an HTTP request.
* Note that when using subqueries, only the very first query result will be used as the property value. This means you may need to use sorting to get the correct value if your subquery has a chance of returning more than one asset.
#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "3829e378-db9d-4bd7-b656-3edb195da6c5",
  "createdDate": "2019-11-21T16:45:35.0078639Z",
  "completedDate": "2019-11-21T16:45:35.0258636Z",
  "duration": "00:00:00.0179997",
  "durationSeconds": 0.0179997,
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
      "Member:1114"
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

