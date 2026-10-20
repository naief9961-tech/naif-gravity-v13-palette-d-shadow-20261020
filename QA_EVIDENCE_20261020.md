# NAIF Gravity V13 — Shadow QA Receipt (20 October 2026)

## Scope
Static, independent public GitHub Pages preview. No production deployment, DNS changes, server code, checkout, payment, Guardian, trading bot, recurring design tools, API secrets, analytics or user data captured.

## Completed checks
| Surface | Result | What it covers |
|---|---|---|
| Headless Chromium | **400/400** | 20 settings: 320px, 390px, 844px landscape, 768px and 1440px, each in AR/EN and hybrid/night. Navigation, theme/language switching, synthetic FAIL/PASS, service recommendation, honest x402 no-offer state, responsive horizontal overflow and network requests. |
| macOS WKWebView | **20/20** | Live HTTPS load, AR/EN, RTL, service catalog, 390px overflow, both themes, local simulated call cycle, official link and no checkout. This is **macOS WebKit, not iPhone Safari**. |
| axe-core | **0 automated WCAG violations in 8 settings** | Hybrid/night, AR/EN, 390px and 1440px; WCAG 2A, 2AA and 2.1AA automated rules. This is not a complete accessibility certification. |
| Public service links | **10/10 returned HTTP 200** | Read-only requests to existing NAIF Gravity service pages, not proof of checkout, funding or delivery. |
| Browser-originating cross-site calls | **0 seen in simulated user flows** | Initial assets loaded only from the preview origin. An explicit user click may open the official storefront in a new tab. |

## Honesty rules
- Three-step samples are synthetic. LOCAL FAIL or LOCAL PASS is a check against an embedded illustrative contract, not a remote effect, security attestation or payment success.
- UNKNOWN stays visible for any remote effect.
- Service prices are **dated references** to the public /api/products snapshot retrieved 20 Oct 2026; no purchase availability or price guarantee is made.
- x402 payment category has no invented standalone priced offer.
- Mission Arena and Future Shield remain **Coming Soon** without buy buttons.
- Original NAIF Drift Lens V1.1.2 remains available at the separate shadow site; V13 does not overwrite it.
- Both design variants share content, data and behavior so visual comparison is fair.

## Still outstanding before production
1. User tests actual iPhone Safari and VoiceOver **on V13 itself**, not just older V1.1.2.
2. Five independent participants complete five-second comprehension and problem-to-service tasks in both design variants. No independent study yet.
3. Verify end-to-end authorized production checkout and truthful service eligibility, funding and fulfillment.
4. Obtain owner approval for a separate production release (not granted here).

## Release decision
**GO for isolated design-shadow evaluation; NO-GO for production deployment or claims of commercially proven superiority.**
