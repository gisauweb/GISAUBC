import { useEffect, useState } from 'react';

const PAYMENT_STATUSES = ['unpaid', 'paid_card', 'paid_cash', 'paid_existing_member', 'refunded'];
const MEMBERSHIP_TYPES = ['full', 'half'];
const ROLES = ['member', 'admin'];
const PAYMENT_METHODS = ['card', 'cash', 'payed'];

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

// ── Detail / Edit Panel ───────────────────────────────────────────────────────

function DetailPanel({ member, token, onClose, onSaved }) {
	const [form, setForm] = useState({ ...member });
	const [saving, setSaving] = useState(false);
	const [error, setError] = useState(null);
	const [saved, setSaved] = useState(false);

	// Reset form when a different member is selected
	useEffect(() => {
		setForm({ ...member });
		setError(null);
		setSaved(false);
	}, [member.id]);

	const set = (field, value) => {
		setSaved(false);
		setForm((f) => ({ ...f, [field]: value }));
	};

	const handleSave = async () => {
		setSaving(true);
		setError(null);
		setSaved(false);
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
			setSaved(true);
		} catch (e) {
			setError(e.message);
		} finally {
			setSaving(false);
		}
	};

	const Field = ({ label, children }) => (
		<div className='flex flex-col gap-1'>
			<label className='text-xs font-medium text-gray-400 uppercase tracking-wide'>{label}</label>
			{children}
		</div>
	);

	const Input = ({ field, type = 'text' }) => (
		<input
			type={type}
			value={form[field] ?? ''}
			onChange={(e) => set(field, e.target.value)}
			className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary w-full'
		/>
	);

	const Select = ({ field, options }) => (
		<select
			value={form[field] ?? ''}
			onChange={(e) => set(field, e.target.value)}
			className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white w-full'
		>
			{options.map((o) => <option key={o} value={o}>{o}</option>)}
		</select>
	);

	return (
		<div className='flex flex-col h-full border-l border-gray-200 bg-white'>
			{/* Header */}
			<div className='flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0'>
				<div>
					<h2 className='font-bold text-gray-900'>{member.firstName} {member.lastName}</h2>
					<p className='text-xs text-gray-400 mt-0.5'>{member.email}</p>
				</div>
				<button onClick={onClose} className='text-gray-400 hover:text-gray-700 text-xl leading-none'>&times;</button>
			</div>

			{/* Fields */}
			<div className='flex-1 overflow-y-auto px-5 py-4 space-y-4'>
				<div className='grid grid-cols-2 gap-3'>
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
							className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white w-full'
						>
							<option value='true'>Yes</option>
							<option value='false'>No</option>
						</select>
					</Field>
					<Field label='Total Price'><Input field='totalPrice' /></Field>
				</div>
				<Field label='Recommendation'>
					<textarea
						value={form.recommendation ?? ''}
						onChange={(e) => set('recommendation', e.target.value)}
						rows={4}
						className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none w-full'
					/>
				</Field>
				<div className='text-xs text-gray-400 space-y-1 pt-1'>
					<p>Academic Year: <span className='text-gray-600'>{member.academicYear}</span></p>
					<p>Joined: <span className='text-gray-600'>{new Date(member.createdAt).toLocaleString()}</span></p>
				</div>
			</div>

			{/* Footer */}
			<div className='px-5 py-4 border-t border-gray-100 shrink-0 flex items-center justify-between'>
				{error && <p className='text-red-500 text-sm'>{error}</p>}
				{saved && <p className='text-green-600 text-sm'>Saved ✓</p>}
				{!error && !saved && <div />}
				<button
					onClick={handleSave}
					disabled={saving}
					className='px-4 py-2 text-sm text-white bg-primary rounded-lg hover:opacity-90 disabled:opacity-50'
				>
					{saving ? 'Saving...' : 'Save'}
				</button>
			</div>
		</div>
	);
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function AdminMembers({ token }) {
	const [members, setMembers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selected, setSelected] = useState(null); // member whose panel is open

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

	useEffect(() => { fetchMembers(); }, [filterYear, filterStatus, filterType]);

	useEffect(() => {
		const t = setTimeout(() => fetchMembers(), 400);
		return () => clearTimeout(t);
	}, [search]);

	const handleSaved = (updated) => {
		setMembers((prev) => prev.map((m) => (m.id === updated.id ? updated : m)));
		setSelected(updated); // keep panel in sync
	};

	return (
		<div className='flex h-full overflow-hidden'>
			{/* Left — table */}
			<div className='flex flex-col flex-1 min-w-0 overflow-hidden p-6'>
				{/* Header */}
				<div className='flex items-center justify-between mb-4 shrink-0'>
					<div>
						<h1 className='text-xl font-bold text-gray-900'>Members</h1>
						<p className='text-gray-500 text-sm mt-0.5'>{members.length} result{members.length !== 1 ? 's' : ''}</p>
					</div>
				</div>

				{/* Filter bar */}
				<div className='flex flex-wrap gap-2 mb-4 shrink-0'>
					<input
						type='text'
						placeholder='Search name, email, student ID...'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary w-56'
					/>
					<select value={filterYear} onChange={(e) => setFilterYear(e.target.value)}
						className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white'>
						<option value=''>All Years</option>
						<option value='2026-2027'>2026-2027</option>
						<option value='2025-2026'>2025-2026</option>
						<option value='2024-2025'>2024-2025</option>
					</select>
					<select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
						className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white'>
						<option value=''>All Statuses</option>
						{PAYMENT_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
					</select>
					<select value={filterType} onChange={(e) => setFilterType(e.target.value)}
						className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white'>
						<option value=''>All Types</option>
						{MEMBERSHIP_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
					</select>
				</div>

				{/* Table */}
				{loading && <p className='text-gray-500 text-sm'>Loading...</p>}
				{error && <p className='text-red-500 text-sm'>{error}</p>}

				{!loading && !error && (
					<div className='overflow-auto rounded-xl border border-gray-200 flex-1'>
						<table className='w-full text-sm'>
							<thead className='bg-gray-50 text-gray-500 text-xs uppercase tracking-wide sticky top-0'>
								<tr>
									<th className='px-4 py-3 text-left'>Name</th>
									<th className='px-4 py-3 text-left'>Email</th>
									<th className='px-4 py-3 text-left'>Student ID</th>
									<th className='px-4 py-3 text-left'>Status</th>
									<th className='px-4 py-3 text-left'>Paid</th>
									<th className='px-4 py-3 text-left'>Type</th>
									<th className='px-4 py-3 text-left'>Joined</th>
								</tr>
							</thead>
							<tbody className='divide-y divide-gray-100'>
								{members.length === 0 && (
									<tr>
										<td colSpan={7} className='px-4 py-8 text-center text-gray-400'>No members found</td>
									</tr>
								)}
								{members.map((m) => (
									<tr
										key={m.id}
										onClick={() => setSelected(m)}
										className={`cursor-pointer transition-colors ${selected?.id === m.id ? 'bg-primary/5 border-l-2 border-primary' : 'hover:bg-gray-50'}`}
									>
										<td className='px-4 py-3 font-medium text-gray-900'>{m.firstName} {m.lastName}</td>
										<td className='px-4 py-3 text-gray-500'>{m.email}</td>
										<td className='px-4 py-3 text-gray-500'>{m.studentId}</td>
										<td className='px-4 py-3'><StatusBadge status={m.paymentStatus} /></td>
										<td className='px-4 py-3'>{m.hasPayed ? '✅' : '❌'}</td>
										<td className='px-4 py-3 text-gray-500 capitalize'>{m.membershipType}</td>
										<td className='px-4 py-3 text-gray-500 whitespace-nowrap'>{new Date(m.createdAt).toLocaleDateString()}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>

			{/* Right — detail panel */}
			{selected && (
				<div className='w-96 shrink-0 overflow-hidden flex flex-col'>
					<DetailPanel
						member={selected}
						token={token}
						onClose={() => setSelected(null)}
						onSaved={handleSaved}
					/>
				</div>
			)}
		</div>
	);
}
