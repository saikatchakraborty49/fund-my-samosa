import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from 'next-auth/providers/github'
import dbConnect from '@/db/dbConnect'
import User from '@/models/User'

const authOptions=NextAuth({
  providers: [
    // OAuth authentication providers...
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("User:", user);
      // console.log("Account:", account);
      // console.log("Profile:", profile);
      // console.log("Email:", email);
      // console.log("Credentials:", credentials);

      await dbConnect();
      let currUser=await User.findOne({email:user.email})
      if(!currUser){
        const newUser=await User.create({
          name:user.name,
          email:user.email,
          userName:user.email.split("@")[0],
          profilePicture:user.image,
        })
      }

      // const isAllowedToSignIn = true
      // if (isAllowedToSignIn) {
      //   return true
      // } else {
      //   // Return false to display a default error message
      //   return false
      //   // Or you can return a URL to redirect to:
      //   // return '/unauthorized'
      // }
      return true;
    },

    async session({session,user,token}){
      let currUser=await User.findOne({email:session.user.email})
      // console.log("***********session:****************");
      // console.log(session)
      session.user.name=currUser.userName
      // console.log(session)
      return session

    }
  }
  
})

export {authOptions as GET, authOptions as POST}