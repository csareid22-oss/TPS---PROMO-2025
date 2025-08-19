export const API_BASE = (import.meta.env.VITE_API_BASE || '').replace(/\/+$/,'');

export async function callApi(path: string) {
  const url = API_BASE + (path.startsWith('/') ? path : '/' + path);
  const res = await fetch(url);
  const ct = (res.headers.get('content-type') || '').toLowerCase();

  let data: any;
  if (ct.includes('application/json')) {
    data = await res.json();
  } else {
    data = await res.text();
  }

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url} :: ${
      typeof data === 'string' ? data : JSON.stringify(data)
    }`);
  }

  return { url, status: res.status, contentType: ct, data };
}
