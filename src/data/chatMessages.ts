
import { ChatMessage } from "@/types";

export const chatMessages: Record<string, ChatMessage[]> = {
  "1": [
    {
      id: "1-1",
      groupId: "1",
      userId: "user1",
      userName: "Sarah Johnson",
      userAvatar: "/placeholder.svg",
      content: "Has anyone seen the new performance schedule for next month?",
      timestamp: "2023-06-15T14:32:00Z"
    },
    {
      id: "1-2",
      groupId: "1",
      userId: "user2",
      userName: "Michael Rodriguez",
      userAvatar: "/placeholder.svg",
      content: "Yes, it's been posted on the department board. I can take a picture and share it here.",
      timestamp: "2023-06-15T14:35:00Z"
    },
    {
      id: "1-3",
      groupId: "1",
      userId: "user3",
      userName: "Emma Williams",
      userAvatar: "/placeholder.svg",
      content: "That would be great, thanks Michael!",
      timestamp: "2023-06-15T14:38:00Z"
    }
  ],
  "2": [
    {
      id: "2-1",
      groupId: "2",
      userId: "user4",
      userName: "Jason Chen",
      userAvatar: "/placeholder.svg",
      content: "What movie are we watching this Friday?",
      timestamp: "2023-06-14T18:21:00Z"
    },
    {
      id: "2-2",
      groupId: "2",
      userId: "user5",
      userName: "Lisa Patel",
      userAvatar: "/placeholder.svg",
      content: "I think we're watching The Shining. Classic Kubrick!",
      timestamp: "2023-06-14T18:25:00Z"
    },
    {
      id: "2-3",
      groupId: "2",
      userId: "user4",
      userName: "Jason Chen",
      userAvatar: "/placeholder.svg",
      content: "Perfect! I've been wanting to watch that again.",
      timestamp: "2023-06-14T18:27:00Z"
    }
  ],
  "3": [
    {
      id: "3-1",
      groupId: "3",
      userId: "user6",
      userName: "Alex Thompson",
      userAvatar: "/placeholder.svg",
      content: "Did anyone watch the new Wong Kar-wai film?",
      timestamp: "2023-06-13T20:15:00Z"
    },
    {
      id: "3-2",
      groupId: "3",
      userId: "user7",
      userName: "Sophia Garcia",
      userAvatar: "/placeholder.svg",
      content: "Not yet, but I've heard great things about it. Should we add it to our discussion list?",
      timestamp: "2023-06-13T20:18:00Z"
    }
  ]
};
