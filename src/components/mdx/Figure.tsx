import Image from "next/image";

const Figure = ({
  src,
  alt,
  caption,
  width = 800,
  height = 450,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-xl outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-pretty text-center text-sm text-zinc-500 dark:text-zinc-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Figure;
