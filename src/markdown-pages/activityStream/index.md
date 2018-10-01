This endpoint provides read-only access to the activity streams for assets and entities within VersionOne.

<aside class="notice">
    <div class="content">
        The activity stream is not guaranteed to contain every change to an asset. To get a full accounting of all changes, you must use the asset history.
    </div>
</aside>

Query Params     | Meaning
---------- | -------
anchorDate | Datetime to use in selecting the returned activity. Defaults to 'now'.
direction | 'Forward' or 'Back'. Controls whether activity earlier or later than the anchor date will be returned. Defaults to 'Back'.
maxCount | Number of activities to return. Defaults to 25.
verbs | A comma-separated list of verbs to act as a filter on the activity returned. By default, no filter is applied.

Valid verbs are:
* Added
* Blocked
* Deleted
* Deprecated
* Closed
* Created
* Moved
* Reopened
* Removed
* UnBlocked
* Updated
* Undeleted
* Activated
* Deactivated