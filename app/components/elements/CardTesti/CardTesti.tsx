import Image from "next/image";

type Props = {
  text: string;
  name: string;
};

const CardTesti = ({ text, name }: Props) => {
  return (
    <div className="relative h-full">
      <div className="absolute z-10 flex justify-center w-full -top-10">
        <Image
          className="rounded-full"
          src={"/image/profpic.svg"}
          alt={""}
          height={75}
          width={75}
        />
      </div>

      <div className="relative bg-primary-50 w-full h-full rounded-24 md:rounded-36 text-center flex items-center">
        <div className="absolute z-10 top-5 left-5">
          <Image
            className="rounded-full"
            src={"/assets/icon/quote.svg"}
            alt={""}
            height={24}
            width={34}
          />
        </div>
        <div className="text-body3 md:text-body1 px-4 md:px-[30px]"> {text} </div>
        <div className="absolute bottom-4 w-full font-bold bg-orange-red-gradient text-transparent bg-clip-text">
          {name.toUpperCase()}
        </div>
        <div className="absolute z-10 bottom-5 right-5 rotate-180">
          <Image
            className="rounded-full"
            src={"/assets/icon/quote.svg"}
            alt={""}
            height={24}
            width={34}
          />
        </div>
      </div>
    </div>
  );
};

export default CardTesti;
