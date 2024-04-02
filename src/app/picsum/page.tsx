import ImgComponent from './imgComponent/ImgComponent';
import { getPicsumPhotos } from '../api/picsumPhoto/getPicsumPhotos';

export default async function Picsum() {
  const imgLists = await getPicsumPhotos();

  return (
    <main>
      <ImgComponent imgLists={imgLists} />
    </main>
  );
}
