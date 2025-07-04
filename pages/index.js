import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Welcome to the Home Page</h1>
      <Image
        src="https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Smiling woman preparing fresh fruit in a sunlit kitchen, embodying a healthy lifestyle."
        width={940}
        height={650}
      />
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}