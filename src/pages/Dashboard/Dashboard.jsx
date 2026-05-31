import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, Target, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLeads } from '../../context/LeadsContext';
import { BRAND } from '../../data/brand';
import { mergeLeads } from '../../data/mockLeads';
import './Dashboard.css';

const PAGE_SIZE = 8;

function ScoreBadge({ score }) {
  const color = score >= 80 ? '#28c840' : score >= 60 ? '#f48915' : '#9c9c9c';
  return (
    <span className="score-badge" style={{ background: `${color}22`, color, borderColor: `${color}44` }}>
      {score}
    </span>
  );
}

export default function Dashboard() {
  const { leads: capturedLeads } = useLeads();
  const [currentPage, setCurrentPage] = useState(1);
  const [statusMap, setStatusMap] = useState({});

  const allLeads = useMemo(() => mergeLeads(capturedLeads), [capturedLeads]);

  const leads = useMemo(
    () => allLeads.map((lead) => ({ ...lead, status: statusMap[lead.id] ?? lead.status })),
    [allLeads, statusMap]
  );

  const totalPages = Math.max(1, Math.ceil(leads.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const pageLeads = leads.slice(start, start + PAGE_SIZE);

  const updateStatus = (id, status) => {
    setStatusMap((prev) => ({ ...prev, [id]: status }));
  };

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const newCount = leads.filter((l) => l.status === 'new').length;
  const avgScore = leads.length
    ? Math.round(leads.reduce((s, l) => s + l.score, 0) / leads.length)
    : 0;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} /> Back to {BRAND.name} {BRAND.suffix}
        </Link>
        <div>
          <h1>Property Inquiries</h1>
          <p>Every chat inquiry captured automatically — score, assign, and follow up with buyers & renters.</p>
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <span className="stat-value">{leads.length}</span>
          <span className="stat-label">Total Inquiries</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{newCount}</span>
          <span className="stat-label">New</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{avgScore}</span>
          <span className="stat-label">Avg Score</span>
        </div>
      </div>

      <div className="leads-table-wrap">
        <table className="leads-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Intent</th>
              <th>Score</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {pageLeads.map((lead) => (
              <tr key={lead.id} className={!lead.isMock ? 'row-captured' : ''}>
                <td>
                  <strong>{lead.name}</strong>
                  {!lead.isMock && <span className="live-badge">Live</span>}
                </td>
                <td>
                  <span className="cell-with-icon"><Mail size={14} />{lead.email}</span>
                </td>
                <td>
                  {lead.location || lead.company ? (
                    <span className="cell-with-icon">
                      <MapPin size={14} />
                      {lead.location || lead.company}
                    </span>
                  ) : (
                    <span className="muted">—</span>
                  )}
                </td>
                <td>
                  <span className="cell-with-icon"><Target size={14} />{lead.intent}</span>
                </td>
                <td><ScoreBadge score={lead.score} /></td>
                <td>
                  <select
                    value={lead.status}
                    onChange={(e) => updateStatus(lead.id, e.target.value)}
                    className="status-select"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="closed">Closed</option>
                  </select>
                </td>
                <td>
                  <span className="cell-with-icon muted">
                    <Clock size={14} />
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <span className="pagination-info">
            Showing {start + 1}–{Math.min(start + PAGE_SIZE, leads.length)} of {leads.length}
          </span>
          <div className="pagination-controls">
            <button
              type="button"
              className="page-btn"
              onClick={() => goToPage(safePage - 1)}
              disabled={safePage <= 1}
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
            </button>
            {pages.map((page) => (
              <button
                key={page}
                type="button"
                className={`page-btn page-num ${page === safePage ? 'active' : ''}`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              className="page-btn"
              onClick={() => goToPage(safePage + 1)}
              disabled={safePage >= totalPages}
              aria-label="Next page"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
