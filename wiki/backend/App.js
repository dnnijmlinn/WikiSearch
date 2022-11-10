const { wikisearch } = require("./wikisearch");

let haku = "";
if (process.argv[3] != null) {
  haku = encodeURIComponent(process.argv[2] + " " + process.argv[3]);
  haku.replace(" ", "%20");
} else {
  haku = encodeURIComponent(process.argv[2]);
}

wikisearch(haku, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

