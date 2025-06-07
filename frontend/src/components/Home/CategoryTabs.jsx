const CategoryTabs = ({ categories, activeCategory, setActiveCategory }) => {
   return (
      <section className="mb-10">
         <h2 className="text-2xl font-semibold text-white mb-6">Browse Categories</h2>
         <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((category) => (
               <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-200 whitespace-nowrap ${activeCategory === category.name
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                     }`}
               >
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
               </button>
            ))}
         </div>
      </section>
   );
};

export default CategoryTabs;
