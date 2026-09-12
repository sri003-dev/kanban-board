# Job Application Tracker

A modern job application tracking dashboard built with Next.js, TypeScript, MongoDB, and Better Auth. It helps users manage the full job search process through a drag-and-drop Kanban board, track each application stage, and keep everything saved to a personal board.

## Features

- Kanban board for tracking job applications by stage
- Drag-and-drop job movement between columns
- Authentication with email/password sign-up and sign-in
- MongoDB-backed persistence for users, boards, columns, and applications
- Default pipeline stages:
  - Wish List
  - Applied
  - Interviewing
  - Offer
  - Rejected
- Responsive dashboard UI built with Tailwind CSS
- Server actions and app router patterns using Next.js 16

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- MongoDB + Mongoose
- Better Auth
- dnd-kit for drag-and-drop interactions
- shadcn/ui-inspired component structure

## Project Structure

```bash
.
├── app/
│   ├── api/
│   ├── dashboard/
│   ├── sign-in/
│   ├── sign-up/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── create-job-dialog.tsx
│   ├── job-application-card.tsx
│   ├── kanban-board.tsx
│   ├── Navbar.tsx
│   └── sign-out-btn.tsx
├── lib/
│   ├── actions/
│   ├── auth/
│   ├── hooks/
│   ├── models/
│   ├── db.ts
│   ├── init-user-board.ts
│   └── utils.ts
├── public/
├── scripts/
│   └── seed.ts
├── .env.example
├── components.json
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
└── README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root and add the following values:

```bash
MONGODB_URI="mongodb://localhost:27017/job-application-tracker"
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"
BETTER_AUTH_SECRET="replace-with-a-long-random-secret"
```

If you are using MongoDB Atlas, set `MONGODB_URI` to your Atlas connection string instead.

### 3. Run the app

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Authentication

The app uses Better Auth with email and password authentication. A user board is created automatically when a new account is created via the `initializeUserBoard` flow.

## Seed Data

You can populate sample job entries with:

```bash
npm run seed:jobs
```

## Available Scripts

```bash
npm run dev          # start the local development server
npm run build        # create a production build
npm run start        # run the production build
npm run lint         # run ESLint checks
npm run seed:jobs    # seed demo job data into MongoDB
```

## Notes

- The app expects a running MongoDB instance or a valid MongoDB connection string.
- The default board is named `Job Hunt` and is created per user.
- The board UI uses drag-and-drop to move jobs between stages and persist ordering changes.

## License

This project is for personal or educational use unless otherwise specified by the repository owner.
