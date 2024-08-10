# 📓 PadhaiKarle - A note sharing website

Heavily inspired by [AncoreNotes](https://github.com/ancoreraj/NotesPuker), PadhaiKarle is a notes sharing website you can easily host for your college.

## ▲ tech stack
- **Web Framework**: [Next.js](https://nextjs.org/)
- **UI**: [TailwindCSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) + [Magic UI](https://magicui.design/)
- **Database**: [Drizzle ORM](https://orm.drizzle.team/) + [PostgresQL](https://www.postgresql.org/)
- **Auth**: [Lucia](https://lucia-auth.com/)

## ▲ dev

 - Make a `.env.local` file and populate it with following values:

   ```env
    DATABASE_URL="postgresql://<user>:<password>@localhost:5432/<your-db>"
    LUCIA_AUTH_URL="http://localhost:3000"
    
    GOOGLE_CLIENT_ID=<your_google_client_id>
    GOOGLE_CLIENT_SECRET=<your_google_client_secret>
    ```
 - Use your favorite JavaScript package manager to run some scripts:

   ```bash
   bun run db:push
   bun dev
   ```
