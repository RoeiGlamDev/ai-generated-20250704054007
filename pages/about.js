import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Page</title>
      </Head>
      <h1>Welcome to the About Page</h1>
      <Image
        src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="A person in a hoodie stands by a serene lake surrounded by lush greenery, enjoying the peaceful outdoors."
        width={940}
        height={650}
      />
      <Link href="/">
        <a>Go to Home Page</a>
      </Link>
      <video
        src="https://videos.pexels.com/video-files/2786540/2786540-hd_1920_1080_25fps.mp4"
        poster="https://images.pexels.com/videos/2786540/free-video-2786540.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
        autoPlay
        loop
        muted
      />
    </div>
  );
}