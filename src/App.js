import "./App.css";
import React, { useRef} from 'react'


function App() {
  const videoRef = useRef(null);
  const handleVideo = (e) => {
    if (videoRef) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <video
      onTouchStart={handleVideo}
      className="mx-auto"
      // ref={videoRef}
      // poster={props.thumbNail}
      codecs="hev1"
      controls
      controlsList="nodownload"
      type='video/mp4; codecs="hvc1"'
      style={{
        cursor: "pointer",
        width: "100%",
        marginTop:"1rem",
        // maxWidth: "600px",
        maxHeight: "523px",
        height: "100%",
      }}
      src="https://download-video.akamaized.net/2/playback/58179a1d-04f1-4ba8-a255-acead950fc71/35e9160a-cb637e2b?__token__=st=1688571180~exp=1688585580~acl=%2F2%2Fplayback%2F58179a1d-04f1-4ba8-a255-acead950fc71%2F35e9160a-cb637e2b%2A~hmac=1019cdcba311c856c6bce1acce838baac4cc6818f5be8b8d191089f0ad622cc5&r=dXMtZWFzdDE%3D"
    />
  );
}

export default App;
