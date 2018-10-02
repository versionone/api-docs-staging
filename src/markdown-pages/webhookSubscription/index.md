Webhook subscription allow you to define what events in VersionOne can fire webhooks.

By supplying a URL to an external system and a list of events that trigger a webhook, you can inform that external system anytime the event occurs in VersionOne.  

You are able to create and edit webhooks to be as broad or specific as you'd like. For example, you can use webhooks to receive an HTTP request to the external system anytime any story changes it status, or anytime Story in Project A that is owned by Susan has a Status change.

By configuring the event with `from`, `filter`, `with`, and `select`, you can get very specific about what changes you want to be notified about in VersionOne.

## External System

The external system can be configured by adding a `url` to the webhook subscription.
If the external system requires an authorization token, you can add it as an `authorizationHeader`. This field will be sent as the HTTP Authroization Header each time an event triggers the webhook to be sent.
Add a short `description` to keep track of where this webhook will be sent when viewing the subscription.

## Event Types

VersionOne keeps track of any time an Asset is created, updated or operated upon.. This allows us to create powerful webhook events modeled around the Assets and their Attributes. Each event has a `type` from one of the following:

* AssetCreated
* AssetUpdated
* OperationExecuted

If I want a webhook triggered any time a Story changes, my event would look like:
```json
{
  "type": "AssetChanged",
  "from": "Story"
}
```

You can also include an array of `attributes` that will allow you to specify which attributes of the asset you'd like to trigger webhooks. Omitting the `attributes` field will notify you of any changes to the asset. 


If I want a webhook triggered any time a Story Status changes, my event would look like:
```json
{
  "type": "AssetChanged",
  "from": "Story",
  "attributes": ["Status"]
}
```

We can enhance our event even more by filtering out Stories that don't meet a specified criteria using the `filter` and `with` fields. If I only want to know about Story Status changes for stories in my Project, the event would look like:

```json
{
  "type": "AssetChanged",
  "from": "Story",
  "attributes": ["Status"],
  "filter": [
    "Scope=$Scope"
  ],
  "with": {
    "$Scope": "Scope:0"
  }
}
```

When the webhook is fired, we might want details about the Story whose Status changed. You can use the `select` field to pick which of the Story's Attributes will be included in addition to the Asset's Oid. For example, if you want to know the Name of the Story and the Name of each of Owner of the Story, your event would look like:

```json
{
  "type": "AssetChanged",
  "from": "Story",
  "attribute": ["Status"],
  "filter": [
    "Scope=$Scope"
  ],
  "with": {
    "$Scope": "Scope:0"
  },
  "select": [
    "Name",
    "Owners.Name"
  ]
}
```