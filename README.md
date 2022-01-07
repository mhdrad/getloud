# My portfolio

I've created this repository with Next.js recommended technologies to excel my knowledge. Furthermore, I've used best practices to configure and implement this repository.

I've utilized my portfolio with these tools:

- [Next.js](https://nextjs.org/) as the framework.
- [Prisma](https://prisma.io/) is the ORM and hold db migrations
- [PlanetScale](https://planetscale.com) is the database.
- [tRPC](https://trpc.io/) used for APIs typesafty.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Vercel](https://vercel.com) for deployment and hosting.

## Running locally

Run the development server:

```bash
# copy .env file
cp .env.example .env
```

Open .env file and fill environment variables. (**Note that** Since I haven't run the code with MySQL, I recommend using [PlanetScale](https://planetscale.com).)

Then:

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
