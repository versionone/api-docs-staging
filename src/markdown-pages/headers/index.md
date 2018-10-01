```bash
curl "https://V1Host/V1Instance/api_endpoint_here"
  -H "Authorization: Bearer <access-token>"
  -H "Content-Type: application/json"
  -H "Accept: application/json"
```

For this guide we will only show the VersionOne server accepting and responding with JSON.

The `Content-Type` header tells the server what media type we are sending it in the request body.  
The `Accept` header tells the server what media type to respond to the request with.


<div class="notice">
  <div class="header">
    HTTP Headers
  </div>
  <div class="content">
    Ensure that every request has <code>Content-Type: applicaiton/json</code> and <code>Accept: application/json</code> headers.
  </div>
</div>