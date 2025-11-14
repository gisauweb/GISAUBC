import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url) => axios.get(url).then((res) => res.data);

// Hook to fetch all upcoming posts
export function useUpcomingPosts() {
	const { data: posts, error } = useSWR('http://localhost:3000/posts/upcoming', fetcher);

	return {
		posts: posts || [], // default to empty array
		loading: !error && !posts,
		error,
	};
}

// Hook to fetch all posts
export function usePastPosts() {
	const { data: posts, error } = useSWR('http://localhost:3000/posts/past', fetcher);

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
