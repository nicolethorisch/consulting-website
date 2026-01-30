/**
 * Shared links and openExternalUrl utility.
 * Works both standalone (direct visit) and in iframe (postMessage to parent).
 */

export const MAILTO_LINK =
  "mailto:nicole.thorisch@gmail.com?subject=Anfrage%20KI%20Consulting&body=Hallo%20Nicole%2C%0A%0AWir%20interessieren%20uns%20für%20eine%20personalisierte%20KI-Lösung.%0AAnwendungsfall%3A%20...%0ASysteme%2FDaten%3A%20...%0AStart%3A%20...%0A%0AViele%20Grüße";

export const CALENDLY_LINK = "https://calendly.com/nicole-thorisch/30min";
export const PHONE_LINK = "tel:+4915121343097";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/nicole-thorisch/";

/**
 * Opens an external URL. Uses postMessage when in iframe (for Orchids/embed compatibility),
 * otherwise opens directly (window.open for http/https, location for mailto/tel).
 */
export function openExternalUrl(url: string): void {
  if (typeof window === "undefined") return;

  const isInIframe = window.self !== window.top;

  if (isInIframe) {
    window.parent.postMessage(
      { type: "OPEN_EXTERNAL_URL", data: { url } },
      "*"
    );
  } else {
    if (url.startsWith("http")) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  }
}
