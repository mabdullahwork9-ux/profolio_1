/* =========================================================
   EDIT YOUR CONTENT HERE
   - Items with url: null show a clearly labelled placeholder.
   - Replace null with a real link when you have one.
   ========================================================= */

const PROJECTS = [
  {
    id: "tetris", cat: "DevSecOps", tag: "DevSecOps · GitOps", period: "Personal project",
    title: "Tetris DevSecOps Project",
    summary: "Terraform-provisioned AWS EKS platform with a Jenkins pipeline that gates every build on SAST, dependency and container scans, then deploys through ArgoCD.",
    stack: ["Terraform", "AWS EKS", "Jenkins", "SonarQube", "Trivy", "OWASP Dependency-Check", "ArgoCD", "Docker"],
    github: "https://github.com/mabdullahwork9-ux/tetris-devsecops",
    what: "An end-to-end DevSecOps platform that takes a containerised Tetris web application from source code to a running workload on Amazon EKS, with security checks built into every stage.",
    why: "To practise the full Shift-Left lifecycle in one place: infrastructure as code, automated security gates and GitOps delivery, the same pattern production teams use.",
    objective: "Automate infrastructure provisioning and deployment while ensuring no build reaches the cluster without passing static analysis and vulnerability scanning, and keep the cluster state continuously in sync with Git.",
    did: [
      "Used Terraform to provision an AWS environment: VPC, subnets and an Amazon EKS cluster.",
      "Built a Jenkins pipeline to automate build, test and security scanning of the application code.",
      "Integrated SonarQube for SAST, Trivy for container image and filesystem scanning, and OWASP Dependency-Check for insecure dependencies.",
      "Configured ArgoCD to watch a manifest repository so the cluster continuously matches the desired state in Git (zero-drift deployment).",
      "Containerised the application with Docker and deployed to EKS with rolling updates driven by GitOps."
    ],
    skills: ["Infrastructure as Code", "CI/CD security gates", "SAST and SCA", "Container scanning", "GitOps", "Kubernetes on AWS"],
    outcome: "A repeatable, fully automated path from commit to cluster in which code, dependencies and images are scanned before release and drift is corrected automatically.",
    relevance: "Mirrors how modern engineering teams embed security in delivery pipelines to reduce vulnerabilities reaching production without slowing releases.",
    evidence: [{ label: "Source repository", url: "https://github.com/mabdullahwork9-ux/tetris-devsecops" }, { label: "Pipeline screenshots (add)", url: null }]
  },
  {
    id: "jerney", cat: "DevSecOps", tag: "DevSecOps · Cloud", period: "Personal project",
    title: "Jerney DevSecOps",
    summary: "A secure, production-grade three-tier blog platform with a 10-stage GitHub Actions security pipeline, hardened containers and zero-trust Kubernetes networking.",
    stack: ["Terraform", "AWS EKS (Auto Mode)", "GitHub Actions", "Docker", "Hadolint", "ESLint", "Trivy", "Checkov", "Argo CD", "NetworkPolicies"],
    github: "https://github.com/mabdullahwork9-ux/jerney_devsecops.git",
    what: "A three-tier blog platform named Jerney, built from the ground up with security practised end-to-end across infrastructure, containers, pipeline and runtime.",
    why: "To demonstrate security at every layer of a real application stack rather than only at the scan step, including runtime controls inside Kubernetes.",
    objective: "Deliver a production-style platform where infrastructure, images and deployments are scanned, hardened and continuously delivered, with least-privilege communication inside the cluster.",
    did: [
      "Provisioned a private VPC and AWS EKS cluster (Auto Mode) using Terraform.",
      "Built multi-stage Docker images running as non-root with read-only filesystems, linted with Hadolint.",
      "Developed a 10-stage GitHub Actions pipeline covering ESLint, npm audit, Trivy image scanning and Checkov IaC scanning.",
      "Configured Argo CD for continuous delivery to EKS from the DevOps repository branch.",
      "Enforced zero-trust pod communication with Kubernetes NetworkPolicies and managed secret encryption at rest in EKS."
    ],
    skills: ["Container hardening", "IaC security scanning", "Pipeline design", "Zero-trust networking", "Secrets management", "GitOps"],
    outcome: "A hardened three-tier platform in which every change passes automated lint, dependency, image and IaC checks before Argo CD delivers it to the cluster.",
    relevance: "Reflects cloud security engineering expectations: least privilege, hardened workloads, scanned infrastructure code and auditable, automated delivery.",
    evidence: [{ label: "Source repository", url: "https://github.com/mabdullahwork9-ux/jerney_devsecops.git" }, { label: "Pipeline run screenshot (add)", url: null }]
  },
  {
    id: "cicd", cat: "DevSecOps", tag: "CI/CD · Secrets", period: "Personal project",
    title: "Secure CI/CD Pipeline with GitHub Actions",
    summary: "Automated build, test and deployment of a containerised two-tier app to AWS EC2, with Gitleaks secret scanning and manual approval gates for production.",
    stack: ["GitHub Actions", "Docker", "AWS EC2", "Gitleaks", "Linting", "Environment approvals"],
    github: "https://github.com/mabdullahwork9-ux/ci-cd-pipeline",
    what: "An end-to-end CI/CD pipeline that builds, tests and deploys a containerised frontend and backend application to an AWS EC2 instance.",
    why: "To learn release engineering with security controls built in: credential hygiene, repeatable environments and controlled production releases.",
    objective: "Automate delivery while preventing hard-coded secrets and requiring human verification before production changes.",
    did: [
      "Containerised a multi-tier application (frontend and backend) with custom Dockerfiles and managed image builds.",
      "Integrated Gitleaks to scan automatically for hard-coded credentials.",
      "Configured GitHub Actions workflows with automated linting and environment-specific deployment triggers.",
      "Implemented Continuous Delivery with manual approval gates so an administrator must verify before production deploys."
    ],
    skills: ["GitHub Actions", "Secrets detection", "Docker", "Release management", "Change control"],
    outcome: "A consistent pipeline from commit to EC2 where secrets are caught early and production releases require explicit sign-off.",
    relevance: "Leaked credentials and uncontrolled releases are common breach causes; this pipeline addresses both with automation and approval.",
    evidence: [{ label: "Source repository", url: "https://github.com/mabdullahwork9-ux/ci-cd-pipeline" }, { label: "Workflow run screenshot (add)", url: null }]
  },
  {
    id: "netflix", cat: "DevSecOps", tag: "DevSecOps · Monitoring", period: "Personal project",
    title: "Netflix Clone with DevSecOps Practices",
    summary: "Jenkins CI/CD on AWS with SonarQube and Trivy scanning, Prometheus and Grafana monitoring with email alerts, and ArgoCD/Helm delivery to EKS.",
    stack: ["AWS", "Jenkins", "SonarQube", "Trivy", "Prometheus", "Grafana", "Kubernetes (EKS)", "ArgoCD", "Helm"],
    github: null,
    what: "A comprehensive DevSecOps pipeline on AWS that automates deployment of a Netflix clone application using Jenkins.",
    why: "To combine delivery security with observability, so that pipeline health and infrastructure usage are visible and alertable alongside scan results.",
    objective: "Automate secure deployment while monitoring CPU and RAM across EC2 instances and Jenkins jobs, with alerting when thresholds are crossed.",
    did: [
      "Designed and deployed a Jenkins CI/CD pipeline on AWS for the application.",
      "Added SonarQube for code quality analysis and Trivy for container vulnerability assessment.",
      "Configured Prometheus and Grafana to track resource utilisation for EC2 instances and Jenkins jobs, with automated SMTP email alerts.",
      "Deployed to Kubernetes (EKS) using ArgoCD for GitOps delivery and Helm charts for infrastructure and monitoring."
    ],
    skills: ["Observability", "Alerting", "Helm", "Jenkins pipelines", "Kubernetes delivery"],
    outcome: "A monitored pipeline in which security scans run on every build and resource anomalies trigger email alerts.",
    relevance: "Detection and response depend on visibility; pairing scanning with monitoring reflects how production platforms are operated.",
    evidence: [{ label: "GitHub repository (add link)", url: null }, { label: "Grafana dashboard screenshot (add)", url: null }]
  },
  {
    id: "vulnmgmt", cat: "Blue Team", tag: "Vulnerability Mgmt", period: "Jun 2023",
    title: "Cybersecurity Vulnerability Management Project",
    summary: "Built an Azure lab with an OpenVAS scanner and a deliberately vulnerable Windows 10 VM, compared scan types, remediated findings and verified the fixes.",
    stack: ["Microsoft Azure", "OpenVAS", "Windows 10", "Credentialed scanning", "Remediation"],
    github: null,
    what: "A full vulnerability management lifecycle in a controlled Azure network: scan, analyse, remediate and re-scan.",
    why: "To learn how vulnerability programmes work in practice and to see how much visibility credentials add to a scan.",
    objective: "Demonstrate the difference between unauthenticated and credentialed scanning and prove remediation through verification scans.",
    did: [
      "Set up a secure Azure network hosting an OpenVAS vulnerability scanner VM.",
      "Built a vulnerable Windows 10 VM with outdated software and disabled security controls.",
      "Ran unauthenticated and credentialed OpenVAS scans.",
      "Analysed results, highlighting the difference between the two scan types.",
      "Remediated the identified vulnerabilities and confirmed success with follow-up scans."
    ],
    skills: ["Vulnerability scanning", "Risk analysis", "Remediation verification", "Azure networking"],
    outcome: "Findings were remediated and subsequent scans confirmed the reduction, closing the full scan-fix-verify loop.",
    relevance: "Regular, credentialed scanning with verified remediation is a baseline control in frameworks such as NIST and ISO 27001.",
    evidence: [{ label: "Scan report (add)", url: null }, { label: "Before/after screenshots (add)", url: null }]
  },
  {
    id: "sentinel", cat: "Blue Team", tag: "SIEM · Detection", period: "2023",
    title: "SIEM Dashboard: Azure Sentinel",
    summary: "Custom PowerShell pipeline that enriches Windows failed-logon events with geolocation and visualises global RDP brute-force attacks in Microsoft Sentinel.",
    stack: ["Azure Sentinel", "Log Analytics", "PowerShell", "Windows Event Viewer", "Geolocation API", "Workbooks"],
    github: null,
    what: "A cloud SIEM dashboard that maps real RDP brute-force attack sources on a world map by location and magnitude.",
    why: "To understand log ingestion, enrichment and visualisation, the core workflow of a SOC analyst using a SIEM.",
    objective: "Turn raw Windows event data into actionable geographic attack intelligence inside Microsoft Sentinel.",
    did: [
      "Wrote a custom PowerShell script to extract metadata from Windows Event Viewer and send it to a third-party API for geolocation.",
      "Configured a Log Analytics Workspace to ingest custom logs with latitude, longitude, state/province and country.",
      "Defined custom fields in the workspace to enable geo mapping in Sentinel.",
      "Built a Sentinel workbook showing attack data on a world map according to location and magnitude."
    ],
    skills: ["SIEM engineering", "KQL / Log Analytics", "Log enrichment", "PowerShell scripting", "Threat visualisation"],
    outcome: "A working map-based dashboard that makes brute-force attack patterns visible at a glance.",
    relevance: "Enriching logs and visualising them is how SOC teams spot attack trends and prioritise response.",
    evidence: [{ label: "Dashboard screenshot (add)", url: null }, { label: "PowerShell script repo (add)", url: null }]
  },
  {
    id: "malware", cat: "Malware", tag: "Malware Analysis", period: "2023",
    title: "Static Malware Analysis: RedLine",
    summary: "A detailed static analysis report on a RedLine stealer sample, a password-stealing Trojan targeting credentials, card details and crypto wallets.",
    stack: ["Static analysis", "Virtual machines", "Malware reporting"],
    github: null,
    what: "A written report analysing a malware sample identified as RedLine, a password-stealing Trojan that targets sensitive data on infected systems.",
    why: "To build hands-on malware analysis skills and practise writing findings in a form a security team can act on.",
    objective: "Characterise the sample's behaviour and the data it targets (passwords, credit card details and cryptocurrency wallets) without executing it.",
    did: [
      "Examined the RedLine sample using static analysis techniques in an isolated virtual machine environment.",
      "Documented what the malware targets and how it is designed to steal information.",
      "Compiled the findings into a structured analysis report."
    ],
    skills: ["Static analysis", "Safe lab handling", "Threat reporting", "Understanding info-stealers"],
    outcome: "A completed analysis report documenting the sample's purpose and targeted data.",
    relevance: "Info-stealers like RedLine drive credential theft; understanding them informs detection, response and user-awareness efforts.",
    evidence: [{ label: "Full analysis report (add PDF link)", url: null }]
  }
];

const COMPETITIONS = [
  {
    name: "SOFTEC'22 Artificial Intelligence Competition",
    result: "Honours & Awards listing (add exact placement)", real: false,
    involved: "National software competition event (SOFTEC'22) with an Artificial Intelligence track.",
    areas: "[Add the challenge areas, e.g. problem statement, models, dataset]",
    learned: "[Add key lessons, e.g. teamwork under time pressure, model evaluation]",
    evidence: [{ label: "Award certificate (add)", url: null }]
  },
  {
    name: "AIG Shields Up: Cybersecurity (Forage simulation)",
    result: "Completed · Jan–Feb 2025", real: true,
    involved: "Job simulation as a Cyber Defense Unit analyst.",
    areas: "Threat analysis using CISA publications, vulnerability research, remediation communication, Python scripting for ethical decryption-key brute-forcing.",
    learned: "How to turn vulnerability reports into clear remediation guidance and how scripting can recover from ransomware scenarios without paying.",
    evidence: [{ label: "Forage certificate (add)", url: null }]
  },
  {
    name: "ANZ Cybersecurity Management (Forage simulation)",
    result: "Completed · 2024", real: true,
    involved: "Job simulation as a Cyber Security Analyst.",
    areas: "Suspicious email investigation and open-source packet capture analysis.",
    learned: "Triage of phishing indicators and identifying potential threats in network traffic.",
    evidence: [{ label: "Forage certificate (add)", url: null }]
  },
  {
    name: "Hack The Box: Meow (Starting Point)",
    result: "Machine pwned", real: true,
    involved: "Beginner lab machine on Hack The Box.",
    areas: "Enumeration and exploiting a misconfigured service.",
    learned: "Fundamentals of the recon-to-access workflow and why default or weak configurations matter.",
    evidence: [{ label: "HTB profile / credential (add)", url: null }]
  }
];

const FEATURED_CERT = {
  name: "Certified Ethical Hacker (CEH)", org: "EC-Council", dates: "Issued May 2025 · Expired Jun 2026",
  skills: "Identifying threats such as social engineering, malware and web-based exploits; vulnerability scanning; and more.",
  url: null
};

const CERTS = [
  { n: "Google Cybersecurity Certificate", o: "Coursera", d: "Oct 2023", id: "gkyY9Qsp" },
  { n: "Completion Certificate for Google Cybersecurity", o: "Google", d: "Oct 2023", id: "PBXT484XEERF" },
  { n: "Automate Cybersecurity Tasks with Python", o: "Google", d: "Oct 2023", id: "UXNNZVEE6SHU" },
  { n: "Put It to Work: Prepare for Cybersecurity Jobs", o: "Google", d: "Oct 2023", id: "ZF28R6J9T8XS" },
  { n: "Sound the Alarm: Detection and Response", o: "Google", d: "Oct 2023", id: "6Y9JAUCFNB8B", s: "SIEM, IDS" },
  { n: "Assets, Threats, and Vulnerabilities", o: "Google", d: "Oct 2023", id: "8HJ3UZDC5M6C", s: "Threat identification, threat modeling" },
  { n: "Tools of the Trade: Linux and SQL", o: "Google", d: "Sep 2023" },
  { n: "Connect and Protect: Networks and Network Security", o: "Google", d: "Aug 2023", s: "TCP/IP, security hardening" },
  { n: "Play It Safe: Manage Security Risks", o: "Google", d: "Aug 2023", s: "Incident response playbooks, NIST RMF" },
  { n: "Foundations of Cybersecurity", o: "Google Career Certificates", d: "Jul 2023" },
  { n: "Hack The Box: Meow has been Pwned", o: "Hack The Box", d: "Lab", s: "Cybersecurity" },
  { n: "APIsec University: API Penetration Testing", o: "APIsec University", d: "Oct 2023", s: "API pentesting" }
];

const TERMINAL_LINES = [
  ["p", "$ git push origin main"],
  ["", "→ pipeline triggered"],
  ["b", "[1/6] lint ............ ESLint, Hadolint"],
  ["ok", "      ✔ passed"],
  ["b", "[2/6] secrets ......... Gitleaks"],
  ["ok", "      ✔ no secrets found"],
  ["b", "[3/6] sast / sca ...... SonarQube, Dep-Check"],
  ["ok", "      ✔ quality gate passed"],
  ["b", "[4/6] image scan ...... Trivy"],
  ["ok", "      ✔ no critical CVEs"],
  ["b", "[5/6] iac scan ........ Checkov"],
  ["ok", "      ✔ policies satisfied"],
  ["b", "[6/6] gitops sync ..... ArgoCD → EKS"],
  ["ok", "      ✔ cluster in sync, zero drift"],
  ["p", "$ _"]
];

/* =========================================================
   APP LOGIC
   ========================================================= */

const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function evidenceHTML(list) {
  return list.map(e => e.url
    ? `<a href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.label)} ↗</a>`
    : `<span class="pl" title="Placeholder: replace null with a real URL in script.js">⏳ ${esc(e.label)}</span>`).join("");
}

/* Projects */
const cardsEl = $("#cards"), filtersEl = $("#filters");
const cats = ["All", ...new Set(PROJECTS.map(p => p.cat))];
let activeCat = "All";

function renderFilters() {
  filtersEl.innerHTML = cats.map(c => `<button class="filter${c === activeCat ? " active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
}
function renderCards() {
  const list = PROJECTS.filter(p => activeCat === "All" || p.cat === activeCat);
  cardsEl.innerHTML = list.map(p => `
    <button class="card reveal" data-id="${p.id}" aria-label="Open project: ${esc(p.title)}">
      <div class="card-top"><span class="tag">${esc(p.tag)}</span><span class="period">${esc(p.period)}</span></div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.summary)}</p>
      <div class="stack">${p.stack.slice(0, 6).map(s => `<span>${esc(s)}</span>`).join("")}</div>
      <span class="more">View project details →</span>
    </button>`).join("");
  observeReveal();
}
filtersEl.addEventListener("click", e => {
  const b = e.target.closest(".filter"); if (!b) return;
  activeCat = b.dataset.cat; renderFilters(); renderCards();
});
cardsEl.addEventListener("click", e => {
  const c = e.target.closest(".card"); if (c) openModal(c.dataset.id);
});

/* Modal */
const modal = $("#modal"), modalContent = $("#modalContent");
let lastFocus = null;
function box(title, body, full) { return `<div class="m-box${full ? " full" : ""}"><h4>${title}</h4>${body}</div>`; }
function openModal(id) {
  const p = PROJECTS.find(x => x.id === id); if (!p) return;
  lastFocus = document.activeElement;
  modalContent.innerHTML = `
    <div class="m-head">
      <span class="tag">${esc(p.tag)}</span> <span class="period">${esc(p.period)}</span>
      <h2 id="mTitle">${esc(p.title)}</h2>
      <p>${esc(p.summary)}</p>
      <div class="m-links">
        ${p.github ? `<a class="btn primary" href="${esc(p.github)}" target="_blank" rel="noopener">View on GitHub ↗</a>` : `<span class="btn" style="border-style:dashed;color:var(--warn)">GitHub link: placeholder</span>`}
      </div>
    </div>
    <div class="m-grid">
      ${box("What was the project?", `<p>${esc(p.what)}</p>`)}
      ${box("Why I built it", `<p>${esc(p.why)}</p>`)}
      ${box("Objective", `<p>${esc(p.objective)}</p>`, true)}
      ${box("Tools &amp; technologies", `<div class="stack">${p.stack.map(s => `<span>${esc(s)}</span>`).join("")}</div>`, true)}
      ${box("What I actually did", `<ul>${p.did.map(d => `<li>${esc(d)}</li>`).join("")}</ul>`, true)}
      ${box("Skills developed", `<div class="stack">${p.skills.map(s => `<span>${esc(s)}</span>`).join("")}</div>`)}
      ${box("Outcome", `<p>${esc(p.outcome)}</p>`)}
      ${box("Real-world relevance", `<p>${esc(p.relevance)}</p>`, true)}
      ${box("Evidence", `<div class="evidence">${evidenceHTML(p.evidence)}</div>`, true)}
    </div>`;
  modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("lock");
  $(".modal-panel").scrollTop = 0; $(".modal-panel").focus();
}
function closeModal() {
  modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lock");
  if (lastFocus) lastFocus.focus();
}
modal.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

/* Competitions */
$("#compGrid").innerHTML = COMPETITIONS.map(c => `
  <article class="comp reveal">
    <span class="tag">${c.real ? "Simulation / Lab" : "Competition"}</span>
    <h3>${esc(c.name)}</h3>
    <div class="result ${c.real ? "real" : ""}">${esc(c.result)}</div>
    <dl>
      <div><dt>What it involved</dt><dd>${esc(c.involved)}</dd></div>
      <div><dt>Challenges / areas</dt><dd>${esc(c.areas)}</dd></div>
      <div><dt>What I learned</dt><dd>${esc(c.learned)}</dd></div>
      <div><dt>Evidence</dt><dd class="evidence">${evidenceHTML(c.evidence)}</dd></div>
    </dl>
  </article>`).join("");

/* Certifications */
$("#certFeature").innerHTML = `
  <div class="cert-hero reveal">
    <div class="badge-ph">CEH badge image placeholder</div>
    <div>
      <h3>${esc(FEATURED_CERT.name)}</h3>
      <p>${esc(FEATURED_CERT.org)}</p>
      <span class="status exp">${esc(FEATURED_CERT.dates)}</span>
      <p>${esc(FEATURED_CERT.skills)}</p>
      <div class="evidence">${evidenceHTML([{ label: "CEH certificate (add)", url: FEATURED_CERT.url }])}</div>
    </div>
  </div>`;
$("#certGrid").innerHTML = CERTS.map(c => `
  <div class="cert reveal">
    <h4>${esc(c.n)}</h4>
    <small>${esc(c.o)} · ${esc(c.d)}</small>
    ${c.s ? `<div class="sk">Skills: ${esc(c.s)}</div>` : ""}
    ${c.id ? `<small>Credential ID: ${esc(c.id)}</small>` : ""}
    <div class="cred"><span class="pl">⏳ Credential link (add)</span></div>
  </div>`).join("");

/* Terminal typing */
(function terminal() {
  const el = $("#termBody"); if (!el) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0, html = "";
  const draw = () => { el.innerHTML = html + '<span class="cursor"></span>'; };
  if (reduce) { html = TERMINAL_LINES.map(l => `<span class="${l[0]}">${esc(l[1])}</span>`).join("\n"); draw(); return; }
  (function next() {
    if (i >= TERMINAL_LINES.length) { draw(); setTimeout(() => { i = 0; html = ""; next(); }, 5000); return; }
    const l = TERMINAL_LINES[i++];
    html += `<span class="${l[0]}">${esc(l[1])}</span>\n`; draw();
    setTimeout(next, l[0] === "ok" ? 260 : 480);
  })();
})();

/* Counters */
function countUp(el) {
  const t = +el.dataset.count; let n = 0;
  const step = Math.max(1, Math.ceil(t / 30));
  const id = setInterval(() => { n = Math.min(t, n + step); el.textContent = n; if (n >= t) clearInterval(id); }, 35);
}
const counterIO = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { countUp(e.target); counterIO.unobserve(e.target); } }), { threshold: .6 });
document.querySelectorAll("[data-count]").forEach(el => counterIO.observe(el));

/* Reveal on scroll */
let revealIO;
function observeReveal() {
  if (!("IntersectionObserver" in window)) { document.querySelectorAll(".reveal").forEach(e => e.classList.add("in")); return; }
  revealIO = revealIO || new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll(".reveal:not(.in)").forEach(el => revealIO.observe(el));
}

/* Nav */
const nav = $("#nav"), toggle = $("#navToggle"), links = $("#navLinks");
toggle.addEventListener("click", () => { const o = links.classList.toggle("open"); toggle.setAttribute("aria-expanded", o); });
links.addEventListener("click", e => { if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); } });
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });

$("#year").textContent = new Date().getFullYear();
renderFilters(); renderCards(); observeReveal();
