import { useState, useEffect } from 'react'

function Toggle({ checked, onChange }) {
  return (
    <div style={{ flexShrink: 0, paddingTop: 2 }}>
      <div
        onClick={() => onChange(!checked)}
        style={{
          width: 44, height: 24, borderRadius: 100, cursor: 'pointer',
          background: checked ? '#663916' : 'rgba(102,57,22,0.15)',
          position: 'relative', transition: 'background 0.25s ease',
        }}
      >
        <div style={{
          position: 'absolute', width: 18, height: 18,
          left: checked ? 23 : 3, top: 3,
          background: 'white', borderRadius: '50%',
          transition: 'left 0.25s ease',
          boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
        }} />
      </div>
    </div>
  )
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [ads, setAds] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('swt_cookie_consent')) setVisible(true)
  }, [])

  const hide = () => setVisible(false)

  const acceptAll = () => {
    localStorage.setItem('swt_cookie_consent', JSON.stringify({ necessary: true, analytics: true, ads: true }))
    hide()
  }

  const declineAll = () => {
    localStorage.setItem('swt_cookie_consent', JSON.stringify({ necessary: true, analytics: false, ads: false }))
    hide()
  }

  const openModal = () => {
    const prefs = JSON.parse(localStorage.getItem('swt_cookie_consent') || '{}')
    setAnalytics(prefs.analytics || false)
    setAds(prefs.ads || false)
    setModalOpen(true)
  }

  const savePrefs = () => {
    localStorage.setItem('swt_cookie_consent', JSON.stringify({ necessary: true, analytics, ads }))
    setModalOpen(false)
    hide()
  }

  if (!visible) return null

  return (
    <>
      {/* Banner */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        background: '#4a2810', color: '#EED7BF',
        padding: '14px 32px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 20, zIndex: 9999,
        flexWrap: 'wrap', boxShadow: '0 -4px 24px rgba(0,0,0,0.2)',
      }}>
        <p style={{ fontSize: 13, color: 'rgba(238,215,191,0.85)', fontWeight: 300, lineHeight: 1.5, margin: 0, flex: 1, minWidth: 240 }}>
          We use cookies to enhance your experience, analyse site performance, and support our Instagram ads.{' '}
          <button onClick={openModal} style={{ color: '#EED7BF', fontWeight: 500, textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', padding: 0 }}>
            Manage preferences
          </button>
          {' '}or choose below.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', flexShrink: 0 }}>
          <button onClick={openModal} style={{ fontFamily: 'inherit', fontSize: 12, fontWeight: 600, padding: '8px 10px', borderRadius: 100, cursor: 'pointer', background: 'transparent', color: 'rgba(238,215,191,0.7)', border: 'none', textDecoration: 'underline' }}>
            Manage Cookies
          </button>
          <button onClick={declineAll} style={{ fontFamily: 'inherit', fontSize: 12.5, fontWeight: 600, padding: '8px 18px', borderRadius: 100, cursor: 'pointer', background: 'transparent', color: '#EED7BF', border: '1.5px solid rgba(238,215,191,0.35)', whiteSpace: 'nowrap' }}>
            Decline All
          </button>
          <button onClick={acceptAll} style={{ fontFamily: 'inherit', fontSize: 12.5, fontWeight: 600, padding: '8px 18px', borderRadius: 100, cursor: 'pointer', background: '#EED7BF', color: '#4a2810', border: 'none', whiteSpace: 'nowrap' }}>
            Accept All
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false) }} style={{
          position: 'fixed', inset: 0, background: 'rgba(42,26,14,0.65)',
          backdropFilter: 'blur(5px)', zIndex: 10000,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
        }}>
          <div style={{ background: '#FCFCFC', borderRadius: 20, padding: '36px 40px 40px', maxWidth: 520, width: '100%', position: 'relative' }}>
            <button onClick={() => setModalOpen(false)} style={{
              position: 'absolute', top: 16, right: 18,
              background: 'rgba(74,40,16,0.08)', border: 'none', width: 32, height: 32,
              borderRadius: '50%', fontSize: 16, cursor: 'pointer', color: '#4a2810',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>✕</button>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#4a2810', marginBottom: 24 }}>Manage Cookies</h2>

            {/* Necessary */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '18px 0', borderTop: '1px solid rgba(102,57,22,0.1)', gap: 20 }}>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: '#4a2810', marginBottom: 4 }}>Necessary</h3>
                <p style={{ fontSize: 12.5, color: '#5a3a20', fontWeight: 300, lineHeight: 1.55, margin: 0 }}>Required for core site functionality, session management, and security. Cannot be disabled.</p>
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#004C60', textTransform: 'uppercase', letterSpacing: 1, whiteSpace: 'nowrap', paddingTop: 2 }}>Always On</span>
            </div>

            {/* Analytics */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '18px 0', borderTop: '1px solid rgba(102,57,22,0.1)', gap: 20 }}>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: '#4a2810', marginBottom: 4 }}>Performance &amp; Analytics</h3>
                <p style={{ fontSize: 12.5, color: '#5a3a20', fontWeight: 300, lineHeight: 1.55, margin: 0 }}>Help us understand how visitors use our site so we can improve the experience for everyone.</p>
              </div>
              <Toggle checked={analytics} onChange={setAnalytics} />
            </div>

            {/* Ads */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '18px 0', borderTop: '1px solid rgba(102,57,22,0.1)', gap: 20 }}>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: '#4a2810', marginBottom: 4 }}>Advertising</h3>
                <p style={{ fontSize: 12.5, color: '#5a3a20', fontWeight: 300, lineHeight: 1.55, margin: 0 }}>Used by Meta (Instagram) to serve relevant ads and measure the effectiveness of our campaigns.</p>
              </div>
              <Toggle checked={ads} onChange={setAds} />
            </div>

            <button onClick={savePrefs} style={{
              marginTop: 24, width: '100%', background: '#4a2810', color: '#EED7BF',
              fontFamily: 'inherit', fontSize: 14, fontWeight: 600, padding: 14,
              borderRadius: 100, border: 'none', cursor: 'pointer',
            }}>
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </>
  )
}
