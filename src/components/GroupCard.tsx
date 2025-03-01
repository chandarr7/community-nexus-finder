
import React from 'react';
import { Group } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, StarOff, UserPlus, UserMinus, Users } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

interface GroupCardProps {
  group: Group;
  onToggleFavorite: (id: string, isFavorite: boolean) => void;
  onToggleJoin: (id: string, isJoined: boolean) => void;
}

const GroupCard: React.FC<GroupCardProps> = ({ group, onToggleFavorite, onToggleJoin }) => {
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(group.id, !group.isFavorite);
    toast({
      title: group.isFavorite 
        ? `Removed ${group.name} from favorites` 
        : `Added ${group.name} to favorites`,
      variant: "default",
    });
  };

  const handleToggleJoin = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleJoin(group.id, !group.isJoined);
    toast({
      title: group.isJoined 
        ? `Left ${group.name}` 
        : `Joined ${group.name}`,
      variant: "default",
    });
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
    <Link to={`/groups/${group.id}`}>
      <Card className="w-full mb-4 overflow-hidden hover:shadow-md transition-shadow">
        <CardContent className="p-0">
          <div className="flex items-start p-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden mr-4">
              <img 
                src={group.image || "/placeholder.svg"} 
                alt={group.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-foreground truncate">
                {group.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {renderGroupTypeLabel(group.type)}
              </p>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <Users size={16} className="mr-1" />
                <span>{group.memberCount} members</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2 ml-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 h-8 w-8" 
                onClick={handleToggleFavorite}
                title={group.isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                {group.isFavorite ? <Star className="h-4 w-4 text-yellow-500" /> : <StarOff className="h-4 w-4" />}
              </Button>
              <Button 
                variant={group.isJoined ? "outline" : "default"} 
                size="sm" 
                className="p-2 h-8 w-8" 
                onClick={handleToggleJoin}
                title={group.isJoined ? "Leave group" : "Join group"}
              >
                {group.isJoined ? <UserMinus className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GroupCard;
