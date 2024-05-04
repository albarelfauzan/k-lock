import styles from "../../style";

const ProductCode = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-center text-center w-full">
          <h1 className=" font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            Input Your Product Code
          </h1>
        </div>

        <p className={`${styles.paragraph2} text-center max-w-[470px] mt-5`}>
          Feel free to introduce your product to our system by entering its
          product code here! Let's connect it with <br></br> K-Lock.
        </p>
        <input
          type="text"
          class="form-input mt-6 px-16 py-3 rounded-full sm:w-auto sm:px-16"
        ></input>
        <button className="text-white bg-black px-10 py-2 rounded-full mt-6 text-lg font-semibold hover:bg-gray-900 transition duration-300 ease-in-out transform active:scale-95 sm:px-16">
          Submit
        </button>
      </div>
    </section>
  );
};

export default ProductCode;
