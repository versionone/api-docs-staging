## Group

You may group a set of assets by a related-to value. For example, stories can be grouped by status. The queried assets are returned in the _children element of the grouped-on asset.

#### HTTP Request

`POST http://V1Host/V1Instance/query.v1`

```json
{
    "from": "Story",
    "select": [ 
        "Name",
        "Number"
    ],
    "group": [
      {
        "from": "Status",
        "select": [
          "Name"
        ]
      }
    ]
}
```

#### HTTP Response

```json
[
  [
    {
      "_oid": "NULL",
      "Name": null,
      "_children": [
        {
          "_oid": "Story:1215",
          "Name": "User Interface Story",
          "Number": "S-01054"
        }
      ]
    },
    {
      "_oid": "StoryStatus:133",
      "Name": "Future",
      "_children": [
        {
          "_oid": "Story:1153",
          "Name": "Partnerships",
          "Number": "S-01009"
        }
      ]
    },
    {
      "_oid": "StoryStatus:134",
      "Name": "In Progress",
      "_children": [
        {
          "_oid": "Story:1194",
          "Name": "Enter RMA",
          "Number": "S-01038"
        },
        {
          "_oid": "Story:1196",
          "Name": "Add Shipping Notes",
          "Number": "S-01039"
        }
      ]
    }
  ]
]
```