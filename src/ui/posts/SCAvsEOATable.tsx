const headers = ['Feature', 'Externally Owned Account (EOA)', 'Smart Contract Account (SCA)']

const rows = [
  ['Controlled by', 'Private key', 'Solidity code (programmable logic)'],
  ['Initiate transactions', 'Yes, directly', 'No — requires an EOA to call its functions'],
  ['Custom logic', 'None', 'Unlimited: access control, multi-sig, limits'],
  ['Gas payment', 'Always pays own gas', 'Can support gasless transactions via a relayer'],
  ['Multi-signature', 'Not supported natively', 'Fully supported'],
  ['Upgradeability', 'Not upgradeable', 'Can use proxy upgrade patterns'],
  ['On-chain state', 'No storage', 'Can store state variables'],
  ['Best for', 'Personal wallets', 'dApp backends, automation, shared custody'],
]

const thStyle: React.CSSProperties = {
  border: '1px solid rgba(99, 102, 241, 0.3)',
  padding: '12px 16px',
  textAlign: 'left',
  fontWeight: 700,
  color: '#a78bfa',
}

const tdStyle: React.CSSProperties = {
  border: '1px solid rgba(99, 102, 241, 0.3)',
  padding: '12px 16px',
  verticalAlign: 'top',
}

const tdHighlightStyle: React.CSSProperties = {
  ...tdStyle,
  color: '#c4b5fd',
  fontWeight: 600,
}

export function SCAvsEOATable() {
  return (
    <div
      style={{
        overflowX: 'auto',
        marginBlock: '24px',
        borderLeft: '4px solid #6366f1',
        background: '#1e1b4b',
        borderRadius: '8px',
        padding: '16px',
      }}
    >
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          color: '#c4b5fd',
        }}
      >
        <thead>
          <tr style={{ background: 'rgba(99, 102, 241, 0.2)' }}>
            {headers.map((h) => (
              <th key={h} style={thStyle}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([feature, eoa, sca], i) => (
            <tr
              key={feature}
              style={i % 2 === 0 ? {} : { background: 'rgba(99, 102, 241, 0.05)' }}
            >
              <td style={tdHighlightStyle}>{feature}</td>
              <td style={tdStyle}>{eoa}</td>
              <td style={tdStyle}>{sca}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
