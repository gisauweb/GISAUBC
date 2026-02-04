import supabase from 'libs/supabaseClient';
import { useState } from 'react';

export default function RegisterForm({ onSuccess }) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [studentId, setStudentId] = useState('');

	const [faculty, setFaculty] = useState('');
	const [membershipType, setMembershipType] = useState('full');
	const [yearOfStudy, setYearOfStudy] = useState('');
	const [lookingForward, setLookingForward] = useState('');

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
				body: JSON.stringify({
					firstName,
					lastName,
					studentId,
					faculty,
					membershipType,
					yearOfStudy,
					lookingForward,
				}),
			});

			if (!res.ok) {
				const body = await res.json().catch(() => ({}));
				throw new Error(body.error || 'Registration failed');
			}

			const result = await res.json();
			onSuccess?.(result);
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

			<div>
				<label>
					Faculty
					<input value={faculty} onChange={(e) => setFaculty(e.target.value)} required />
				</label>
			</div>

			<div>
				<label>
					Membership Type
					<select value={membershipType} onChange={(e) => setMembershipType(e.target.value)}>
						<option value='full'>Full</option>
						<option value='half'>Half</option>
					</select>
				</label>
			</div>

			<div>
				<label>
					Year of Study
					<select value={yearOfStudy} onChange={(e) => setYearOfStudy(e.target.value)} required>
						<option value='' disabled>
							Select year
						</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5+'>5+</option>
					</select>
				</label>
			</div>

			<div>
				<label>
					What are you looking forward to?
					<textarea value={lookingForward} onChange={(e) => setLookingForward(e.target.value)} rows={3} />
				</label>
			</div>

			<button type='submit' disabled={loading}>
				{loading ? 'Submitting...' : 'Create Account'}
			</button>

			{error && <p style={{ color: 'red' }}>{error}</p>}
		</form>
	);
}
