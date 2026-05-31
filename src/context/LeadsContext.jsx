import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { scoreLead } from '../data/chatFlow';

const LeadsContext = createContext(null);
const STORAGE_KEY = 'pulseai_leads';

export function LeadsProvider({ children }) {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setLeads(JSON.parse(stored));
    } catch {
      /* ignore */
    }
  }, []);

  const saveLead = useCallback((leadData) => {
    const lead = {
      id: crypto.randomUUID(),
      ...leadData,
      score: scoreLead(leadData.intent, leadData.company),
      createdAt: new Date().toISOString(),
      status: 'new',
    };
    setLeads((prev) => {
      const next = [lead, ...prev];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
    return lead;
  }, []);

  const updateLeadStatus = useCallback((id, status) => {
    setLeads((prev) => {
      const next = prev.map((l) => (l.id === id ? { ...l, status } : l));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const clearLeads = useCallback(() => {
    setLeads([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <LeadsContext.Provider value={{ leads, saveLead, updateLeadStatus, clearLeads }}>
      {children}
    </LeadsContext.Provider>
  );
}

export function useLeads() {
  const ctx = useContext(LeadsContext);
  if (!ctx) throw new Error('useLeads must be used within LeadsProvider');
  return ctx;
}
