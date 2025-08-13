import React, { useState } from "react";
import styles from "../../../Styles/Devs.module.css";
import Image from "next/image";

interface VideoItem {
  id: number;
  thumbnail: string;
  video: string;
  title: string;
}

const videos: VideoItem[] = [
  {
    id: 1,
    thumbnail: "/thumbnails/video1.jpg",
    video: "/videos/video1.mp4",
    title: "Video 1",
  },
  {
    id: 2,
    thumbnail: "/thumbnails/video2.jpg",
    video: "/videos/video2.mp4",
    title: "Video 2",
  },
  {
    id: 3,
    thumbnail: "/thumbnails/video3.jpg",
    video: "/videos/video3.mp4",
    title: "Video 3",
  },
  {
    id: 4,
    thumbnail: "/thumbnails/video4.jpg",
    video: "/videos/video4.mp4",
    title: "Video 4",
  },
  {
    id: 5,
    thumbnail: "/thumbnails/video5.jpg",
    video: "/videos/video5.mp4",
    title: "Video 5",
  },
  {
    id: 6,
    thumbnail: "/thumbnails/video6.jpg",
    video: "/videos/video6.mp4",
    title: "Video 6",
  },
  {
    id: 7,
    thumbnail: "/thumbnails/video7.jpg",
    video: "/videos/video7.mp4",
    title: "Video 7",
  },
  {
    id: 8,
    thumbnail: "/thumbnails/video8.jpg",
    video: "/videos/video8.mp4",
    title: "Video 8",
  },
  {
    id: 9,
    thumbnail: "/thumbnails/video9.jpg",
    video: "/videos/video9.mp4",
    title: "Video 9",
  },
  {
    id: 10,
    thumbnail: "/thumbnails/video10.jpg",
    video: "/videos/video10.mp4",
    title: "Video 10",
  },
  {
    id: 11,
    thumbnail: "/thumbnails/video11.jpg",
    video: "/videos/video11.mp4",
    title: "Video 11",
  },
];

export default function Devs() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <div className={styles.videosGrid}>
      {videos.map((item) => (
        <div
          key={item.id}
          className={styles.card}
          onMouseEnter={() => setActiveVideo(item.id)}
          onMouseLeave={() => setActiveVideo(null)}
          onClick={() =>
            setActiveVideo(activeVideo === item.id ? null : item.id)
          }
        >
          <div className={styles.videoWrapper}>
            <Image
              src={item.thumbnail}
              alt={item.title}
              className={`${styles.thumbnail} ${
                activeVideo === item.id ? styles.hidden : ""
              }`}
            />
            <video
              src={item.video}
              className={`${styles.video} ${
                activeVideo === item.id ? styles.visible : ""
              }`}
              muted
              loop
              playsInline
              autoPlay={activeVideo === item.id}
            />
          </div>
          <p className={styles.title}>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
