type FormatOptions = {
  withEmoji?: boolean;
  withBullet?: boolean;
};
interface DisplayTextBuilder {
  addEmoji: () => DisplayTextBuilder;
  addBullet: () => DisplayTextBuilder;
  format: () => string;
}

export function addBullet(text: string | number) {
  return `• ${text}`;
}

export function displayDateBuilder(date: Date): DisplayTextBuilder {
  const options: FormatOptions = {
    withEmoji: false,
    withBullet: false,
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
      if (options.withBullet) {
        return addBullet(formatDate());
      }
      return formatDate();
    },
    addEmoji: () => {
      options.withEmoji = true;
      return builder;
    },

    addBullet: () => {
      options.withBullet = true;
      return builder;
    },
  };

  return builder;
}

export function displayReadingTimeBuilder(time: number): DisplayTextBuilder {
  const options: FormatOptions = {
    withEmoji: false,
    withBullet: false,
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

      if (options.withBullet) {
        return addBullet(formatReadingTime());
      }

      return formatReadingTime();
    },
    addEmoji: () => {
      options.withEmoji = true;
      return builder;
    },

    addBullet: () => {
      options.withBullet = true;
      return builder;
    },
  };

  return builder;
}
