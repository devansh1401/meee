export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input
  return input.substring(0, maxLength - 3) + "..."
}

export function getCurrentTimeInIndia(): Date {
  // Create a date object with the current UTC time
  const now = new Date()

  // Convert the UTC time to India's time
  const offsetIndia = 5.5 // India is UTC+5:30
  now.setHours(now.getUTCHours() + offsetIndia)
  now.setMinutes(now.getUTCMinutes() + 30)

  return now
}

export function formatTimeForIndia(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata"
  }

  return new Intl.DateTimeFormat("en-US", options).format(date)
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
}
