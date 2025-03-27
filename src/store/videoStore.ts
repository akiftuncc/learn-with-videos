import { create } from "zustand";
import { Platform, Video } from "../types";

interface VideoState {
  platforms: Platform[];
  selectedPlatform: Platform | null;
  selectedVideo: Video | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  selectPlatform: (platformId: string) => void;
  selectVideo: (videoId: string) => void;
  clearSelection: () => void;
  setPlatforms: (platforms: Platform[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const useVideoStore = create<VideoState>((set, get) => ({
  platforms: [],
  selectedPlatform: null,
  selectedVideo: null,
  isLoading: false,
  error: null,

  selectPlatform: (platformId: string) => {
    const platform = get().platforms.find((p) => p.id === platformId) || null;
    set({ selectedPlatform: platform, selectedVideo: null });
  },

  selectVideo: (videoId: string) => {
    const { selectedPlatform } = get();
    if (!selectedPlatform) return;

    const video = selectedPlatform.videos.find((v) => v.id === videoId) || null;
    set({ selectedVideo: video });
  },

  clearSelection: () => {
    set({ selectedPlatform: null, selectedVideo: null });
  },

  setPlatforms: (platforms: Platform[]) => {
    set({ platforms });
  },

  setLoading: (isLoading: boolean) => {
    set({ isLoading });
  },

  setError: (error: string | null) => {
    set({ error });
  },
}));

export default useVideoStore;
