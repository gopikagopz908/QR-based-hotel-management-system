import { LayoutDashboard, LogOut, ShoppingCart, Table, Users, UtensilsCrossed } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    
    const menuItems = [
      { 
        path: "/admin", 
        name: "Dashboard", 
        icon: <LayoutDashboard className="w-5 h-5" /> 
      },
      { 
        path: "foods", 
        name: "Foods", 
        icon: <UtensilsCrossed className="w-5 h-5" /> 
      },
      { 
        path: "/tables", 
        name: "Tables", 
        icon: <Table className="w-5 h-5" /> 
      },
      { 
        path: "/staffs", 
        name: "Staffs", 
        icon: <Users className="w-5 h-5" /> 
      },
      { 
        path: "/orders", 
        name: "Orders", 
        icon: <ShoppingCart className="w-5 h-5" /> 
      },
    ];
  
    const isActive = (path) => {
      return location.pathname === path;
    };
  
    return (
      <div className="w-60 bg-stone-300 text-gray-800 min-h-full flex flex-col shadow-md">
        {/* Logo */}
        <div className="p-4 border-b border-blue-100">
          <div className="flex items-center gap-2">
            <img src="2.jpg" alt="Logo" className="w-8 h-8 bg-stone-300" />
            <h1 className="text-xl  lg:text-3xl font-primary text-red-800">Flavor Bliss</h1>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-6 ">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center lg:text-1xl gap-3 px-6 py-3 transition-colors ${
                    isActive(item.path)
                      ? "text-red-500 font-medium"
                      : "text-black hover:text-red-500"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Logout */}
        <div className="p-4 border-t border-blue-100">
          <button className="flex items-center gap-3 px-2 py-6 text-black transition-colors w-full">
            <LogOut className="lg:w-8 lg:h-8"  />
            <span>Logout</span>
          </button>
        </div>
      </div>
    );
  };
  export default Sidebar;