
import { useState } from 'react';
import { Bell, Check, X, Trash2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Sample notification data
const initialNotifications = [
  {
    id: 1,
    title: 'New Event: Campus Concert',
    description: 'A new concert has been added near your area this weekend.',
    timestamp: '2 hours ago',
    read: false,
    type: 'event'
  },
  {
    id: 2,
    title: 'Housing Application Deadline',
    description: 'Reminder: Student housing applications are due next week.',
    timestamp: '1 day ago',
    read: false,
    type: 'housing'
  },
  {
    id: 3,
    title: 'New Job Opportunity',
    description: 'A new job matching your profile has been posted.',
    timestamp: '2 days ago',
    read: true,
    type: 'job'
  },
  {
    id: 4,
    title: 'Account Updated',
    description: 'Your account details have been successfully updated.',
    timestamp: '3 days ago',
    read: true,
    type: 'account'
  },
  {
    id: 5,
    title: 'Community Event Canceled',
    description: 'The community meetup scheduled for tomorrow has been canceled.',
    timestamp: '4 days ago',
    read: true,
    type: 'event'
  }
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState('all');
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };
  
  const clearAllNotifications = () => {
    setNotifications([]);
  };
  
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };
  
  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };
  
  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'unread'
      ? notifications.filter(n => !n.read)
      : notifications.filter(n => n.type === filter);
  
  const getTypeColor = (type: string) => {
    switch(type) {
      case 'event': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'housing': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'job': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'account': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Bell className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Notifications</h1>
            {unreadCount > 0 && (
              <Badge variant="destructive" className="rounded-full">{unreadCount}</Badge>
            )}
          </div>
          
          <div className="flex space-x-3">
            <Button variant="outline" size="sm" onClick={markAllAsRead} disabled={unreadCount === 0}>
              <Check className="h-4 w-4 mr-2" />
              Mark all as read
            </Button>
            <Button variant="outline" size="sm" onClick={clearAllNotifications} disabled={notifications.length === 0}>
              <Trash2 className="h-4 w-4 mr-2" />
              Clear all
            </Button>
          </div>
        </div>
        
        <div className="bg-card rounded-lg shadow-sm border mb-6">
          <div className="p-4 flex flex-wrap gap-2">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button 
              variant={filter === 'unread' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('unread')}
            >
              Unread
            </Button>
            <Button 
              variant={filter === 'event' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('event')}
            >
              Events
            </Button>
            <Button 
              variant={filter === 'housing' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('housing')}
            >
              Housing
            </Button>
            <Button 
              variant={filter === 'job' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('job')}
            >
              Jobs
            </Button>
            <Button 
              variant={filter === 'account' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('account')}
            >
              Account
            </Button>
          </div>
        </div>
        
        <div className="bg-card rounded-lg shadow border">
          {filteredNotifications.length === 0 ? (
            <div className="p-8 text-center">
              <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium">No notifications</h3>
              <p className="text-muted-foreground">When you have notifications, they will appear here.</p>
            </div>
          ) : (
            <ul className="divide-y">
              {filteredNotifications.map((notification) => (
                <li 
                  key={notification.id} 
                  className={cn(
                    "p-4 hover:bg-accent/50 transition-colors relative",
                    !notification.read && "bg-accent/20"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center mb-1">
                        <span 
                          className={cn(
                            "text-xs font-medium px-2 py-0.5 rounded-full mr-2",
                            getTypeColor(notification.type)
                          )}
                        >
                          {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {notification.timestamp}
                        </span>
                      </div>
                      <h4 className="text-base font-medium">{notification.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      {!notification.read && (
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => markAsRead(notification.id)}
                          title="Mark as read"
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      )}
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => deleteNotification(notification.id)}
                        title="Delete notification"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Notifications;
