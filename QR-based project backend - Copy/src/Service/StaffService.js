import Staffs from "../model/StaffModel.js"


export const staffLoginService=async(email)=>{

    const data=await Staffs.findOne({email})
    console.log(data,'gfygfyergy')

}