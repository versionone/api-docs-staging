## Search

The following example returns an array of tags that match the search term.

#### HTTP Request

`GET http://V1Host/V1Instance/api/tags/command/search?term=<term>`

#### HTTP Response

```json
[
  "Automated SQL UnitTests",
  "ProductPlanning Regression Tests",
  "RegressionTestDetails",
  "RegressionTests",
  "Testboard",
  "TestSetDetails",
]
```