"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. Charger le JSON depuis /public/data/events.json
  useEffect(() => {
    async function loadData() {
      const res = await fetch("/data/events.json");
      const data = await res.json();
      setEvents(data);
      setLoading(false);
    }
    loadData();
  }, []);

  // 2. Sauvegarder côté GitHub
  async function handleSave() {
    const res = await fetch("/api/update-json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: "public/data/events.json",
        content: events
      })
    });

    const result = await res.json();
    console.log("Commit GitHub:", result);
    alert("Modifications sauvegardées sur GitHub !");
  }

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Admin – Modifier events.json</h1>

      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="border p-4 rounded">
            <input
              className="w-full border p-2 mb-2"
              value={event.displayDate}
              onChange={(e) => {
                const copy = [...events];
                copy[index].displayDate = e.target.value;
                setEvents(copy);
              }}
            />

            <input
              className="w-full border p-2 mb-2"
              value={event.location}
              onChange={(e) => {
                const copy = [...events];
                copy[index].location = e.target.value;
                setEvents(copy);
              }}
            />

            <input
              className="w-full border p-2"
              value={event.link}
              onChange={(e) => {
                const copy = [...events];
                copy[index].link = e.target.value;
                setEvents(copy);
              }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Sauvegarder sur GitHub
      </button>
    </div>
  );
}
