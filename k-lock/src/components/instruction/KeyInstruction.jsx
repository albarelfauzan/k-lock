import styles from "../../style";
import { instruction } from "@/assets";
import { useNavigate } from "react-router-dom";

const KeyInstruction = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`flex-1 flex-col`}>
        <div className={` ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-center text-center w-full">
            <h1 className=" font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              Open Key Instruction
            </h1>
          </div>
          <ul className="list-disc pl-6 text-white font-poppins font-semibold text-xl mt-10">
            <li>Go to manage keys</li>
            <li>Click your key to get into keys detail page</li>
            <li>Click Open key</li>
            <li>
              Scan the QR code in the smart lock door to get the wallet address
            </li>
            <li>Open your wallet</li>
            <li>
              Send the NFT home key to the smart lock door wallet address{" "}
            </li>
            <li>Get inside ur home safely!</li>
          </ul>
          <img src={instruction} alt="Key Instruction" className="mt-4" />
          <button
            onClick={goToHome}
            className="text-black font-poppins font-medium bg-white px-6 py-2.5 rounded-full ss:mt-8 mt-6"
          >
            Back Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default KeyInstruction;
