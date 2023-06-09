<div align="center">
    <a href="https://kronos.earth"><h1 align="center">kronos.earth</h1></a>
    
My personal website, built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Upstash](https://upstash.com), [Contentlayer](https://www.contentlayer.dev/) and deployed to [Vercel](https://vercel.com/).

</div>

<br/>



## Running Locally


```sh-session
git clone https://github.com/jbxamora/kronos.earth.git
cd privport
```

Create a dotenv file with these variables
```sh-session
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
NEXT_PUBLIC_BEAM_TOKEN=
GA_TRACKING_ID=google analytics
```

Then install dependencies and run the development server:
```sh-session
pnpm install
pnpm dev
```


## Cloning / Forking

Please remove all of my personal information (projects, images, etc.) before deploying your own version of this site.