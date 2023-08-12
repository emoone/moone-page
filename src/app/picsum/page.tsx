import { getPicsumPhotos } from '../api/picsumPhoto/getPicsumPhotos';
import ImgComponent from './imgComponent/ImgComponent';

export default async function Picsum() {
  const imgLists = await getPicsumPhotos();

  return (
    <main>
      <h1>PicsumImgPageArea</h1>
      <ImgComponent imgLists={imgLists} />
    </main>
  );
}
