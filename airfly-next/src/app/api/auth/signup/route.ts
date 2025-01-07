import connection  from "@/app/lib/mongoDB";
import Signup from '@/app/models/signup.model'
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest){
    try {
        await connection();

        const {name , email , password} = await req.json();

        if(!name || !email || !password){
            return NextResponse.json({message: 'All fields are required'}, {status: 400});
        }

        const existEmail = await Signup.findOne({email});

        if(existEmail){
            return NextResponse.json({message: 'This Email is already registered'}, {status: 400});
        }

        if(password.length<6){
            return NextResponse.json({message: 'Password is too weak'}, {status: 400});
            
        }

        const hashPassword = await bcrypt.hash(password , 10);

        const newUser = new Signup({
            name,
            email,
            password: hashPassword,
            createdAt: new Date(),
        })

        newUser.isAdmin = email.includes('+');

        await newUser.save();
        console.log(newUser)
        return NextResponse.json({message: "User Registered Successfully", user: newUser}  , {status: 200});
    } catch (error) {
       return NextResponse.json({error: error} , {status: 500})
    }
}