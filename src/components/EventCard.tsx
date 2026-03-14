export default function EventCard({ event }: any) {
  return <div className="p-4 border rounded shadow-sm">Événement : {event?.title || "Sans titre"}</div>;
}