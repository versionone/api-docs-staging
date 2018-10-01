Webhook subscription allow you to define what events in VersionOne can fire webhooks!

By supplying a url to an external system and a list of events that trigger a webhook you can inform that external system anytime the event occurs in VersionOne. For example receive an HTTP request to the external system anytime a Story in Project A that is owned by Susan has a Status change.

By configuring the event with `from`, `filter`, `with`, and `select` you can get very specific about what changes you want to be notified about in VersionOne.

## External System

The external system can be configured by adding a `url` to the webhook subscription.
If the external system requires an authroization token you can add it as an `authorizationHeader`. This field will be sent as the HTTP Authroization Header each time an event triggers the webhook to be sent.
Add a short `description` to keep track of where this webhook will be sent when viewing the subscription.

## Event Types

VersionOne keeps track of any time an Asset is created, updated or operated upon as well as any time an addition, removal, and update to any Attribute is made. This allows use to create powerful webhook events modeled around the Assets and their Attributes. Each event has a `type` from one of the following:

* AssetCreated,
* AssetUpdated,
* OperationExecuted
* AttributeChanged
* AttributeAdded
* AttributeRemoved

If I want a webhook triggered any time a Story Status changes my event would look like:
```json
{
    "type": "AttributeChanged",
    "from": "Story",
    "attribute": "Status"
}
```

We can enhance our event even more by filtering out Stories that don't meet a specified criteria using the `filter` and `with` fields. If I only want to know about Story Status changes for stories in my Project the event would look like:

```json
{
    "type": "AttributeChanged",
    "from": "Story",
    "attribute": "Status",
    "filter": [
        "Scope=$Scope"
    ],
    "with": {
        "$Scope": "Scope:0"
    }
}
```

When the webhook is fired we might want details about the Story whose Status changed. We have you covered. You can use the `select` field to pick which Attributes will be included about the Story in addition to the Asset's Oid. For example if you want to know the Name and the Name of each of Owner of the Story if would look like:

```json
{
    "type": "AttributeChanged",
    "from": "Story",
    "attribute": "Status",
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