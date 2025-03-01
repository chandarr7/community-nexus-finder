
import React, { useState, useMemo } from 'react';
import { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Group } from '@/types';
import { groups as initialGroups } from '@/data/groups';
import GroupCard from '@/components/GroupCard';
import Header from '@/components/Header';
import { PlusCircle, Search, Star, Users } from 'lucide-react';

const Groups = () => {
  const { toast } = useToast();
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredGroups = useMemo(() => {
    return groups.filter(group => {
      const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase());
      if (activeTab === 'all') return matchesSearch;
      if (activeTab === 'favorites') return matchesSearch && group.isFavorite;
      if (activeTab === 'my-groups') return matchesSearch && group.isJoined;
      if (activeTab === 'discover') return matchesSearch && !group.isJoined;
      return matchesSearch;
    });
  }, [groups, searchQuery, activeTab]);

  const handleToggleFavorite = (id: string, isFavorite: boolean) => {
    setGroups(prevGroups => 
      prevGroups.map(group => 
        group.id === id ? { ...group, isFavorite } : group
      )
    );
  };

  const handleToggleJoin = (id: string, isJoined: boolean) => {
    setGroups(prevGroups => 
      prevGroups.map(group => 
        group.id === id ? { ...group, isJoined } : group
      )
    );
  };

  const createNewGroup = () => {
    toast({
      title: "Create Group",
      description: "Group creation feature coming soon!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Groups</h1>
            <p className="text-muted-foreground">
              Join existing groups or create your own community
            </p>
          </div>
          <Button onClick={createNewGroup} className="w-full md:w-auto">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Group
          </Button>
        </div>
        
        <div className="mt-6 space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex w-full items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search groups..."
                  className="w-full pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">All Groups</span>
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span className="hidden sm:inline">Favorites</span>
              </TabsTrigger>
              <TabsTrigger value="my-groups" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">My Groups</span>
              </TabsTrigger>
              <TabsTrigger value="discover" className="flex items-center gap-2">
                <PlusCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Discover</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6 space-y-4">
              <h2 className="text-xl font-semibold">All Groups</h2>
              <div className="grid grid-cols-1 gap-4">
                {filteredGroups.map(group => (
                  <GroupCard 
                    key={group.id} 
                    group={group} 
                    onToggleFavorite={handleToggleFavorite}
                    onToggleJoin={handleToggleJoin}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="favorites" className="mt-6 space-y-4">
              <h2 className="text-xl font-semibold">Favorite Groups</h2>
              <div className="grid grid-cols-1 gap-4">
                {filteredGroups.length > 0 ? (
                  filteredGroups.map(group => (
                    <GroupCard 
                      key={group.id} 
                      group={group} 
                      onToggleFavorite={handleToggleFavorite}
                      onToggleJoin={handleToggleJoin}
                    />
                  ))
                ) : (
                  <p className="text-muted-foreground py-4">No favorite groups yet. Star a group to add it to your favorites.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="my-groups" className="mt-6 space-y-4">
              <h2 className="text-xl font-semibold">My Groups</h2>
              <div className="grid grid-cols-1 gap-4">
                {filteredGroups.length > 0 ? (
                  filteredGroups.map(group => (
                    <GroupCard 
                      key={group.id} 
                      group={group} 
                      onToggleFavorite={handleToggleFavorite}
                      onToggleJoin={handleToggleJoin}
                    />
                  ))
                ) : (
                  <p className="text-muted-foreground py-4">You haven't joined any groups yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="discover" className="mt-6 space-y-4">
              <h2 className="text-xl font-semibold">Discover Groups</h2>
              <div className="grid grid-cols-1 gap-4">
                {filteredGroups.length > 0 ? (
                  filteredGroups.map(group => (
                    <GroupCard 
                      key={group.id} 
                      group={group} 
                      onToggleFavorite={handleToggleFavorite}
                      onToggleJoin={handleToggleJoin}
                    />
                  ))
                ) : (
                  <p className="text-muted-foreground py-4">No new groups to discover at the moment.</p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Groups;
