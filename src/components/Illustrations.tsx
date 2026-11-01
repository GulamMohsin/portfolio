/**
 * Simple SVG illustrations (original, drawn for this site).
 * They explain an idea visually and are not real project output.
 */

export function ApiFlowIllustration() {
  return (
    <figure className="card h-full p-6">
      <svg
        viewBox="0 0 520 230"
        role="img"
        aria-label="A client sends a request to an API, the API reads the database and returns a response with a status code."
        className="h-auto w-full"
      >
        <defs>
          <linearGradient id="api-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.25" />
          </linearGradient>
          <marker id="api-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill="#7cb0ff" />
          </marker>
        </defs>

        {[
          { x: 10, label: 'Client', sub: 'Postman / test' },
          { x: 200, label: 'API', sub: 'REST endpoint' },
          { x: 390, label: 'Database', sub: 'stored data' },
        ].map((box) => (
          <g key={box.label}>
            <rect x={box.x} y="70" width="120" height="90" rx="14" fill="url(#api-grad)" stroke="#7cb0ff" strokeOpacity="0.5" />
            <text x={box.x + 60} y="110" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="600">
              {box.label}
            </text>
            <text x={box.x + 60} y="132" textAnchor="middle" fill="#94a3b8" fontSize="11">
              {box.sub}
            </text>
          </g>
        ))}

        <line x1="130" y1="95" x2="198" y2="95" stroke="#7cb0ff" strokeWidth="2" markerEnd="url(#api-arrow)" />
        <line x1="198" y1="138" x2="130" y2="138" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#api-arrow)" />
        <line x1="320" y1="95" x2="388" y2="95" stroke="#7cb0ff" strokeWidth="2" markerEnd="url(#api-arrow)" />
        <line x1="388" y1="138" x2="320" y2="138" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#api-arrow)" />

        <text x="164" y="84" textAnchor="middle" fill="#cbd5e1" fontSize="11">
          request
        </text>
        <text x="164" y="158" textAnchor="middle" fill="#cbd5e1" fontSize="11">
          response
        </text>
        <text x="354" y="84" textAnchor="middle" fill="#cbd5e1" fontSize="11">
          query
        </text>
        <text x="354" y="158" textAnchor="middle" fill="#cbd5e1" fontSize="11">
          data
        </text>

        <text x="260" y="205" textAnchor="middle" fill="#94a3b8" fontSize="12">
          I check the status code, headers and response body at each step
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-xs text-slate-500">Illustration of an API test flow</figcaption>
    </figure>
  );
}

export function DatabaseIllustration() {
  const rows = (items: string[], x: number) =>
    items.map((item, index) => (
      <text key={item} x={x + 14} y={106 + index * 24} fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace">
        {item}
      </text>
    ));

  return (
    <figure className="card p-6">
      <svg
        viewBox="0 0 520 230"
        role="img"
        aria-label="Two database tables, customers and orders, linked by a foreign key from orders to customers."
        className="mx-auto h-auto w-full max-w-2xl"
      >
        <defs>
          <linearGradient id="db-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <rect x="30" y="40" width="190" height="130" rx="12" fill="#0a1022" stroke="#7cb0ff" strokeOpacity="0.5" />
        <rect x="30" y="40" width="190" height="34" rx="12" fill="url(#db-grad)" />
        <text x="125" y="62" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">
          customers
        </text>
        {rows(['customer_id  PK', 'name', 'email'], 30)}

        <rect x="300" y="40" width="190" height="130" rx="12" fill="#0a1022" stroke="#a78bfa" strokeOpacity="0.5" />
        <rect x="300" y="40" width="190" height="34" rx="12" fill="url(#db-grad)" />
        <text x="395" y="62" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">
          orders
        </text>
        {rows(['order_id  PK', 'customer_id  FK', 'amount'], 300)}

        <path d="M300 130 C 260 130, 260 106, 220 106" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="5 4" />
        <circle cx="220" cy="106" r="4" fill="#22d3ee" />
        <circle cx="300" cy="130" r="4" fill="#22d3ee" />

        <text x="260" y="205" textAnchor="middle" fill="#94a3b8" fontSize="12">
          Foreign key: every order must point to a real customer
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-xs text-slate-500">Illustration of a table relationship</figcaption>
    </figure>
  );
}
