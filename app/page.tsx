import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css'; 
import { lusitana, smokum } from '@/app/ui/fonts';
import Image from 'next/image';
import LabIcon from '@/app/components/BeakerIcon';
import LoginForm from '@/app/ui/login-form';

export default function Home() {
  return (
   <main className='--smokum-font flex min-h-screen flex-col p-2'>
    <div className='#'>
      <AcmeLogo />
    </div>
    <div className='mt-4 flex grow flex-col gap-4 md:flex-row' />
    <div className='flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20'>
      <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
      <div className={styles.shape}>
        <p className={`${smokum.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
          <strong>Welcome to Bill's Web App </strong>This is a react next.js environment{' '}
          <a href="https://nextjs.org/learn/" className="text-blue-400"> Next.js Learn Course</a> 
          Framework Next.js made by Vercel.
        </p>
        <Link href='./login' className='flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base'>
          <LabIcon />
          <span>Log in</span> 
        </Link>
      </div>
      <div className='lex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12'>
        <Image
          src='/hero-desktop.png'
          width={1000}
          height={760}
          className="hidden md:block"
          alt='Screenshots of the dashboard project showing desktop version'
        />
        <Image
          src='/hero-mobile.png'
          width={560}
          height={620}
          className="block md:hidden"
          alt='Screenshot of the dashboard project showing mobile version'
        />
      </div>
    </div>
    <h1>Home Page </h1>
    <Link className='btn myBtn' href="/users">Users</Link>
   </main>
  );
}

/* from nextjs-dashboard Page()
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo /> 
      </div>
=      <div className="mt-4 flex grow flex-col gap-4 md:flex-row" />
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
        <div className={styles.shape}>
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link href="/login" className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
          <LabIcon />
            <span>Log in</span> 
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
          src='/hero-desktop.png'
          width={1000}
          height={760}
          className="hidden md:block"
          alt='Screenshots of the dashboard project showing desktop version'
        />
        <Image
          src='/hero-mobile.png'
          width={560}
          height={620}
          className="block md:hidden"
          alt='Screenshot of the dashboard project showing mobile version'
        />
        </div>
        <section>
          <LoginForm />
        </section>
      </div>
    </main>
  );
}
*/
