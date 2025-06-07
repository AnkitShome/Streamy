import React from 'react';
import { useState } from 'react';
import HeroBanner from '../components/Home/HeroBanner';
import CategoryTabs from '../components/Home/CategoryTabs';
import LiveStreams from '../components/Home/LiveStreams';
import Navbar from '../components/Navbar';

const Home = () => {
   const [activeCategory, setActiveCategory] = useState("Gaming");

   const categories = [
      { name: "Gaming", icon: "🎮" },
      { name: "IRL", icon: "📹" },
      { name: "Music", icon: "🎵" },
      { name: "Coding", icon: "💻" },
      { name: "Art", icon: "🎨" },
      { name: "Sports", icon: "⚽" },
   ];

   const liveStreams = [
      {
         id: 1,
         streamer: "GamerPro_X",
         title: "Valorant Ranked Grind - Road to Radiant!",
         game: "Valorant",
         viewers: 12500,
         duration: "3h 24m",
         thumbnail: "/placeholder.svg?height=200&width=300",
         avatar: "/placeholder.svg?height=40&width=40",
         isPartner: true,
      },
      // ...other streams (keep as you had them)
   ];

   return (
      <div className="max-w-7xl mx-auto px-6 py-8">
         <HeroBanner />
         <CategoryTabs categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
         <LiveStreams liveStreams={liveStreams} />
         <div className="text-center mt-12">
            <button className="bg-gray-800/50 hover:bg-gray-700/50 text-white px-8 py-3 rounded-full transition-colors border border-gray-700/50 hover:border-gray-600/50">
               Load More Streams
            </button>
         </div>
      </div>
   );
};

export default Home;