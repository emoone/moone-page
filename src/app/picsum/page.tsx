import { getPicsumPhotos } from '../api/picsumPhoto/getPicsumPhotos';
import ImgComponent from './imgComponent/ImgComponent';

export default async function Picsum() {
  const imgLists = await getPicsumPhotos();

  return (
    <main>
      <ImgComponent imgLists={imgLists} />
    </main>
  );
}
