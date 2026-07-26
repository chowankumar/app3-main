import tick from "./tick.png";

const img2 = "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-10_1_oboai6.png";
const img3 = "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-3_1_1_pcqxsd.png";
const img1 = "https://res.cloudinary.com/dyrncskbs/image/upload/houseofkohior_1748825749_3645737088233606150_67659584357_1_ezaxac.png";



export default function WhyChooseUs() {
  return (
    <section className="bg-[#00303C] text-white py-20 px-6 md:px-12 flex flex-col items-center">
      
      {/* Heading */}
      <div className="text-center max-w-3xl">
        <span className="inline-block px-4 py-1 font-outfit border border-[#C6FF00] text-[#C6FF00] rounded-full font-semibold">
          Why Choose Us
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-6">
         Smart Systems. Real Business Impact.
        </h2>

        <p className="text-gray-300 mt-3">
          We’re not just a service provider we build solutions that work for you.
        </p>
      </div>

      
      <div className="mt-12 w-full flex flex-col lg:hidden items-center">

        {/* Center image — mobile */}
        <img
          src={img1}
          className="w-80 h-96 rounded-xl shadow-xl object-cover"
          alt="Center highlight"
        />

        {/* Features Mobile */}
        
        <div className="w-full space-y-6 mt-8">
          {[
            "Automation-focused solutions that reduce manual work.",
            "Clear strategies without unnecessary complexity.",
            "Systems designed for scalability and long-term growth.",
            "A team that understands both business and technology.",
          ].map((text, i) => (
            <div
              key={i}
              className="flex gap-4 border border-[#C6FF00] bg-[#00252C]/50 backdrop-blur-xl p-5 rounded-2xl"
            >
              <img src={tick} className="w-6 h-6 mt-1" alt="tick" />
              <p className="text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </div>

     
      <div className="hidden lg:flex w-230  justify-center mt-16 text-sm relative">
          
      <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-10 max-w-xs">
<span className="relative bottom-21 left-17"><img src={tick} className="h-7 w-7 " alt="tick icon" /></span>
  {/* TOP LEFT → BEHIND */}
  <p className="w-45 px-4 p-2 relative right-2 bottom-23 
    rounded-lg bg-[#ffff]/10 
    text-sm z-0">
    Affordable, customized packages tailored for small businesses
  </p>
<span className="relative  top-7 left-34"><img src={tick} className="h-7 w-7 " alt="tick icon" /></span>
  {/* BOTTOM LEFT → IN FRONT */}
  <p className="w-45 px-4 p-2 relative left-180 top-10 
    rounded-lg bg-[#ffff]/10  
    text-sm font-light z-20">
     No confusing jargon just clear strategies and real results.
  </p>

</div>


     
        <div className="flex  justify-center items-center ">
          <img
            src={img2}
            className="w-50 relative left-9 shadow-gray-950 shadow-lg  h-90 rounded-xl  object-cover rotate-[-10deg]   "
            alt="Feature left  z-10  "
          />

          
          <img
            src={img1}
            className="w-58 h-96 rounded-xl shadow-gray-950 shadow-lg object-cover z-10"
            alt="Feature center z-30  "
          />

          
          <img
            src={img2}
            className="w-50 h-90 rounded-xl  relative right-9 object-cover rotate-[10deg] z-0 shadow-gray-950 shadow-lg "
            alt="Feature right  "
          />
        </div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-10 max-w-xs ">

  {/* TOP RIGHT → IN FRONT */}
  <span className="relative  left-18 bottom-14"><img src={tick} className="h-7 w-7 " alt="tick icon" /></span>
  <p className="w-45 px-4 p-2 relative  bottom-16  
    rounded-lg bg-[#ffff]/15 
    text-sm font-light z-20">
    A creative team that treats your business like our own.
  </p>

<span className="relative  left-14 top-15"><img src={tick} className="h-7 w-7 " alt="tick icon" /></span>
  {/* BOTTOM RIGHT → BEHIND */}
  <p className="w-45 px-4 p-2 relative right-170 top-7 
    rounded-lg bg-[#ffff]/7 
    text-sm font-light z-0">
      Proven expertise across SEO, development, branding, and marketing.
   
  </p>

</div>

      </div>
    </section>
  );
}

