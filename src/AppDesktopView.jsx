import Upload_box from './components/Upload.jsx';
import Search_box from './components/Search.jsx';
import Songs_list from './components/Song_box.jsx';
import Player from './components/PlayerView.jsx';
// import song from './Components/Songs.jsx';

const AppDesktopView = ({ node, hash, albumList, tempPlaylist, playlist, setPlaylist, activeSongIndex, setActiveSongIndex, isPlaying, setIsPlaying, searchQuery, setSearchQuery }) => {
    return (
        <div className={ `grid h-screen w-screen place-items-center bg-black text-center px-20 py-5 bg-[url("https://tailwind-ui.hacker5united.repl.co/src/assets/darkBackground.png")]` }>
         <div className='w-[calc(70vw)] h-full mx-auto my-1 backdrop-blur-sm bg-white/30 rounded-md p-2'>
           <div>
             <Upload_box 
                 node={ node }
                playlist={ playlist }
                setPlaylist={ setPlaylist }
                albumList={ albumList }
                activeSongIndex={ activeSongIndex }
                setActiveSongIndex={ setActiveSongIndex }
             />
             <Search_box 
                 setSearchQuery={ setSearchQuery }
             />
             <Songs_list 
                playlist={ playlist } 
                albumList={ albumList }
                node={ node }
                activeSongIndex={ activeSongIndex }
                setActiveSongIndex={ setActiveSongIndex }
                isPlaying={ isPlaying }
                setIsPlaying={ setIsPlaying }
                searchQuery={ searchQuery }
             />
             <Player 
                playlist={ playlist }
                setPlaylist={ setPlaylist }
                albumList={ albumList }
                node={ node }
                activeSongIndex={ activeSongIndex }
                setActiveSongIndex={ setActiveSongIndex }
                isPlaying={ isPlaying }
                setIsPlaying={ setIsPlaying }
             />
           </div>
         </div>
        </div>
      );
}

export default AppDesktopView;