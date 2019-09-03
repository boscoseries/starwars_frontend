
export default function useImage(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

// useImage(require.context("../assets", false, /\.(png|jpe?g|svg)$/));

// console.log(images)
