
import { Home, Calendar, Users, Briefcase, Building } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, path: "/", label: "Home" },
    { icon: Calendar, path: "/events", label: "Events" },
    { icon: Users, path: "/groups", label: "Groups" },
    { icon: Briefcase, path: "/usf-jobs", label: "Jobs" },
    { icon: Building, path: "/student-housing", label: "Housing" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
      <div className="flex justify-between">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-1 flex-col items-center py-2 px-1 ${
              location.pathname === item.path
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
      {/* Add safe area padding for iOS devices */}
      <div className="h-[env(safe-area-inset-bottom, 0px)]"></div>
    </div>
  );
};

export default BottomNav;
