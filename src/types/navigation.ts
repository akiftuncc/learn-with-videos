import { Video } from "./index";

export type RootStackParamList = {
  Home: undefined;
  Videos: undefined;
  VideoPlayer: { videoId: string };
};
