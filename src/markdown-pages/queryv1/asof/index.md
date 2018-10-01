## Asof

Historical data is kept for all assets, and you may query for the state of assets "as of" a particular point in time. The asof value is a string with a timestamp in ISO format.

<aside class="notice">
  <div class="content">
    <code>asof</code> can be set to <code>All</code> to see all history
  </div>
</aside>

#### HTTP Request

`POST http://V1Host/V1Instance/query.v1`

```json
{
    "from": "Story",
    "select": [ 
        "Name",
        "ChangeDateUTC"
    ],
    "asof": "2016-01-01"
}
```

#### HTTP Response

```json
[
  [
    {
      "_oid": "Story:1234:1265",
      "Name": "Name",
      "ChangeDateUTC": "2017-09-06T15:06:26.7530000Z",
    },
    {
      "_oid": "Story:1234:1266",
      "Name": "Updated Name",
      "ChangeDateUTC": "2017-09-06T17:06:26.7530000Z",
    }
  ]
]
```