import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

import VideoPlayer from "../components/VideoPlayer";
import useVideoStore from "../store/videoStore";
import { RootStackParamList } from "../types/navigation";

type VideoPlayerScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "VideoPlayer">;
  route: RouteProp<RootStackParamList, "VideoPlayer">;
};

const VideoPlayerScreen: React.FC<VideoPlayerScreenProps> = ({
  navigation,
  route,
}) => {
  const { selectedVideo, selectedPlatform } = useVideoStore();

  if (!selectedVideo || !selectedPlatform) {
    // If no video is selected, go back
    navigation.goBack();
    return null;
  }

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title} numberOfLines={1}>
          {selectedVideo.title}
        </Text>
      </View>

      <View style={styles.playerContainer}>
        <VideoPlayer videoUrl={selectedVideo.url} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
    marginRight: 12,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    flex: 1,
  },
  playerContainer: {
    flex: 1,
  },
});

export default VideoPlayerScreen;
