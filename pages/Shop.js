import Image from "next/image";
import Link from "next/link";
const Shop = () => {
  return (
    <div className="bg-slate-600 grid grid-cols-2 gap-7  content-center pt-11 m-auto">
      <div>
        <Image
          src="/maicazeze.jpg"
          width="200"
          height="200"
          alt="maica e zez"
        />
        <Link href="/Order">
          <span>Buy Now</span>
        </Link>
      </div>
      <div>
        <Image
          src="/maicabardh.jpg"
          width="200"
          height="200"
          alt="maica e zez"
        />
        <Link href="/Order">
          <span>Buy Now</span>
        </Link>
      </div>
      <div>
        <Image
          src="/maicaperhimt.jpg"
          width="200"
          height="200"
          alt="maica e zez"
        />
        <Link href="/Order">
          {" "}
          <span>Buy Now</span>
        </Link>
      </div>
      <div>
        <Image
          src="/maicakuqe.jpg"
          width="200"
          height="200"
          alt="maica e zez"
        />
        <Link href="/Order">
          {" "}
          <span>Buy Now</span>
        </Link>
      </div>
    </div>
  );
};
export default Shop;
