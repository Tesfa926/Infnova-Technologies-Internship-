const Hero = () => {
  return (
    <section
      className="
        w-full 
        h-[248px] 
        bg-gradient-to-r 
        from-[#F54900] 
        to-[#FF6900]
        pt-[64px] 
        px-[16px]
        text-white
      "
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h1 className="text-[32px] font-medium leading-tight">
          Explore Our Courses
        </h1>

        {/* Description */}
        <p className="mt-4 text-[16px] font-normal max-w-[600px]">
          Master new skills with expert-led courses designed for the modern learner. Start your learning journey today with INFNOVA Academy.
        </p>

      </div>
    </section>
  );
};

export default Hero;