import { Navigate} from 'react-router-dom';
import Layout from '../components/dashbord/layout/Layout';

const PrivateRoutes = ({ isLogin}) => {
   
  return  isLogin?.length ? <Layout />: <Navigate to="/form" replace/>
}

export default PrivateRoutes;