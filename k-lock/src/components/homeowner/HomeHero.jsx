import styles from "../../style";
import { logoText } from "../../assets";
import { useNavigate } from "react-router-dom";
const HomeHero = () => {
  const navigate = useNavigate();

  const goToKeyInstruction = () => {
    navigate("/openkey");
  };
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`flex-1 flex-col`}>
        <div className={` ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-center text-center w-full">
            <h1 className=" font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
              Home Owner
            </h1>
          </div>

          <p
            className={`${styles.paragraph} ss:font-['inter'] text-[#12141D] text-center max-w-[600px] mt-5`}
          >
            Welcome, Homeowners! In this section, you can view information about
            your keys, smart lock locations, and codes. and, utilize your keys.
          </p>
          <p
            className={`${styles.paragraph} text-[#12141D] ss:text-2xl text-lg ss:font-['Space Gortesk'] font-bold mt-6 text-center max-w-[600px] `}
          >
            Key : xxxxxxx
          </p>
          <p
            className={`${styles.paragraph} text-[#12141D] ss:text-2xl text-lg ss:font-['Space Gortesk'] font-bold mt-6 text-center max-w-[600px] `}
          >
            Smart Lock Location : xxxxxxxxxx
          </p>
          <p
            className={`${styles.paragraph} text-[#12141D] ss:text-2xl text-lg ss:font-['Space Gortesk'] font-bold mt-6 text-center max-w-[600px] `}
          >
            Smart Lock Code : xxxxxxxxxx
          </p>
          <button
            onClick={goToKeyInstruction}
            className="text-white font-poppins bg-black px-6 py-2.5 rounded-full ss:mt-8 mt-6"
          >
            Open Key
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
