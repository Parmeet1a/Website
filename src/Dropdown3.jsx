import axios from "axios";
import React, { useState } from "react";
// import "./ApiTodo.css";

function Dropdown() {
  const [listArray, setListArray] = useState([]);
  const [favArray, setFavArray] = useState([]);
  // const [favouriteArray, setFavouriteArray] = useState();

  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [fav, setFav] = useState(false);
  const [infoId, setInfoId] = useState("");
  const [infoTitle, setInfoTitle] = useState("");
  // const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [searchcnt, setSearchcnt] = useState("");
  const [showsearch, setShowsearch] = useState(false);

  const star = (
    <svg
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
    </svg>
  );
  const star2 = (
    <svg
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
    </svg>
  );
    //  favouriteArray = listArray.filter((val) => val.id === id);
    // // console.log(favouriteArray);

    // const filVal = [...favouriteArray, ...favArray];

    // setFavArray(filVal);

    // console.log(filVal);

    // console.log(listArray[id-1]);
  // };

  const handleInfo = (id) => {
    setEdit(true);

    // console.log("Clicked edit");

    setInfoId(id);
    setInfoTitle(listArray[id - 1].name);
  };

  const handleNext = () => {
    let previousId = infoId;
    previousId++;
    setInfoId(previousId);
    setInfoTitle(listArray[previousId - 1].name);

    // console.log(previousId);
  };

  const handlePrevious = () => {
    let previousId = infoId;

    if (infoId > 1) {
      previousId--;
      setInfoId(previousId);
      setInfoTitle(listArray[previousId - 1].name);
    } else {
    }

    // console.log(previousId);
  };

  const handleDelete = (id) => {
    let remainingArray = listArray.filter((val) => val.id !== id);

    setListArray(remainingArray);
  };

  // const handleSearch = () => {
  //   // console.log(inputValue);

  //   let searchedArray = listArray[inputValue - 1];
  //   // console.log(searchedArray);

    
  // };

  const handleGet = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setListArray(response.data);
        setLoading(false);
      });
  };

  return (
    <div className="">
      <div className="flex relative justify-center">
        <div className="navbar relative h-16 flex w-[97%] bg-black mt-4">
          <div className="flex items-center ">
            <svg
              className="h-8 w-8 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 47.5 47.5"
              viewBox="0 0 47.5 47.5"
            >
              <defs>
                <clipPath id="a">
                  <path d="M0 38h38V0H0v38Z" />
                </clipPath>
              </defs>
              <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                <path
                  fill="#ccd6dd"
                  d="M0 0a4 4 0 0 0-4-4h-28a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V0Z"
                  transform="translate(37 10)"
                />
                <path
                  fill="#99aab5"
                  d="m0 0-11.313-11.313c-.027-.028-.037-.063-.06-.091a3.987 3.987 0 0 1 1.384-1.384c.029.023.063.033.09.059L1.415-1.414A1 1 0 0 1 0 0"
                  transform="translate(12.95 19.364)"
                />
                <path
                  fill="#99aab5"
                  d="M0 0c-.021.028-.033.063-.06.09l-11.312 11.314a1 1 0 1 1-1.415-1.414L-1.474-1.324c.027-.027.062-.037.09-.06A3.97 3.97 0 0 1 0 0"
                  transform="translate(36.423 7.96)"
                />
                <path
                  fill="#99aab5"
                  d="M0 0h-28a4 4 0 0 1-4-4v-1.03l14.528-14.495a4.88 4.88 0 0 1 6.884 0L4-5.009V-4a4 4 0 0 1-4 4"
                  transform="translate(33 32)"
                />
                <path
                  fill="#e1e8ed"
                  d="M0 0h-28a3.992 3.992 0 0 1-3.595-2.275l14.766-14.767a4 4 0 0 1 5.657 0L3.595-2.275A3.991 3.991 0 0 1 0 0"
                  transform="translate(33 32)"
                />
              </g>
            </svg>

            <div className=" text-3xl text-white ml-4 font-bold                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ">
              {" "}
              Api Todo List
            </div>
          </div>

          <div className="absolute right-12 mt-4">
            <input
              placeholder="Search"
              onChange={(e) => {
                const inpVal = e.target.value;
                setSearch(inpVal);
              }}
              className=" h-8 w-[200px] mx-2 font-bold p-2 outline-none"
            />
            <button
              onClick={() => {
                setSearchcnt(listArray.find((val) => val.id == search));            
                    // console.log("search cnt",searchcnt)               
                setShowsearch(true);
              }}
              className=" h-8 w-20 mx-2 rounded-lg bg-cyan-300 font-bold active:bg-cyan-800"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {edit === true ? (
        <div className="  border-2 card-cont absolute top-0 w-full border-red-100 h-full backdrop-blur-sm flex justify-center mt-4">
          <div className="border-4 card w-[500px] bg-white h-[300px]">
            <div className=" flex mt-2">
              <div className=" w-[90%] flex justify-center">
                <div className=" text-4xl font-bold">{infoId} </div>
              </div>

              <svg
                onClick={() => {
                  setEdit(false);
                }}
                className="h-8 w-8 ml-4 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </div>

            <div className=" mt-16 h-24 text-center text-xl font-bold opacity-60">
              {infoTitle}
            </div>

            <div className=" mt-8 flex justify-around ">
              <button
                onClick={() => {
                  handlePrevious();
                }}
                className="border w-24 h-8 bg-orange-500 font-bold text-white hover:bg-orange-400 active:bg-orange-600"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  handleNext();
                }}
                className="border w-24 h-8 bg-orange-500 font-bold text-white hover:bg-orange-400 active:bg-orange-600"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
       <div></div>
      )}
      {showsearch === true ? (
        <div className="  border-2 card-cont w-min border-red-100 flex justify-center mt-4">
          <div className=" card  bg-white ">
            <div className=" flex mt-2">
              <div className=" flex justify-center">
                <div className=" text-2xl font-semibold">{searchcnt.id} </div>
                
              </div>

              <svg
                onClick={() => {
                  setSearch(false);
                }}
                className="h-8 w-8 ml-4 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </div>

            <div className="flex" >
              <div className=" mt-16 h-24 text-center text-xl font-bold opacity-60">{searchcnt.name}</div>
            
            </div>

            {/* <div className=" mt-8 flex justify-around ">
              <button
                onClick={() => {
                  handlePrevious();
                }}
                className="border w-24 h-8 bg-orange-500 font-bold text-white hover:bg-orange-400 active:bg-orange-600"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  handleNext();
                }}
                className="border w-24 h-8 bg-orange-500 font-bold text-white hover:bg-orange-400 active:bg-orange-600"
              >
                Next
              </button>
            </div> */}
          </div>
        </div>
      ) : (
       <div></div>
      )}

      {fav === true
         ?  
        favArray.map((val) => (
          <div className="border border-red-200 h-[300px] absolute flex justify-center top-0 w-full">
            <div className="border border-black w-[400px] h-[500px] bg-white">
              <div className="flex mt-4">
                <div className="text-3xl font-bold text-orange-500 text-center w-[90%]">
                  FAVOURITES
                </div>
                <svg
                  onClick={() => {
                    setFav(false);
                  
                   
                  }}
                  className="w-10 h-8 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </div>
              <div className=" mt-12 h-[400px] ">
                {/* {favArray.length < 1 ? (
                  <div className=" h-[400px] flex justify-center items-center text-6xl font-bold opacity-50">
                    <span className="text-center">No Data Found</span>
                  </div>
                ) : ( */}
                  <div className="outer">
                    {favArray.map((ab)=>(<div className="flex justify-between mt-4">
                      <div className="name ml-4 text-start">{ab.name}</div>
                      <div className="fav mr-4" onClick={() => {
                            setFavArray(
                              favArray.filter((e) => e.id !== val.id)
                            );
                          }}>{star}</div>
                    </div>))}
                    
                  </div>
                 {/* )}  */}

                {/* <div className="">{val.name}</div> */}
              </div>
            </div>
          </div>
        ))
        : (<div></div>)}

      <div className="buttons  h-24 w-[100%] flex justify-center items-center mt-4">
        <div className=" w-[30%] h-20 flex justify-around items-center">
          <button
            onClick={() => {
              handleGet();
            }}
            className="button shadow-xl border w-20 text-white bg-blue-500 font-bold text-center hover:bg-blue-400 active:bg-blue-700  h-10"
          >
            Get
          </button>
          <button className="button shadow-xl border w-20 text-white bg-orange-500 font-bold text-center hover:bg-orange-400 active:bg-orange-700  h-10"
          onClick={()=>{
            setListArray([])
          }}>
            Clear
          </button>
          <button
            className="button shadow-xl border w-20 text-white bg-yellow-500 font-bold text-center hover:bg-yellow-300 active:bg-yellow-700  h-10"
            onClick={() => {
              setFav(true);
              console.log("favvv",favArray)
            }}
          >
            Favourite
          </button>
        </div>
      </div>

      <div className=" h-24 w-[100%]  flex justify-center items-center">
        <div className=" w-[70%] h-20 shadow-lg flex justify-around items-center bg-slate-100 text-xl font-bold">
          <div className="id border w-[5%]">ID</div>
          <div className="title w-[50%]">Title</div>
          <div className="fav">Add to favourites</div>
          <div className="info">Info</div>
          <div className="delete">Delete</div>
        </div>
      </div>

      {loading === true ? (
        <div class="flex justify-center items-center space-x-2 mt-4">
          <div
            class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"
            role="status"
          >
            <span class="visually-hidden"></span>
          </div>
        </div>
      ) : (
        listArray
          .filter((val) => val.postId < 3)
          .map((value) => (
            <div className=" h-24 w-[100%] flex justify-center items-center">
              <div className=" w-[70%] h-20 flex border shadow-md items-center  text-xl font-bold">
                <div className="id  w-[5%] mx-8">{value.id}</div>
                <div className="title w-[55%]">{value.name}</div>
                <div
                  onClick={() => {                  
                    const myArray = {
                      postId:value.postId,
                      id: value.id,
                      name: value.name,
                      email: value.email,
                      body: value.body,
                    }
                    console.log("myarray", myArray)
                    console.log("favarray", favArray)
                    favArray
                      .map((e) => {
                        return e.id.toString();
                      })
                      .includes(value.id.toString())
                      ? setFavArray(favArray.filter(
                        (vall) => vall.id !== value.id
                      )) 
                      :
                       setFavArray(favArray.concat(myArray));
                       console.log("favarray", favArray)

                      // setFavArray(myArray);  
                   
                  
                  }}
                  className={` fav  mx-8 w-[10%]  flex justify-center cursor-pointer`}
                >
                 {favArray
                            .map((e) => {
                              return e.id.toString();
                            })
                            .includes(value.id.toString())
                            ? star
                            : star2}

                
                </div>
                <div className="info w-[10%]  flex justify-center cursor-pointer">
                  <svg
                    onClick={() => {
                      handleInfo(value.id);
                    }}
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      path
                      fill="#0000ff"
                      d="M10 .4C4.697.4.399 4.698.399 10A9.6 9.6 0 0 0 10 19.601c5.301 0 9.6-4.298 9.6-9.601 0-5.302-4.299-9.6-9.6-9.6zm.896 3.466c.936 0 1.211.543 1.211 1.164 0 .775-.62 1.492-1.679 1.492-.886 0-1.308-.445-1.282-1.182 0-.621.519-1.474 1.75-1.474zM8.498 15.75c-.64 0-1.107-.389-.66-2.094l.733-3.025c.127-.484.148-.678 0-.678-.191 0-1.022.334-1.512.664l-.319-.523c1.555-1.299 3.343-2.061 4.108-2.061.64 0 .746.756.427 1.92l-.84 3.18c-.149.562-.085.756.064.756.192 0 .82-.232 1.438-.719l.362.486c-1.513 1.512-3.162 2.094-3.801 2.094z"
                    />
                  </svg>
                </div>
                <div className="delete w-[5%]  mx-2 flex justify-center cursor-pointer ">
                  <svg
                    onClick={() => {
                      handleDelete(value.id);
                    }}
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ff0000"
                      d="M35,11H28.82A3,3,0,0,0,26,7H22a3,3,0,0,0-2.82,4H13a3,3,0,0,0,0,6V37a4,4,0,0,0,4,4H31a4,4,0,0,0,4-4V17A3,3,0,0,0,35,11ZM21,10a1,1,0,0,1,1-1h4a1,1,0,0,1,0,2H22A1,1,0,0,1,21,10ZM33,37a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17H33Zm2-22H13a1,1,0,0,1,0-2H35A1,1,0,0,1,35,15ZM18,35.08V21a1,1,0,0,1,2,0v14a1,1,0,0,1-2,0Zm10,0V21a1,1,0,0,1,2,0v14a1,1,0,0,1-2,0Zm-5-3V24a1,1,0,0,1,2,0v8a1,1,0,0,1-2,0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))
      )}
    </div>
  );
                  }

export default Dropdown;