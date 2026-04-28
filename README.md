# 🎥 Zoom Clone — Video Conferencing App

A full-featured real-time video conferencing application built from scratch — replicating core Zoom functionality using WebRTC for peer-to-peer video/audio and Socket.io for live signaling.

**Live Demo:** [zoom-clone-six-mu.vercel.app](https://zoom-clone-six-mu.vercel.app/)

---

## 📸 Preview

> _Add a screenshot of the video conference UI here_

---

## ✨ Features

- 📹 **Real-time video & audio** — peer-to-peer connections via WebRTC
- 🔴 **Live room management** — create and join rooms with unique room IDs
- 🔁 **WebSocket signaling** — low-latency connection negotiation with Socket.io
- 🔇 **Mute / camera toggle** — control your own audio and video mid-call
- 👥 **Multi-participant support** — multiple users in a single room
- 📱 **Responsive UI** — works on desktop and mobile browsers

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js · React |
| Real-time video | WebRTC (RTCPeerConnection) |
| Signaling | Socket.io · WebSockets |
| Styling | Tailwind CSS |
| Deployment | Vercel (frontend) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
git clone https://github.com/sam3690/zoom-clone.git
cd zoom-clone
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> ⚠️ WebRTC requires HTTPS for camera/microphone access in production. Locally, `localhost` is treated as secure by browsers.

---

## 🏗 Architecture

```
User A (Browser)                    User B (Browser)
     │                                    │
     │──── join room ────▶  Socket.io  ◀──── join room ────│
     │                      Signaling                       │
     │◀─── SDP offer/answer + ICE candidates ─────────────▶│
     │                                    │
     └──────── WebRTC P2P Connection ─────┘
               (video / audio stream)
```

The Socket.io server handles only **signaling** (connection negotiation). Once connected, all media flows directly peer-to-peer via WebRTC — the server carries no video data.

---

## 📁 Project Structure

```
zoom-clone/
├── app/
│   ├── page.tsx            # Landing page — create/join room
│   ├── room/[id]/          # Video conference room
│   └── layout.tsx
├── components/
│   ├── VideoGrid.tsx       # Renders participant video streams
│   ├── Controls.tsx        # Mute, camera, leave buttons
│   └── RoomEntry.tsx       # Room ID input & join flow
├── lib/
│   ├── socket.ts           # Socket.io client setup
│   └── webrtc.ts           # RTCPeerConnection helpers
├── server/
│   └── index.ts            # Socket.io signaling server
├── public/
└── README.md
```

---

## 🔑 Key Engineering Concepts

- **WebRTC signaling flow** — SDP offer/answer exchange and ICE candidate trickle via Socket.io
- **RTCPeerConnection** — managing multiple peer connections for multi-participant rooms
- **MediaStream API** — capturing and displaying local and remote audio/video tracks
- **Room lifecycle** — handling join, leave, and reconnection events gracefully

---

## 🛣 Roadmap

- [ ] Screen sharing
- [ ] Chat panel
- [ ] Recording
- [ ] TURN server for NAT traversal in restrictive networks

---

## 👤 Author

**Usama Ayoub** — Backend Developer  
[LinkedIn](https://www.linkedin.com/in/usama-ayoub-972822405/) · [Portfolio](https://sam3690.github.io/UsamaAyoub/) · usamabinayoub@gmail.com

---

## 📄 License

MIT License
