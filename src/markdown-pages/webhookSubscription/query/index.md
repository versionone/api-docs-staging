## Query

Retrieve a paged list of existing webhook subscriptions.

#### HTTP Request

`GET http://V1Host/V1Instance/api/webhook?page=pageSize,pageStart&where=field=value`

#### HTTP Response

```json
{
	 "total": 1,
    "pageSize": 25,
    "pageStart": 0,
    "_type": "WebhookSubscription",
    "results": [
		{
			"id": "336d997f-d9fa-4612-80e8-9f41a4b41352",
			"webhookId": "Webhook indentifier",
			"url": "https://matchedUrl.com",
			"description": "Short description of the webhook subscription",
			"enabled": true,
			"eventTypes": [],
			"lastResponseAt": "0001-01-01T00:00:00Z",
			"retryCount": 0,
			"createdAt": "2018-09-27T20:28:41.3829451Z",
			"updatedAt": "2018-09-27T20:28:41.3829451Z",
			"createdBy": "Member:20"
		}
	]
}
```