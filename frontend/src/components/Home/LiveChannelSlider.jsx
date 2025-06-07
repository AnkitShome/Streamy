import React from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useSidebar } from "../../context/SidebarContext";

const LiveChannelsSlider = () => {
   const { isCollapsed, setIsCollapsed } = useSidebar();

   const liveChannels = [
      {
         id: 1,
         streamer: "GamerPro_X",
         game: "Valorant",
         viewers: 12500,
         avatar: "/placeholder.svg?height=40&width=40",
         isLive: true,
      },
      {
         id: 2,
         streamer: "MusicMaven",
         game: "Music",
         viewers: 8200,
         avatar: "/placeholder.svg?height=40&width=40",
         isLive: true,
      },
      // more channels...
   ];

   return (
      <div
         className={`fixed top-20 left-0 h-[calc(100vh-5rem)] z-40 flex flex-col bg-gray-900/90 backdrop-blur-md border-r border-gray-800/50 transition-all duration-300 ease-in-out ${isCollapsed ? "w-16" : "w-64"
            }`}
      >
         <div className="p-4 border-b border-gray-800/50 flex items-center justify-between">
            {!isCollapsed && (
               <h3 className="font-semibold text-white">Live Channels</h3>
            )}
            <button
               onClick={() => setIsCollapsed(!isCollapsed)}
               className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-colors"
               aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
               {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
         </div>

         <div className="flex-1 overflow-y-auto scrollbar-hide">
            {liveChannels.map((channel) => (
               <div
                  key={channel.id}
                  className="p-3 hover:bg-gray-800/50 transition-colors cursor-pointer border-b border-gray-800/20 flex items-center"
               >
                  <div className="relative">
                     <img
                        src={channel.avatar}
                        alt={channel.streamer}
                        className="w-8 h-8 rounded-full"
                     />
                     <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-gray-900"></div>
                  </div>

                  {!isCollapsed && (
                     <div className="ml-3 flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                           <h4 className="text-sm font-medium text-white truncate">
                              {channel.streamer}
                           </h4>
                        </div>
                        <div className="flex items-center justify-between mt-1 text-xs text-gray-400">
                           <p className="truncate">{channel.game}</p>
                           <div className="flex items-center">
                              <Eye size={10} className="mr-1" />
                              <span>
                                 {channel.viewers >= 1000
                                    ? `${(channel.viewers / 1000).toFixed(1)}K`
                                    : channel.viewers}
                              </span>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            ))}
         </div>

         <div className="p-4 border-t border-gray-800/50">
            {!isCollapsed && (
               <button className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm transition-colors">
                  Show More
               </button>
            )}
         </div>
      </div>
   );
};

export default LiveChannelsSlider;
