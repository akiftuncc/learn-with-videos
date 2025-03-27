import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Video } from "../types";

interface VideoItemProps {
  video: Video;
  onPress: (videoId: string) => void;
}

const VideoItem: React.FC<VideoItemProps> = ({ video, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(video.id)}
      activeOpacity={0.7}
    >
      <View style={styles.thumbnailContainer}>
        {video.thumbnail ? (
          <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
        ) : (
          <View style={styles.placeholderThumbnail}>
            <Icon name="play-circle" size={40} color="#4A80F0" />
          </View>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{video.title}</Text>
        <Icon
          name="play-circle-o"
          size={16}
          color="#4A80F0"
          style={styles.playIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  thumbnailContainer: {
    height: 160,
    width: "100%",
    backgroundColor: "#f0f0f0",
  },
  thumbnail: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  placeholderThumbnail: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eaeaea",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  playIcon: {
    marginLeft: 8,
  },
});

export default VideoItem;
