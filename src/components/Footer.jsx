const Footer = () => {
  return (
    <footer className="bg-[#101828] mt-16">
      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left Column */}
          <div>
            <h2 className="font-medium text-[20px] text-white mb-4">
              INFNOVA Academy
            </h2>
            <p className="text-[14px] leading-[22px] text-[#99A1AF]">
              Empowering learners worldwide with cutting-edge technology courses.
              Start your journey to success with expert-led training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-[16px] text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-[14px] text-[#99A1AF]">
              <a href="#"><li>About Us</li></a>
              <a href="#"><li>Courses</li></a>
              <a href="#"><li>Instructors</li></a>
              <a href="#"><li>Contact</li></a>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-medium text-[16px] text-white mb-4">
              Support
            </h3>
            <ul className="space-y-3 text-[14px] text-[#99A1AF]">
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#1F2A37] my-10"></div>

        {/* Bottom Section */}
        <p className="text-center text-[14px] text-[#99A1AF]">
          © 2026 INFNOVA Technologies. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;