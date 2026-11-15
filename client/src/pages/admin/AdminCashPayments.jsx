import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect, useState } from 'react';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CircularProgress from '@mui/material/CircularProgress';

// ── Detail / Edit Panel ───────────────────────────────────────────────────────

function DetailPanel({ member, token, onClose, onSaved }) {
    const [form, setForm] = useState({ ...member });
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);
    const [saved, setSaved] = useState(false);
    const [promoteModal, setPromoteModal] = useState(false); // pending role value when modal is open

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

    return (
        <aside className='flex flex-col h-full border-l border-gray-200 bg-white'>
            <header className='flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0'>
                <div>
                    <h2 className='font-bold text-gray-900'>{member.firstName} {member.lastName}</h2>
                    <p className='text-xs text-gray-400 mt-0.5'>{member.email}</p>
                </div>
                <button onClick={onClose} className='text-gray-400 hover:text-gray-700 text-xl leading-none'>&times;</button>
            </header>
            <div className='flex-1 overflow-y-auto px-5 py-4 space-y-4'>
                <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-800'>
                    💵 <strong>Cash Payment Profile:</strong> Price to collect is <strong>${Number(member.totalPrice || 0).toFixed(2)}</strong>.
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xs font-medium text-gray-400 uppercase tracking-wide'>First Name</label>
                        <input
                            type='text'
                            value={form.firstName ?? ''}
                            onChange={(e) => set('firstName', e.target.value)}
                            className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary w-full'
                        ></input>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xs font-medium text-gray-400 uppercase tracking-wide'>Last Name</label>
                        <input
                            type='text'
                            value={form.lastName ?? ''}
                            onChange={(e) => set('lastName', e.target.value)}
                            className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary w-full'
                        ></input>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xs font-medium text-gray-400 uppercase tracking-wide'>Student ID</label>
                        <input
                            type='text'
                            value={form.studentId ?? ''}
                            onChange={(e) => set('studentId', e.target.value)}
                            className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary w-full'
                        ></input>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xs font-medium text-gray-400 uppercase tracking-wide'>Amount ($)</label>
                        <input
                            type='text'
                            value={form.totalPrice ?? ''}
                            onChange={(e) => set('totalPrice', e.target.value)}
                            className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary w-full'
                        ></input>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xs font-medium text-gray-400 uppercase tracking-wide'>Has Paid Cash</label>
                        <select
                            value={form.hasPayed ? 'true' : 'false'}
                            onChange={(e) => {
                                const val = e.target.value === 'true';
                                set('hasPayed', val);
                                set('paymentStatus', val ? 'paid_cash' : 'unpaid');
                            }}
                            className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white w-full'
                        >
                            <option value='true'>Yes (Paid)</option>
                            <option value='false'>No (Unpaid)</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xs font-medium text-gray-400 uppercase tracking-wide'>Membership Type</label>
                        <select
                            value={form.membershipType ?? 'full'}
                            onChange={(e) => set('membershipType', e.target.value)}
                            className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white w-full'
                        >
                            <option value='full'>Full Year</option>
                            <option value='half'>Half Term</option>
                        </select>
                    </div>
                </div>
                <div className='text-xs text-gray-400 space-y-1 pt-2'>
                    <p>Academic Year: <span className='text-gray-600'>{member.academicYear}</span></p>
                    <p>Registered: <span className='text-gray-600'>{new Date(member.createdAt).toLocaleString()}</span></p>
                </div>
            </div>
            <footer className='px-5 py-4 border-t border-gray-100 shrink-0 flex items-center justify-end gap-3'>
                {error && <p className='text-red-500 text-sm'>{error}</p>}
                {saved && <p className='text-green-600 text-sm'>Saved ✓</p>}
                <button
                    onClick={onClose}
                    disabled={saving}
                    className='px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50'
                >
                    Close
                </button>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className='px-4 py-2 text-sm text-white bg-primary rounded-lg hover:opacity-90 disabled:opacity-50'
                >
                    {saving ? 'Saving...' : 'Save'}
                </button>
            </footer>
        </aside>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function AdminCashPayments({ token }) {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selected, setSelected] = useState(null);
    const [updatingId, setUpdatingId] = useState(null);
    const getCurrentAcademicYear = () => {
        const now = new Date();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();
        const startYear = month >= 6 ? year : year - 1;
        return `${startYear}-${startYear + 1}`;
    };
    const [search, setSearch] = useState('');
    const [filterYear, setFilterYear] = useState(getCurrentAcademicYear);
    const [filterPaidState, setFilterPaidState] = useState(''); // '' (all), 'paid', 'unpaid'
    const [filterType, setFilterType] = useState('');
    const fetchMembers = async () => {
        setLoading(true);
        setError(null);
        try {
            const params = new URLSearchParams();
            if (filterYear) params.set('academicYear', filterYear);
            if (filterType) params.set('membershipType', filterType);
            if (search) params.set('search', search);
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/members?${params}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!res.ok) throw new Error('Failed to fetch members');
            const data = await res.json();
            // Filter only cash payment members
            const cashMembers = data.filter((m) => m.paymentMethod === 'cash');
            setMembers(cashMembers);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchMembers();
    }, [filterYear, filterType]);
    useEffect(() => {
        const t = setTimeout(() => fetchMembers(), 400);
        return () => clearTimeout(t);
    }, [search]);
    // ── Instant Toggle for Checkbox ───────────────────────────────────────────
    const handleTogglePaid = async (member, e) => {
        e.stopPropagation();
        const nextPaid = !member.hasPayed;
        const nextStatus = nextPaid ? 'paid_cash' : 'unpaid';
        // Optimistic update
        const updatedMember = { ...member, hasPayed: nextPaid, paymentStatus: nextStatus };
        setMembers((prev) => prev.map((m) => (m.id === member.id ? updatedMember : m)));
        if (selected?.id === member.id) setSelected(updatedMember);
        setUpdatingId(member.id);
        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/members/${member.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    hasPayed: nextPaid,
                    paymentStatus: nextStatus,
                }),
            });
            if (!res.ok) {
                throw new Error('Failed to update payment status');
            }
        } catch (err) {
            // Rollback on failure
            setMembers((prev) => prev.map((m) => (m.id === member.id ? member : m)));
            if (selected?.id === member.id) setSelected(member);
            alert(`Error updating payment: ${err.message}`);
        } finally {
            setUpdatingId(null);
        }
    };
    const handleSaved = (updated) => {
        setMembers((prev) => prev.map((m) => (m.id === updated.id ? updated : m)));
        setSelected(updated);
    };
    // Client-side status filtering (Paid vs Unpaid)
    const displayedMembers = members.filter((m) => {
        if (filterPaidState === 'paid') return m.hasPayed === true;
        if (filterPaidState === 'unpaid') return m.hasPayed === false;
        return true;
    });
    // Quick Stats Calculation
    const totalCashRegistrations = members.length;
    const unpaidCount = members.filter((m) => !m.hasPayed).length;
    const paidCount = members.filter((m) => m.hasPayed).length;
    const totalCollected = members
        .filter((m) => m.hasPayed)
        .reduce((sum, m) => sum + Number(m.totalPrice || 0), 0);
    return (
        <main className='flex h-full overflow-hidden'>
            {/* Left — table */}
            <section className='flex flex-col flex-1 min-w-0 overflow-hidden p-6'>
                {/* Header */}
                <header className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 shrink-0'>
                    <div>
                        <h1 className='text-xl font-bold text-gray-900'>Cash Payments</h1>
                        <p className='text-gray-500 text-sm mt-0.5'>
                            {displayedMembers.length} record{displayedMembers.length !== 1 ? 's' : ''}
                        </p>
                    </div>
                    {/* Stats Cards */}
                    <div className='flex gap-2 text-xs'>
                        <div className='bg-red-50 border border-red-100 rounded-lg px-3 py-2 flex items-center gap-2'>
                            <HourglassEmptyIcon fontSize='small' className='text-red-500' />
                            <div>
                                <div className='text-red-500 font-bold'>{unpaidCount} Pending</div>
                                <div className='text-gray-400'>Cash to collect</div>
                            </div>
                        </div>
                        <div className='bg-green-50 border border-green-100 rounded-lg px-3 py-2 flex items-center gap-2'>
                            <CheckCircleIcon fontSize='small' className='text-green-500' />
                            <div>
                                <div className='text-green-600 font-bold'>{paidCount} Received</div>
                                <div className='text-gray-400'>${totalCollected.toFixed(2)} collected</div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Filter bar */}
                <div className='flex flex-wrap gap-2 mb-4 shrink-0'>
                    <input
                        type='text'
                        placeholder='Search name, email, student ID...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary w-56'
                    ></input>
                    <select
                        value={filterYear}
                        onChange={(e) => setFilterYear(e.target.value)}
                        className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white'
                    >
                        <option value=''>All Years</option>
                        {Array.from({ length: 3 }, (_, i) => {
                            const now = new Date();
                            const month = now.getMonth() + 1;
                            const base = (month >= 6 ? now.getFullYear() : now.getFullYear() - 1) - i;
                            const label = `${base}-${base + 1}`;
                            return <option key={label} value={label}>{label}</option>;
                        })}
                    </select>
                    <select
                        value={filterPaidState}
                        onChange={(e) => setFilterPaidState(e.target.value)}
                        className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white'
                    >
                        <option value=''>All Payment Statuses</option>
                        <option value='unpaid'>Pending / Unpaid Only</option>
                        <option value='paid'>Paid Only</option>
                    </select>
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white'
                    >
                        <option value=''>All Membership Types</option>
                        <option value='full'>Full Year</option>
                        <option value='half'>Half Term</option>
                    </select>
                </div>
                {/* Table */}
                {loading && <p className='text-gray-500 text-sm'>Loading cash payment records...</p>}
                {error && <p className='text-red-500 text-sm'>{error}</p>}
                {!loading && !error && (
                    <div className='overflow-auto rounded-xl border border-gray-200 flex-1 bg-white'>
                        <table className='w-full text-sm'>
                            <thead className='bg-gray-50 text-gray-500 text-xs uppercase tracking-wide sticky top-0'>
                                <tr>
                                    <th className='px-4 py-3 text-center w-24'>Paid?</th>
                                    <th className='px-4 py-3 text-left'>Name</th>
                                    <th className='px-4 py-3 text-left'>Student ID</th>
                                    <th className='px-4 py-3 text-left'>Email</th>
                                    <th className='px-4 py-3 text-left'>Amount</th>
                                    <th className='px-4 py-3 text-left'>Type</th>
                                    <th className='px-4 py-3 text-left'>Status</th>
                                    <th className='px-4 py-3 text-left'>Registered</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-100'>
                                {displayedMembers.length === 0 && (
                                    <tr>
                                        <td colSpan={8} className='px-4 py-8 text-center text-gray-400'>
                                            No cash payment records found
                                        </td>
                                    </tr>
                                )}
                                {displayedMembers.map((m) => (
                                    <tr
                                        key={m.id}
                                        onClick={() => setSelected(m)}
                                        className={`cursor-pointer transition-colors ${selected?.id === m.id
                                                ? 'bg-primary/5 border-l-2 border-primary'
                                                : m.hasPayed
                                                    ? 'hover:bg-gray-50'
                                                    : 'bg-amber-50/20 hover:bg-amber-50/40'
                                            }`}
                                    >
                                        {/* Tick Box Column */}
                                        <td
                                            className='px-4 py-3 text-center'
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {updatingId === m.id ? (
                                                <CircularProgress size={18} className='text-primary' />
                                            ) : (
                                                <input
                                                    type='checkbox'
                                                    checked={m.hasPayed}
                                                    onChange={(e) => handleTogglePaid(m, e)}
                                                    className='w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer accent-primary'
                                                    title={m.hasPayed ? 'Mark as Unpaid' : 'Mark as Paid'}
                                                ></input>
                                            )}
                                        </td>
                                        <td className='px-4 py-3 font-medium text-gray-900'>
                                            {m.firstName} {m.lastName}
                                        </td>
                                        <td className='px-4 py-3 text-gray-600 font-mono text-xs'>
                                            {m.studentId}
                                        </td>
                                        <td className='px-4 py-3 text-gray-500'>{m.email}</td>
                                        <td className='px-4 py-3 font-semibold text-gray-800'>
                                            ${Number(m.totalPrice || 0).toFixed(2)}
                                        </td>
                                        <td className='px-4 py-3 text-gray-500 capitalize'>
                                            {m.membershipType === 'full' ? 'Full Year' : 'Half Term'}
                                        </td>
                                        <td className='px-4 py-3'>
                                            <span
                                                className={`text-xs font-medium px-2 py-0.5 rounded-full ${m.hasPayed
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-yellow-100 text-yellow-800 font-semibold'
                                                    }`}
                                            >
                                                {m.hasPayed ? 'Paid (Cash)' : 'Pending Cash'}
                                            </span>
                                        </td>
                                        <td className='px-4 py-3 text-gray-400 text-xs whitespace-nowrap'>
                                            {new Date(m.createdAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
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
        </main>
    );
}