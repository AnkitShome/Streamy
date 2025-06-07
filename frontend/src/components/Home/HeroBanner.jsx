import { Zap, Play } from "lucide-react";

const HeroBanner = () => {
   return (
      <section className="mb-12">
         <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
               <div className="flex justify-center mb-4">
                  <Zap className="w-12 h-12 text-yellow-400" />
               </div>
               <h1 className="text-5xl font-bold mb-6 text-white">Welcome to Streamy</h1>
               <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                  Discover amazing live streams from your favorite creators. Gaming, music, art, and more - all in one place.
               </p>
               <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Start Watching</span>
               </button>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 right-4 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl"></div>
         </div>
      </section>
   );
};

export default HeroBanner;
