import Image from "next/image";
const HeroMockUp = () => {
  return (
    <div className="relative">
      <div className="absolute top-20" style={{ zIndex: 1 }}>
        <Image src={"/image/mockup.svg"} alt={""} height={738} width={412} />
      </div>
      <div className="absolute h-1 w-20 bg-primary-800 left-72 z-10" style={{top: "340px"}}/>
      <div className="absolute left-56" style={{top: "360px"}}>
        <Image src={"/image/mascot-1.svg"} alt={""} height={297} width={329} />
      </div>
      <div className="absolute left-60 z-20">
        <Image
          src={"/image/movement-assistant.svg"}
          alt={""}
          height={454}
          width={234}
        />
      </div>
    </div>
  );
};

export default HeroMockUp;
