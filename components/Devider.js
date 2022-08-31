import Image from "next/dist/client/image";

const Devider = () => {
  return (
    <div className="relative h-px w-full bg-border-default">
      <div className="absolute left-1/2 -top-5 -translate-x-1/2 bg-white px-3">
        <Image
          src="/images/icons/link.svg"
          height={56}
          width={56}
          alt="linkchain"
        />
      </div>
    </div>
  );
};

export default Devider;
