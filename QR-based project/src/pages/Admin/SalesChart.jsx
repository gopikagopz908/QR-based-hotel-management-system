// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// const SalesChart = () => {
//   const data = [
//     { name: 'Mar', target: 40, actual: 25 },
//     { name: 'May', target: 30, actual: 5 },
//     { name: 'Jun', target: 50, actual: 20 },
//     { name: 'Apr', target: 40, actual: 28 },
//   ];

//   return (
//     <div className="bg-white p-2 rounded-lg shadow-sm">
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" vertical={false} />
//           <XAxis dataKey="name" axisLine={false} tickLine={false} />
//           <YAxis 
//             axisLine={false} 
//             tickLine={false}
//             tickFormatter={(value) => `${value}K`}
//             ticks={[0, 10, 20, 30, 40, 50]}
//           />
//           <Bar dataKey="target" fill="#c53030" barSize={30} />
//           <Bar dataKey="actual" fill="#f56565" barSize={30} />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default SalesChart;
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const SalesChart = () => {
  const data = [
    { name: 'Mar', target: 40, actual: 25 },
    { name: 'May', target: 30, actual: 5 },
    { name: 'Jun', target: 50, actual: 20 },
    { name: 'Apr', target: 40, actual: 28 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 lg:w-230 h-[350px]">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Sales Overview</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#4A5568', fontSize: 14 }}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false}
            tickFormatter={(value) => `${value}K`}
            ticks={[0, 10, 20, 30, 40, 50]}
            tick={{ fill: '#4A5568', fontSize: 14 }}
          />
          <Bar dataKey="target" fill="#E53E3E" radius={[4, 4, 0, 0]} />
          <Bar dataKey="actual" fill="#FC8181" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
