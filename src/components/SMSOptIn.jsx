export default function SMSOptIn() {
  return (
    <section className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center space-y-6">
          <h3 className="font-serif text-2xl font-semibold text-brown">SMS Opt-In</h3>

          <div className="space-y-6 text-left">
            {/* Informational Messages */}
            <div className="bg-white/60 rounded-2xl p-6 border border-brown/10">
              <p className="font-semibold text-brown mb-3">Informational Messages</p>
              <p className="text-sm leading-relaxed text-charcoal/75 mb-3">
                If you would like to receive Informational text message communications from Solace Wave Therapy, from <a href="tel:+16479300819" className="font-medium text-terra hover:underline">+1 (647) 930-0819</a>, you can sign up by texting <span className="font-semibold">START</span> to <a href="sms:+16479300819" className="font-medium text-terra hover:underline">+1 (647) 930-0819</a>.
              </p>
              <p className="text-xs leading-relaxed text-charcoal/60">
                Message frequency varies and may include responses to messages you send us, as well as information relevant to your relationship with us. Message and data rates may apply. You can opt-out of messaging at any time by replying <span className="font-semibold">STOP</span>. For assistance, reply <span className="font-semibold">HELP</span>.
              </p>
            </div>

            {/* Marketing Messages */}
            <div className="bg-white/60 rounded-2xl p-6 border border-brown/10">
              <p className="font-semibold text-brown mb-3">Marketing Messages</p>
              <p className="text-sm leading-relaxed text-charcoal/75 mb-3">
                If you would like to receive Marketing text message communications from Solace Wave Therapy, <a href="tel:+16479300819" className="font-medium text-terra hover:underline">+1 (647) 930-0819</a>, you can sign up by texting <span className="font-semibold">START</span> to <a href="sms:+16479300819" className="font-medium text-terra hover:underline">+1 (647) 930-0819</a>.
              </p>
              <p className="text-xs leading-relaxed text-charcoal/60">
                Message frequency varies and may include discount codes, special deals or texts promoting our products/services. Message and data rates may apply. You can opt-out of messaging at any time by replying <span className="font-semibold">STOP</span> or <span className="font-semibold">CANCEL</span>. For assistance, reply <span className="font-semibold">HELP</span>.
              </p>
            </div>

            {/* Privacy Notice */}
            <p className="text-xs text-charcoal/50 text-center">
              Our privacy policy and messaging terms and conditions are available at <a href="/legal" className="text-terra font-medium hover:underline">solacewavetherapy.com/legal</a> for more information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
