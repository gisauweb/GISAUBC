import axios from 'axios';
import useSWR from 'swr';

export const EventType = Object.freeze({
	EVENT: 'event',
	RANTANGAN: 'rantangan',
});

const fetcher = (url) => axios.get(url).then((res) => res.data);

// Hook to fetch all upcoming posts
export function useUpcomingPosts(type) {
	const query = type ? `?eventType=${type}` : '';
	const { data: posts, error } = useSWR(`${import.meta.env.VITE_API_BASE_URL}/posts/upcoming${query}`, fetcher);

	return {
		posts: posts || [], // default to empty array
		loading: !error && !posts,
		error,
	};
}

// Hook to fetch all posts
export function usePastPosts(type) {
	const query = type ? `?eventType=${type}` : '';
	const { data: posts, error } = useSWR(`${import.meta.env.VITE_API_BASE_URL}/posts/past${query}`, fetcher);

	return {
		posts: posts || [], // default to empty array
		loading: !error && !posts,
		error,
	};
}

export function usePastPostsYear(year, type) {
	const query = type ? `&eventType=${type}` : '';
	const { data: posts, error } = useSWR(`${import.meta.env.VITE_API_BASE_URL}/posts?year=${year}${query}`, fetcher);

	return {
		posts: posts || [], // default to empty array
		loading: !error && !posts,
		error,
	};
}

// Hook to add a new post
// export function useAddPost() {
// 	const [loading, setLoading] = useState(false);
// 	const [error, setError] = useState(null);

// 	async function create(postData) {
// 		setLoading(true);
// 		setError(null);
// 		try {
// 			const result = await addPost(postData);
// 			return result;
// 		} catch (err) {
// 			setError(err.message);
// 		} finally {
// 			setLoading(false);
// 		}
// 	}

// 	return { create, loading, error };
// }
