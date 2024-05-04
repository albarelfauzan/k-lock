import styles from "../../style";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShareHero = () => {
  const [keyType, setKeyType] = useState("permanent");
  const [duration, setDuration] = useState("1 Hour");

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
              Share Key
            </h1>
          </div>

          <p
            className={`${styles.paragraph} ss:font-['inter'] text-[#12141D] text-center max-w-[600px] mt-5`}
          >
            Ready to share your keys? Select the key type, duration, and enter
            the guest's address to effortlessly share your keys.
          </p>
          <p
            className={`${styles.paragraph} text-[#12141D] ss:text-2xl text-lg ss:font-['Space Gortesk'] font-bold mt-6 text-center max-w-[600px] `}
          >
            Choose Key Type
          </p>
          {/* radio button */}
          <div className="form-control mt-4">
            <label className="label cursor-pointer flex items-center">
              <input
                type="radio"
                name="keyType"
                className="radio checked:bg-black"
                checked={keyType === "permanent"}
                onChange={() => setKeyType("permanent")}
              />
              <span className="ml-2 text-lg">Permanent</span>
            </label>
            <label className="label cursor-pointer flex items-center">
              <input
                type="radio"
                name="keyType"
                className="radio checked:bg-black"
                checked={keyType === "temporary"}
                onChange={() => setKeyType("temporary")}
              />
              <span className="ml-2 text-lg">Temporary</span>
            </label>
          </div>

          {keyType === "temporary" && (
            <div className="mt-4">
              <label className="block text-lg ss:font-['Space Gortesk'] font-medium text-gray-700">
                Duration
              </label>
              <select
                className="mt-1 block w-full ss:px-48 py-2 px-24 ss:font-['Space Gortesk'] font-medium text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black sm:text-sm rounded-md"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option>1 Hour</option>
                <option>5 Hour</option>
                <option>1 Day</option>
                <option>1 week</option>
              </select>
            </div>
          )}
          <p
            className={`${styles.paragraph} text-[#12141D] ss:text-2xl text-lg ss:font-['Space Gortesk'] font-bold mt-6 text-center max-w-[600px] `}
          >
            Input Guest Address
          </p>
          <input
            type="text"
            placeholder=""
            className="input input-bordered ss:px-56 w-full max-w-xs rounded-md border-gray-300 mt-5"
          />
          <button
            onClick={goToKeyInstruction}
            className="text-white font-poppins bg-black px-6 py-2.5 rounded-full ss:mt-8 mt-6"
          >
            Share Key
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShareHero;
