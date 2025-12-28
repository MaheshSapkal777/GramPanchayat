// ADD THIS FILE

import AnnouncementList from "../../components/announcements/AnnouncementList";
import CircularDownloads from "../../components/announcements/CircularDownloads";
import EventsCalendarPlaceholder from "../../components/announcements/EventsCalendarPlaceholder";

export default function AnnouncementsPage() {
  return (
    <>
      <AnnouncementList />
      <CircularDownloads />
      <EventsCalendarPlaceholder />
    </>
  );
}
