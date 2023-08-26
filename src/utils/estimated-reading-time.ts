export function estimateReadingTime(content: string, wpm = 200) {
  const lines = content.split("\n");
  const startIndex = lines.findIndex((line) => line.trim().startsWith("#"));
  const cleanedContent = lines.slice(startIndex).join("\n");
  const wordCount = cleanedContent
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  const readingTimeMinutes = Math.ceil(wordCount / wpm);
  const formattedReadingTime =
    readingTimeMinutes === 1 ? "1 minute" : `${readingTimeMinutes} minutes`;

  return formattedReadingTime;
}
