import { useGetUser } from './../actions/user';
import Redirect from './../components/shared/Redirect';

const withAuth = (Component) => (role) => {
    return props => {
        const {data: user, loading} = useGetUser();
    if (loading) {
        return <p>Loading...</p>
      }
    if (!user) {
        return <Redirect ssr to={"/api/v1/login"}/>
    } else {
      if (user && )
      return <Component user={user} loading={loading}/>
    }
    }
  }
  
  export default withAuth;