import Image from "next/image";
import slideImg from "@/assets/images/update/slide.png";

const Slide = () => {
  return (
    <div className="relative slide h-[51.75vw] max-md:h-[78.4vw]">
      <Image
        src={slideImg}
        alt="slide"
        className="w-screen -z-10 h-[51.75vw] max-md:h-[78.4vw] object-cover"
      />
      <div className="z-40 w-full blur__bottom"></div>
    </div>
  );
};

export default Slide;
