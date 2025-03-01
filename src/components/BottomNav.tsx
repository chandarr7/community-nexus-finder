
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-sm">
      <div className="flex justify-between max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-1 flex-col items-center py-3 px-2 transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className={`relative ${isActive ? "after:absolute after:bottom-[-8px] after:left-[25%] after:right-[25%] after:h-[3px] after:bg-primary after:rounded-full" : ""}`}>
                <item.icon size={24} className={isActive ? "stroke-[2.5px]" : "stroke-[2px]"} />
              </div>
              <span className={`text-xs mt-1 font-medium ${isActive ? "opacity-100" : "opacity-80"}`}>{item.label}</span>
            </Link>
          );
        })}
      </div>
      {/* Add safe area padding for iOS devices */}
      <div className="h-[env(safe-area-inset-bottom, 0px)]"></div>
    </div>
  );
};

export default BottomNav;
