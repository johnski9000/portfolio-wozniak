import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage"
import { useGetUser } from './../actions/user';

function about() {
  const {data, error, loading} = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
    <BasePage>
    <h1>
        I am about page
      </h1>
    </BasePage>
      
    </BaseLayout>
  )
}

export default about