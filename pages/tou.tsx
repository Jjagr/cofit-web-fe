import { TOUHTML } from "@constant/index";
import NavOver from "@layout/NavOver/NavOver";
import Head from "next/head";

const Tou = () => {
  return (
    <NavOver>
      <Head>
        <title>Terms of Use</title>
      </Head>
      <div className="md:p-[120px] pt-24 p-8">
        <div dangerouslySetInnerHTML={{ __html: TOUHTML }} />
      </div>
    </NavOver>
  );
};

export default Tou;