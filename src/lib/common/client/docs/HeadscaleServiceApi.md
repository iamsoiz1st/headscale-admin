# HeadscaleServiceApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**headscaleServiceBackfillNodeIPs**](HeadscaleServiceApi.md#headscaleservicebackfillnodeips) | **POST** /api/v1/node/backfillips |  |
| [**headscaleServiceCreateApiKey**](HeadscaleServiceApi.md#headscaleservicecreateapikey) | **POST** /api/v1/apikey | --- ApiKeys start --- |
| [**headscaleServiceCreatePreAuthKey**](HeadscaleServiceApi.md#headscaleservicecreatepreauthkey) | **POST** /api/v1/preauthkey | --- PreAuthKeys start --- |
| [**headscaleServiceCreateUser**](HeadscaleServiceApi.md#headscaleservicecreateuser) | **POST** /api/v1/user | --- User start --- |
| [**headscaleServiceDebugCreateNode**](HeadscaleServiceApi.md#headscaleservicedebugcreatenode) | **POST** /api/v1/debug/node | --- Node start --- |
| [**headscaleServiceDeleteApiKey**](HeadscaleServiceApi.md#headscaleservicedeleteapikey) | **DELETE** /api/v1/apikey/{prefix} |  |
| [**headscaleServiceDeleteNode**](HeadscaleServiceApi.md#headscaleservicedeletenode) | **DELETE** /api/v1/node/{nodeId} |  |
| [**headscaleServiceDeletePreAuthKey**](HeadscaleServiceApi.md#headscaleservicedeletepreauthkey) | **DELETE** /api/v1/preauthkey |  |
| [**headscaleServiceDeleteUser**](HeadscaleServiceApi.md#headscaleservicedeleteuser) | **DELETE** /api/v1/user/{id} |  |
| [**headscaleServiceExpireApiKey**](HeadscaleServiceApi.md#headscaleserviceexpireapikey) | **POST** /api/v1/apikey/expire |  |
| [**headscaleServiceExpireNode**](HeadscaleServiceApi.md#headscaleserviceexpirenode) | **POST** /api/v1/node/{nodeId}/expire |  |
| [**headscaleServiceExpirePreAuthKey**](HeadscaleServiceApi.md#headscaleserviceexpirepreauthkey) | **POST** /api/v1/preauthkey/expire |  |
| [**headscaleServiceGetNode**](HeadscaleServiceApi.md#headscaleservicegetnode) | **GET** /api/v1/node/{nodeId} |  |
| [**headscaleServiceGetPolicy**](HeadscaleServiceApi.md#headscaleservicegetpolicy) | **GET** /api/v1/policy | --- Policy start --- |
| [**headscaleServiceHealth**](HeadscaleServiceApi.md#headscaleservicehealth) | **GET** /api/v1/health | --- Health start --- |
| [**headscaleServiceListApiKeys**](HeadscaleServiceApi.md#headscaleservicelistapikeys) | **GET** /api/v1/apikey |  |
| [**headscaleServiceListNodes**](HeadscaleServiceApi.md#headscaleservicelistnodes) | **GET** /api/v1/node |  |
| [**headscaleServiceListPreAuthKeys**](HeadscaleServiceApi.md#headscaleservicelistpreauthkeys) | **GET** /api/v1/preauthkey |  |
| [**headscaleServiceListUsers**](HeadscaleServiceApi.md#headscaleservicelistusers) | **GET** /api/v1/user |  |
| [**headscaleServiceRegisterNode**](HeadscaleServiceApi.md#headscaleserviceregisternode) | **POST** /api/v1/node/register |  |
| [**headscaleServiceRenameNode**](HeadscaleServiceApi.md#headscaleservicerenamenode) | **POST** /api/v1/node/{nodeId}/rename/{newName} |  |
| [**headscaleServiceRenameUser**](HeadscaleServiceApi.md#headscaleservicerenameuser) | **POST** /api/v1/user/{oldId}/rename/{newName} |  |
| [**headscaleServiceSetApprovedRoutes**](HeadscaleServiceApi.md#headscaleservicesetapprovedroutes) | **POST** /api/v1/node/{nodeId}/approve_routes |  |
| [**headscaleServiceSetPolicy**](HeadscaleServiceApi.md#headscaleservicesetpolicy) | **PUT** /api/v1/policy |  |
| [**headscaleServiceSetTags**](HeadscaleServiceApi.md#headscaleservicesettags) | **POST** /api/v1/node/{nodeId}/tags |  |



## headscaleServiceBackfillNodeIPs

> V1BackfillNodeIPsResponse headscaleServiceBackfillNodeIPs(confirmed)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceBackfillNodeIPsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // boolean (optional)
    confirmed: true,
  } satisfies HeadscaleServiceBackfillNodeIPsRequest;

  try {
    const data = await api.headscaleServiceBackfillNodeIPs(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **confirmed** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**V1BackfillNodeIPsResponse**](V1BackfillNodeIPsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceCreateApiKey

> V1CreateApiKeyResponse headscaleServiceCreateApiKey(body)

--- ApiKeys start ---

### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceCreateApiKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // V1CreateApiKeyRequest
    body: ...,
  } satisfies HeadscaleServiceCreateApiKeyRequest;

  try {
    const data = await api.headscaleServiceCreateApiKey(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [V1CreateApiKeyRequest](V1CreateApiKeyRequest.md) |  | |

### Return type

[**V1CreateApiKeyResponse**](V1CreateApiKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceCreatePreAuthKey

> V1CreatePreAuthKeyResponse headscaleServiceCreatePreAuthKey(body)

--- PreAuthKeys start ---

### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceCreatePreAuthKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // V1CreatePreAuthKeyRequest
    body: ...,
  } satisfies HeadscaleServiceCreatePreAuthKeyRequest;

  try {
    const data = await api.headscaleServiceCreatePreAuthKey(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [V1CreatePreAuthKeyRequest](V1CreatePreAuthKeyRequest.md) |  | |

### Return type

[**V1CreatePreAuthKeyResponse**](V1CreatePreAuthKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceCreateUser

> V1CreateUserResponse headscaleServiceCreateUser(body)

--- User start ---

### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceCreateUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // V1CreateUserRequest
    body: ...,
  } satisfies HeadscaleServiceCreateUserRequest;

  try {
    const data = await api.headscaleServiceCreateUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [V1CreateUserRequest](V1CreateUserRequest.md) |  | |

### Return type

[**V1CreateUserResponse**](V1CreateUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceDebugCreateNode

> V1DebugCreateNodeResponse headscaleServiceDebugCreateNode(body)

--- Node start ---

### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceDebugCreateNodeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // V1DebugCreateNodeRequest
    body: ...,
  } satisfies HeadscaleServiceDebugCreateNodeRequest;

  try {
    const data = await api.headscaleServiceDebugCreateNode(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [V1DebugCreateNodeRequest](V1DebugCreateNodeRequest.md) |  | |

### Return type

[**V1DebugCreateNodeResponse**](V1DebugCreateNodeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceDeleteApiKey

> object headscaleServiceDeleteApiKey(prefix, id)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceDeleteApiKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // string
    prefix: prefix_example,
    // string (optional)
    id: id_example,
  } satisfies HeadscaleServiceDeleteApiKeyRequest;

  try {
    const data = await api.headscaleServiceDeleteApiKey(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **prefix** | `string` |  | [Defaults to `undefined`] |
| **id** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceDeleteNode

> object headscaleServiceDeleteNode(nodeId)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceDeleteNodeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // string
    nodeId: nodeId_example,
  } satisfies HeadscaleServiceDeleteNodeRequest;

  try {
    const data = await api.headscaleServiceDeleteNode(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **nodeId** | `string` |  | [Defaults to `undefined`] |

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceDeletePreAuthKey

> object headscaleServiceDeletePreAuthKey(id)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceDeletePreAuthKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // string (optional)
    id: id_example,
  } satisfies HeadscaleServiceDeletePreAuthKeyRequest;

  try {
    const data = await api.headscaleServiceDeletePreAuthKey(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceDeleteUser

> object headscaleServiceDeleteUser(id)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceDeleteUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // string
    id: id_example,
  } satisfies HeadscaleServiceDeleteUserRequest;

  try {
    const data = await api.headscaleServiceDeleteUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceExpireApiKey

> object headscaleServiceExpireApiKey(body)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceExpireApiKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // V1ExpireApiKeyRequest
    body: ...,
  } satisfies HeadscaleServiceExpireApiKeyRequest;

  try {
    const data = await api.headscaleServiceExpireApiKey(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [V1ExpireApiKeyRequest](V1ExpireApiKeyRequest.md) |  | |

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceExpireNode

> V1ExpireNodeResponse headscaleServiceExpireNode(nodeId, expiry)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceExpireNodeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // string
    nodeId: nodeId_example,
    // Date (optional)
    expiry: 2013-10-20T19:20:30+01:00,
  } satisfies HeadscaleServiceExpireNodeRequest;

  try {
    const data = await api.headscaleServiceExpireNode(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **nodeId** | `string` |  | [Defaults to `undefined`] |
| **expiry** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**V1ExpireNodeResponse**](V1ExpireNodeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceExpirePreAuthKey

> object headscaleServiceExpirePreAuthKey(body)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceExpirePreAuthKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // V1ExpirePreAuthKeyRequest
    body: ...,
  } satisfies HeadscaleServiceExpirePreAuthKeyRequest;

  try {
    const data = await api.headscaleServiceExpirePreAuthKey(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [V1ExpirePreAuthKeyRequest](V1ExpirePreAuthKeyRequest.md) |  | |

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceGetNode

> V1GetNodeResponse headscaleServiceGetNode(nodeId)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceGetNodeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // string
    nodeId: nodeId_example,
  } satisfies HeadscaleServiceGetNodeRequest;

  try {
    const data = await api.headscaleServiceGetNode(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **nodeId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**V1GetNodeResponse**](V1GetNodeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceGetPolicy

> V1GetPolicyResponse headscaleServiceGetPolicy()

--- Policy start ---

### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceGetPolicyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  try {
    const data = await api.headscaleServiceGetPolicy();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**V1GetPolicyResponse**](V1GetPolicyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceHealth

> V1HealthResponse headscaleServiceHealth()

--- Health start ---

### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceHealthRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  try {
    const data = await api.headscaleServiceHealth();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**V1HealthResponse**](V1HealthResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceListApiKeys

> V1ListApiKeysResponse headscaleServiceListApiKeys()



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceListApiKeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  try {
    const data = await api.headscaleServiceListApiKeys();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**V1ListApiKeysResponse**](V1ListApiKeysResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceListNodes

> V1ListNodesResponse headscaleServiceListNodes(user)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceListNodesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // string (optional)
    user: user_example,
  } satisfies HeadscaleServiceListNodesRequest;

  try {
    const data = await api.headscaleServiceListNodes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **user** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**V1ListNodesResponse**](V1ListNodesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceListPreAuthKeys

> V1ListPreAuthKeysResponse headscaleServiceListPreAuthKeys()



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceListPreAuthKeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  try {
    const data = await api.headscaleServiceListPreAuthKeys();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**V1ListPreAuthKeysResponse**](V1ListPreAuthKeysResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceListUsers

> V1ListUsersResponse headscaleServiceListUsers(id, name, email)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceListUsersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // string (optional)
    id: id_example,
    // string (optional)
    name: name_example,
    // string (optional)
    email: email_example,
  } satisfies HeadscaleServiceListUsersRequest;

  try {
    const data = await api.headscaleServiceListUsers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Optional] [Defaults to `undefined`] |
| **name** | `string` |  | [Optional] [Defaults to `undefined`] |
| **email** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**V1ListUsersResponse**](V1ListUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceRegisterNode

> V1RegisterNodeResponse headscaleServiceRegisterNode(user, key)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceRegisterNodeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // string (optional)
    user: user_example,
    // string (optional)
    key: key_example,
  } satisfies HeadscaleServiceRegisterNodeRequest;

  try {
    const data = await api.headscaleServiceRegisterNode(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **user** | `string` |  | [Optional] [Defaults to `undefined`] |
| **key** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**V1RegisterNodeResponse**](V1RegisterNodeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceRenameNode

> V1RenameNodeResponse headscaleServiceRenameNode(nodeId, newName)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceRenameNodeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // string
    nodeId: nodeId_example,
    // string
    newName: newName_example,
  } satisfies HeadscaleServiceRenameNodeRequest;

  try {
    const data = await api.headscaleServiceRenameNode(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **nodeId** | `string` |  | [Defaults to `undefined`] |
| **newName** | `string` |  | [Defaults to `undefined`] |

### Return type

[**V1RenameNodeResponse**](V1RenameNodeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceRenameUser

> V1RenameUserResponse headscaleServiceRenameUser(oldId, newName)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceRenameUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // string
    oldId: oldId_example,
    // string
    newName: newName_example,
  } satisfies HeadscaleServiceRenameUserRequest;

  try {
    const data = await api.headscaleServiceRenameUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **oldId** | `string` |  | [Defaults to `undefined`] |
| **newName** | `string` |  | [Defaults to `undefined`] |

### Return type

[**V1RenameUserResponse**](V1RenameUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceSetApprovedRoutes

> V1SetApprovedRoutesResponse headscaleServiceSetApprovedRoutes(nodeId, body)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceSetApprovedRoutesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // string
    nodeId: nodeId_example,
    // HeadscaleServiceSetApprovedRoutesBody
    body: ...,
  } satisfies HeadscaleServiceSetApprovedRoutesRequest;

  try {
    const data = await api.headscaleServiceSetApprovedRoutes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **nodeId** | `string` |  | [Defaults to `undefined`] |
| **body** | [HeadscaleServiceSetApprovedRoutesBody](HeadscaleServiceSetApprovedRoutesBody.md) |  | |

### Return type

[**V1SetApprovedRoutesResponse**](V1SetApprovedRoutesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceSetPolicy

> V1SetPolicyResponse headscaleServiceSetPolicy(body)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceSetPolicyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // V1SetPolicyRequest
    body: ...,
  } satisfies HeadscaleServiceSetPolicyRequest;

  try {
    const data = await api.headscaleServiceSetPolicy(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [V1SetPolicyRequest](V1SetPolicyRequest.md) |  | |

### Return type

[**V1SetPolicyResponse**](V1SetPolicyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## headscaleServiceSetTags

> V1SetTagsResponse headscaleServiceSetTags(nodeId, body)



### Example

```ts
import {
  Configuration,
  HeadscaleServiceApi,
} from '';
import type { HeadscaleServiceSetTagsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HeadscaleServiceApi();

  const body = {
    // string
    nodeId: nodeId_example,
    // HeadscaleServiceSetTagsBody
    body: ...,
  } satisfies HeadscaleServiceSetTagsRequest;

  try {
    const data = await api.headscaleServiceSetTags(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **nodeId** | `string` |  | [Defaults to `undefined`] |
| **body** | [HeadscaleServiceSetTagsBody](HeadscaleServiceSetTagsBody.md) |  | |

### Return type

[**V1SetTagsResponse**](V1SetTagsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

