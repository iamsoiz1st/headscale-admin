import { API_URL_NODE, API_URL_POLICY, API_URL_PREAUTHKEY, API_URL_USER, apiGet } from '$lib/common/api';
import type {
	ApiNodes,
	ApiPolicy,
	ApiPreAuthKeys,
	ApiUsers,
	Node,
	PreAuthKey,
	User,
} from '$lib/common/types';
import { debug } from '../debug';

export async function getPreAuthKeys(
	user_ids?: string[],
	init?: RequestInit,
): Promise<PreAuthKey[]> {
	// Headscale 0.28+: omitting the user param returns all keys at once
	try {
		const { preAuthKeys } = await apiGet<ApiPreAuthKeys>(API_URL_PREAUTHKEY, init);
		if (preAuthKeys !== undefined) return preAuthKeys ?? [];
	} catch (_) {
		// Older Headscale requires a user filter — fall through
	}
	if (user_ids === undefined) {
		user_ids = (await getUsers(init)).map((u) => u.id);
	}
	const results = await Promise.all(
		user_ids
			.filter((id) => id !== '')
			.map((user_id) => apiGet<ApiPreAuthKeys>(API_URL_PREAUTHKEY + '?user=' + user_id, init)),
	);
	return results.flatMap(({ preAuthKeys }) => preAuthKeys ?? []);
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
	const response = await apiGet<any>(API_URL_NODE);
	// Headscale 0.28+ replaced forcedTags/validTags/invalidTags with a unified `tags` field
	return (response.nodes ?? []).map((node: any): Node => {
		if (node.forcedTags === undefined) {
			return { ...node, forcedTags: node.tags ?? [], validTags: [], invalidTags: [] };
		}
		return { ...node, forcedTags: node.forcedTags ?? [], validTags: node.validTags ?? [], invalidTags: node.invalidTags ?? [] };
	});
}

export async function getPolicy(): Promise<string> {
	const { policy } = await apiGet<ApiPolicy>(API_URL_POLICY)
	return policy
}
