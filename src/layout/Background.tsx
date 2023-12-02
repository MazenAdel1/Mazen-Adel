export default function Background() {
  return (
    <>
      <div className="absolute left-[-100px] top-[-100px] z-0 h-[350px] w-[600px] rounded-full bg-[#70FAE3] blur-[600px] lg:h-[500px] lg:w-[800px]  lg:blur-[800px]"></div>
      <div className="absolute right-[-100px] top-[-100px] z-0 hidden h-[350px] w-[600px] rounded-full bg-[#FFFFFF] blur-[600px] sm:block lg:h-[500px] lg:w-[800px]  lg:blur-[800px]"></div>
      <div className="absolute bottom-[-100px] right-[-100px] z-0 h-[350px] w-[600px] rounded-full bg-[#81C1E9] blur-[600px] lg:h-[500px] lg:w-[800px]  lg:blur-[800px]"></div>
      <div className="absolute bottom-[-100px] left-[-100px] z-0 h-[350px] w-[600px] rounded-full bg-[#3098D9] blur-[600px] lg:h-[500px] lg:w-[800px]  lg:blur-[800px]"></div>
      <div className="absolute left-1/2 top-1/2 z-0 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#45BFF7] blur-[600px] lg:h-[500px] lg:w-[800px]  lg:blur-[800px]"></div>
    </>
  );
}
