import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Mail, Building2, Target, Clock } from 'lucide-react';
import { useLeads } from '../../context/LeadsContext';
import './Dashboard.css';

function ScoreBadge({ score }) {
  const color = score >= 80 ? '#28c840' : score >= 60 ? '#f48915' : '#9c9c9c';
  return (
    <span className="score-badge" style={{ background: `${color}22`, color, borderColor: `${color}44` }}>
      {score}
    </span>
  );
}

export default function Dashboard() {
  const { leads, updateLeadStatus, clearLeads } = useLeads();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} /> Back to Site
        </Link>
        <div>
          <h1>Leads Dashboard</h1>
          <p>Captured leads from the AI chatbot (stored in localStorage for demo)</p>
        </div>
        {leads.length > 0 && (
          <button className="clear-btn" onClick={clearLeads}>
            <Trash2 size={16} /> Clear All
          </button>
        )}
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <span className="stat-value">{leads.length}</span>
          <span className="stat-label">Total Leads</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{leads.filter((l) => l.status === 'new').length}</span>
          <span className="stat-label">New</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">
            {leads.length ? Math.round(leads.reduce((s, l) => s + l.score, 0) / leads.length) : 0}
          </span>
          <span className="stat-label">Avg Score</span>
        </div>
      </div>

      {leads.length === 0 ? (
        <div className="empty-state">
          <p>No leads captured yet.</p>
          <Link to="/">Go back and try the chat widget →</Link>
        </div>
      ) : (
        <div className="leads-table-wrap">
          <table className="leads-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Intent</th>
                <th>Score</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td><strong>{lead.name}</strong></td>
                  <td>
                    <span className="cell-with-icon"><Mail size={14} />{lead.email}</span>
                  </td>
                  <td>
                    {lead.company ? (
                      <span className="cell-with-icon"><Building2 size={14} />{lead.company}</span>
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
                      onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
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
        </div>
      )}
    </div>
  );
}
