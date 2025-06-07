import { Eye, Clock, Play, Star, Users } from "lucide-react";

const LiveStreams = ({ liveStreams }) => {
   return (
      <section>
         <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
               <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
               <h2 className="text-3xl font-bold text-white">Live Now</h2>
               <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {liveStreams.length} streams
               </span>
            </div>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {liveStreams.map((stream) => (
               <div
                  key={stream.id}
                  className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
               >
                  {/* Thumbnail */}
                  <div className="relative">
                     <img
                        src={stream.thumbnail || "/placeholder.svg"}
                        alt={stream.title}
                        className="w-full h-48 object-cover"
                     />
                     {/* Live indicator */}
                     <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold flex items-center space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span>LIVE</span>
                     </div>
                     {/* Viewer count */}
                     <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{stream.viewers.toLocaleString()}</span>
                     </div>
                     {/* Duration */}
                     <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{stream.duration}</span>
                     </div>
                     {/* Play overlay */}
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                  </div>

                  {/* Stream Info */}
                  <div className="p-4">
                     <div className="flex items-start space-x-3 mb-3">
                        <img
                           src={stream.avatar || "/placeholder.svg"}
                           alt={stream.streamer}
                           className="w-10 h-10 rounded-full border-2 border-gray-700"
                        />
                        <div className="flex-1 min-w-0">
                           <div className="flex items-center space-x-2">
                              <h3 className="font-semibold text-white truncate">{stream.streamer}</h3>
                              {stream.isPartner && <Star className="w-4 h-4 text-purple-400 fill-current" />}
                           </div>
                           <p className="text-sm text-gray-400">{stream.game}</p>
                        </div>
                     </div>

                     <h4 className="text-sm text-gray-300 line-clamp-2 mb-3 group-hover:text-white transition-colors">
                        {stream.title}
                     </h4>

                     <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                           <Users className="w-3 h-3" />
                           <span>{stream.viewers.toLocaleString()} viewers</span>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default LiveStreams;
