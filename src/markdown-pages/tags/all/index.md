## Query All

The following example returns every tag in use in the system with usage information broken down the same as the Single Tag above.

#### HTTP Request

`GET http://V1Host/V1Instance/api/tags/all`

#### HTTP Response
```json
{
  "acceptanceTestDetails": {
    "tag": "AcceptanceTestDetails",
    "count": 1,
    "visibleCount": 1
  },
  "acceptanceTestDetails 2": {
    "tag": "AcceptanceTestDetails 2",
    "count": 1,
    "visibleCount": 1
  },
  "acceptanceTestDetails 3": {
    "tag": "AcceptanceTestDetails 3",
    "count": 1,
    "visibleCount": 1
  }
}
```