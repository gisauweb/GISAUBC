import supabase from 'libs/supabaseClient';
import { useState } from 'react';

export default function RegisterForm({ onSuccess }) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [studentId, setStudentId] = useState('');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const submit = async (e) => {
		e.preventDefault();
		setError(null);
		setLoading(true);

		try {
			const { data } = await supabase.auth.getSession();
			const token = data.session?.access_token;
			if (!token) throw new Error('Not authenticated');

			const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ firstName, lastName, studentId }),
			});

			if (!res.ok) {
				const body = await res.json().catch(() => ({}));
				throw new Error(body.error || 'Registration failed');
			}

			const result = await res.json();
			onSuccess?.(result); // e.g. navigate to dashboard
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={submit}>
			<h2>Complete Registration</h2>

			<div>
				<label>
					First Name
					<input value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
				</label>
			</div>

			<div>
				<label>
					Last Name
					<input value={lastName} onChange={(e) => setLastName(e.target.value)} required />
				</label>
			</div>

			<div>
				<label>
					Student ID
					<input value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
				</label>
			</div>

			<button type='submit' disabled={loading}>
				{loading ? 'Submitting...' : 'Create Account'}
			</button>

			{error && <p style={{ color: 'red' }}>{error}</p>}
		</form>
	);
}
