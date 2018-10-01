```javascript
import axios from 'axios';
import sdk, { axiosConnector } from 'v1sdk';

const axiosConnectedSdk = axiosConnector(axios)(sdk);
const v1 = axiosConnectedSdk(
    'V1Host',
    'V1Instance',
    443,
    true
  )
  .withAccessToken('<access-token>');

const query = {
    from: "Story",
    select: [ 
        "Name",
        "ChangeDateUTC",
    ],
    asof: "2016-01-01"
};

v1.query(query).then(assets => {
    console.log(assets);
});
```