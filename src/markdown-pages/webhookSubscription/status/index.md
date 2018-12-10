## Status

Retrieve a list of the 20 most recent webhook receipts by id. 

This is feature is useful for troubleshooting webhooks that don't seem to be working. The receipts will contain useful information to allow you to determine if your webhooks are being sent, if they are received, how the external system is responding, and additional information about the webhook, such as the timestamp, retry count, or if it included an Authorization Header.

#### HTTP Request

`GET http://V1Host/V1Instance/api/webhook/status/:id`

#### HTTP Response

```json
[
  {
    "subscriptionId": "b3ff4f99-1436-4989-96a5-cb43341fc9e4",
    "hasAuthorizationHeader": true,
    "url": "https://externalsystem.com",
    "response": "Optional Response Information",
    "headers": {
      "transfer-Encoding": "chunked",
      "connection": "keep-alive",
      "x-Request-Id": "837ea952-2c56-4470-aa89-3f996ad1b65c",
      "x-Token-Id": "46054f26-412f-4772-a1d6-48648421fbc3",
      "x-RateLimit-Limit": "30",
      "x-RateLimit-Remaining": "26",
      "cache-Control": "no-cache",
      "content-Type": "text/plain; charset=UTF-8",
      "date": "Fri, 07 Dec 2018 19:54:53 GMT",
      "server": "nginx/1.10.3"
    },
    "status": 500,
    "timeStamp": "2018-12-07T19:54:09.59Z",
    "retryCount": 3,
    "wasReceived": false
  }
]
```