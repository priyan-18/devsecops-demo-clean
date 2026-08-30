# DevSecOps Security Pipeline

> A practical CI/CD security pipeline that integrates automated security testing into the software development lifecycle.

This project demonstrates how security controls can be integrated into GitHub Actions to identify vulnerabilities before application deployment.

The pipeline covers **SAST, secret detection, dependency scanning, container security, DAST, Docker image building, and container publishing**.

---

## 🔐 Security Architecture

```text
                         Developer
                             |
                             v
                    Pull Request / Push
                             |
                             v
                    +------------------+
                    | GitHub Actions   |
                    +------------------+
                             |
          +------------------+------------------+
          |                  |                  |
          v                  v                  v
      Semgrep            TruffleHog         npm audit
       SAST            Secret Detection    Dependencies
          |                  |                  |
          +------------------+------------------+
                             |
                             v
                     Docker Image Build
                             |
                             v
                         Trivy Scan
                    Container Vulnerabilities
                             |
                             v
                       OWASP ZAP
                            DAST
                             |
                             v
                   Security Validation
                             |
                             v
                  GitHub Container Registry

🛡️ Security Controls
Security Control	Tool	Purpose
SAST	Semgrep	Detect security issues in source code
Secret Scanning	TruffleHog	Detect exposed credentials and secrets
Dependency Scanning	npm audit	Identify vulnerable npm dependencies
Containerization	Docker	Package the application into a container
Container Security	Trivy	Scan container images for vulnerabilities
DAST	OWASP ZAP	Test the running application for web vulnerabilities
CI/CD	GitHub Actions	Automate security checks
Container Registry	GHCR	Store validated container images
⚙️ CI/CD Workflows

The project uses separate GitHub Actions workflows for different stages of the security pipeline.

01 — PR Security

Workflow: 01-pr-security.yml

Runs security checks when a pull request targets the main branch.

Checks include:

Semgrep SAST
TruffleHog secret scanning
npm dependency audit

Security findings can cause the corresponding workflow job to fail.

02 — Docker Build

Workflow: 02-docker-build.yml

Builds the application as a Docker image.

The workflow validates that the application can be successfully containerized before continuing through the security pipeline.

03 — Trivy Image Scan

Workflow: 03-image-scan.yml

Scans the Docker image for known vulnerabilities using Trivy.

This provides an additional security layer beyond source-code and dependency scanning.

04 — OWASP ZAP Baseline Scan

Workflow: 04-zap.yml

Performs automated Dynamic Application Security Testing (DAST) against the running application using OWASP ZAP.

This helps identify security issues that may only become visible when the application is running.

05 — Publish Image to GHCR

Workflow: 05-release.yml

Publishes the application container image to GitHub Container Registry after the configured CI/CD stages complete successfully.

🧪 Security Testing

The repository contains intentionally vulnerable test scenarios to demonstrate how security tools behave when vulnerabilities are introduced into the application.

The testing lifecycle follows:
Introduce Vulnerability
        |
        v
Create Pull Request
        |
        v
Security Pipeline
        |
        v
Security Finding
        |
        v
Pipeline Failure
        |
        v
Remediation
        |
        v
Re-run Pipeline
        |
        v
Security Checks Pass

This demonstrates the principle of shifting security left by identifying issues during development rather than after deployment.

📊 Pipeline Evidence

The repository has GitHub Actions workflow runs demonstrating both successful security validation and intentionally triggered security failures.

Examples include:

Successful PR security checks
Intentional Semgrep failure
Docker build validation
Trivy image scanning
OWASP ZAP scanning
Container publishing

Screenshots and detailed evidence will be added as the project documentation is expanded.

🚀 Getting Started
Prerequisites

Install:

Node.js
npm
Docker
Git

GitHub Actions runs the security workflows automatically on the configured GitHub events.

Clone the Repository
git clone https://github.com/priyan-18/devsecops-demo.git
cd devsecops-demo
Install Dependencies
npm ci
Run the Application
npm start
🐳 Docker

Build the application image locally:

docker build -t devsecops-demo .

Run the container:

docker run -p 3000:3000 devsecops-demo

The application can then be accessed locally through:

http://localhost:3000
📁 Project Structure
devsecops-demo/
│
├── .github/
│   └── workflows/
│       ├── 01-pr-security.yml
│       ├── 02-docker-build.yml
│       ├── 03-image-scan.yml
│       ├── 04-zap.yml
│       └── 05-release.yml
│
├── Dockerfile
├── package.json
├── package-lock.json
├── server.js
└── .gitignore
🎯 Project Objectives
Integrate security into CI/CD
Automate security testing
Detect vulnerabilities early in development
Detect exposed secrets
Identify vulnerable dependencies
Scan container images
Perform automated web application security testing
Demonstrate security gates within GitHub Actions
Publish validated container images
🔎 DevSecOps Approach

This project demonstrates a shift-left security approach:

Traditional Development

Code → Build → Deploy → Security Testing


DevSecOps

Code
  ↓
SAST
  ↓
Secret Scanning
  ↓
Dependency Scanning
  ↓
Docker Build
  ↓
Container Scanning
  ↓
DAST
  ↓
Validated Release

Security testing is therefore incorporated throughout the delivery lifecycle rather than being performed only after deployment.

📈 Future Improvements

Planned improvements include:

SBOM generation
Automated dependency updates
Container image signing
Security reporting and dashboards
Artifact verification
Deployment security gates
Cloud security integration
Centralized vulnerability tracking
💡 Skills Demonstrated
GitHub Actions
CI/CD Security
DevSecOps
SAST
DAST
Secret Detection
Dependency Scanning
Container Security
Docker
Trivy
Semgrep
TruffleHog
OWASP ZAP
GitHub Container Registry
👨‍💻 Author

Priyadharshan S

Cybersecurity | Cloud Security | DevSecOps

GitHub: https://github.com/priyan-18


### One correction

I intentionally **didn't claim that all five workflows are one sequential pipeline**. From the workflow files, they are separate GitHub Actions workflows with their own triggers. That's more technically accurate. :contentReference[oaicite:1]{index=1}

**Do this first:** replace the README with the above and commit it.

Then send me a screenshot of how it looks on GitHub. **Next we'll add the actual workflow evidence.**
