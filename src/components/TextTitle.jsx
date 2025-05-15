const TextTitle = ({ titleRef }) => {
  return (
    <>
      <div
        className='headline-div pl-16 pt-16 2xl:pt-48 w-fit relative z-10'
        ref={titleRef}
      >
        <h1 className='headline-1 '>
          I am a <span className='text-black'>Full Stack</span>™
        </h1>
        <h1 className='headline-1 my-4 '>Web Developer</h1>
        <h1 className='headline-1 '>to hire</h1>
      </div>
    </>
  );
};

export default TextTitle;
