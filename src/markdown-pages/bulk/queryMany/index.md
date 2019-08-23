## Query Assets

Query for assets with multiple query specifications and retrieve multiple result sets.

### Example: Query for stories associated with `Scope:0` and also query for active members and their OwnedWorkitems.

#### HTTP Request

`POST http://V1Host/V1Instance/api/asset`

###### Payload:

```json
[
  {
    "from": "Story",
    "wwhere": {
      "Scope": "Scope:0"
    },
    "select": [
      "Name"
    ]
  },
  {
    "from": "Member",
    "where": {
      "Inactive": false
    },
    "select": [
      "Name",
      "Username",
      {
        "from": "OwnedWorkitems",
        "select": [
          "Name"
        ]
      }
    ]
  }
]
```

#### HTTP Response:

```json
{
  "requestId": "c722e9e3-1ac5-4d2d-93a6-2c2677d9c9e0",
  "createdDate": "2019-08-23T19:57:56.783439Z",
  "completedDate": "2019-08-23T19:57:56.955049Z",
  "duration": "00:00:00.1716100",
  "durationSeconds": 0.17160999999999999,
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
  "queryResult": {
    "results": [
      [
        {
          "_oid": "Story:4014",
          "Name": "API Users can Read Error Details"
        },
        {
          "_oid": "Story:1692",
           "Name": "Product Managers can specfify priority"
        }
      ],
      [
        {
          "_oid": "Member:20",
          "Name": "Administrator",
          "Username": "admin",
          "OwnedWorkitems": [
            {
              "_oid": "Defect:1758",
              "Name": "Dialog box missing title"
            },
            {
              "_oid": "Epic:4123",
              "Name": "Error Reporting"
            }
          ]
        },
        {
          "_oid": "Member:1024",
          "Name": "Marv Irwin",
          "Username": "MarvIrwin",
          "OwnedWorkitems": [
            {
              "_oid": "Defect:4033",
              "Name": "API Error message lacks summary information"
            },
            {
              "_oid": "Story:4014",
              "Name": "API Users can Read Error Details"
            }
          ]
        },
        {
          "_oid": "Member:1043",
          "Name": "Billy Agilisto",
          "Username": "bagile",
          "OwnedWorkitems": [
            {
              "_oid": "Story:1692",
              "Name": "Product Managers can specfify priority"
            },
            {
              "_oid": "Story:3479",
              "Name": "Testers can rank Defect severity"
            },
            {
              "_oid": "Story:2046",
              "Name": "Release Managers can schedule Workitems into Releases"
            },
      ]
    ],
    "count": 2
  }
}
```