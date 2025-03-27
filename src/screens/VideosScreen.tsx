import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome";

import VideoItem from "../components/VideoItem";
import useVideoStore from "../store/videoStore";
import { RootStackParamList } from "../types/navigation";

type VideosScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Videos">;
};

const VideosScreen: React.FC<VideosScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { selectedPlatform, selectVideo } = useVideoStore();

  if (!selectedPlatform) {
    // If no platform is selected, go back to home screen
    navigation.replace("Home");
    return null;
  }

  const handleVideoPress = (videoId: string) => {
    selectVideo(videoId);
    navigation.navigate("VideoPlayer", { videoId });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name="arrow-left" size={20} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>
          {t(`platforms.${selectedPlatform.id}`)}
        </Text>
      </View>

      {selectedPlatform.videos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>{t("videos.noVideos")}</Text>
        </View>
      ) : (
        <FlatList
          data={selectedPlatform.videos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <VideoItem video={item} onPress={handleVideoPress} />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    marginRight: 16,
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
  },
});

export default VideosScreen;
