const TextTitle = ({ titleRef }) => {
  return (
    <>
      <div
        className='headline-div sm:pl-16 sm:pt-20 md:pt-16 2xl:pt-32 w-fit relative z-10'
        ref={titleRef}
      >
        <h1 className='headline-1 '>
          I am a <span className='text-black'>Full Stack</span>™
        </h1>
        <h1 className='headline-1 -my-10 sm:-my-6 md:my-4 '>Web Developer</h1>
        <h1 className='headline-1 '>to hire</h1>
      </div>
    </>
  );
};

export default TextTitle;
