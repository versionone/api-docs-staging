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
        "Name"
    ],
    filter: [
      "Name=$myName"
    ],
    where: {
      "Scope": "$myScope"
    },
    with: {
      "$myScope": "Scope:1234",
      "$myName": "Alice Agility"
    }
};

v1.query(query).then(assets => {
    console.log(assets);
});
```