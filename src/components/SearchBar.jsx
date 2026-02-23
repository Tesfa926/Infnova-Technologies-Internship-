import { Search } from "lucide-react";

const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <section className="w-full px-4 md:px-8">
      <div className="max-w-[1037px] mx-auto">
        <div className="bg-white rounded-[10px] shadow-sm">
          <div className="p-[24px] flex flex-col md:flex-row md:items-center gap-4 md:h-[90px]">
            <div className="relative w-full md:flex-1">
              <Search
                size={18}
                className="absolute left-[16px] top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                id="course-search"
                name="course-search"
                type="text"
                placeholder="Search courses, instructors..."
                value={searchQuery} // 1. Bind the value to state
                onChange={(e) => {
                  onSearch(e.target.value);
                }} // 2. Trigger the change
                className="w-full h-[42px] border border-[#D1D5DC] rounded-[10px] pl-[44px] pr-[16px] text-[14px] outline-none focus:ring-2 focus:ring-[#F54900]/30"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-[10px] w-full md:w-auto">
              <select
                className="
                  w-full
                  sm:w-[145px]
                  h-[42px]
                  border
                  border-[#D1D5DC]
                  rounded-[10px]
                  px-4
                  text-[14px]
                  outline-none
                  cursor-pointer
                  transition
                  focus:ring-2
                  focus:ring-[#F54900]/30
                "
              >
                <option></option>
              </select>

              <select
                className="
                  w-full
                  sm:w-[203px]
                  h-[42px]
                  border
                  border-[#D1D5DC]
                  rounded-[10px]
                  px-4
                  text-[14px]
                  outline-none
                  cursor-pointer
                  transition
                  focus:ring-2
                  focus:ring-[#F54900]/30
                "
              >
                <option></option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
