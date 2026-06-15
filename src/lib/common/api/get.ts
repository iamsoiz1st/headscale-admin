import { API_URL_NODE, API_URL_POLICY, API_URL_PREAUTHKEY, API_URL_USER, API_URL_HEALTH, apiGet } from '$lib/common/api';
import type {
	ApiHealth,
	ApiNodes,
	ApiPolicy,
	ApiPreAuthKeys,
	ApiUsers,
	Node,
	PreAuthKey,
	User,
} from '$lib/common/types';
import { debug } from '../debug';

export async function getHealth(init?: RequestInit): Promise<ApiHealth> {
	const health = await apiGet<ApiHealth>(API_URL_HEALTH, init);
	debug("Healthcheck:", health);
	return health;
}

export async function getPreAuthKeys(
	user_ids?: string[],
	init?: RequestInit,
): Promise<PreAuthKey[]> {
	if (user_ids == undefined) {
		user_ids = (await getUsers(init)).map((u) => u.id);
	}

	const promises = user_ids
		.filter((user_id) => user_id !== '')
		.map((user_id) => apiGet<ApiPreAuthKeys>(API_URL_PREAUTHKEY + '?user=' + user_id, init));

	const results = await Promise.all(promises);
	return results.flatMap(({ preAuthKeys }) => preAuthKeys);
}

type GetUserOptions = 
	{id: string, name?: never, email?: never} |
	{id?: never, name: string, email?: never} |
	{id?: never, name?: never, email: string}

export async function getUsers(init?: RequestInit, options?: GetUserOptions): Promise<User[]> {
	let url = API_URL_USER;
	if (options !== undefined){
		if(options.id !== undefined) {
			url += "?id=" + options.id
		} else if (options.name !== undefined) {
			url += "?name=" + options.name
		} else if (options.email !== undefined) {
			url += "?email=" + options.email
		} else {
			throw new Error("Invalid User Parameters")
		}
	}
	const { users } = await apiGet<ApiUsers>(url, init);
	return users;
}

export async function getNodes(): Promise<Node[]> {
	const { nodes } = await apiGet<ApiNodes>(API_URL_NODE);
	return nodes;
}

export async function getPolicy(): Promise<string> {
	const { policy } = await apiGet<ApiPolicy>(API_URL_POLICY)
	return policy
}
