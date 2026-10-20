/* NAIF GRAVITY V13 — static, isolated shadow.
   No fetch(), XHR, WebSocket, analytics, payment, account or storage.
   All examples are authored synthetic data only. */
(() => {
"use strict";
const $ = id => document.getElementById(id);
const langState = { lang: "ar", theme: "hybrid", category: "webhook", filter: "all", step: 0, selectedId: null };
const I = {
ar: {
skip:"تجاوز التنقل إلى المحتوى",ribbon:"V13 / تجربة تصميم مستقلة — ليست المتجر المباشر ولا تتصل بالدفع",
navProblems:"حدد مشكلتك",navDemo:"التجربة",navServices:"الخدمات",navComparison:"قارن التصميمين",
heroEyebrow:"هندسة إنقاذ الأنظمة • للإنسان والوكيل",heroTitle1:"حين يتعطّل نظامك،",heroTitle2:"اعرف من أين تبدأ.",
heroLead:"الدفع، الدخول، الربط، والوكلاء الذكيون. اختر ما تعطل، افهم الخطوة التالية، ثم اكتشف الخدمة المناسبة دون غموض.",
heroPrimary:"اختر مشكلتك",heroSecondary:"شاهد مثالًا تفاعليًا",heroDisclaimer:"التجربة ببيانات اصطناعية فقط. لا حساب، لا مفاتيح، ولا دفع هنا.",
heroFact1:"تفسير واضح",heroFact2:"فحص محلي قابل للإعادة",heroFact3:"حدود معلنة",sceneMismatch:"انحراف في العقد",scenePotential:"السبب المحلي",sceneLabel:"أثر بعيد غير مُختبر",
path1:"01 / اختر العطل",path2:"02 / افهم السبب",path3:"03 / اعرف الخدمة",
problemsKicker:"01 / نقطة البداية",problemsTitle:"ما الذي توقّف عندك؟",problemsDesc:"لا تحتاج أن تعرف أسماء البروتوكولات. اختر المشكلة الأقرب إليك، وسنريك مثالًا صغيرًا ومسار الخدمة المناسب.",
paymentTitle:"الدفع لا يكتمل",paymentDesc:"مسار دفع أو x402 غير واضح",authTitle:"الدخول يرفض",authDesc:"مفاتيح وأذونات وواجهات API",webhookTitle:"الربط يتعطّل",webhookDesc:"Webhook وأتمتة وحقول ناقصة",agentTitle:"الوكيل لا يتفاهم",agentDesc:"MCP / A2A وتعارض العقود",selectCategory:"استكشف المسار",goToExample:"افتح المثال",
diagnosticKicker:"02 / شاهد الفرق",diagnosticTitle:"التفسير قبل الوعد.",diagnosticDesc:"تجربة تفاعلية في ثلاث خطوات، بقواعد محلية وعينات مصطنعة. لا تتصل بخادمك ولا تُصلح نظامًا مباشرًا.",
consoleMode:"بدون شبكة",synthetic:"مثال اصطناعي",expectedLabel:"العقد المتوقع",resetDemo:"أعد التجربة",localPrivacy:"تعمل القواعد داخل متصفحك، بلا إرسال بيانات أو مفاتيح API.",
resultHeading:"ما الذي نعرفه؟",remoteUnknownTitle:"الأثر الحقيقي: غير معروف",remoteUnknownDesc:"لم ننفّذ استدعاءً خارجيًا ولا عملية دفع. نجاح المحاكاة لا يثبت إصلاح نظام حقيقي.",nextStepLabel:"الخطوة المناسبة",demoFoot:"هذه تجربة تفسير محلية، وليست شهادة أمن أو نتيجة تسليم.",advancedLab:"مختبر Drift Lens الكامل",
catalogKicker:"03 / من المشكلة إلى الخدمة",catalogTitle:"خدمات واضحة، لا وعود غامضة.",catalogDesc:"منتجات مختارة من الكتالوج العام. الأسعار المعروضة مرجعية من 20 أكتوبر 2026، ولا تمثل تأكيدًا لإتاحة الدفع.",
filterAll:"الكل",filterPayment:"الدفع وx402",filterAuth:"الواجهات والدخول",filterWebhook:"الربط والأتمتة",filterAgent:"الوكلاء",detailKicker:"خدمة مختارة / عرض تجريبي",viewOfficial:"افتح التفاصيل في المتجر الرسمي",externalLinkNote:"ستنتقل إلى المتجر المباشر. لا تبدأ دفعًا اعتمادًا على هذا العرض التجريبي.",
catalogFooter:"لا تعرض النسخة التجريبية شراءً أو حجوزات. تحقق من توافر الخدمة وشروطها في الموقع الرسمي.",allServices:"استعرض الكتالوج العام",comingSoonTitle:"قيد التطوير / لا يمكن الشراء",
compareKicker:"04 / قرار التصميم",compareTitle:"هوية واحدة. تجربتان.",compareDesc:"اختبر بنفسك: أسلوب هجين بعرض تحريري فاتح، أو نسخة داكنة كاملة. المحتوى والسلوك والمنتجات لا تتغيّر.",
hybridTitle:"D / هجين موحّد",hybridDesc:"حد نحاسي، كتالوج حجري",nightTitle:"A / كحلي كامل",nightDesc:"خيار مقارنة المالك فقط",selected:"محدد",compareNoteTitle:"كيف سنختار؟",compareNote:"يجب أن يفهم 4 من 5 مستخدمين مستقلين ما يقدمه المتجر خلال خمس ثوانٍ، ثم يجدون خدمتهم دون مساعدة. لم تُجر هذه الدراسة بعد.",
trustKicker:"لا نبيع وهماً",trustTitle:"نعرف أين تنتهي التجربة.",trustDesc:"المصداقية جزء من التصميم. نفرّق بين نجاح اختبار محلي وبين سلامة نظام فعلي أو معالجة مدفوعات.",officialSite:"الموقع الرسمي",
trustOneTitle:"معروض هنا فعلًا",trustOne:"تصميم متجاوب، قوائم خدمات مختارة، فحص محلي ببيانات اصطناعية، ومقارنة تصميمين.",
trustTwoTitle:"لم نتحقق منه",trustTwo:"سلوك أنظمة العملاء، قبول مدفوعات حقيقية، أو تسليم خدمة عن بُعد.",
trustThreeTitle:"هذه ليست صفحة شراء",trustThree:"لا حسابات، لا أدوات تتبّع، لا مدخلات حساسة، ولا طلبات شبكة من التجربة.",
technicalTitle:"ملاحظات الاختبار التقني وإمكانية الوصول",technicalBody:"النسخة التجريبية الجديدة تحتاج فحص المتصفحات وجهاز آيفون مستقل. نجحت 20/20 فحوص آلية في Drift Lens V1.1.2 السابق، لكن ذلك لا يعتمد V13 تلقائيًا. الفحوص الفنية ليست تسليم خدمة مدفوعة.",
footerNote:"V13 SHADOW · مستقل عن الإنتاج · تصميم قابل للاختبار وليس متجرًا مباشرًا",backToTop:"العودة للأعلى ↑",
selectedCategory:"تم اختيار: {category}. جرّب المثال التالي.",expectedActual:"الاستدعاء قبل التصحيح",correctedActual:"الاستدعاء بعد التصحيح",
stepStart:"اكشف السبب",stepCause:"أظهر التصحيح",stepAgain:"ابدأ من جديد",readyTitle:"جاهز للتجربة",readyDetail:"اضغط «اكشف السبب» لتشاهد تفسير الاختلاف.",
failTitle:"اكتشفنا اختلافًا في المثال",passTitle:"المثال المصحح مطابق محليًا",passDetail:"أعاد الفحص المحلي مقارنة حقول العينة المصححة بالعقد المعلن. هذه النتيجة لا تثبت استجابة خادم حقيقي.",
initialTag:"READY",causeTag:"LOCAL FAIL",passTag:"LOCAL PASS",scenarioPrefix:"مثال",
showService:"اعرض خدمة {service}",viewPayment:"استكشف خدمات الدفع الحالية",
priceLabel:"سعر منشور · مرجعي",priceUnknown:"لا سعر مؤكد",cardView:"عرض التفاصيل",liveDisclaimer:"هذه خدمة منشورة في الفهرس العام. شروط التوفر والدفع تحتاج تحققًا مستقلًا.",
paymentNoCard:"لم نجد منتج دفع x402 مستقلاً بسعر مؤكد في الفهرس العام الحالي.",paymentNoCardDesc:"المثال يشرح فحص بنية بيانات دفع اصطناعية فقط؛ راجع الكتالوج الرسمي أو تواصل عبر قنوات المتجر المتاحة دون إرسال أسرار.",viewFullCatalog:"استعرض الكتالوج العام",catalogSelected:"{n} خدمات مختارة",menuLabel:"فتح القائمة",menuClose:"إغلاق القائمة",langSwitch:"Switch language to English",langSwitchBack:"التبديل إلى العربية"
},
en: {
skip:"Skip to main content",ribbon:"V13 / palette D design preview — separate from the live store, no payments",
navProblems:"Your problem",navDemo:"Live demo",navServices:"Services",navComparison:"Compare designs",
heroEyebrow:"RESCUE ENGINEERING · FOR HUMANS AND AGENTS",heroTitle1:"When systems break,",heroTitle2:"know where to start.",
heroLead:"Payments, access, integrations and AI agents. Find the failure, understand the next step, and discover the right service without the guesswork.",
heroPrimary:"Choose your problem",heroSecondary:"Explore the interactive demo",heroDisclaimer:"Synthetic samples only. No account, keys or payment required.",
heroFact1:"Understand the cause",heroFact2:"Replayable local checks",heroFact3:"Honest boundaries",sceneMismatch:"Contract drift",scenePotential:"Local cause",sceneLabel:"Remote effects unverified",
path1:"01 / Identify",path2:"02 / Understand",path3:"03 / Find the service",
problemsKicker:"01 / START HERE",problemsTitle:"What stopped working?",problemsDesc:"You do not need protocol jargon. Pick the closest problem and we'll show a small example and a relevant service path.",
paymentTitle:"Payment failed",paymentDesc:"Checkout or x402 path uncertainty",authTitle:"Access rejected",authDesc:"API keys, permissions and response shapes",webhookTitle:"Integration broke",webhookDesc:"Webhook mapping, automation and fields",agentTitle:"Agent disconnected",agentDesc:"MCP / A2A contract mismatches",selectCategory:"Explore this path",goToExample:"Open the example",
diagnosticKicker:"02 / SEE THE DIFFERENCE",diagnosticTitle:"Explain before you promise.",diagnosticDesc:"Three interactive steps, with local rules and synthetic fixtures. No connection to your server and no live repairs.",
consoleMode:"No network",synthetic:"Synthetic example",expectedLabel:"Expected contract",resetDemo:"Reset demo",localPrivacy:"Checks run in your browser. No payloads or API keys leave this page.",
resultHeading:"What do we actually know?",remoteUnknownTitle:"Real-world effect: unknown",remoteUnknownDesc:"No remote call or payment was made. A local pass is not proof that your real system is fixed.",nextStepLabel:"Relevant next step",demoFoot:"This is a local explanation demo, not a security certificate or proof of service delivery.",advancedLab:"Open full Drift Lens lab",
catalogKicker:"03 / FROM PROBLEM TO SERVICE",catalogTitle:"Clear scope. No vague promises.",catalogDesc:"Selected services from the public catalog. Prices are reference listings as of Oct 20, 2026, not confirmation that checkout works.",
filterAll:"All",filterPayment:"Payments & x402",filterAuth:"APIs & access",filterWebhook:"Integration & automation",filterAgent:"Agents",detailKicker:"SELECTED SERVICE / DESIGN PREVIEW",viewOfficial:"Open official service details",externalLinkNote:"This opens the live storefront. Do not rely on this preview to authorize payment.",
catalogFooter:"This preview does not offer purchases or bookings. Verify service availability, terms and checkout on the official site.",allServices:"View full public catalog",comingSoonTitle:"IN DEVELOPMENT / NOT FOR PURCHASE",
compareKicker:"04 / DESIGN DECISION",compareTitle:"One identity. Two directions.",compareDesc:"Try the hybrid editorial palette or full dark mode. Content, features, and service information remain unchanged.",
hybridTitle:"D / Refined hybrid",hybridDesc:"Copper chapter line, stone catalog",nightTitle:"A / All dark",nightDesc:"Owner-only comparison",selected:"Selected",compareNoteTitle:"How will we choose?",compareNote:"At least 4 out of 5 independent users must explain the store within five seconds and find a relevant service unaided. This study has not yet happened.",
trustKicker:"NO MAKE-BELIEVE RESULTS",trustTitle:"We know where the demo ends.",trustDesc:"Credibility is part of design. Local simulations are not equivalent to real-world safety, checkout or delivery.",officialSite:"Official website",
trustOneTitle:"What this preview demonstrates",trustOne:"Responsive design, curated service navigation, synthetic local validation and design comparison.",
trustTwoTitle:"What remains unverified",trustTwo:"Real customer systems, live payment acceptance, and remote delivery of purchased services.",
trustThreeTitle:"This is not a checkout page",trustThree:"No accounts, tracking, sensitive inputs or outgoing requests from the demonstration.",
technicalTitle:"Technical QA & accessibility notes",technicalBody:"V13 still needs its own browser and independent device testing. The prior Drift Lens V1.1.2 passed 20/20 on-device self-checks, but that does not automatically certify V13. Technical checks are not customer delivery proof.",
footerNote:"V13 SHADOW · separate from production · testable design, not a live store",backToTop:"Back to top ↑",
selectedCategory:"Selected: {category}. Try the example below.",expectedActual:"Call before correction",correctedActual:"Call after correction",
stepStart:"Find the mismatch",stepCause:"Show correction",stepAgain:"Start again",readyTitle:"Ready to explore",readyDetail:"Select “Find the mismatch” to reveal the locally validated difference.",
failTitle:"Mismatch found in the sample",passTitle:"Corrected example passes locally",passDetail:"The local validator compared the corrected sample to the published synthetic contract. No real remote service was contacted.",
initialTag:"READY",causeTag:"LOCAL FAIL",passTag:"LOCAL PASS",scenarioPrefix:"Scenario",
showService:"View {service}",viewPayment:"Explore payment services",
priceLabel:"Listed price · reference",priceUnknown:"No verified listed price",cardView:"View details",liveDisclaimer:"This service is listed in the public catalog. Payment and fulfillment still need independent verification.",
paymentNoCard:"No separately priced x402 payment product was confirmed in the current public catalog.",paymentNoCardDesc:"This scenario checks a fictional payment-shaped contract only. Consult the official catalog without sharing keys or customer information.",viewFullCatalog:"Browse the public catalog",catalogSelected:"{n} selected",menuLabel:"Open menu",menuClose:"Close menu",langSwitch:"Switch language to English",langSwitchBack:"التبديل إلى العربية"
}
};
const CATEGORIES=["payment","auth","webhook","agent"];
const CASES={
webhook:{
 code:"WEBHOOK / 001", title:{ar:"القيمة وصلت، لكن باسم خاطئ",en:"The value arrived under the wrong field"},description:{ar:"المسار التالي يقرأ amount_cents، بينما العينة أرسلت amount كنص.",en:"The receiving step requires amount_cents, but the sample used a text-valued amount."},
 expected:{amount_cents:"integer",currency:"USD"},before:{amount:"12.50",currency:"usd"},after:{amount_cents:1250,currency:"USD"},
 rules:[{path:"amount_cents",kind:"integer"},{path:"currency",kind:"value",value:"USD"}],
 reason:{ar:"العقد يتطلب amount_cents كعدد صحيح وcurrency بقيمة USD. العينة تفتقد الحقل الأول وتستخدم usd بحروف صغيرة.",en:"The contract requires integer amount_cents and uppercase USD. The sample is missing the first field and sends lowercase usd."},
 next:"webhook-debug-mini",label:{ar:"Webhook Debug Mini",en:"Webhook Debug Mini"}
},
auth:{
 code:"API / 002",title:{ar:"الاستجابة لا تطابق صلاحية الوصول",en:"The API response does not match the access contract"},description:{ar:"عينة اصطناعية تُظهر اختلاف نوع مدة الصلاحية وقيمة permission.",en:"A synthetic fixture shows a type mismatch for expiry and an invalid permission label."},
 expected:{permission:"read",expires_in:"integer"},before:{permission:"READ",expires_in:"300"},after:{permission:"read",expires_in:300},
 rules:[{path:"permission",kind:"value",value:"read"},{path:"expires_in",kind:"integer"}],
 reason:{ar:"permission يجب أن تساوي read حرفيًا، وexpires_in يجب أن تكون عددًا صحيحًا. هذا لا يثبت صحة اعتماد أو مفتاح حقيقي.",en:"permission must equal read exactly, and expires_in must be an integer. This does not verify a real credential or token."},
 next:"api-response-shape-check",label:{ar:"API Response Shape Check",en:"API Response Shape Check"}
},
agent:{
 code:"MCP / 003",title:{ar:"الوكيل استدعى أداة بعقد مختلف",en:"The agent called a tool with different arguments"},description:{ar:"عينة MCP محلية تتطلب amount_cents داخل args وتستقبل amount كنص.",en:"A local MCP sample expects args.amount_cents, but receives a string-valued args.amount."},
 expected:{tool:"create_invoice",args:{amount_cents:"integer"}},before:{tool:"create_invoice",args:{amount:"12.50"}},after:{tool:"create_invoice",args:{amount_cents:1250}},
 rules:[{path:"tool",kind:"value",value:"create_invoice"},{path:"args.amount_cents",kind:"integer"}],
 reason:{ar:"عقد الأداة يتطلب args.amount_cents كعدد صحيح. العينة لم ترسل هذا المسار. سلوك الخادم الحقيقي ما زال UNKNOWN.",en:"The tool contract requires integer args.amount_cents. The sample omitted that path. Actual server behavior remains UNKNOWN."},
 next:"mcp-tool-mini",label:{ar:"MCP Tool Mini",en:"MCP Tool Mini"}
},
payment:{
 code:"x402 / 004",title:{ar:"بيانات دفع تجريبية غير مطابقة",en:"A synthetic payment-shaped payload is invalid"},description:{ar:"مثال شكلي فقط يوضح فحص amount_cents وnetwork؛ لا محفظة ولا معاملة.",en:"A fictional schema checks amount_cents and network. There is no wallet, transaction, or payment."},
 expected:{amount_cents:"integer",network:"base"},before:{amount:"1.50",network:"BASE"},after:{amount_cents:150,network:"base"},
 rules:[{path:"amount_cents",kind:"integer"},{path:"network",kind:"value",value:"base"}],
 reason:{ar:"هذا العقد الاصطناعي يتطلب amount_cents كعدد صحيح وnetwork بقيمة base. لا يمثّل قواعد شبكة دفع حقيقية.",en:"This fictional contract expects integer amount_cents and network set to base. It is not a real payment protocol specification."},
 next:null,label:{ar:"الدفع وx402",en:"Payments & x402"}
}
};
const PRODUCTS=[
{id:"webhook-debug-mini",category:"webhook",name:"Webhook Debug Mini",price:12,ar:"فحص نطاق صغير لمشكلة توصيل Webhook أو توقيعها.",en:"A bounded diagnostic for one webhook delivery or signature issue."},
{id:"automation-rescue",category:"webhook",name:"Automation Rescue · Webhook Mapping",price:19,ar:"مراجعة تعيين الحقول في أتمتة Webhook ضمن نطاق محدد.",en:"A bounded webhook field-mapping repair, subject to real eligibility and payment."},
{id:"automation-mini",category:"webhook",name:"Automation Mini",price:49,ar:"مهمة أتمتة صغيرة حسب وصف الخدمة الحالي.",en:"A scoped small automation task, subject to the official service terms."},
{id:"api-response-shape-check",category:"auth",name:"API Response Shape Check",price:2,ar:"مراجعة شكل استجابة API وحقولها المطلوبة وأنواعها.",en:"Review response fields, required keys and field types."},
{id:"endpoint-health-check",category:"auth",name:"API Endpoint Health Check",price:7,ar:"فحص حالة نقطة API واستجابتها ضمن نطاق مصغّر.",en:"A bounded API endpoint status and response check."},
{id:"api-fixer",category:"auth",name:"NAIF API Fixer",price:79,ar:"خدمة إصلاح API حسب النطاق المُعلن في المتجر.",en:"An API repair service scoped by the official listing."},
{id:"api-integration-mini",category:"auth",name:"API Integration Mini",price:29,ar:"ربط API محدود ضمن وصف وموافقة مسبقة.",en:"A small API integration under a bounded scope."},
{id:"mcp-tool-mini",category:"agent",name:"MCP Tool Mini",price:39,ar:"مهمة مصغّرة لواجهة أداة MCP.",en:"A bounded MCP tool implementation or adjustment."},
{id:"agent-prompt-tooling",category:"agent",name:"AI Agent Prompt + Tooling Tune",price:59,ar:"تحسين محدود لإعداد مطالبة وكيل وأدواته.",en:"A scoped tuning task for agent prompts and tooling."},
{id:"agent-engineering-sprint",category:"agent",name:"NAIF AI Agent Engineering Sprint",price:219,ar:"تنفيذ هندسي محدود لوكيل وفق التفاصيل المنشورة.",en:"Scoped agent engineering based on the official service listing."},
{"id":"data-factory","category":"webhook","name":"NAIF Data Factory","price":115,"ar":"فحص عينة من بنية البيانات وجودتها دون معالجة المجموعة بالكامل.","en":"Schema and quality sample; no full dataset processing"},
{"id":"automation-factory","category":"webhook","name":"NAIF Automation Factory","price":179,"ar":"تخطيط سير عمل مع تجربة محلية محدودة دون تشغيل الإنتاج.","en":"Workflow map and one dry-run; no production execution"},
{"id":"json-normalizer","category":"auth","name":"JSON Normalize Mini","price":3,"ar":"معاينة توحيد بيانات JSON على عينة محدودة.","en":"Free normalization preview; paid downloadable V2 artifact"},
{"id":"csv-schema-audit","category":"webhook","name":"CSV Schema Audit Mini","price":5,"ar":"فحص رؤوس أعمدة CSV وعينة صفوف صغيرة.","en":"Inspect header plus up to 3 rows free"},
{"id":"data-clean-mini","category":"webhook","name":"Data Clean Mini","price":9,"ar":"معاينة تنظيف عدد محدود من السجلات.","en":"Preview up to 3 records free"},
{"id":"web3-backend-rescue","category":"payment","name":"NAIF Web3 Backend Rescue","price":129,"ar":"فرز أعطال Backend Web3 ورسم حدودها دون تعديل مباشر.","en":"Safe triage + failure map; no production mutation"},
{"id":"web3-qa-sprint","category":"payment","name":"NAIF Web3 QA Sprint","price":89,"ar":"خطة محددة لإعادة إنتاج خلل Web3 واختبارات القبول.","en":"Bounded reproduction plan and acceptance-test map"},
{"id":"agentic-wallet-payments","category":"payment","name":"NAIF Agentic Wallet & Payments Integration","price":179,"ar":"مراجعة مسار مدفوعات ومحفظة لوكيل وحدود التحقق منه.","en":"Payment/wallet flow map and verification boundary"},
{"id":"trading-agent-infra","category":"payment","name":"NAIF Trading Agent Infrastructure Sprint","price":269,"ar":"تخطيط بنية وكيل تداول وضوابط المخاطر دون ضمان أرباح.","en":"Architecture and risk-control map; no promise of trading returns"},
{"id":"smart-contract-integration-review","category":"payment","name":"NAIF Smart-Contract Integration Review","price":159,"ar":"مراجعة واجهة دمج عقد ذكي ومخاطرها، وليست تدقيق أمان شاملًا.","en":"Bounded interface/risk map; not a formal security audit or certification"},
{"id":"telegram-bot-mini","category":"agent","name":"Telegram Bot Mini","price":39,"ar":"تخطيط أو تعديل سير أوامر بوت Telegram ضمن نطاق صغير.","en":"Command/workflow map"},
{"id":"github-actions-fix","category":"webhook","name":"GitHub Actions Fix","price":24,"ar":"فرز مشكلة سير GitHub Actions بأدلة تشغيل محدودة.","en":"Workflow failure map"},
{"id":"github-repo-triage","category":"auth","name":"GitHub Repo Triage","price":15,"ar":"تقييم أولي لمستودع GitHub للقراءة فقط.","en":"Read-only repository triage"},
{"id":"api-response-fix","category":"auth","name":"API Response Fix","price":19,"ar":"مراجعة عقد استجابة API وموضع الخلل المحتمل.","en":"Response contract review"},
{"id":"docker-health-fix","category":"auth","name":"Docker Healthcheck Fix","price":19,"ar":"مراجعة إعدادات Docker وفحوص الخدمة، دون تعديل إنتاجي.","en":"Configuration-only review"},
{"id":"backend-bug-fix","category":"auth","name":"Backend Bug Fix Mini","price":29,"ar":"فرز أولي لسبب مشكلة Backend محددة.","en":"Safe root-cause triage"},
{"id":"web3-rpc-debug","category":"payment","name":"Web3 RPC Debug","price":29,"ar":"تشخيص قراءة فقط لمشكلة اتصال RPC في Web3.","en":"Read-only RPC triage"},
{"id":"web3-qa-mini","category":"payment","name":"Web3 QA Mini","price":39,"ar":"خريطة مختصرة لاختبارات قبول Web3.","en":"Acceptance-test map"},
{"id":"database-query-fix","category":"auth","name":"Database Query Fix","price":49,"ar":"مراجعة استعلام قاعدة بيانات وخطته متى توفرت.","en":"Query-plan review where available"},
{"id":"deployment-rescue-mini","category":"auth","name":"Deployment Rescue Mini","price":69,"ar":"تحديد مسار فشل نشر تقني ضمن نطاق الخدمة.","en":"Deployment failure map"},
{"id":"treasury-readiness-report","category":"payment","name":"DAO Treasury Readiness Report","price":49,"ar":"تقرير تحضيري لخزينة DAO وحوكمتها اعتمادًا على أدلة قراءة فقط.","en":"Read-only treasury and governance evidence map"},
{"id":"rpc-reliability-audit","category":"payment","name":"RPC Reliability Audit","price":115,"ar":"تقييم قرائي لثبات واستجابة نقاط RPC.","en":"Read-only endpoint reliability map"},
{"id":"x402-endpoint-sprint","category":"payment","name":"x402 Endpoint Sprint","price":129,"ar":"تخطيط عقد دفع x402 ومسار استدعاء نقطة النهاية.","en":"Payment contract and endpoint flow map"},
{"id":"wallet-auth-integration","category":"payment","name":"Wallet Authentication Integration","price":219,"ar":"مراجعة مسار مصادقة المحفظة وحدود الصلاحيات.","en":"Authentication flow and boundary map"},
{"id":"web3-automation-pilot","category":"payment","name":"Web3 Automation Pilot","price":349,"ar":"تصميم سير أتمتة Web3 وحدود ما يمكن تنفيذه.","en":"Workflow architecture and execution boundary"},
{"id":"json-validity-check","category":"auth","name":"JSON Validity Check","price":1,"ar":"معاينة صحة JSON على مدخلات صغيرة، دون ادعاء نتائج بعيدة.","en":"Free preview; full validated V2 report after verified payment"},
{"id":"repair-check-beta","category":"auth","name":"Repair Check · Beta","price":19,"ar":"فحص أولي لإصلاح محدد، وليس ضمانًا لصحة التطبيق بالكامل.","en":"Repair-focused triage; not a whole-program correctness guarantee"},
{"id":"repair-verification-beta","category":"auth","name":"Deep Repair Verification · Beta","price":49,"ar":"تحقق محدود مستند إلى دليل الإصلاح المقدم ونطاقه.","en":"Scoped verification based on the supplied repair and evidence"},
{"id":"repair-evidence-receipt","category":"auth","name":"Repair Evidence Receipt","price":69,"ar":"ملخص لأدلة إصلاح محددة، وليس شهادة صحة عامة.","en":"Evidence-backed receipt; no universal correctness claim"},
{"id":"repair-ci-gate-pilot","category":"auth","name":"Repair CI Gate Pilot","price":115,"ar":"تجربة ربط محدودة لفحص إصلاح في مسار CI.","en":"Pilot integration for one bounded CI repair flow"},
{"id":"x402-network-repair","category":"payment","name":"x402 UnsupportedNetworkError Repair","price":5,"ar":"تشخيص لفئة خطأ شبكة x402 غير المدعومة؛ لا تطبيق آلي للإصلاح.","en":"Free exact failure-class diagnosis and network-mismatch evidence; patch is not applied automatically"}
];
const FEATURED_IDS=new Set(["webhook-debug-mini", "automation-rescue", "automation-mini", "api-response-shape-check", "endpoint-health-check", "api-fixer", "api-integration-mini", "mcp-tool-mini", "agent-prompt-tooling", "agent-engineering-sprint"]);
const t=(key,vars={})=>{
 let s=(I[langState.lang]||I.ar)[key]||key;
 return s.replace(/\{(\w+)\}/g,(_,name)=>String(vars[name]??""));
};
const make=(tag,cls,txt)=>{
 const n=document.createElement(tag);
 if(cls)n.className=cls;
 if(txt!==undefined)n.textContent=txt;
 return n;
};
const reduced=()=>window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const scrollToId=id=>{const el=$(id);if(el)el.scrollIntoView({behavior:reduced()?"auto":"smooth",block:"start"});};
function showTranslation(){
 document.documentElement.lang=langState.lang;
 document.documentElement.dir=langState.lang==="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-i18n]").forEach(n=>{n.textContent=t(n.dataset.i18n);});
 $("langToggle").firstChild.textContent=langState.lang==="ar"?"EN ":"ع ";
 $("langToggle").setAttribute("aria-label",langState.lang==="ar"?"EN — Switch language to English":"ع — التبديل إلى العربية");
 $("menuToggle").setAttribute("aria-label",t($("menuToggle").getAttribute("aria-expanded")==="true"?"menuClose":"menuLabel"));
 document.title=langState.lang==="ar"?"NAIF GRAVITY — تجربة التصميم V13":"NAIF GRAVITY — V13 Design Shadow";
 renderProblem(); renderScenario(); renderProducts(); renderDetail();
}
function updateParams(){
 try { const u=new URL(location.href);u.searchParams.set("theme",langState.theme);u.searchParams.set("lang",langState.lang);history.replaceState(null,"",u.pathname+u.search+u.hash); }catch(_){}
}
function setTheme(theme){
 if(!["hybrid","night"].includes(theme))return;
 langState.theme=theme;
 document.body.classList.toggle("theme-hybrid",theme==="hybrid");
 document.body.classList.toggle("theme-night",theme==="night");
 document.querySelectorAll("[data-choose-theme]").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.chooseTheme===theme)));
 updateParams();
}
function setMenu(open){
 $("mainNav").classList.toggle("is-open",open);
 $("menuToggle").setAttribute("aria-expanded",String(open));
 $("menuToggle").setAttribute("aria-label",t(open?"menuClose":"menuLabel"));
}
function renderProblem(){
 document.querySelectorAll(".problem-tile").forEach(el=>el.setAttribute("aria-pressed",String(el.dataset.case===langState.category)));
 $("problemFeedback").textContent=t("selectedCategory",{category:t(langState.category+"Title")});
}
function getAt(obj,path){return path.split(".").reduce((v,key)=>v && typeof v==="object"?v[key]:undefined,obj);}
function validateFixture(data,rules){
 return rules.map(rule=>{
  const val=getAt(data,rule.path);
  const ok=rule.kind==="integer"?Number.isSafeInteger(val):val===rule.value;
  return {path:rule.path,ok,expected:rule.kind==="integer"?"integer":rule.value};
 }).filter(x=>!x.ok);
}
function renderScenario(){
 const c=CASES[langState.category],s=langState.step;
 const isAr=langState.lang==="ar";
 $("scenarioCode").textContent=c.code;
 $("scenarioTitle").textContent=c.title[langState.lang];
 $("scenarioDescription").textContent=c.description[langState.lang];
 $("expectedCode").textContent=JSON.stringify(c.expected,null,2);
 $("payloadCode").textContent=JSON.stringify(s===2?c.after:c.before,null,2);
 $("payloadTag").textContent=s===2?"AFTER":"BEFORE";
 $("actualLabel").textContent=t(s===2?"correctedActual":"expectedActual");
 $("resultStep").textContent=String(s).padStart(2,"0");
 $("resultBars").classList.toggle("is-cause",s===1);
 $("resultBars").classList.toggle("is-fixed",s===2);
 $("graphicCaption").textContent=s===2?"LOCALLY MATCHED":s===1?"LOCAL CONTRACT MISMATCH":"SYNTHETIC INPUT / READY";
 ["stage0","stage1","stage2"].forEach((id,i)=>{
  $(id).classList.toggle("current",i===s);
  $(id).classList.toggle("done",i<s);
 });
 $("demoActionLabel").textContent=t(s===0?"stepStart":s===1?"stepCause":"stepAgain");
 $("resultTag").textContent=t(s===0?"initialTag":s===1?"causeTag":"passTag");
 $("resultTag").dataset.state=s===1?"fail":s===2?"pass":"ready";
 $("resultTitle").textContent=s===0?t("readyTitle"):s===1?t("failTitle"):t("passTitle");
 const errors=validateFixture(s===2?c.after:c.before,c.rules);
 $("resultDetail").textContent=s===0?t("readyDetail"):s===1?c.reason[langState.lang]+(errors.length?" ("+errors.map(e=>e.path).join(", ")+")":""):t("passDetail");
 $("demoServiceLabel").textContent=c.next?t("showService",{service:c.label[langState.lang]}):t("viewPayment");
 const pass=validateFixture(c.after,c.rules).length===0;
 $("demoAction").disabled=!pass;
}
function setCase(key){
 if(!CATEGORIES.includes(key))return;
 langState.category=key;langState.step=0;langState.selectedId=null;
 renderProblem();renderScenario();setFilter(key);
}
function step(){
 const c=CASES[langState.category];
 if(langState.step===0){if(!validateFixture(c.before,c.rules).length){return;}langState.step=1;}
 else if(langState.step===1){if(validateFixture(c.after,c.rules).length){return;}langState.step=2;}
 else {langState.step=0;}
 renderScenario();
}
function setFilter(filter){
 if(!["all",...CATEGORIES].includes(filter))return;
 langState.filter=filter;
 document.querySelectorAll("[data-filter]").forEach(el=>el.setAttribute("aria-pressed",String(el.dataset.filter===filter)));
 renderProducts();
}
function serviceCard(p){
 const btn=make("button","product-card");
 btn.type="button";btn.dataset.product=p.id;
 // The visible card text is also its accessible button name; no mismatched aria-label.
 if(langState.selectedId===p.id)btn.classList.add("is-selected");
 const top=make("div","product-overline");
 const c=make("span","",t("filter"+p.category[0].toUpperCase()+p.category.slice(1)));
 const plus=make("span","", "↗");
 top.append(c,plus);
 const name=make("h3","",p.name);name.dir="auto";
 const desc=make("p","product-description",p[langState.lang]);
 const foot=make("div","product-foot");
 const price=make("div","price","$"+p.price.toFixed(2));
 price.append(make("small","",t("priceLabel")));
 const view=make("span","card-link",t("cardView")+" ↗");
 foot.append(price,view);
 btn.append(top,name,desc,foot);
 btn.addEventListener("click",()=>{langState.selectedId=p.id;renderProducts();renderDetail();scrollToId("productDetail");});
 return btn;
}
function renderProducts(){
 const grid=$("productGrid"); grid.replaceChildren();
 const selected=PRODUCTS.filter(p=>langState.filter!=="all" ? p.category===langState.filter : FEATURED_IDS.has(p.id));
 selected.forEach(p=>grid.append(serviceCard(p)));
 $("catalogCount").textContent=t("catalogSelected",{n:String(selected.length).padStart(2,"0")});
 renderDetail();
}
function renderDetail(){
 const id=langState.selectedId,p=PRODUCTS.find(x=>x.id===id),panel=$("productDetail");
 if(!p){panel.hidden=true;return;}
 if(langState.filter!=="all"&&p.category!==langState.filter){panel.hidden=true;return;}
 panel.hidden=false;
 $("detailTitle").textContent=p.name;
 $("detailDescription").textContent=p[langState.lang];
 $("detailStatus").textContent=t("liveDisclaimer");
 $("detailPrice").textContent="$"+p.price.toFixed(2)+"  ·  "+t("priceLabel");
 $("detailOfficial").href="https://naifgravity.com/service/"+encodeURIComponent(p.id);
}
function openRecommended(){
 const caseId=langState.category,found=CASES[caseId].next;
 setFilter(caseId);
 if(found){langState.selectedId=found;renderProducts();renderDetail();scrollToId("productDetail");}
 else scrollToId("catalog");
}
document.addEventListener("DOMContentLoaded",()=>{
 const params=new URLSearchParams(location.search);
 if(params.get("lang")==="en")langState.lang="en";
 const initialTheme=params.get("theme")==="night"?"night":"hybrid";
 document.body.classList.toggle("owner-qa",params.get("qa")==="1");
 document.querySelectorAll(".problem-tile").forEach(btn=>btn.addEventListener("click",()=>setCase(btn.dataset.case)));
 document.querySelectorAll("[data-filter]").forEach(btn=>btn.addEventListener("click",()=>setFilter(btn.dataset.filter)));
 document.querySelectorAll("[data-choose-theme]").forEach(btn=>btn.addEventListener("click",()=>setTheme(btn.dataset.chooseTheme)));
 $("demoAction").addEventListener("click",step);
 $("demoReset").addEventListener("click",()=>{langState.step=0;renderScenario();});
 $("demoService").addEventListener("click",openRecommended);
 $("menuToggle").addEventListener("click",()=>setMenu($("menuToggle").getAttribute("aria-expanded")!=="true"));
 document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&$("menuToggle").getAttribute("aria-expanded")==="true"){setMenu(false);$("menuToggle").focus();}});
 $("langToggle").addEventListener("click",()=>{langState.lang=langState.lang==="ar"?"en":"ar";showTranslation();updateParams();});
 showTranslation();setTheme(initialTheme);setFilter("all");
});
})();