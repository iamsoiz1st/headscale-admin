
# V1Node


## Properties

Name | Type
------------ | -------------
`id` | string
`machineKey` | string
`nodeKey` | string
`discoKey` | string
`ipAddresses` | Array&lt;string&gt;
`name` | string
`user` | [V1User](V1User.md)
`lastSeen` | Date
`expiry` | Date
`preAuthKey` | [V1PreAuthKey](V1PreAuthKey.md)
`createdAt` | Date
`registerMethod` | [V1RegisterMethod](V1RegisterMethod.md)
`givenName` | string
`online` | boolean
`approvedRoutes` | Array&lt;string&gt;
`availableRoutes` | Array&lt;string&gt;
`subnetRoutes` | Array&lt;string&gt;
`tags` | Array&lt;string&gt;

## Example

```typescript
import type { V1Node } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "machineKey": null,
  "nodeKey": null,
  "discoKey": null,
  "ipAddresses": null,
  "name": null,
  "user": null,
  "lastSeen": null,
  "expiry": null,
  "preAuthKey": null,
  "createdAt": null,
  "registerMethod": null,
  "givenName": null,
  "online": null,
  "approvedRoutes": null,
  "availableRoutes": null,
  "subnetRoutes": null,
  "tags": null,
} satisfies V1Node

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1Node
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


