import { writeFile, mkdir } from "fs/promises";
import { dirname, basename } from "path";
import { existsSync } from "fs";

const ASSETS = {
  // Hero 3D illustration
  "public/images/hero-3d.png":
    "https://framerusercontent.com/images/6pFh1kCjmUdQEOeybBa2kJv70.png?width=1476&height=1080",

  // Hero video
  "public/videos/hero-showreel.mp4":
    "https://framerusercontent.com/assets/BKqcImNc0IPnvM0VnmLueOSuI.mp4",

  // Hero video thumbnail
  "public/images/hero-video-thumb.jpg":
    "https://framerusercontent.com/images/nfOarCZiF5CcH4ThwssPXlMwiA.jpg?scale-down-to=512&width=1920&height=1080",

  // Logo bar images
  "public/images/logos/logo-1.png":
    "https://framerusercontent.com/images/fG5uqOgl43qhhiPH56hF84UrTs.png?scale-down-to=1024&width=1300&height=336",
  "public/images/logos/logo-2.png":
    "https://framerusercontent.com/images/zePNmwKsJJlIjKuawASK80nPtk.png?scale-down-to=1024&width=1761&height=336",
  "public/images/logos/logo-3.png":
    "https://framerusercontent.com/images/Za3YaKBZ4ieum1B0ieifAFdPik.png?scale-down-to=1024&width=1535&height=336",
  "public/images/logos/logo-4.png":
    "https://framerusercontent.com/images/VdZYGP1aARcAIODj5sWnjn1vDac.png?scale-down-to=1024&width=1770&height=323",
  "public/images/logos/logo-5.png":
    "https://framerusercontent.com/images/cKWxePeq3jR2Saj0Xn8To9npdU.png?scale-down-to=1024&width=1322&height=329",

  // Service 3D illustrations
  "public/images/services/strategy.png":
    "https://framerusercontent.com/images/x7hratoT3nPTpBxI5IcFStJUlA.png?width=1476&height=1080",
  "public/images/services/content.png":
    "https://framerusercontent.com/images/p0hfm5aXPR7CvS0VFe8i8hfb0.png?scale-down-to=512&width=1476&height=1080",
  "public/images/services/agent.png":
    "https://framerusercontent.com/images/ChyEvJEa3m50IQ7wef8CzTbri4.png?width=1476&height=1080",
  "public/images/services/crm.png":
    "https://framerusercontent.com/images/bSeTRBZpvbznzCGwEHBoRIkeJec.png?width=1476&height=1080",

  // Case study images
  "public/images/cases/case1-badge.png":
    "https://framerusercontent.com/images/CGNbNj9Qu98xQigxltE0806nEY8.png",
  "public/images/cases/case1-laptop.jpg":
    "https://framerusercontent.com/images/ce5I6F9x8Gyhj7YDaRZ9kwmPans.jpg",
  "public/images/cases/case2-badge.png":
    "https://framerusercontent.com/images/eGURKwNq8AVWJnmrt90kSxo0C98.png",
  "public/images/cases/case2-monitor.jpg":
    "https://framerusercontent.com/images/x1W4oQBvmcvuOt4GlWOEKQMUUOc.jpg",

  // Process 3D illustrations
  "public/images/process/discover.png":
    "https://framerusercontent.com/images/di47IMj3jrE8zC6ccDrzBzwdJc.png?scale-down-to=512",
  "public/images/process/plan.png":
    "https://framerusercontent.com/images/4WgVzsWwAQ7FuEldrUq52VjfIuE.png?width=733&height=858",
  "public/images/process/build.png":
    "https://framerusercontent.com/images/Tv70EeWsvpvWUdwjxKkI970Wo.png?width=683&height=697",
  "public/images/process/scale.png":
    "https://framerusercontent.com/images/TuyyNtD9Hr1T1dLYcREJI70vNCc.png?width=621&height=837",

  // Tech stack logos
  "public/images/tech/techstack.png":
    "https://framerusercontent.com/images/e6nXtcZgsAOERqIHk6abO9UkkSc.png?scale-down-to=512",

  // Team photos
  "public/images/team/team1.png":
    "https://framerusercontent.com/images/dtNUzsIukSKTg3QgmMIt11lqJA.png?width=748&height=484",
  "public/images/team/team2.png":
    "https://framerusercontent.com/images/cfaqcNXNkrl8DaoFnNHK55DVIPc.png?width=748&height=484",
  "public/images/team/team3.png":
    "https://framerusercontent.com/images/YesCLcHs1NEUFuzDAfey66i2JQ.png?width=748&height=484",
  "public/images/team/team4.png":
    "https://framerusercontent.com/images/qCxgrtCLFg6aHGYYXFy3DXIXCg.png?width=748&height=484",

  // Pricing icons
  "public/images/pricing/check-green.png":
    "https://framerusercontent.com/images/QdEY2Qpvm52XeskP1e7RAOOsBd4.png",
  "public/images/pricing/check-white.png":
    "https://framerusercontent.com/images/B5HZk1WujPnlZCGGseUwX16t0.png",

  // Tech stack individual icons
  "public/images/tech/openai.png":
    "https://framerusercontent.com/images/KpYSUGGCC0qK2rL79NdDfRecwjs.png",
  "public/images/tech/zapier.png":
    "https://framerusercontent.com/images/oCnuYGTGjH2Rfl3aGz0xMtLkc.png",
  "public/images/tech/airtable.png":
    "https://framerusercontent.com/images/voYdA3yX6HN4WT8rYUWU7b9ulVY.png",
  "public/images/tech/langchain.png":
    "https://framerusercontent.com/images/9o9UFGLAH3qmbXOYviYiiSd3s.png",
  "public/images/tech/python.png":
    "https://framerusercontent.com/images/bImXh1ifv9Bvrv9U9CcDmzfhlKU.png",

  // Blog images
  "public/images/blog/blog1.jpg":
    "https://framerusercontent.com/images/mQ8TV01cK8doKxlfjFpa2tmf4s.jpg?width=3200&height=2400",

  // Footer logo
  "public/images/footer-logo.png":
    "https://framerusercontent.com/images/J7kYbrJloRUNRzWxDo9aqCxhcUQ.png?width=1440&height=268",
  "public/images/footer-logo-small.png":
    "https://framerusercontent.com/images/ZifbbBTquQq4fHgIt1XSuPuV2E.png?scale-down-to=512",

  // Favicon
  "public/favicon.jpg":
    "https://framerusercontent.com/images/njdBjVwMcVZjp4IgZV0VUDmR4.jpg",

  // Second video
  "public/videos/case-study.mp4":
    "https://framerusercontent.com/assets/buMw1tJza1Sz8WQ3GmAB16KkSJY.mp4",

  // Comparison section check/x icons
  "public/images/pricing/x-red.png":
    "https://framerusercontent.com/images/qEMk2gUqMDKfHtO5MYCvCtyU.png?scale-down-to=512",
};

async function downloadFile(localPath, url) {
  const dir = dirname(localPath);
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(localPath, buffer);
    console.log(`OK: ${localPath} (${(buffer.length / 1024).toFixed(1)}KB)`);
  } catch (err) {
    console.error(`FAIL: ${localPath} — ${err.message}`);
  }
}

async function main() {
  const entries = Object.entries(ASSETS);
  console.log(`Downloading ${entries.length} assets...\n`);

  // Download 4 at a time
  for (let i = 0; i < entries.length; i += 4) {
    const batch = entries.slice(i, i + 4);
    await Promise.all(batch.map(([path, url]) => downloadFile(path, url)));
  }

  console.log("\nDone!");
}

main();
