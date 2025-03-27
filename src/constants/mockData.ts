import { Platform } from "../types";

// In a real app, these would be loaded from a backend API
export const MOCK_PLATFORMS: Platform[] = [
  {
    id: "phone",
    name: "Phone",
    icon: "phone",
    videos: [
      {
        id: "phone-1",
        title: "How to make calls",
        url: "https://your-aws-bucket.s3.amazonaws.com/phone-calls.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/phone-calls.jpg",
      },
      {
        id: "phone-2",
        title: "Setting up voicemail",
        url: "https://your-aws-bucket.s3.amazonaws.com/voicemail.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/voicemail.jpg",
      },
    ],
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: "whatsapp",
    videos: [
      {
        id: "whatsapp-1",
        title: "Getting started with WhatsApp",
        url: "https://your-aws-bucket.s3.amazonaws.com/whatsapp-intro.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/whatsapp-intro.jpg",
      },
      {
        id: "whatsapp-2",
        title: "WhatsApp video calls",
        url: "https://your-aws-bucket.s3.amazonaws.com/whatsapp-video.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/whatsapp-video.jpg",
      },
    ],
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: "facebook",
    videos: [
      {
        id: "facebook-1",
        title: "Facebook basics",
        url: "https://your-aws-bucket.s3.amazonaws.com/facebook-basics.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/facebook-basics.jpg",
      },
      {
        id: "facebook-2",
        title: "Facebook privacy settings",
        url: "https://your-aws-bucket.s3.amazonaws.com/facebook-privacy.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/facebook-privacy.jpg",
      },
    ],
  },
  {
    id: "messenger",
    name: "Messenger",
    icon: "facebook-messenger",
    videos: [
      {
        id: "messenger-1",
        title: "Messenger basics",
        url: "https://your-aws-bucket.s3.amazonaws.com/messenger-basics.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/messenger-basics.jpg",
      },
      {
        id: "messenger-2",
        title: "Group chats in Messenger",
        url: "https://your-aws-bucket.s3.amazonaws.com/messenger-groups.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/messenger-groups.jpg",
      },
    ],
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "instagram",
    videos: [
      {
        id: "instagram-1",
        title: "Instagram stories",
        url: "https://your-aws-bucket.s3.amazonaws.com/instagram-stories.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/instagram-stories.jpg",
      },
      {
        id: "instagram-2",
        title: "Instagram reels",
        url: "https://your-aws-bucket.s3.amazonaws.com/instagram-reels.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/instagram-reels.jpg",
      },
    ],
  },
  {
    id: "mobileBanking",
    name: "Mobile Banking",
    icon: "bank",
    videos: [
      {
        id: "banking-1",
        title: "Mobile banking setup",
        url: "https://your-aws-bucket.s3.amazonaws.com/banking-setup.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/banking-setup.jpg",
      },
      {
        id: "banking-2",
        title: "Secure mobile transactions",
        url: "https://your-aws-bucket.s3.amazonaws.com/banking-secure.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/banking-secure.jpg",
      },
    ],
  },
  {
    id: "playStore",
    name: "Play Store",
    icon: "google-play",
    videos: [
      {
        id: "playstore-1",
        title: "Finding apps on Play Store",
        url: "https://your-aws-bucket.s3.amazonaws.com/playstore-find.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/playstore-find.jpg",
      },
      {
        id: "playstore-2",
        title: "Play Store security",
        url: "https://your-aws-bucket.s3.amazonaws.com/playstore-security.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/playstore-security.jpg",
      },
    ],
  },
  {
    id: "appStore",
    name: "App Store",
    icon: "apple",
    videos: [
      {
        id: "appstore-1",
        title: "App Store basics",
        url: "https://your-aws-bucket.s3.amazonaws.com/appstore-basics.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/appstore-basics.jpg",
      },
      {
        id: "appstore-2",
        title: "App Store subscriptions",
        url: "https://your-aws-bucket.s3.amazonaws.com/appstore-subscriptions.mp4",
        thumbnail:
          "https://your-aws-bucket.s3.amazonaws.com/thumbnails/appstore-subscriptions.jpg",
      },
    ],
  },
];
