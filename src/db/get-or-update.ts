import { getPageViews } from "./get-pageviews";
import { updateAndSelectPageView } from "./update-page-view";

export async function getOrUpdateBlogViews(id: string, update = false) {
  if (!update) {
    const blogRecord = await getPageViews(id);
    return { views: blogRecord?.views ?? 0 };
  }

  return updateAndSelectPageView(id);
}
