import connection from "@/app/lib/mongoDB";
import { NextRequest, NextResponse } from 'next/server';
import Signup from "@/app/models/signup.model";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
 const secret = process.env.JWT_SECRET || 'shhhhh';

export async function POST(req: NextRequest) {
  try {
    await connection();
    const {email , password}  = await req.json();

    if(!email || !password){
    return NextResponse.json({ message: 'Email and Password are required!' }, { status: 400 });
    }

    const user = await Signup.findOne({email});

    if(!user){
    return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
    }

    const passwordHashed = await bcrypt.compare(password , user.password);

    if(!passwordHashed){
      return NextResponse.json({ message: 'Invalid password' }, { status: 400 });
      }

      const token = jwt.sign(
        {id: user._id , email: user.email },
        secret,
        {expiresIn: '7h'}

      )

    return NextResponse.json({ message: 'Login Successful!' , token , user: {id:user._id , name: user.name , email: user.email } }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}