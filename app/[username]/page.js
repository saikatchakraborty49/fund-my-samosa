import ProfilePage from '@/components/Profile/ProfilePage'
import ProfileSupportMessages from '@/components/Profile/ProfileSupportMessages'

const Username = async({params}) => {
  const userName=await params.username;
    
  return (
    <div>
      <ProfilePage
      userName={userName}/>
    </div>
  )
}

export default Username