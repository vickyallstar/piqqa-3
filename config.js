// ═══════════════════════════════════════════════════════════
//  onlyhers. — CONFIG FILE
//  Edit everything here. No need to touch other files.
// ═══════════════════════════════════════════════════════════

const CONFIG = {

  // ── Site Identity ────────────────────────────────────────
  websiteName: "onlyhers.",
  navbarTitle: "onlyhers.",
  splashText: "private feed",
  loadingTexts: [
    "loading memories...",
    "gathering stars...",
    "almost there, love...",
    "setting the mood..."
  ],

  // ── Profile ──────────────────────────────────────────────
  username: "@hername",
  displayName: "Her Name",
  bio: "certified pretty girl ✦ your favorite person",
  profilePhoto: "photos/profile.jpg",
  coverPhoto: "photos/cover.jpg",
  joined: "together since forever",
  location: "wherever you are",
  verified: true,

  // ── Theme Colors ─────────────────────────────────────────
  theme: {
    bg: "#0a0a0f",
    bgCard: "#111118",
    bgGlass: "rgba(17,17,24,0.7)",
    accent: "#c084fc",       // purple glow
    accentPink: "#f472b6",   // pink pastel
    accentSoft: "#e879f9",   // soft magenta
    text: "#f0eaf8",
    textMuted: "#8b7aa8",
    border: "rgba(192,132,252,0.15)",
    glow: "rgba(192,132,252,0.3)"
  },

  // ── Stories / Highlights ─────────────────────────────────
  stories: [
    { label: "us 🌙",    photo: "photos/story1.jpg",  color: "#c084fc" },
    { label: "dates ✦",  photo: "photos/story2.jpg",  color: "#f472b6" },
    { label: "places 🌸", photo: "photos/story3.jpg", color: "#818cf8" },
    { label: "vibes 🎵",  photo: "photos/story4.jpg",  color: "#e879f9" },
    { label: "candid 📷", photo: "photos/story5.jpg", color: "#a78bfa" }
  ],

  // ── Pinned Post ──────────────────────────────────────────
  pinnedPost: {
    image: "photos/pinned.jpg",
    caption: "still my favorite person. always. 🌙",
    date: "pinned",
    likes: 143
  },

  // ── Posts / Feed ─────────────────────────────────────────
  posts: [
    {
      id: "post_001",
      image: "photos/pic1.jpg",
      caption: "golden hour looks good on you. ✨",
      date: "2 days ago",
      likes: 87,
      tags: ["#aesthetic", "#golden"]
    },
    {
      id: "post_002",
      images: ["photos/pic2.jpg", "photos/pic3.jpg", "photos/pic4.jpg"],
      caption: "photo dump from last weekend. 🌸",
      date: "5 days ago",
      likes: 124,
      tags: ["#photodump", "#weekends"]
    },
    {
      id: "post_003",
      image: "photos/pic5.jpg",
      caption: "can't stop thinking about this place.",
      date: "1 week ago",
      likes: 96,
      tags: ["#memories"]
    },
    {
      id: "post_004",
      image: "photos/pic6.jpg",
      caption: "soft mornings with you. 🌷",
      date: "2 weeks ago",
      likes: 211,
      tags: ["#mornings", "#soft"]
    },
    {
      id: "post_005",
      images: ["photos/pic7.jpg", "photos/pic8.jpg"],
      caption: "two peas in a pod honestly.",
      date: "3 weeks ago",
      likes: 178,
      tags: ["#us", "#candid"]
    }
  ],

  // ── Quotes / Captions Carousel ───────────────────────────
  quotes: [
    "you make ordinary moments feel like a movie. 🎞",
    "somewhere between a dream and you. 🌙",
    "my favorite notification is always you.",
    "soft life. good music. your company. 🌸",
    "i collect moments of you like photographs."
  ],

  // ── Music Playlist ───────────────────────────────────────
  playlist: [
    { title: "Song Title One",   artist: "Artist Name",   file: "music/song1.mp3", cover: "photos/cover1.jpg" },
    { title: "Song Title Two",   artist: "Artist Name",   file: "music/song2.mp3", cover: "photos/cover2.jpg" },
    { title: "Song Title Three", artist: "Artist Name",   file: "music/song3.mp3", cover: "photos/cover3.jpg" }
  ],

  // ── Fake Notifications ───────────────────────────────────
  notifications: [
    { avatar: "photos/profile.jpg", text: "loved your photo 💜",           time: "just now",    type: "like"    },
    { avatar: "photos/profile.jpg", text: "commented: "missing you 🌙"",  time: "2 min ago",   type: "comment" },
    { avatar: "photos/profile.jpg", text: "sent you a memory 🎞",          time: "5 min ago",   type: "memory"  },
    { avatar: "photos/profile.jpg", text: "hearted your story ✨",          time: "10 min ago",  type: "story"   },
    { avatar: "photos/profile.jpg", text: "added a new photo dump 🌸",      time: "1 hour ago",  type: "post"    },
    { avatar: "photos/profile.jpg", text: "tagged you in a memory 🎀",      time: "2 hours ago", type: "tag"     },
    { avatar: "photos/profile.jpg", text: "playing your favorite song 🎵",  time: "yesterday",   type: "music"   }
  ],

  // ── Supabase Config ──────────────────────────────────────
  supabase: {
    url: "YOUR_SUPABASE_URL",
    anonKey: "YOUR_SUPABASE_ANON_KEY",
    enabled: false  // set true when Supabase is configured
  }

};

// Export for use in main app
if (typeof module !== "undefined") module.exports = CONFIG;
