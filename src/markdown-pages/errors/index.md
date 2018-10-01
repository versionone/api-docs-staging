The VersionOne API uses the following error codes:


Error Code | Meaning
---------- | -------
400 | Bad Request --  Most common error, resulting from a request that could not be processed by the API. The Error Message will identify the specific problem, and there may be Exception elements that give very detailed information
401 | Unauthorized -- Your access token is invalid
404 | Not Found -- The specified resource could not be found
405 | Method Not Allowed -- The HTTP method used for the request is not valid at the requested URL. This will be returned for any method other than GET and POST, or if POST was sent to a URL that does not support updating.
500 | Internal Server Error -- An unexpected error occurred during the processing of the request. The response payload will contain Exception elements with specific information that will help technical diagnose the cause of the error. 
