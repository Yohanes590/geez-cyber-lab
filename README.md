#Geez Cyber Lab -- Vulnerable Assessment Platform

Cyber Lab is a purposely vulnerable web application designed for
cybersecurity student assessments. Unlike DVWA, Cyber Lab is focused on
testing and grading students instead of teaching them. Each module
contains real-world vulnerabilities that students must exploit to
complete their lab exams.

## Features

-   Multiple vulnerable modules:
    -   XSS
    -   SQL Injection
    -   OTP Bypass
    -   Username Enumeration
    -   JWT Attacks
    -   IDOR
    -   Business Logic Flaws
    -   CORS
    -   SSRF
    -   NoSQL Injection
-   Auto-grading logic for each challenge
-   Instructor assignment management
-   Student dashboard
-   SQLite database integration
-   Simple UI
-   Easy deployment for labs or exams

## Installation

1.  Clone the repository\
2.  Place the project inside your server directory (XAMPP, Laragon, or
    Linux Apache)\
3.  Make sure the SQLite database file has proper write/read
    permissions\
4.  Open the project in the browser and start testing the modules

## Warning

Cyber Lab contains intentional security vulnerabilities.\
Do not deploy it on a public or production server.\
Use it only in isolated environments, labs, or exam setups.

## Developer

Built by Jo (Yohanes Mulugeta)
