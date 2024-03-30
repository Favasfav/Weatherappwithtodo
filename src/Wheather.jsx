import React, { useEffect, useState } from "react";
import image from "./image.jpg";
import axios from "axios";
import Swal from "sweetalert2";
function Wheather() {
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("delhi");
  const [data, setData] = useState("");
  const [pressure,setPressure]=useState(0)
  const [weather,setWeather]=useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(data);
    console.log(location);
    setData("");
  };

  const handleChange = (e) => {
    setData(e.target.value);
    console.log(e.target.value);
  };

  const fetchapi = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0a6f7e0b10bbb7e8017faf524132c027`;
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setTemp(response.data.main.temp);
        setPressure(response.data.main.pressure)
        setWeather(response.data.weather[0].main)
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Enter proper Location!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  useEffect(() => {
    fetchapi();
  }, [location]);

  const handleRefresh = () => {
    console.log("object");
    fetchapi();
  };

  return (
    <div className="p-10">
      <section
        className="mx-auto bg-cover bg-center bg-no-repeat bg-[url($(image))] my-10 flex max-w-xl flex-col rounded-3xl border-blue-300 px-4 py-10 text-gray-700 sm:border-8 sm:px-10 lg:max-w-screen-lg lg:flex-row"
        style={{
          backgroundImage: `url(${image})`,
          transition: "opacity 0.1s ease",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div class="mr-2">
            <h2 class="mb-4 text-4xl font-medium">
              A Better <span class="text-blue-600">wheather App</span>
            </h2>
            <h2 class="mb-4 text-4xl font-small">
              Location : <span class="text-blue-600">{location}</span>
            </h2>
            <div className="relative p-2 m-1">
              <input
                onChange={handleChange}
                type="text"
                id="text1"
                value={data}
                className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pr-3 pb-2.5 pt-4 text-sm text-gray-950 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Enter your Location"
              />
            </div>
            <div className="flex mt-3 p-2 justify-end space-x-2">
              <button
                className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white outline-none focus:ring"
                type="submit"
              >
                Submit
              </button>
            </div>
            <div className="w-[75px] h-[45px] text-gray-600">
                <h1
                  onClick={handleRefresh}
                  className=" px-2 border rounded-full bg-gray-800 font-bold text-green-500"
                >
                  Refresh
                </h1>
              </div>
            <div class="mb-4 space-y-4">
              <div class="flex space-x-2">
                <span class="text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                    ></path>
                  </svg>
                </span>
                <span class="font-medium">
                  {" "}
                  <h2 class="mb-6 max-w-lg text-3xl text-blue-600 font-bold sm:text-4xl">
                    Temprature : {temp} F
                  </h2>
                  
                </span>
              </div>
             

              <div class="flex space-x-2">
                <span class="text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                    ></path>
                  </svg>
                </span>
                <span class="font-medium">
                  {" "}
                  <h2 class="mb-6 max-w-lg text-3xl text-blue-600 font-bold sm:text-4xl">
                    Pressure : {pressure} hPa
                  </h2>
                  
                </span>
              </div>
            
              <div class="flex space-x-2">
                <span class="text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                    ></path>
                  </svg>
                </span>
                <span class="font-medium">
                  {" "}
                  <h2 class="mb-6 max-w-lg text-3xl text-blue-600 font-bold sm:text-4xl">
                    Weather : {weather} 
                  </h2>
                  
                </span>
              </div>
            </div>
            <div class="text-gray-400">and more...</div>
          </div>
        </form>
        {/* <div class="h-96">
    <img class="h-full w-full object-contain" src="/images/wv9smzv0S_DHtyCfKKeHA.png" alt="" />
  </div> */}
      </section>
    </div>
  );
}

export default Wheather;
