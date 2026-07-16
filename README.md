# Geez Cyber Lab 🛡️🧪
> A Purposely Vulnerable Assessment Platform for Next-Gen Cybersecurity Education.

[![Security-Safe](https://img.shields.io/badge/Security-Intentionally_Vulnerable-red.svg)](#-warning--disclaimer)
[![Platform](https://img.shields.io/badge/Environment-Isolated_Labs-blue.svg)](#installation)
[![Author](https://img.shields.io/badge/Developer-Jo_(Yohanes_Mulugeta)-green.svg)](https://github.com/yohanesmulugeta)

Unlike traditional training environments like DVWA or OWASP Juice Shop which focus strictly on *teaching* and step-by-step guidance, **Geez Cyber Lab** is engineered specifically for **student assessment, testing, and automated grading**. 

It provides instructors with a robust, black-box style infrastructure to evaluate students' hands-on offensive security capabilities in realistic lab and exam environments.

---

## 🚀 Key Features & Architecture

* **Automated Grading Engine:** Built-in verification logic for each challenge that programmatically validates student exploits.
* **Instructor Command Center:** Streamlined dashboard to assign tasks, open/close modules, and monitor exam progress.
* **Student Matrix Dashboard:** Clear interface for students to track active labs, submit flags/proofs, and view immediate grading feedback.
* **Zero-Overhead Deployment:** Lightweight PHP/SQLite architecture requiring minimal server overhead—deployable on local testbeds in seconds.

---

## 🎯 Supported Vulnerability Modules

The platform features a curated matrix of OWASP Top 10 vulnerabilities, structured to test critical thinking rather than simple pattern matching:

| Category | Vulnerability Module | Assessment Focus |
| :--- | :--- | :--- |
| **Injection** | SQL Injection (SQLi) & NoSQL Injection | Dynamic query bypass & data exfiltration |
| **Authentication** | OTP Bypass & Username Enumeration | Brute-force resistance & logic sequence testing |
| **Session State** | JWT Attacks & IDOR | Token tampering, signature validation bypass, & privilege escalation |
| **Client-Side** | Cross-Site Scripting (XSS) & CORS | Session hijacking & cross-origin data theft |
| **Server-Side** | Server-Side Request Forgery (SSRF) | Internal network scanning & metadata access |
| **Business Logic** | Multi-step Transaction Flaws | Manipulation of workflow states & boundary values |

---

## ⚙️ Installation & Setup

Geez Cyber Lab is designed to run in highly restricted environments with minimal external dependencies.

### Prerequisites
* Web Server (Apache, Nginx, or local stacks like XAMPP / Laragon)
* PHP 8.x+ with SQLite3 support enabled (`php-sqlite3`)

### Deployment Steps

1. **Clone the Repository**
   ```bash
   git clone [https://github.com/yourusername/geez-cyber-lab.git](https://github.com/yourusername/geez-cyber-lab.git)
   cd geez-cyber-lab
