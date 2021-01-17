function openweathermap2() {

 fetch('https://api.openweathermap.org/data/2.5/weather?zip=33615&appid=4964517d2628ee5cfcffcfe8021efd92&units=metric')
  .then(res => res.json())
  .then(function (res) {
   console.log("openweathermap")
  })
}


async function openweathermap() {

 try {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=33615&appid=4964517d2628ee5cfcffcfe8021efd92&units=metric`)
  const data = await res.json();

  if (data.cod == 200) {
   console.log(data);
   return data;
  } else {
   alert(data.message);
   console.log(data.message);
   return data.message;
  }


 } catch (error) {
  console.log("Error in getWeathermapData", error);
 }
};

export { openweathermap }