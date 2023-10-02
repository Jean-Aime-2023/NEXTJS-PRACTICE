import { connect } from '@/dbConfig/dbConfig';
import User from "@/models/userModal"
import { NextRequest,NextResponse } from 'next/server';
import bcryptjs from "bcryptjs"
 
connect();

export async function POST(request:NextResponse){
    try {
        const reqBody = await request.json()
        const {username,email,password} = reqBody
        console.log(reqBody);
        //check if user already exists
        const user = await User.findOne({email})
         
        if(user){
            return NextResponse.json({error:"User already exists"},{status:400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt)

        const newUser = new User({
            username,
            email,
            password : hashedPassword
        })

        await newUser.save()

    } catch (error: any) {
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
}