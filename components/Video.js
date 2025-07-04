import Image from 'next/image';

export default function Video({ src, poster }) {
  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      className="video"
    />
  );
}