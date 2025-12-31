import PhotoGallery from "../../components/media/PhotoGallery";
import VideoGallery from "../../components/media/VideoGallery";
import BeforeAfterPlaceholder from "../../components/media/BeforeAfterPlaceholder";
import MiniDocsPlaceholder from "../../components/media/MiniDocsPlaceholder";

export default function MediaPage() {
  return (
    <>
      <PhotoGallery />
      <VideoGallery />
      <BeforeAfterPlaceholder />
      <MiniDocsPlaceholder />
    </>
  );
}
