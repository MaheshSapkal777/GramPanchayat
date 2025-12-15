"use client";

import HomeSlider from "../components/HomeSlider";
import HomeStats from "../components/HomeStats";
import Leaders from "../components/Leaders";
import Schemes from "../components/Schemes";
import Notices from "../components/Notices";
import GalleryPreview from "../components/GalleryPreview";
import WeatherQuote from "../components/WeatherQuote";
import WelcomeVideo from "../components/WelcomeVideo";
import ProgressMeter from "../components/ProgressMeter";
import LatestNews from "../components/LatestNews";

export default function HomePage() {
  return (
    <>
      <HomeSlider />
      <LatestNews />
      <HomeStats />
      <WeatherQuote />
      <WelcomeVideo />
      <ProgressMeter />
      <Leaders />
      <Schemes />
      <Notices />
      <GalleryPreview />
    </>
  );
}
