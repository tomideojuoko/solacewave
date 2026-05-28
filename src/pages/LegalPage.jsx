import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

/* ── Cookie Banner ── */
function CookieBanner() {
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

/* ── Shared sub-components ── */
function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 44 }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700,
        color: '#4a2810', marginBottom: 14, paddingBottom: 10,
        borderBottom: '1px solid rgba(102,57,22,0.12)',
      }}>{title}</h2>
      {children}
    </div>
  )
}

function Sub({ children }) {
  return (
    <h3 style={{ fontSize: 14, fontWeight: 600, color: '#663916', margin: '18px 0 8px', textTransform: 'uppercase', letterSpacing: 1 }}>
      {children}
    </h3>
  )
}

function P({ children }) {
  return <p style={{ fontSize: 14.5, lineHeight: 1.85, color: '#5a3a20', fontWeight: 300, marginBottom: 12 }}>{children}</p>
}

function Ul({ items }) {
  return (
    <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: 14.5, lineHeight: 1.85, color: '#5a3a20', fontWeight: 300, marginBottom: 6 }}>{item}</li>
      ))}
    </ul>
  )
}

function AlertBox({ children }) {
  return (
    <div style={{ background: 'rgba(74,40,16,0.06)', borderLeft: '4px solid #663916', borderRadius: '0 10px 10px 0', padding: '16px 20px', margin: '20px 0' }}>
      <p style={{ fontSize: 13.5, fontWeight: 500, color: '#4a2810', margin: 0, lineHeight: 1.6 }}>{children}</p>
    </div>
  )
}

function CrisisBox() {
  return (
    <div style={{ background: '#004C60', borderRadius: 14, padding: '24px 28px', margin: '24px 0' }}>
      <h3 style={{ color: '#EED7BF', fontSize: 15, fontWeight: 600, marginBottom: 12 }}>Emergency Resources</h3>
      <ul style={{ paddingLeft: 20 }}>
        {['Emergency Services: 911', 'Crisis Services Canada: 1-833-456-4566 (24/7)', 'Kids Help Phone (under 20): 1-800-668-6868', 'Distress Centre Toronto: 416-408-4357'].map((item, i) => (
          <li key={i} style={{ color: 'rgba(238,215,191,0.9)', fontSize: 13.5, fontWeight: 300, marginBottom: 6 }}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

/* ── Terms Content ── */
function TermsContent() {
  return (
    <div>
      <p style={{ fontSize: 12, color: 'rgba(90,58,32,0.5)', fontWeight: 500, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 48 }}>Last Updated: May 2026</p>

      <Section title="1. About Solace Wave Therapy">
        <P>Solace Wave Therapy is a digital wellness platform operated by 1001588602 Ontario Limited, carrying on business as Solace Wave Therapy ("Solace Wave Therapy", "we", "us", or "our"). We connect clients with culturally competent registered psychotherapists and wellness coaches through our online platform at solacewavetherapy.com.</P>
        <P>By accessing or using our website, booking a session, or engaging with any of our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</P>
        <AlertBox>Solace Wave Therapy is NOT a crisis or emergency service. If you are in immediate danger or experiencing a mental health emergency, please call 911 or contact a crisis line immediately.</AlertBox>
      </Section>

      <Section title="2. Our Services">
        <Sub>Psychotherapy Services</Sub>
        <P>Our registered psychotherapists are licensed with the College of Registered Psychotherapists of Ontario (CRPO) and operate as independent contractors. They are not employees of Solace Wave Therapy. Each therapist maintains their own professional registration and is bound by their own professional and ethical obligations under the Psychotherapy Act, 2007 and the Regulated Health Professions Act, 1991 (RHPA).</P>
        <P>All psychotherapy sessions are delivered virtually via a secure, encrypted, PHIPA-compliant video platform. Sessions are approximately 50 to 60 minutes in length unless otherwise agreed. Sessions will not be conducted via FaceTime, WhatsApp, or any unencrypted platform.</P>
        <Sub>Wellness Coaching Services</Sub>
        <P>Wellness coaching is a non-regulated, non-clinical service focused on personal development, goal setting, mindset, lifestyle improvement, and general wellbeing support. Wellness coaching is not psychotherapy, counselling, or any form of regulated health service. Our coaches do not diagnose, assess, or treat any mental health condition. When a client requires clinical support beyond the scope of coaching, the coach will refer them to appropriate professional resources.</P>
        <Sub>Free Consultation</Sub>
        <P>We offer a free initial consultation to understand your needs and help match you with the right therapist or coach. This consultation is conducted by Solace Wave Therapy directly and does not constitute a therapeutic or coaching relationship.</P>
      </Section>

      <Section title="3. Eligibility">
        <P>To use our services, you must be at least 18 years of age, or have the consent of a parent or legal guardian if you are under 18. By using our services, you represent and warrant that you meet these requirements and that the information you provide to us is accurate and complete.</P>
        <P>Our services are available to clients located in Ontario, Canada, and internationally. Clients located outside Ontario are responsible for ensuring that accessing our services is lawful in their jurisdiction.</P>
      </Section>

      <Section title="4. Informed Consent">
        <P>Before your first psychotherapy session, you will be required to sign an Informed Consent Form. This document explains your rights as a client, the nature of psychotherapy, session fees and cancellation policies, the limits of confidentiality, and emergency protocols. Your consent is voluntary and may be withdrawn at any time.</P>
        <P>If you are booking wellness coaching services, you will receive a coaching agreement that outlines the scope and limitations of the coaching relationship prior to commencing sessions.</P>
      </Section>

      <Section title="5. Session Fees and Payment">
        <P>Session fees are set by Solace Wave Therapy and are provided to you during onboarding and booking. Payment is collected by Solace Wave Therapy prior to or at the time of your session. All fees are in Canadian dollars unless otherwise stated.</P>
        <Sub>Cancellation Policy</Sub>
        <P>Cancellations made with less than 24 hours notice may be subject to a cancellation fee at our discretion. No-shows (failure to attend without notice) may be charged a full or partial session fee. Your appointment time cannot be held if you are more than 15 minutes late without prior notice.</P>
        <Sub>Refunds</Sub>
        <P>Refund requests must be directed to Solace Wave Therapy at billing.solacewavetherapy@gmail.com. Solace Wave Therapy has sole discretion over all refund decisions.</P>
      </Section>

      <Section title="6. Confidentiality">
        <P>Everything you share in a therapy or coaching session is held in strict confidence. Your therapist or coach will not disclose any information about you or your sessions without your written consent, except in the following circumstances required by law:</P>
        <Ul items={[
          'If information is disclosed suggesting a child is in need of protection under the Child, Youth and Family Services Act, 2017',
          'If there is a serious and credible risk that you may harm yourself or another identifiable person',
          'If a court orders the release of records',
          'If required to report the sexual abuse of a client by another regulated health professional under the RHPA',
        ]} />
        <P>Your therapist will discuss any mandatory disclosure with you whenever safely possible before taking action.</P>
      </Section>

      <Section title="7. Your Personal Health Information (PHIPA)">
        <P>Your personal health information is protected under the Personal Health Information Protection Act, 2004 (PHIPA). Your therapist will collect only the information necessary to provide services, store records securely on an encrypted PHIPA-compliant platform, and retain your records for a minimum of 10 years from the date of last service (or 10 years after a minor client turns 18, whichever is later). Your information will never be sold or shared for marketing purposes.</P>
        <P>You have the right to access your personal health information and to request corrections. To make such a request, contact your therapist directly or reach us at solacewavetherapy@gmail.com.</P>
      </Section>

      <Section title="8. Services Involving Minors">
        <P>If the client is under the age of 18, a parent or legal guardian must provide consent for services on the minor's behalf. By providing consent, the parent or guardian acknowledges that therapy with minors involves confidential communication between the therapist and the young person, and that the therapist may use clinical judgment to determine what information is shared with parents or guardians, consistent with the minor's best interests and applicable law.</P>
      </Section>

      <Section title="9. Emergency and Crisis Protocol">
        <AlertBox>Solace Wave Therapy and our therapists and coaches are NOT emergency services. Virtual therapy and coaching are not appropriate for acute crisis intervention.</AlertBox>
        <P>In the event of an emergency during a session, your therapist may contact emergency services on your behalf if there is imminent risk of harm, or end the session and direct you to emergency resources. Wellness coaches will immediately cease coaching and direct clients to emergency services if any crisis situation arises. Coaches do not provide crisis intervention.</P>
        <P>You agree to provide your therapist with a local emergency contact and confirm your physical location at the start of each session if requested.</P>
        <CrisisBox />
      </Section>

      <Section title="10. Your Rights as a Client">
        <P>As a client of Solace Wave Therapy you have the right to:</P>
        <Ul items={[
          'Be treated with dignity, respect, and cultural sensitivity at all times',
          'Ask questions about your therapist or coach\'s qualifications, experience, and approach',
          'Withdraw consent and discontinue services at any time without penalty',
          'Request a referral to another therapist, coach, or external service at any time',
          'Access your personal health information',
          'File a complaint if you are dissatisfied with your care',
        ]} />
        <P>Your therapist is prohibited from engaging in any form of sexual abuse or inappropriate boundary crossing. Any such conduct should be reported immediately to CRPO at crpo.ca or by calling 1-800-373-2776.</P>
      </Section>

      <Section title="11. How to Make a Complaint">
        <P>If you have a concern about your therapist's professional conduct, you may contact Solace Wave Therapy directly at billing.solacewavetherapy@gmail.com, or the College of Registered Psychotherapists of Ontario (CRPO) at crpo.ca or 1-800-373-2776.</P>
        <P>If you have a concern about your personal health information or privacy, you may contact the Information and Privacy Commissioner of Ontario at ipc.on.ca or 1-800-387-0073.</P>
      </Section>

      <Section title="12. Ending the Therapeutic Relationship">
        <P>Either you or your therapist may end the therapeutic relationship at any time. Your therapist will not abandon you without notice and will provide appropriate referrals or transition support to ensure continuity of your care. If your therapist is no longer available through the platform, Solace Wave Therapy will work with you to transition you to another suitable provider.</P>
      </Section>

      <Section title="13. Limitation of Liability">
        <P>Solace Wave Therapy provides a platform connecting clients with independent contractor therapists and coaches. We are not liable for the clinical or coaching decisions of our independent contractors. While we carefully vet all therapists and coaches on our platform, each professional is solely responsible for their own services and professional conduct.</P>
        <P>To the fullest extent permitted by law, Solace Wave Therapy shall not be liable for any indirect, incidental, or consequential damages arising out of or related to your use of our services. Our total liability to you shall not exceed the amount paid by you for the session in question.</P>
      </Section>

      <Section title="14. Governing Law">
        <P>These Terms of Service are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes shall be resolved by arbitration administered by the International Centre for Dispute Resolution Canada (ICDR Canada) in Toronto, Ontario.</P>
      </Section>

      <Section title="15. Changes to These Terms">
        <P>We may update these Terms of Service from time to time. We will notify you of any material changes by updating the "Last Updated" date at the top of this page. Your continued use of our services following any changes constitutes your acceptance of the updated terms.</P>
        <P>Questions about these terms? Contact us at solacewavetherapy@gmail.com.</P>
      </Section>
    </div>
  )
}

/* ── Privacy Content ── */
function PrivacyContent() {
  return (
    <div>
      <p style={{ fontSize: 12, color: 'rgba(90,58,32,0.5)', fontWeight: 500, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 48 }}>Last Updated: May 2026</p>

      <Section title="1. Our Commitment to Your Privacy">
        <P>Solace Wave Therapy (operated by 1001588602 Ontario Limited) is committed to protecting your privacy and the confidentiality of your personal information. This Privacy Policy explains what information we collect, how we use it, and how we protect it in accordance with the Personal Health Information Protection Act, 2004 (PHIPA) and applicable Canadian privacy law.</P>
        <P>By using our services, you agree to the collection and use of information as described in this policy. We never sell your personal information. We never share it for marketing purposes. Full stop.</P>
      </Section>

      <Section title="2. Information We Collect">
        <Sub>Personal Information</Sub>
        <P>We collect only the information necessary to provide and improve our services. This may include your name, email address, phone number, and general location. We do not collect more than we need.</P>
        <Sub>Personal Health Information</Sub>
        <P>In the context of psychotherapy services, your therapist may collect personal health information including session notes, presenting concerns, and relevant background information. This information is collected solely to provide you with appropriate therapeutic care and is governed by PHIPA.</P>
        <Sub>Communication Data</Sub>
        <P>Messages you send through our platform or by email may be stored on our servers in order to provide and improve our services. We use secure, encrypted systems to protect all communications.</P>
        <Sub>Scheduling and Platform Data</Sub>
        <P>We collect scheduling information, session records, and platform usage data to operate our service effectively. This data belongs to Solace Wave Therapy and is used solely for internal operational purposes.</P>
      </Section>

      <Section title="3. How We Use Your Information">
        <P>We use your personal information for the following purposes only:</P>
        <Ul items={[
          'To provide and maintain our services, including matching you with the right therapist or coach',
          'To manage your account and bookings',
          'To contact you by email, phone, or SMS regarding your sessions, appointment reminders, and service updates',
          'To manage your requests and inquiries',
          'To comply with our legal and regulatory obligations under Ontario law',
          'To improve our platform and service quality',
        ]} />
        <P>We will never use your information for advertising, third-party marketing, or any purpose not listed above without your explicit written consent.</P>
      </Section>

      <Section title="4. SMS and Messaging Consent">
        <P>By providing your phone number and engaging with us by SMS, you agree to receive messages from Solace Wave Therapy related to your bookings, session reminders, and service communications. Message and data rates may apply. Message frequency depends on your interactions with us.</P>
        <P>You may opt out at any time by replying STOP to any message. Reply SUPPORT for help. No mobile or messaging consent information will ever be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties under any circumstances.</P>
      </Section>

      <Section title="5. How We Protect Your Information">
        <P>We take the security of your information seriously. All personal health information is stored on secure, encrypted, PHIPA-compliant platforms. Virtual sessions are conducted on encrypted video platforms. We do not conduct sessions via unsecured platforms such as regular FaceTime, WhatsApp, or unencrypted Zoom.</P>
        <P>Our therapists and coaches are contractually required to implement reasonable administrative, technical, and physical safeguards to protect all client information and to report any actual or suspected privacy breach to Solace Wave Therapy within 24 hours of becoming aware of it.</P>
      </Section>

      <Section title="6. Disclosure of Your Information">
        <P>Solace Wave Therapy does not share your personal information with third parties for marketing, promotional, or commercial purposes. Your information is kept confidential and will not be disclosed to any outside organisation except in the following limited circumstances:</P>
        <Ul items={[
          'Where we have obtained your explicit written consent',
          'Where required to enforce our Terms of Service',
          'Where we share information with partners or affiliates who have signed non-disclosure agreements with us, solely to provide you with a specific service',
          'Where required by law, court order, or government authority, including mandatory reporting obligations under Ontario law',
          'Where we believe disclosure is necessary to prevent fraud, protect the safety of any person, or comply with our legal obligations',
          'Where Solace Wave Therapy or its assets are acquired by or merged with another company, in which case your information may be transferred as part of that transaction',
        ]} />
        <P>We may share aggregated, non-identifiable information (such as total session numbers) without notice to you, as this data cannot be linked to any individual.</P>
      </Section>

      <Section title="7. Confidentiality and Mandatory Reporting">
        <P>All information shared in therapy or coaching sessions is held in strict confidence. However, there are circumstances under Ontario law where our therapists are legally required to disclose information without your consent:</P>
        <Ul items={[
          'If information suggests a child is in need of protection under the Child, Youth and Family Services Act, 2017',
          'If there is a serious and credible risk that you or another identifiable person may be harmed',
          'If a court orders the release of records',
          'If required to report the sexual abuse of a client by another regulated health professional under the RHPA',
        ]} />
        <P>Your therapist will discuss any mandatory disclosure with you whenever safely possible before taking action. Wellness coaches are not regulated health professionals and do not hold personal health information, but are bound by strict confidentiality obligations under their coaching agreements.</P>
      </Section>

      <Section title="8. Data Retention">
        <P>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Personal health information collected in the context of psychotherapy services will be retained for a minimum of 10 years from the date of last service, or 10 years after a minor client turns 18, whichever is later, in accordance with CRPO and PHIPA requirements.</P>
        <P>When your information is no longer required, it will be securely destroyed in accordance with our data destruction obligations.</P>
      </Section>

      <Section title="9. International Data Transfers">
        <P>Our wellness coaches are currently based in Nigeria and provide services remotely to clients in Canada. Your personal information may be transferred to and processed in locations outside of your province or country. We take steps to ensure that your data is handled securely and in accordance with this policy, regardless of where it is processed. Our coaches are contractually bound by the same confidentiality and data protection obligations regardless of their location.</P>
      </Section>

      <Section title="10. Cookies and Tracking Technologies">
        <P>Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small text files placed on your device to collect information about your activity on our site. You can control the use of cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our website.</P>
        <P>We do not use cookies to track you for advertising purposes or to share your browsing behaviour with third parties.</P>
      </Section>

      <Section title="11. Your Rights">
        <P>You have the right to access, correct, or request deletion of your personal information at any time. If you have any questions or concerns about how your information is being handled, or wish to make a request, please contact us at solacewavetherapy@gmail.com.</P>
        <P>If you have a concern about your personal health information or privacy that we are unable to resolve, you may contact the Information and Privacy Commissioner of Ontario at ipc.on.ca or 1-800-387-0073.</P>
      </Section>

      <Section title="12. Changes to This Policy">
        <P>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. Any changes will be communicated by updating the "Last Updated" date at the top of this page. Your continued use of our services following any changes constitutes your acceptance of the updated policy.</P>
        <P>Questions about this policy? Contact us at solacewavetherapy@gmail.com.</P>
      </Section>
    </div>
  )
}

/* ── Main Page ── */
export default function LegalPage() {
  const [activeTab, setActiveTab] = useState('terms')

  useEffect(() => {
    document.body.style.transition = 'opacity 0.4s ease'
    document.body.style.opacity = '1'
  }, [])

  const switchTab = (tab) => {
    setActiveTab(tab)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: '#F8F0E8', color: '#2a1a0e', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: '#4a2810', padding: '80px 40px', textAlign: 'center' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(238,215,191,0.7)', fontSize: 14, fontWeight: 500, marginBottom: 32, textDecoration: 'none' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
          Back to main site
        </Link>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 800, color: '#EED7BF', marginBottom: 16 }}>Legal</h1>
        <p style={{ fontSize: 17, color: 'rgba(238,215,191,0.75)', fontWeight: 300, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
          Your rights, our obligations, and how we work together to protect your privacy and wellbeing.
        </p>
      </div>

      {/* Tab nav */}
      <div style={{
        background: '#FCFCFC', borderBottom: '1px solid rgba(102,57,22,0.12)',
        display: 'flex', justifyContent: 'center',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        {[{ id: 'terms', label: 'Terms of Service' }, { id: 'privacy', label: 'Privacy Policy' }].map(tab => (
          <button
            key={tab.id}
            onClick={() => switchTab(tab.id)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600,
              color: activeTab === tab.id ? '#4a2810' : '#5a3a20',
              padding: '20px 40px', letterSpacing: 0.3,
              borderBottom: activeTab === tab.id ? '3px solid #663916' : '3px solid transparent',
              transition: 'all 0.25s ease',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '64px 40px 100px' }}>
        {activeTab === 'terms' ? <TermsContent /> : <PrivacyContent />}
      </div>

      {/* Contact band */}
      <div style={{ background: '#4a2810', padding: '56px 40px', textAlign: 'center' }}>
        <p style={{ fontSize: 15, color: 'rgba(238,215,191,0.8)', fontWeight: 300, lineHeight: 1.7 }}>
          Questions about our legal policies? Contact us at{' '}
          <a href="mailto:solacewavetherapy@gmail.com" style={{ color: '#EED7BF', fontWeight: 500, textDecoration: 'none' }}>solacewavetherapy@gmail.com</a>
          {' '}or{' '}
          <a href="mailto:billing.solacewavetherapy@gmail.com" style={{ color: '#EED7BF', fontWeight: 500, textDecoration: 'none' }}>billing.solacewavetherapy@gmail.com</a>
        </p>
      </div>

      <CookieBanner />
    </div>
  )
}
