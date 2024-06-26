import {statusUser,statusSex,roleUser} from "../../contans/enum/user/user"
export interface IUser {
    _id: string
    username: string
    password: string
    full_name: string
    email: string
    phone: number
    status: statusUser
    sex: statusSex
    image: string
    role: roleUser
    createdAt: Date
    updatedAt: Date
  }
  