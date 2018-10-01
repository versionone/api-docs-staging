## Find and Findin

`find` contains a search term and `findin` specifies which attributes to locate the term within.

#### HTTP Request

`POST http://V1Host/V1Instance/query.v1`

```json
{
    "from": "Story",
    "select": [ 
        "Name"
    ],
    "find": "As a user",
    "findin": [
      "Name"
    ]
}
```

#### HTTP Response

```json
[
  [
    {
      "_oid": "Story:1234",
      "Name": "As a user I can do X"
    },
    {
      "_oid": "Story:4567",
      "Name": "As a user I can do Y"
    }
  ]
]
```