import PicsumComponent from '../../components/picsum/PicsumComponent';
import { getPicsumPhotos } from '../api/picsumPhoto/getPicsumPhotos';

export default async function Picsum() {
  const imgLists = await getPicsumPhotos();

  return (
    <main>
      <PicsumComponent imgLists={imgLists} />
    </main>
  );
}
