import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { callApi, API_BASE } from './api';

function App() {
  const [message, setMessage] = useState('Ready.');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function checkApi() {
    setLoading(true);
    setMessage('Checking API…');
    setData(null);
    try {
      const res = await callApi('/');
      setData(res.data);
      setMessage('API OK ✅');
    } catch (err: any) {
      setMessage('API request failed ❌ ' + (err?.message || ''));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 16, lineHeight: 1.5 }}>
      <h1>TPS Frontend ↔ Backend</h1>
      <p style={{ opacity: 0.8 }}>API base: <code>{API_BASE || '(not set)'}</code></p>

      <button
        onClick={checkApi}
        disabled={loading}
        style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #333', background: loading ? '#ddd' : '#f5f5f5' }}
      >
        {loading ? 'Checking…' : 'Check API'}
      </button>

      <h2 style={{ marginTop: 20 }}>{message}</h2>

      {data !== null && (
        <pre style={{ background: '#111', color: '#0f0', padding: 16, borderRadius: 12, marginTop: 16, overflowX: 'auto' }}>
{typeof data === 'string' ? data : JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
