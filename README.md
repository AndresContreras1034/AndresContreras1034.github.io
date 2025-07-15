# Developer Portfolio – AndresContreras1034

Personal website showcasing my profile as a Systems Engineering student, with a focus on backend development, automation, and data analysis. The goal is to present my skills, certifications, projects, and professional roadmap in a visual, structured, and accessible way through my own domain.

---

## 🌐 Live Links

- [andrescontreras1034.github.io](https://andrescontreras1034.github.io)
- [andrescontreras1034.me](https://andrescontreras1034.me) *(custom domain connected via GitHub Pages)*

---

## 🚀 Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript
- **Hosting:** GitHub Pages
- **Domain:** `.me` connected via DNS and CNAME
- **Extras:** Shields.io, Mermaid.js, SVG images, responsive design

---

## 📁 Project Structure

developer-portfolio/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       └── (Kirby, badges, photos, projects)
├── index.html
├── CNAME
└── README.md

---

## 📌 Overview

This project was created with the goal of having a professional technical portfolio hosted on GitHub Pages, but connected to a custom `.me` domain for use in applications, scholarships, professional networks, and interviews.

It includes:
- A clean and responsive navigation menu
- Project cards with technologies used and status
- Integration with my GitHub and LinkedIn
- Interactive and updated technical roadmap
- Modern and maintainable design

---

## 📊 Data Analysis Integration

As part of my focus on data analysis, I plan to include:
- Interactive dashboards using JavaScript libraries (e.g., Chart.js, D3.js)
- Data-driven project summaries and visualizations
- Integration with datasets and APIs for real-time insights
- Case studies demonstrating data cleaning, transformation, and visualization

---

## 🧩 Project Architecture (UML Mermaid)
```mermaid
graph TD

Start([Start: Build the web portfolio])
Start --> Files
Start --> Repo

subgraph Site Structure
  Files --> HTML[index.html]
  Files --> CSS[styles.css]
  Files --> JS[main.js]
end

Repo[Repository: AndresContreras1034.github.io]
Repo --> GitHubPages[GitHub Pages: Static hosting]
GitHubPages --> WebGitHub[andrescontreras1034.github.io]

subgraph Custom Domain
  DNS[DNS configured in Namecheap]
  CNAME[CNAME file with domain]
end

DNS --> GitHubPages
CNAME --> GitHubPages

GitHubPages --> WebFinal[andrescontreras1034.me]

subgraph Final Result
  WebFinal --> End([Website online and accessible])
end

```
