import { ActualiteService } from "~/services/article.service";

export async function HomeLoader() {
  // TODO:
  // - Get latest Newsletter
  // - Get 3 coming Events

  const latestActualites = await ActualiteService.getLatest();
  const comingEvents: any = [];
  const popularBoxes: any = [];

  return {
    latestActualites,
    comingEvents: comingEvents,
    popularBoxes: popularBoxes,
  };
}
