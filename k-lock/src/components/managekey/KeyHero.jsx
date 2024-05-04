import styles from "../../style";
import { logoText } from "../../assets";
import { useNavigate } from "react-router-dom";

const KeyHero = () => {
  const navigate = useNavigate();

  const goToHomeOwner = () => {
    navigate("/homeowner");
  };

  const goToShareKey = () => {
    navigate("/sharekey");
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
              Manage Keys
            </h1>
          </div>

          <p
            className={`${styles.paragraph} ss:font-['inter'] text-[#12141D] text-center max-w-[600px] mt-5`}
          >
            Here, you can easily manage your keys by sharing them or using them
            to unlock your home security system.
          </p>
          <h1 className="font-['Space Grotesk'] font-bold text-[#12141D] ss:text-[30px] text-[25px] text-black ss:leading-[100.8px] leading-[75px]">
            Home Owner
          </h1>
          <div className="flex items-center p-4 bg-white border border-gray-300 rounded-md">
            <input
              type="text"
              value="Key: xxxxxx"
              readOnly
              className="flex-grow text-lg font-['Space Grotesk'] font-medium text-[#12141D] p-2 text-gray-700 bg-white border-none focus:ring-0"
            />
            <button
              onClick={goToHomeOwner}
              className="text-white font-poppins bg-black ss:ml-16 px-4 py-2 rounded-full w-full"
            >
              See Key
            </button>
          </div>
          <h1 className="font-['Space Grotesk'] font-bold text-[#12141D] ss:text-[30px] text-[25px] text-black ss:leading-[100.8px] leading-[75px]">
            Share Key
          </h1>
          <p
            className={`${styles.paragraph} text-[#12141D] ss:font-['inter'] ss:font-medium text-center max-w-[600px] `}
          >
            Share your one time keys to your friend and family
          </p>
          <button
            onClick={goToShareKey}
            className="text-white font-poppins bg-black px-6 py-2.5 rounded-full mt-5"
          >
            Share Your Key
          </button>
        </div>
      </div>
    </section>
  );
};

export default KeyHero;
