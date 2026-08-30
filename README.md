# DevSecOps Security Pipeline

A practical CI/CD security pipeline that automatically detects
source-code vulnerabilities, exposed secrets, dependency issues,
container vulnerabilities, and web application security issues
before deployment.

## 🔐 Security Pipeline

Code / Pull Request
        ↓
GitHub Actions
        ↓
┌─────────────────────────────┐
│ Semgrep       → SAST        │
│ TruffleHog    → Secrets     │
│ npm audit     → Dependencies│
│ Docker        → Build       │
│ Trivy         → Container   │
│ OWASP ZAP     → DAST        │
└─────────────────────────────┘
        ↓
Security Validation
        ↓
GHCR Release

## 🛠️ Tools Used

| Tool | Purpose |
|------|---------|
| GitHub Actions | CI/CD automation |
| Semgrep | Static Application Security Testing (SAST) |
| TruffleHog | Secret detection |
| npm audit | Dependency vulnerability scanning |
| Docker | Containerization |
| Trivy | Container vulnerability scanning |
| OWASP ZAP | Dynamic Application Security Testing (DAST) |
| GitHub Container Registry | Container image publishing |

## 🚦 Workflows

### 01 - PR Security
Runs security checks when a pull request is created or updated.

### 02 - Docker Build
Builds the application container.

### 03 - Trivy Image Scan
Scans the Docker image for vulnerabilities.

### 04 - OWASP ZAP Baseline Scan
Performs automated web application security testing.

### 05 - Publish Image to GHCR
Publishes the validated container image to GitHub Container Registry.

## 🧪 Security Testing

The repository includes intentionally vulnerable test cases
to demonstrate how security tools detect issues during CI/CD.

Example workflow:

Vulnerable Code
→ Security Scan
→ Finding Detected
→ Pipeline Failure
→ Remediation
→ Re-test
→ Pipeline Pass

## 📊 Pipeline Evidence

Add screenshots here showing:

- Successful PR security scan
- Failed security scan
- Semgrep finding
- Trivy scan
- OWASP ZAP scan
- Successful Docker build
- GHCR image publication

## 🚀 Running the Project

### Clone

```bash
git clone https://github.com/priyan-18/devsecops-demo.git
cd devsecops-demo
Install dependencies
npm install
Run application
npm start

The GitHub Actions workflows automatically perform the
security checks when the relevant events occur.

🎯 Project Goals
Shift security left in the development lifecycle
Automate security testing in CI/CD
Detect vulnerabilities before deployment
Demonstrate practical DevSecOps implementation
Provide repeatable security checks for application delivery
📈 Future Improvements
Security dashboard
SBOM generation
Dependency update automation
Artifact signing
Deployment security gates
Cloud security integration
👨‍💻 Author

Priyadharshan S

Cybersecurity | Cloud Security | DevSecOps
