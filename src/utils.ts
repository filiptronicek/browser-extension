export function renderGitpodUrl(gitpodURL: string): string {
    const baseURL = `${window.location.protocol}//${window.location.host}`;
    const trimmedUrl = gitpodURL.replace(/[\/]+$/g, '');
    return `${trimmedUrl}/#${baseURL}` + window.location.pathname + window.location.search;
}

export function isVisible(el: HTMLElement) {
    try {
      const rect = el.getBoundingClientRect();
      if (rect.height === 0 && rect.width === 0) {
        return false;
      }
      if (el.style.opacity === '0' || el.style.visibility === 'hidden') {
        return false;
      }
    } catch {}
    return true;
}

export function makeOpenInPopup(a: HTMLAnchorElement): void {
    a.onclick = () => !window.open(a.href, a.target, 'menubar=no,toolbar=no,location=no,dependent');
}