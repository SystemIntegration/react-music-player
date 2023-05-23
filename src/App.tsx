import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import songs from './Music/songs';
import Header from './Screens/Header';
import { IconButton, Slider} from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import selectImage from './Select.jpg'
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

interface Song {
  mainImageUrl: string | undefined;
  songName: string;
  src: string;
  duration: string;
  subImageUrl: string;
}

function App() {
  const [currentSong, setCurrentSong] = useState<Song | any>();
  const [currentTime, setCurrentTime] = useState(0);
  const [maxTime, setMaxTime] = useState(0);
  const [index, setIndex] = useState<any>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const audioRef: any = useRef(null);
  const [volume, setVolume] = useState(1); // Initial volume value
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [lyrics, setLyrics] = useState<any>();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  useEffect(() => {
    let intervalId: any = null;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (currentTime > maxTime) {
      setIsPlaying(false);
    }
  }, [currentTime, maxTime]);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        togglePlay();
      }
    };

    if (audioRef.current) {
      // API(currentSong);
      console.log('response',);
    }
    document.addEventListener('keydown', handleKeyDown);
    window.document.title = currentSong !== undefined ? currentSong.songName : "BMV Music Player"
  });

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const formatValueLabel = (value: number) => {
    return formatTime(value);
  };

  function convertToSeconds(timeString: string) {
    const [minutes, seconds] = timeString.split(':');
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    return totalSeconds - 1;
  }

  const handleSliderChange = (event: Event, newValue: any) => {
    const audioElement = audioRef.current;
    audioElement.currentTime = newValue;
    setCurrentTime(newValue);
  };

  const playSong = (song: any) => {
    const seconds = convertToSeconds(song.duration);
    setIndex(songs.indexOf(song))
    setCurrentSong(song);
    setMaxTime(seconds);
    setCurrentTime(0)
    setIsPlaying(true);
  };

  const handleNext = (song: any) => {
    setCurrentSong(songs[(songs.indexOf(song)) + 1])
    const seconds = convertToSeconds(songs[(songs.indexOf(song)) + 1].duration);
    setIndex((songs.indexOf(song)) + 1)
    setMaxTime(seconds);
    setCurrentTime(0)
    setIsPlaying(true);
  };

  const handlePrevious = (song: any) => {
    setCurrentSong(songs[(songs.indexOf(song)) - 1])
    const seconds = convertToSeconds(songs[(songs.indexOf(song)) - 1].duration);
    setIndex((songs.indexOf(song)) - 1)
    setMaxTime(seconds);
    setCurrentTime(0)
    setIsPlaying(true);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }

  const handleIconVisibility = () => {
    togglePlay();
    setShowIcon(true);
    setTimeout(() => {
      setShowIcon(false);
    }, 1000);
  };

  const url = 'https://spotify23.p.rapidapi.com/track_lyrics/?id=';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3f24290d43mshfe9f6a19d74f9fep1bd14cjsndc4efe3f59ff',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  async function API(currentSong: any) {
    if (currentSong) {
      try {
        const response = await fetch(url + currentSong.songId, options);
        const result = await response.json();
        const lyrics: any = result.lyrics.lines;
        setLyrics(lyrics.map((line: any) => { return line.words }))
        console.log();
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div>
      < Header />
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ height: '70vh', overflow: 'auto', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {currentSong ? (
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <audio
                  ref={audioRef}
                  src={currentSong.src}
                  autoPlay
                  controls
                  onEnded={() => { handleNext(currentSong) }}
                  style={{ width: '100%', display: 'none' }}
                />
                <img src={currentSong.mainImageUrl} alt="" style={{ height: '25rem', overflow: 'auto', width: '25rem', borderRadius: "20px", cursor: 'pointer', }} onClick={() => handleIconVisibility()} />
                <IconButton className="icon" style={{ color: 'rgb(255,255,255,0.5)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: showIcon ? "block" : "none" }} >
                  {isPlaying === true ?
                    <PlayCircleIcon style={{ cursor: 'pointer', padding: '2px', fontSize: '6rem' }} />
                    :
                    <StopCircleIcon style={{ cursor: 'pointer', padding: '2px', fontSize: '6rem' }} />}
                </IconButton>
              </div>
            ) : <img src={selectImage} alt="" style={{ height: '25rem', overflow: 'auto', width: '25rem', borderRadius: "20px" }} />}
          </div>
          <Box sx={{ width: 500 }}>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Songs" />
                <Tab label="Lyrics" />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <div style={{ height: '60vh', overflow: 'auto', width: '100%' }}>
                  <ul className="song-list">
                    {songs.map((song, i) => (
                      <li key={song.songName} style={{ background: index === i ? '#1D1D1D' : '#030303', color: 'white', borderBottom: '1px solid',display: 'flex', justifyContent: 'space-between', alignItems: 'center', }} onClick={() => playSong(song)}>
                          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <div>
                              <img src={song.subImageUrl} alt="" style={{ height: '3.5rem', borderRadius: '10px' }} />
                            </div>
                            <div>
                              <p style={{ margin: '1em 0 0.5em 1em' }}>{song.songName}</p>
                              <p style={{ color: '#4C4C4C', margin: '0 0 1em 1em' }}>{song.artistName} | {song.albumName.slice(song.albumName.indexOf('"') + 1, song.albumName.lastIndexOf('"'))} | {song.year}</p>
                            </div>
                          </div>
                          <div>
                            <div>
                              <p style={{ margin: '1em 0 0.5em 1em' }}>{song.duration}</p>
                            </div>
                          </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <div style={{ height: '60vh', overflow: 'auto', width: '100%' }}>
                  <ul className="song-list">
                    {lyrics && lyrics.map((song: any) => (
                      <li key={song.songName}>
                        <h4 className="song-title">{song}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabPanel>
            </SwipeableViews>
          </Box>
        </div>
        <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', background: '#212121', height: '7rem', }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <IconButton style={{ color: 'aquamarine' }} disabled={(index === undefined) ? true : (index === 0 ? true : false)}>
                  <ArrowCircleLeftSharpIcon style={{ cursor: 'pointer', padding: '2px' }} onClick={() => { handlePrevious(currentSong) }} />
                </IconButton>

                {!isPlaying === true ?
                  <IconButton style={{ color: 'aquamarine' }} disabled={index !== undefined ? false : true}>
                    <PlayCircleIcon style={{ cursor: 'pointer', padding: '2px', fontSize: '3rem' }} onClick={togglePlay} />
                  </IconButton>
                  :
                  <IconButton style={{ color: 'aquamarine' }} disabled={index !== undefined ? false : true}>
                    <StopCircleIcon style={{ cursor: 'pointer', padding: '2px', fontSize: '3rem' }} onClick={togglePlay} />
                  </IconButton>}
                <IconButton style={{ color: 'aquamarine' }} disabled={(index === songs.length - 1) ? true : false}>
                  <ArrowCircleRightSharpIcon style={{ cursor: 'pointer', padding: '2px' }} onClick={() => { handleNext(currentSong) }} />
                </IconButton>
              </div>
              <Slider
                value={currentTime}
                onChange={handleSliderChange}
                min={0}
                max={maxTime}
                valueLabelDisplay="auto"
                valueLabelFormat={formatValueLabel}
                style={{ width: '80%', color: 'aquamarine' }}
                sx={{
                  color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                  height: 4,
                  '& .MuiSlider-thumb': {
                    width: 8,
                    height: 8,
                    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                    '&:before': {
                      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                    },
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: `0px 0px 0px 8px ${
                        theme.palette.mode === 'dark'
                          ? 'rgb(255 255 255 / 16%)'
                          : 'rgb(0 0 0 / 16%)'
                      }`,
                    },
                    '&.Mui-active': {
                      width: 20,
                      height: 20,
                    },
                  },
                  '& .MuiSlider-rail': {
                    opacity: 0.28,
                  },
                }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '3rem' }}>
                <span> {formatTime(currentTime)} / {currentSong && currentSong.duration}</span>
              </div>
              {currentSong &&
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                  <div>
                    <img src={currentSong.subImageUrl} alt="" style={{ height: '3rem', borderRadius: '10px' }} />
                  </div>
                  <div>
                    <p style={{ margin: '1em 0 0.5em 1em' }}>{currentSong.songName}</p>
                    <p style={{ color: '#4C4C4C', margin: '0 0 1em 1em' }}>{currentSong.artistName} | {currentSong.albumName.slice(currentSong.albumName.indexOf('"') + 1, currentSong.albumName.lastIndexOf('"'))} | {currentSong.year}</p>
                  </div>
                </div>}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20%', }}>
                {volume > 0 ? (
                  volume > 0.5 ? <VolumeUpIcon /> : <VolumeDownIcon />
                ) : <VolumeOffIcon />}
                <Slider
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={(e: any) => { handleVolumeChange(e) }}
                  style={{ color: 'aquamarine', margin: '0 1rem' }}
                  sx={{
                    color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                    height: 4,
                    '& .MuiSlider-thumb': {
                      width: 8,
                      height: 8,
                      transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                      '&:before': {
                        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                      },
                      '&:hover, &.Mui-focusVisible': {
                        boxShadow: `0px 0px 0px 8px ${
                          theme.palette.mode === 'dark'
                            ? 'rgb(255 255 255 / 16%)'
                            : 'rgb(0 0 0 / 16%)'
                        }`,
                      },
                      '&.Mui-active': {
                        width: 20,
                        height: 20,
                      },
                    },
                    '& .MuiSlider-rail': {
                      opacity: 0.28,
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
