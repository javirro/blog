export function AnvilComparisonTable() {
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
          <tr
            style={{
              background: 'rgba(99, 102, 241, 0.2)',
            }}
          >
            <th
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
                textAlign: 'left',
                fontWeight: 700,
                color: '#a78bfa',
              }}
            >
              Feature
            </th>
            <th
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
                textAlign: 'left',
                fontWeight: 700,
                color: '#a78bfa',
              }}
            >
              Anvil
            </th>
            <th
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
                textAlign: 'left',
                fontWeight: 700,
                color: '#a78bfa',
              }}
            >
              Hardhat Network
            </th>
            <th
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
                textAlign: 'left',
                fontWeight: 700,
                color: '#a78bfa',
              }}
            >
              Ganache
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Startup Speed
            </td>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Very Fast
            </td>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Fast
            </td>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Moderate
            </td>
          </tr>
          <tr
            style={{
              background: 'rgba(99, 102, 241, 0.1)',
            }}
          >
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Fork Support
            </td>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Yes
            </td>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Yes
            </td>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Yes
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Language
            </td>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Rust
            </td>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              JavaScript
            </td>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              JavaScript
            </td>
          </tr>
          <tr
            style={{
              background: 'rgba(99, 102, 241, 0.1)',
            }}
          >
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Memory Usage
            </td>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Low
            </td>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Moderate
            </td>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              High
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Foundry Integration
            </td>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Native
            </td>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Via plugin
            </td>
            <td
              style={{
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '12px 16px',
              }}
            >
              Manual
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}