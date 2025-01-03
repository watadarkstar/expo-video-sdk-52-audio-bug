import { StyleSheet } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

export default function App() {
  const videoSource = {
    uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    metadata: {
      title: "Example",
      artist: "Author",
    },
  };

  const player = useVideoPlayer(videoSource, (player) => {
    console.log("setup player", videoSource);
    player.loop = false;
    player.staysActiveInBackground = true; // Stay active in background set to true
    player.playbackRate = 1;
    player.preservesPitch = true;
    player.timeUpdateEventInterval = 1;
    player.allowsExternalPlayback = true;
    player.showNowPlayingNotification = true;
    player.play();
  });

  return (
    <VideoView
      player={player}
      style={styles.container}
      allowsPictureInPicture
      startsPictureInPictureAutomatically
      nativeControls={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    margin: 50,
  },
});
