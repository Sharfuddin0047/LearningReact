let p1 = fetch("API URL");
p1.then(() => {});
p1.catch(() => {});

async function getData() {
  try {
    let resp = await fetch("API URL");
    let data = await resp.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}