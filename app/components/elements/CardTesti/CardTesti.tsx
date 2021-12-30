import Image from "next/image";

type Props = {
  text: string;
  name: string;
  image: string;
};

const CardTesti = ({ text, name, image }: Props) => {
  return (
    <div className="relative h-full">
      <div className="absolute z-10 flex justify-center w-full -top-10">
        <Image
          className="rounded-full"
          src={"/image/hero.svg"}
          alt={""}
          height={75}
          width={75}
        />
      </div>

      <div className="relative bg-primary-50 w-full h-full rounded-48 text-center">
        <div className="pt-16">&quot; {text} &quot;</div>
        <div className="absolute bottom-4 w-full text-secondary-orange font-semibold">
          {name.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default CardTesti;
