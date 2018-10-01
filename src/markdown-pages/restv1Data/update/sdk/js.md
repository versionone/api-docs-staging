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

const story = {
    Name: 'New Name',
    Scope: 'Scope:123',
    ChangeSets: [
        { value: 'ChangeSet:123', act: 'add' },
        { value: 'ChangeSet:987', act: 'remove' },
    ],
};

v1.create(story).then(response => {
  console.log(response);
});
```