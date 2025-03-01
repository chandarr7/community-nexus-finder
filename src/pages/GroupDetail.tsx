
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Group, ChatMessage } from '@/types';
import { groups } from '@/data/groups';
import { chatMessages } from '@/data/chatMessages';
import Header from '@/components/Header';
import GroupChat from '@/components/GroupChat';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, StarOff, UserPlus, UserMinus, ArrowLeft, Users, Calendar, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

const GroupDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const group = groups.find(g => g.id === id);
  
  const [messages, setMessages] = useState<ChatMessage[]>(
    chatMessages[id!] || []
  );
  
  const [isFavorite, setIsFavorite] = useState<boolean>(
    group?.isFavorite || false
  );
  
  const [isJoined, setIsJoined] = useState<boolean>(
    group?.isJoined || false
  );

  if (!group) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 pt-24 pb-16">
          <Button variant="ghost" onClick={() => navigate('/groups')} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Groups
          </Button>
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold">Group Not Found</h1>
            <p className="text-muted-foreground mt-2">The group you're looking for doesn't exist.</p>
          </div>
        </main>
      </div>
    );
  }

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite 
        ? `Removed ${group.name} from favorites` 
        : `Added ${group.name} to favorites`,
      variant: "default",
    });
  };

  const handleToggleJoin = () => {
    setIsJoined(!isJoined);
    toast({
      title: isJoined 
        ? `Left ${group.name}` 
        : `Joined ${group.name}`,
      variant: "default",
    });
  };

  const handleSendMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: `${id}-${Date.now()}`,
      groupId: id!,
      userId: 'current-user',
      userName: 'Current User',
      userAvatar: '/placeholder.svg',
      content,
      timestamp: new Date().toISOString()
    };
    
    setMessages([...messages, newMessage]);
  };

  const renderGroupTypeLabel = (type: string) => {
    switch (type) {
      case 'department':
        return 'Department';
      case 'student_organization':
        return 'Student Organization';
      case 'club':
        return 'Club';
      case 'sports_team':
        return 'Sports Team';
      case 'academic':
        return 'Academic Group';
      case 'community':
        return 'Community Group';
      default:
        return type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Button variant="ghost" onClick={() => navigate('/groups')} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Groups
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card className="p-4">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img 
                    src={group.image || "/placeholder.svg"} 
                    alt={group.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h1 className="text-2xl font-bold text-center">{group.name}</h1>
                <p className="text-muted-foreground mb-2">{renderGroupTypeLabel(group.type)}</p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Users size={16} />
                  <span>{group.memberCount} members</span>
                </div>
                
                <div className="flex gap-2 mb-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleToggleFavorite}
                    className="flex items-center gap-2"
                  >
                    {isFavorite ? (
                      <>
                        <StarOff className="h-4 w-4" />
                        <span>Remove Favorite</span>
                      </>
                    ) : (
                      <>
                        <Star className="h-4 w-4" />
                        <span>Add to Favorites</span>
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    variant={isJoined ? "outline" : "default"} 
                    size="sm"
                    onClick={handleToggleJoin}
                    className="flex items-center gap-2"
                  >
                    {isJoined ? (
                      <>
                        <UserMinus className="h-4 w-4" />
                        <span>Leave Group</span>
                      </>
                    ) : (
                      <>
                        <UserPlus className="h-4 w-4" />
                        <span>Join Group</span>
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="w-full">
                  <h3 className="text-lg font-semibold mb-2">About</h3>
                  <p className="text-sm">{group.description}</p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Created on {format(new Date(group.createdAt), 'MMMM d, yyyy')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Tabs defaultValue="chat">
              <TabsList className="w-full grid grid-cols-2 mb-4">
                <TabsTrigger value="chat" className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Chat
                </TabsTrigger>
                <TabsTrigger value="events" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Events
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="chat" className="m-0">
                <Card className="p-0 h-[600px]">
                  {isJoined ? (
                    <GroupChat 
                      groupId={group.id} 
                      groupName={group.name}
                      messages={messages}
                      onSendMessage={handleSendMessage}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full p-8">
                      <h3 className="text-xl font-semibold mb-2">Join the Group</h3>
                      <p className="text-muted-foreground text-center mb-4">
                        You need to join this group to participate in discussions.
                      </p>
                      <Button onClick={handleToggleJoin}>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Join Group
                      </Button>
                    </div>
                  )}
                </Card>
              </TabsContent>
              
              <TabsContent value="events" className="m-0">
                <Card className="p-6 h-[600px]">
                  <div className="flex flex-col items-center justify-center h-full">
                    <h3 className="text-xl font-semibold mb-2">No Upcoming Events</h3>
                    <p className="text-muted-foreground text-center">
                      This group doesn't have any upcoming events scheduled.
                    </p>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GroupDetail;
