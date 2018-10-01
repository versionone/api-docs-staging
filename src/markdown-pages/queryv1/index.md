<span class="badge">USE: ~/api/asset</span>

Read only api that allows retrieval of arbitrarily nested master/detail and hierarchical relationships. (For example, you can retrieve all the `Schedules` in a `Scope`, all the `Iterations` in the `Schedules`, and all the `Workitems` in the iterations, all in one go.)

An arbitrary number of independent queries can be executed in one HTTP round-trip.

####Components of the HTTP POST request body:

Key        | Meaning
---------- | -------
from | Every query must have a "from" key with a string value naming the Asset Type to query. All other keys are optional.
select | In order to retrieve any data, a selection list of the desired attributes is required. These attributes are in the VersionOne Selection Token syntax. Scalar attributes, relations, multivalued attributes, and traversal through a relation to all of the above are suppported.
filter | the filter key is a sequence of VersionOne filter tokens as strings. Filter tokens name an attribute (possible traversing relations) and give a comparison operator and either a comparison value or a context variable that will be defined in the with clause.
with | You may define variables in your filter tokens that will be filled via the with mapping. This can allow parameterization and alleviate quoting issues. `with` is a mapping of variable names to their values, and is applied over the entire query.
where | the where key takes a value that is also a mapping. The keys of the mapping are taken as selection tokens, and the values of the mapping are taken as the value to compare against in an "equal" comparison.
sorting | Any selection token can be used to sort the results. include a "sort" key with a value that is a list of selection tokens to sort by. Tokens can be preceded by + or - to indicate ascending or descending sort.
grouping | You may group a set of assets by a related-to value. For example, stories can be grouped by status. The queried assets are returned in the _children element of the grouped-on asset.
find | provides basic substring matching
findin | list of selected attributes to search in
page | You may limit the number of returned results, or start retrieving results starting from a particular index. Results are returned in ID order if no other sorting is applied, so paging will always be deterministic
asof | Historical data is kept for all assets, and you may query for the state of assets "as of" a particular point in time. The asof value is a string with a timestamp in ISO format.

#### Response

Data is returned as a sequence of result sets. Each result set is a sequence that contains the results from one query mapping. Each result is a JSON object with fields for the selections you defined in the query mapping.

