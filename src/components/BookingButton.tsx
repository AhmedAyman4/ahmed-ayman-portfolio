"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Calendar } from "lucide-react";

export function BookingButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="30min"
      data-cal-link="ahmed-alhofy/30min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className="booking-call-btn"
      type="button"
    >
      <Calendar className="w-4 h-4" />
      <span>Book a 30-min Call</span>
    </button>
  );
}
