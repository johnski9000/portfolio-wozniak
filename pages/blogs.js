import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage"
import { useGetUser } from './../actions/user';

function blogs() {
  const {data, error, loading} = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
    <BasePage>
    <h1>
        I am blogs page
      </h1>
      </BasePage>
      
    </BaseLayout>
  )
}

export default blogs