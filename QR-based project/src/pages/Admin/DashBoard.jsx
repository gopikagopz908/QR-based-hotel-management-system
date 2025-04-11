import { 
    DollarSign, 
    ShoppingCart, 
    UtensilsCrossed, 
    Users 
} from "lucide-react";
import SalesChart from "./SalesChart";
  
  const DashBoard = () => {
    const colorClasses = {
      green: 'bg-green-500',
      orange: 'bg-orange-500',
      yellow: 'bg-yellow-500',
    };
  
    const metrics = [
      {
        title: "Total Revenue",
        value: "$25,00",
        icon: <DollarSign className="w-4 h-4" />,
        color: "green"
      },
      {
        title: "Total Order",
        value: "200K",
        icon: <ShoppingCart className="w-4 h-4" />,
        color: "orange"
      },
      {
        title: "Total foods",
        value: "89",
        icon: <UtensilsCrossed className="w-4 h-4" />,
        color: "yellow"
      },
      {
        title: "Total staff",
        value: "89",
        icon: <Users className="w-4 h-4" />,
        color: "yellow"
      }
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
            <div className="flex items-center mb-1">
              <div className={`w-2 h-2 rounded-full mr-2 ${colorClasses[metric.color]}`}></div>
              <p className="text-gray-600 text-sm">{metric.title}</p>
            </div>
            <p className="text-2xl font-semibold">{metric.value}</p>
          </div>
        ))}
        <SalesChart/>
      </div>
    );
  };
  
  export default DashBoard;
  