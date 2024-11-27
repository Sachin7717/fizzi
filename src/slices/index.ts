

import dynamic from "next/dynamic";

export const components = {
  alternating_text: dynamic(() => import("./AlternatingText")),
  big_text: dynamic(() => import("./BigText")),
  carousel: dynamic(() => import("./Carousel")),
  hero: dynamic(() => import("./Hero")),
  sky_dive: dynamic(() => import("./SkyDive")),
};
