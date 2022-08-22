import EventTheme from "../../../src/components/eventTheme/EventTheme";
import axios from "axios";

interface Props {
  dummyData: any;
}
const Theme = ({ dummyData }: Props) => {
  return <EventTheme data={dummyData} />;
};

export async function getStaticProps() {
  try {
    const res = await axios.get(
      "http://localhost:4444/api/eventDummyApi/getDummy"
    );
    const data = res.data;

    return {
      props: {
        dummyData: data.ranking,
      },
    };
  } catch (err) {
    console.error(err);
  }
  return null;
}
export default Theme;
