# Job Application Tracker

A React-based job application tracker to help manage your job search process. Built with Vite, React, and Tailwind CSS.

## Features

- **Add new job applications** with company name, role, location, date applied, and status
- **View all jobs** in a clean card-based layout
- **Update status** by clicking on the status badge (Applied, Interview, Offer, Rejected)
- **Delete jobs** with a single click
- **Filter by status** to view specific categories
- **Search by company name** to quickly find applications
- **Status summary** showing count of jobs per status
- **Persistent storage** using localStorage (data survives page refresh)
- **Responsive design** works on mobile and desktop

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS
- localStorage for data persistence

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This app can be deployed for free on:
- **Netlify**: Connect your GitHub repo and enable auto-deploy
- **Vercel**: Import the project from GitHub

## Current Applications

The tracker comes pre-loaded with 8 actual job applications:

1. Webmax Solution - Junior Full-Stack Developer
2. YO IT Consulting - Document Reviewer
3. Micro1 - Generalist
4. Alignerr - Generalist
5. Hire Feed - AI Trainer
6. Jobgether - Data Annotation Analyst
7. Assist World - Virtual Assistant
8. Alirian - AI Developer Intern

## What Was Hard

- Understanding React's key prop requirement for lists (needed for efficient re-rendering)
- Managing state across multiple components
- Implementing localStorage with useEffect to persist data

## What I Would Do Next

- Add edit functionality for existing job details
- Add notes field for each application
- Implement drag-and-drop for status changes
- Add export to CSV functionality
- Create charts/visualizations for application statistics
- Add reminders for follow-up dates
- Integrate with job board APIs to auto-populate applications

## Why React Needs Keys

React uses keys to identify which items have changed, been added, or been removed. Keys help React efficiently update the DOM by matching elements in the virtual DOM to actual DOM nodes. Without keys, React may re-render all items unnecessarily, leading to performance issues and potential bugs (like incorrect state when reordering lists).
