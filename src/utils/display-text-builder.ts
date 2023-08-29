type FormatOptions = {
  withEmoji?: boolean;
};
interface DisplayTextBuilder {
  addEmoji: () => DisplayTextBuilder;
  format: () => string;
}

export function displayDateBuilder(date: Date): DisplayTextBuilder {
  const options: FormatOptions = {
    withEmoji: false,
  };

  function formatDate() {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  const builder = {
    format: () => {
      if (options.withEmoji) {
        return `📅 ${formatDate()}`;
      }
      return formatDate();
    },
    addEmoji: () => {
      options.withEmoji = true;
      return builder;
    },
  };

  return builder;
}

export function displayReadingTimeBuilder(time: number): DisplayTextBuilder {
  const options: FormatOptions = {
    withEmoji: false,
  };

  function formatReadingTime() {
    if (time <= 1) {
      return "1 minute";
    }
    return `${time} minutes`;
  }

  const builder = {
    format: () => {
      if (options.withEmoji) {
        return `⏱ ${formatReadingTime()}`;
      }
      return formatReadingTime();
    },
    addEmoji: () => {
      options.withEmoji = true;
      return builder;
    },
  };

  return builder;
}
