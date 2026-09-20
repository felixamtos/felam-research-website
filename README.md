# Felam Research Consultancy & Writing Solutions

Professional responsive one-page website for **Felam Research Consultancy & Writing Solutions**.

> **Purpose:** This repository is a static HTML/CSS/JavaScript website. It does not require a server-side application, database or build framework.

## 1. Project overview

Felam provides research support, data analysis, scientific writing assistance, research-tool development and related consultancy services. The website is designed for a **virtual/service-based consultancy**, so no physical business address is displayed.

### Business contact details configured in this site

- **Business:** Felam Research Consultancy & Writing Solutions
- **Phone / WhatsApp:** 0726 563 754 (+254 726 563 754)
- **Email:** felamconsultancy@gmail.com
- **M-Pesa Till:** 549397
- **Service model:** Virtual consultancy serving clients in Kenya and beyond

## 2. Files and folders

| File | Purpose |
|---|---|
| `index.html` | Main responsive website page |
| `styles.css` | Responsive styling and layout |
| `script.js` | Navigation, Till copy button and WhatsApp enquiry form |
| `analytics.js` | Optional Google Analytics 4 + Cloudflare Web Analytics configuration |
| `privacy.html` | Website privacy notice |
| `terms.html` | Terms of service and academic research assistance disclaimer |
| `Felam_Logo.png` | Supplied Felam logo used on the website |
| `favicon-32.png` | Browser favicon |
| `favicon-64.png` | Larger favicon |
| `favicon-512.png` | High-resolution favicon/source icon |
| `apple-touch-icon.png` | iOS/home-screen icon |
| `social-share.jpg` | Open Graph/social sharing image |
| `robots.txt` | Search-engine crawling instructions |
| `sitemap.xml` | Search-engine sitemap |
| `README.md` | This deployment and maintenance guide |

## 3. What has been added in this version

### Branding

- Replaced the temporary SVG brand icon with the **actual supplied Felam logo**.
- Added favicon and Apple touch icon generated from the supplied logo.
- Added a 1200×630 social sharing image based on the supplied logo.

### Service area

The site states that Felam is a **virtual consultancy serving clients in Kenya and beyond**. No physical address is displayed because the business does not need customers to visit a physical location.

### Responsible academic assistance

The website now clearly states that Felam provides legitimate research assistance, editing, analysis, methodology support and scientific writing assistance. It also states that clients remain responsible for their own academic work and final submissions and that plagiarism, fabrication, falsification and impersonation are not supported.

### Privacy

A dedicated `privacy.html` page explains:

- enquiry/contact information;
- WhatsApp and email use;
- payment confirmation information;
- analytics;
- research-data confidentiality;
- retention/security;
- user privacy requests.

### SEO

The site includes:

- descriptive page title;
- meta description;
- robots directives;
- canonical URL placeholder;
- Open Graph metadata;
- Twitter card metadata;
- Organization JSON-LD structured data;
- favicon metadata;
- `robots.txt`;
- `sitemap.xml`.

**Important:** replace every `YOUR-DOMAIN.example` placeholder after choosing the final domain.

## 4. Analytics setup

The website is prepared for both **Google Analytics 4** and **Cloudflare Web Analytics**.

### Google Analytics 4

1. Create a Google Analytics 4 web data stream for the final domain.
2. Copy the measurement ID, which looks like `G-XXXXXXXXXX`.
3. Open `analytics.js`.
4. Replace:

```text
G-REPLACE_WITH_YOUR_GA4_ID
```

with the real measurement ID.

5. Publish the updated site.

### Cloudflare Web Analytics

Cloudflare Web Analytics can be enabled from the Cloudflare dashboard. For a Cloudflare Pages project, Cloudflare documents a one-click setup under the project's **Metrics → Web Analytics** area. Alternatively, Cloudflare provides a JavaScript beacon token that can be placed in the site.

If using the token method:

1. Create/add the site in Cloudflare Web Analytics.
2. Copy the beacon token.
3. Open `analytics.js`.
4. Replace:

```text
REPLACE_WITH_YOUR_CLOUDFLARE_TOKEN
```

with the real token.

Do not publish fake or example IDs.

## 5. Google Search setup

After the site is live:

1. Open Google Search Console.
2. Add the final domain/property.
3. Complete domain verification.
4. Replace `YOUR-DOMAIN.example` in `index.html` and `sitemap.xml`.
5. Submit:

```text
https://YOUR-FINAL-DOMAIN/sitemap.xml
```

6. Use URL Inspection to request indexing for the home page.
7. Validate the structured data where appropriate.

Google may take time to crawl and index a new website; publishing the sitemap does not guarantee an immediate search ranking or indexing result.

## 6. Google Business Profile

**Do not create a Google Business Profile simply because the website exists.** Google states that eligible businesses must make in-person contact with customers during stated hours. Google also states that online-only businesses are not eligible.

If Felam later operates as an eligible service-area or hybrid business with qualifying in-person customer contact, create/claim one Business Profile and accurately configure the service area. Do not publish a virtual office or an address where customers are not actually served.

If eligible, start at Google Business Profile's official add/claim page:

`https://business.google.com/add`

## 7. Recommended first launch: Netlify

For a first launch, Netlify is convenient because its official documentation supports dragging and dropping a project folder containing the website files.

### Netlify Drop steps

1. Create/sign in to a Netlify account.
2. Open Netlify Drop.
3. Drag the entire project folder into the deployment area.
4. Netlify publishes the static files and provides a `netlify.app` URL.
5. Open the URL on a phone and test every major function.
6. Customize the site name if desired.

When making a manual update, drag the updated project folder into the site's deploy area again.

## 8. Professional long-term setup: GitHub + Cloudflare Pages

Recommended repository name:

```text
felam-research-website
```

### Option A — GitHub website upload

Create a GitHub repository and upload all files in this folder. Keep `index.html` at the repository root.

### Option B — Git command line

From this project directory:

```bash
git init
git add .
git commit -m "Initial Felam website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/felam-research-website.git
git push -u origin main
```

Replace the GitHub username and repository URL with your own.

### Cloudflare Pages

1. Sign in to Cloudflare.
2. Open **Workers & Pages**.
3. Create a Pages project.
4. Import the GitHub repository.
5. Select the `main` production branch.
6. For this static site use a no-op build command such as:

```text
exit 0
```

7. Set the build output directory to the directory containing `index.html` (the repository root for this project).
8. Deploy.
9. Cloudflare will provide a `pages.dev` address.
10. Later, connect the custom domain under the project's domain settings.

Cloudflare's Git integration can automatically deploy changes pushed to GitHub.

## 9. Custom domain checklist

Before launch, choose a final domain such as a suitable `.co.ke` or `.com` name that is available and legally appropriate for the business.

After purchasing the domain:

- connect it to Netlify or Cloudflare Pages;
- enable HTTPS;
- replace `YOUR-DOMAIN.example` in `index.html`, `sitemap.xml` and JSON-LD;
- verify the canonical URL;
- verify Open Graph image URLs;
- submit the sitemap in Google Search Console.

## 10. WhatsApp testing checklist

Test from an actual phone before public launch:

- [ ] Hero WhatsApp button opens the correct number.
- [ ] Floating WhatsApp button opens the correct number.
- [ ] M-Pesa confirmation button opens the correct number.
- [ ] Enquiry form transfers the entered details correctly into WhatsApp.
- [ ] Phone link starts a call on mobile.
- [ ] Email link opens the phone's mail application.
- [ ] Long enquiry text is readable and complete.

The website uses:

```text
https://wa.me/254726563754
```

## 11. M-Pesa testing checklist

The website displays:

```text
M-Pesa Till Number: 549397
Business name: Felam Research Consultancy & Writing Solutions
```

Before launch:

- [ ] Confirm the Till number is correct with the business owner.
- [ ] Confirm the displayed business name matches the payment account.
- [ ] Test the copy button on Android/iPhone.
- [ ] Make a small real transaction only if appropriate and authorized.
- [ ] Confirm the payment notification is received by the intended business account.
- [ ] Confirm the WhatsApp payment-confirmation workflow.

The website itself does **not** process M-Pesa payments; it only displays the Till information and provides a confirmation contact route.

## 12. Security and privacy checklist

- Do not place M-Pesa PINs, passwords, API secrets or private keys in this repository.
- Do not upload identifiable participant datasets to GitHub.
- Keep research datasets outside the public website repository.
- Use HTTPS on the final domain.
- Review the privacy notice whenever analytics or third-party services change.
- If Felam begins handling sensitive research/participant data at scale, obtain appropriate professional privacy/legal advice and implement suitable data-processing controls.

## 13. Content maintenance

Main website content is in `index.html`.

Pricing can be updated in the pricing cards.

Contact details appear in several places, including WhatsApp links. If the phone number changes, search the repository for:

```text
254726563754
0726 563 754
```

The M-Pesa Till appears as:

```text
549397
```

## 14. Local testing before deployment

You can simply open `index.html` in a modern browser. For a more realistic local test, run a simple local server from the project folder:

### Python

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

### VS Code

Install the **Live Server** extension and open `index.html` with Live Server.

## 15. Pre-launch acceptance test

### Desktop

- [ ] Chrome test
- [ ] Edge test
- [ ] Firefox test
- [ ] Navigation anchors work
- [ ] No broken images
- [ ] No missing CSS/JS
- [ ] Privacy and Terms pages open
- [ ] Pricing is correct
- [ ] Contact details are correct

### Mobile

- [ ] Android Chrome test
- [ ] iPhone Safari test
- [ ] Menu opens/closes
- [ ] Buttons are easy to tap
- [ ] WhatsApp works
- [ ] Phone link works
- [ ] Email link works
- [ ] M-Pesa Till is readable/copyable
- [ ] Social share preview is acceptable

### Search

- [ ] Final domain inserted everywhere
- [ ] Sitemap submitted
- [ ] Search Console verified
- [ ] Canonical URL checked
- [ ] `robots.txt` checked
- [ ] Structured data checked
- [ ] Favicon visible
- [ ] Social preview checked

## 16. Important note about pricing and academic services

Prices shown on the website are **indicative** and should be confirmed in a written quotation. Academic assistance should be delivered in a way that complies with each institution's academic-integrity rules.

## 17. Official documentation used for deployment guidance

- Netlify deployment: https://docs.netlify.com/deploy/create-deploys/
- Cloudflare Pages static HTML: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- Cloudflare Git integration: https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/
- Cloudflare Web Analytics: https://developers.cloudflare.com/web-analytics/get-started/
- Google Search documentation: https://developers.google.com/search/docs/appearance
- Google Business Profile eligibility: https://support.google.com/business/answer/13763036


## Data Analysis Training & Skills Development

The website includes a dedicated training service offering practical, hands-on learning in:

- Python
- R
- STATA
- Microsoft Excel
- Data cleaning and preparation
- Statistical analysis and interpretation
- Data visualization and reporting
- Research data workflows
- Project-based exercises

Training can be arranged as one-to-one sessions, small groups, workshops, or customized institutional capacity-building. Training fees are quotation-based and should be agreed according to scope, duration, group size, delivery format, and learning objectives.

## Professional Training Catalogue

Felam offers practical, skills-focused training for students, researchers, health professionals, programme teams and organisations.

### Research Foundations
- Research Methodology
- Quantitative Research Methods
- Qualitative Research Methods
- Research Ethics / Good Clinical Practice (GCP)

### Digital Data Collection & Management
- KoboToolbox Essentials
- Advanced KoboToolbox / XLSForm
- REDCap
- Data Management for Research

### Biostatistics, Epidemiology & Analytics
- Biostatistics for Health Research
- Epidemiological Methods
- R for Health Research
- Stata for Epidemiology
- Data Analysis using Python, R, STATA and Microsoft Excel
- Research Data Visualization

### Research & Programme Practice
- Implementation Research
- Research Project Management
- Grant Proposal Writing

### Scientific Communication
- Scientific Writing
- Abstract Writing
- Systematic Review & Meta-analysis

Training may be delivered one-to-one, in small groups, through workshops, or as customised institutional capacity-building. Course content, duration, practical exercises and delivery format can be tailored to the client's needs.
