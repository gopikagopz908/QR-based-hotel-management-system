import React, { useEffect, useState } from 'react'
import TableModal from '../../components/tableModal'
import useGenerateQr from '../../hooks/useGenerateQr'

function Table() {
  const tableData = [
    { id: 1, capacity: 4 },
    { id: 2, capacity: 6 },
    { id: 3, capacity: 2 },
    { id: 4, capacity: 8 },
  ]
const {data,generateQr}=useGenerateQr()

useEffect(()=>{
generateQr(33)
},[])




const[isModal,setIsModal]=useState(false) 
function openModal(){
    setIsModal(true)

}
function closeModal(){
  setIsModal(false)
}

  return (
    
    <div className="p-18 ">
      <div className='w-full  flex justify-end mb-14'>
        <button  onClick={openModal}
         className='bg-amber-600'>add</button>
 
      </div>
        
      <table className="min-w-full border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2 text-left">Table ID</th>
            <th className="border px-4 py-2 text-left">Capacity</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((table) => (
            <tr key={table.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{table.id}</td>
              <td className="border px-4 py-2">{table.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-wrap gap-4">
        {
          <img src={data}  className="w-32 h-32 border"/>
        }
      </div>
      {isModal  &&
      <TableModal onClose={closeModal}/>
      }

    </div>
  )
}

export default Table








// import React, { useEffect, useState } from 'react';
// import TableModal from '../../components/tableModal';
// import useGenerateQr from '../../hooks/useGenerateQr';

// function Table() {
//   const tableData = [
//     { id: 1, capacity: 4 },
//     { id: 2, capacity: 6 },
//     { id: 3, capacity: 2 },
//     { id: 4, capacity: 8 },
//   ];

//   const { data, generateQr } = useGenerateQr();
//   const [imgSrc, setImgSrc] = useState('');
//   const [isModal, setIsModal] = useState(false);

//   // Generate QR code and update imgSrc when data changes/
//   useEffect(() => {
//     generateQr(33); // Trigger QR code generation
//   }, []); // Empty dependency array to run once on mount

//   useEffect(() => {
//     if (data) {
//       // Assuming data is a base64 string; prefix it with the correct MIME type
//       const base64Image = `data:image/png;base64,${data}`;
//       setImgSrc(base64Image);
//     }
//   }, [data]);


//   function openModal() {
//     setIsModal(true);
//   }

//   function closeModal() {
//     setIsModal(false);
//   }

//   return (
//     <div className="p-18">
//       <div className="w-full flex justify-end mb-14">
//         <button onClick={openModal} className="bg-amber-600">
//           Add
//         </button>
//       </div>

//       <table className="min-w-full border border-gray-300 text-sm">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border px-4 py-2 text-left">Table ID</th>
//             <th className="border px-4 py-2 text-left">Capacity</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((table) => (
//             <tr key={table.id} className="hover:bg-gray-100">
//               <td className="border px-4 py-2">{table.id}</td>
//               <td className="border px-4 py-2">{table.capacity}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="flex flex-wrap gap-4 mt-4">
//         {imgSrc && (
//           <img src={imgSrc.data} alt="QR Code" className="w-32 h-32 border" />
//         )}
//       </div>

//       {isModal && <TableModal onClose={closeModal} />}
//     </div>
//   );
// }

// export default Table;