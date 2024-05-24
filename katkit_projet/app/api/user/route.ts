import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import { hash } from 'bcrypt';
export async function POST(req : Request) {
    try {
        const body = await req.json();
        const {email , username , password } = body;

        const existingUserByEmail = await db.user.findUnique({
            where : { email : email}
        });
        if (existingUserByEmail){
            return NextResponse.json({user : null , message : "Email déjà utilisé !"}, {status : 409})
        }

        const existingUserNameByEmail = await db.user.findUnique({
            where : { username : username}
        });
        if (existingUserNameByEmail){
            return NextResponse.json({username : null , message : "Username déjà utilisé !"}, {status : 409})
        } 

        const hashPassword = await hash(password,10);
        const newUser = await db.user.create({
            data : {
                username,
                email,
                password : hashPassword
            }
        });
        const { password : newUserPassword , ...rest } = newUser;
        return NextResponse.json({user :  newUser , message : "Votre compte a été créé avec succés !"}, {status : 201})
    } catch (error) {
        return NextResponse.json({message:"Erreur du Serveur"},{status : 500})
    }
}