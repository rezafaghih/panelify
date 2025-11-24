# Panelify — A Modern React Dashboard & Admin Panel Template

**Panelify** is a fully customizable React-based dashboard and admin panel template designed to help developers build user management systems, account dashboards, and admin interfaces with maximum speed and minimal effort.

Creating a complete dashboard UI is often time-consuming and repetitive. Panelify solves this problem by offering a clean architecture, pre-built components, flexible layouts, and complete customization options—allowing you to focus on functionality instead of UI boilerplate.

---

## 🚀 Key Features

- ⚡ React-powered architecture for fast and modern development  
- 🎨 Fully customizable components (colors, titles, layout, widgets, etc.)  
- 🧩 Modular design system for building pages exactly how you want  
- 📁 Easy page creation workflow using configuration files  
- 🧱 Includes layout system, sidebar navigation, icons support, and reusable UI blocks  
- 🔧 Perfect for dashboards, management systems, CRMs, analytics pages, and more  

---

## 🧠 How Panelify Works

Panelify is built around three core layers:

### 1. Page Structure  
Create new dashboard pages easily with reusable layout templates.

### 2. Dashboard Customization  
Adjust the main title, theme colors, layout styles, and UI appearance directly from config files.

### 3. Reusable Components  
Use pre-built, fully customizable components to create any page structure quickly.

This architecture helps you build complex dashboards faster, cleaner, and without repetitive UI coding.

---

## 📦 Installation

Make sure you have:

- Node.js v20+ installed

### Step 1 — Clone the project
```bash
git clone https://github.com/rezafaghih/panelify.git
```

### Step 2 — Install dependencies

```bash
cd panelify
npm install
```


### Step 3 — Start the development server
```bash
npm run dev
```
Your Panelify project is now running locally.

## Routing System in Panelify
Panelify uses a simple and efficient two-step routing configuration.

### ✅ Step 1 — Add a new sidebar button
Open the file:
```bash
src/configs/sidebar.json
```
Inside the buttons array, add a new object like this:
```json
{
  "title": "خانه",
  "eng_title": "home",
  "icon": "PiListDashesDuotone",
  "path": "/",
  "uniqID": "BUTTON-1"
}
```

## 📌 Button Field Definitions

| Field      | Description |
|------------|-------------|
| **title**      | The main (Persian) display title of the button |
| **eng_title**  | English title (useful for multilingual dashboards) |
| **icon**       | Icon name from `react-icons` (e.g., `FaHome`, `PiUserDuotone`) |
| **path**       | URL path of the page |
| **uniqID**     | Unique identifier for the button (avoid duplicates) |

After adding the button, Panelify automatically includes it in the sidebar navigation.

### 🛠 Customization Options

Panelify supports full customization, including:

Theme colors

Sidebar items

Page titles

Layout structure

Icons via react-icons

Component arrangements

Easily adapt Panelify to match any brand or product style.

