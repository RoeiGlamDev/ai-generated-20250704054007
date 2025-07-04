import Image from 'next/image';

export default function ImageWithAlt({ src, alt, width, height }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="image"
    />
  );
}