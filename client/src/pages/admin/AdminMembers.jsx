import { useEffect, useState } from 'react';
import supabase from 'libs/supabaseClient';

const PAYMENT_STATUSES = ['unpaid', 'paid_card', 'paid_cash', 'paid_existing_member', 'refunded'];
const MEMBERSHIP_TYPES = ['full', 'half'];
const ROLES = ['member', 'admin'];
const PAYMENT_METHODS = ['card', 'cash', 'payed'];

// ── Edit Modal ───────────────────────────────────────────────────────────────

function EditModal({ member, onClose, onSaved, token }) {
	const [form, setForm] = useState({ ...member });
	const [saving, setSaving] = useState(false);
	const [error, setError] = useState(null);

	const set = (field, value) => setForm((f) => ({ ...f, [field]: value }));

	const handleSave = async () => {
		setSaving(true);
		setError(null);
		try {
			const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/members/${member.id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					firstName: form.firstName,
					lastName: form.lastName,
					email: form.email,
					studentId: form.studentId,
					faculty: form.faculty,
					yearOfStudy: form.yearOfStudy,
					membershipType: form.membershipType,
					recommendation: form.recommendation,
					role: form.role,
					paymentMethod: form.paymentMethod,
					hasPayed: form.hasPayed,
					paymentStatus: form.paymentStatus,
					totalPrice: form.totalPrice,
				}),
			});
			if (!res.ok) {
				const body = await res.json();
				throw new Error(body.error ?? 'Failed to save');
			}
			const updated = await res.json();
			onSaved(updated);
			onClose();
		} catch (e) {
			setError(e.message);
		} finally {
			setSaving(false);
		}
	};

	const Field = ({ label, children }) => (
		<div className='flex flex-col gap-1'>
			<label className='text-xs font-medium text-gray-500 uppercase tracking-wide'>{label}</label>
			{children}
		</div>
	);

	const Input = ({ field, type = 'text' }) => (
		<input
			type={type}
			value={form[field] ?? ''}
			onChange={(e) => set(field, e.target.value)}
			className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary'
		/>
	);

	const Select = ({ field, options }) => (
		<select
			value={form[field] ?? ''}
			onChange={(e) => set(field, e.target.value)}
			className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white'
		>
			{options.map((o) => (
				<option key={o} value={o}>{o}</option>
			))}
		</select>
	);

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4'>
			<div className='bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col'>
				{/* Header */}
				<div className='flex items-center justify-between px-6 py-4 border-b border-gray-100'>
					<h2 className='font-bold text-gray-900'>Edit Member</h2>
					<button onClick={onClose} className='text-gray-400 hover:text-gray-700 text-xl leading-none'>&times;</button>
				</div>

				{/* Body */}
				<div className='flex-1 overflow-y-auto px-6 py-5 grid grid-cols-2 gap-4'>
					<Field label='First Name'><Input field='firstName' /></Field>
					<Field label='Last Name'><Input field='lastName' /></Field>
					<Field label='Email'><Input field='email' /></Field>
					<Field label='Student ID'><Input field='studentId' /></Field>
					<Field label='Faculty'><Input field='faculty' /></Field>
					<Field label='Year of Study'><Input field='yearOfStudy' /></Field>
					<Field label='Membership Type'><Select field='membershipType' options={MEMBERSHIP_TYPES} /></Field>
					<Field label='Role'><Select field='role' options={ROLES} /></Field>
					<Field label='Payment Method'><Select field='paymentMethod' options={PAYMENT_METHODS} /></Field>
					<Field label='Payment Status'><Select field='paymentStatus' options={PAYMENT_STATUSES} /></Field>
					<Field label='Has Paid'>
						<select
							value={form.hasPayed ? 'true' : 'false'}
							onChange={(e) => set('hasPayed', e.target.value === 'true')}
							className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white'
						>
							<option value='true'>Yes</option>
							<option value='false'>No</option>
						</select>
					</Field>
					<Field label='Total Price'><Input field='totalPrice' /></Field>
					<div className='col-span-2'>
						<Field label='Recommendation'>
							<textarea
								value={form.recommendation ?? ''}
								onChange={(e) => set('recommendation', e.target.value)}
								rows={3}
								className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none w-full'
							/>
						</Field>
					</div>
				</div>

				{/* Footer */}
				<div className='px-6 py-4 border-t border-gray-100 flex items-center justify-between'>
					{error && <p className='text-red-500 text-sm'>{error}</p>}
					{!error && <div />}
					<div className='flex gap-2'>
						<button onClick={onClose} className='px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50'>
							Cancel
						</button>
						<button
							onClick={handleSave}
							disabled={saving}
							className='px-4 py-2 text-sm text-white bg-primary rounded-lg hover:opacity-90 disabled:opacity-50'
						>
							{saving ? 'Saving...' : 'Save'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

// ── Status Badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }) {
	const colours = {
		unpaid: 'bg-red-100 text-red-700',
		paid_card: 'bg-green-100 text-green-700',
		paid_cash: 'bg-green-100 text-green-700',
		paid_existing_member: 'bg-blue-100 text-blue-700',
		refunded: 'bg-gray-100 text-gray-600',
	};
	return (
		<span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colours[status] ?? 'bg-gray-100 text-gray-600'}`}>
			{status}
		</span>
	);
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function AdminMembers({ token }) {
	const [members, setMembers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [editing, setEditing] = useState(null); // member being edited

	// Filters
	const [search, setSearch] = useState('');
	const [filterYear, setFilterYear] = useState('');
	const [filterStatus, setFilterStatus] = useState('');
	const [filterType, setFilterType] = useState('');

	const fetchMembers = async () => {
		setLoading(true);
		setError(null);
		try {
			const params = new URLSearchParams();
			if (filterYear) params.set('academicYear', filterYear);
			if (filterStatus) params.set('paymentStatus', filterStatus);
			if (filterType) params.set('membershipType', filterType);
			if (search) params.set('search', search);

			const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/members?${params}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			if (!res.ok) throw new Error('Failed to fetch members');
			setMembers(await res.json());
		} catch (e) {
			setError(e.message);
		} finally {
			setLoading(false);
		}
	};

	// Fetch on mount and whenever filters change
	useEffect(() => {
		fetchMembers();
	}, [filterYear, filterStatus, filterType]);

	// Search is debounced separately so we don't fire on every keystroke
	useEffect(() => {
		const t = setTimeout(() => fetchMembers(), 400);
		return () => clearTimeout(t);
	}, [search]);

	const handleSaved = (updated) => {
		setMembers((prev) => prev.map((m) => (m.id === updated.id ? updated : m)));
	};

	return (
		<div className='p-6'>
			<div className='mb-6'>
				<h1 className='text-xl font-bold text-gray-900'>Members</h1>
				<p className='text-gray-500 text-sm mt-1'>{members.length} result{members.length !== 1 ? 's' : ''}</p>
			</div>

			{/* Filter bar */}
			<div className='flex flex-wrap gap-3 mb-5'>
				<input
					type='text'
					placeholder='Search name, email, student ID...'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary w-64'
				/>
				<select
					value={filterYear}
					onChange={(e) => setFilterYear(e.target.value)}
					className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white'
				>
					<option value=''>All Years</option>
					<option value='2026-2027'>2026-2027</option>
					<option value='2025-2026'>2025-2026</option>
					<option value='2024-2025'>2024-2025</option>
				</select>
				<select
					value={filterStatus}
					onChange={(e) => setFilterStatus(e.target.value)}
					className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white'
				>
					<option value=''>All Statuses</option>
					{PAYMENT_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
				</select>
				<select
					value={filterType}
					onChange={(e) => setFilterType(e.target.value)}
					className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white'
				>
					<option value=''>All Types</option>
					{MEMBERSHIP_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
				</select>
			</div>

			{/* Table */}
			{loading && <p className='text-gray-500 text-sm'>Loading...</p>}
			{error && <p className='text-red-500 text-sm'>{error}</p>}

			{!loading && !error && (
				<div className='overflow-x-auto rounded-xl border border-gray-200'>
					<table className='w-full text-sm'>
						<thead className='bg-gray-50 text-gray-500 text-xs uppercase tracking-wide'>
							<tr>
								<th className='px-4 py-3 text-left'>Name</th>
								<th className='px-4 py-3 text-left'>Email</th>
								<th className='px-4 py-3 text-left'>Student ID</th>
								<th className='px-4 py-3 text-left'>Faculty</th>
								<th className='px-4 py-3 text-left'>Year</th>
								<th className='px-4 py-3 text-left'>Type</th>
								<th className='px-4 py-3 text-left'>Method</th>
								<th className='px-4 py-3 text-left'>Status</th>
								<th className='px-4 py-3 text-left'>Paid</th>
								<th className='px-4 py-3 text-left'>Price</th>
								<th className='px-4 py-3 text-left'>Role</th>
								<th className='px-4 py-3 text-left'>Acad. Year</th>
								<th className='px-4 py-3 text-left'>Recommendation</th>
								<th className='px-4 py-3 text-left'>Joined</th>
							</tr>
						</thead>
						<tbody className='divide-y divide-gray-100'>
							{members.length === 0 && (
								<tr>
									<td colSpan={12} className='px-4 py-8 text-center text-gray-400'>No members found</td>
								</tr>
							)}
							{members.map((m) => (
								<tr
									key={m.id}
									onClick={() => setEditing(m)}
									className='hover:bg-gray-50 cursor-pointer transition-colors'
								>
									<td className='px-4 py-3 font-medium text-gray-900'>{m.firstName} {m.lastName}</td>
									<td className='px-4 py-3 text-gray-600'>{m.email}</td>
									<td className='px-4 py-3 text-gray-600'>{m.studentId}</td>
									<td className='px-4 py-3 text-gray-600'>{m.faculty || '—'}</td>
									<td className='px-4 py-3 text-gray-600'>{m.yearOfStudy}</td>
									<td className='px-4 py-3 text-gray-600 capitalize'>{m.membershipType}</td>
									<td className='px-4 py-3 text-gray-600'>{m.paymentMethod}</td>
									<td className='px-4 py-3'><StatusBadge status={m.paymentStatus} /></td>
									<td className='px-4 py-3'>{m.hasPayed ? '✅' : '❌'}</td>
									<td className='px-4 py-3 text-gray-600'>${m.totalPrice}</td>
									<td className='px-4 py-3 text-gray-600 capitalize'>{m.role}</td>
									<td className='px-4 py-3 text-gray-600'>{m.academicYear}</td>
									<td className='px-4 py-3 text-gray-600 max-w-[200px] truncate'>{m.recommendation || '—'}</td>
									<td className='px-4 py-3 text-gray-600 whitespace-nowrap'>{new Date(m.createdAt).toLocaleDateString()}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}

			{/* Edit modal */}
			{editing && (
				<EditModal
					member={editing}
					token={token}
					onClose={() => setEditing(null)}
					onSaved={handleSaved}
				/>
			)}
		</div>
	);
}
