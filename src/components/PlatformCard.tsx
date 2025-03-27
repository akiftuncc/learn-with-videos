import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTranslation } from "react-i18next";
import { Platform } from "../types";

interface PlatformCardProps {
  platform: Platform;
  onPress: (platformId: string) => void;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform, onPress }) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress(platform.id)}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Icon name={platform.icon} size={24} color="#fff" />
      </View>
      <Text style={styles.name}>{t(`platforms.${platform.id}`)}</Text>
      <Text style={styles.videosCount}>
        {platform.videos.length}{" "}
        {platform.videos.length === 1 ? "video" : "videos"}
      </Text>
      <Icon name="chevron-right" size={16} color="#888" style={styles.arrow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#4A80F0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  videosCount: {
    fontSize: 14,
    color: "#888",
    marginRight: 8,
  },
  arrow: {
    marginLeft: 4,
  },
});

export default PlatformCard;
