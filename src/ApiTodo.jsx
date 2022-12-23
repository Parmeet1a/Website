import axios from "axios";
import React, { useState } from "react";


function ApiTodo() {
  const [listArray, setListArray] = useState([]);
  const [favArray, setFavArray] = useState([]);
  const [favouriteArray, setFavouriteArray] = useState();

  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [fav, setFav] = useState(false);
  const [infoId, setInfoId] = useState("");
  const [infoTitle, setInfoTitle] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [intialSvg, setInitialSvg] = useState(
    <svg
      className="h-8 w-8 "
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fill="#ff0000"
        d="M10.14 2.4A3.87 3.87 0 0 0 8 3.05a3.86 3.86 0 0 0-6 3.21 3.8 3.8 0 0 0 1.5 3.05l4.15 4.14a.48.48 0 0 0 .7 0l4.1-4.1a3.86 3.86 0 0 0-2.31-6.95Zm1.65 6.2L8 12.39 4.15 8.55A2.86 2.86 0 0 1 5.86 3.4a2.88 2.88 0 0 1 1.82.65.49.49 0 0 0 .64 0 2.86 2.86 0 1 1 3.47 4.55Z"
        data-name="Layer 2"
      />
    </svg>
  );

  const [secondSvg, setSecondSvg] = useState(
    <svg
      className="h-10 w-10"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Favourite Filled"
    >
      <path fill="none" d="M0 0h24v24H0Z" />
      <path
        fill="#ff0000"
        d="M11.994 20.696a1.407 1.407 0 0 1-.986-.41L4.08 13.359a5.712 5.712 0 0 1 7.926-8.226 5.715 5.715 0 0 1 7.918 8.241l-6.944 6.922a1.4 1.4 0 0 1-.986.4Z"
        data-name="Path 2729"
      />
    </svg>
  );

  const [svgState, setSvgState] = useState(intialSvg);



  const handleSvg = (id) => {

  
     if (svgState === intialSvg) {
      setSvgState(secondSvg);
    } else if (svgState === secondSvg) {
      setSvgState(intialSvg);
    }



    let favouriteArray = listArray.filter((val) => val.id === id);
    // console.log(favouriteArray);

    const filVal = [...favouriteArray, ...favArray];

    setFavArray(filVal);

    // console.log(filVal);

    // console.log(listArray[id-1]);
  };

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

  const handleSearch = () => {
    // console.log(inputValue);

    let searchedArray = listArray[inputValue - 1];
    // console.log(searchedArray);

    
  };

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
                setInputValue(inpVal);
              }}
              className=" h-8 w-[200px] mx-2 font-bold p-2 outline-none"
            />
            <button
              onClick={() => {
                handleSearch();
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
        ""
      )}

      {fav === true
        ? favArray.map((val) => (
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
                {favArray.length < 2 ? (
                  <div className=" h-[400px] flex justify-center items-center text-6xl font-bold opacity-50">
                    <span className="text-center">No Data Found</span>
                  </div>
                ) : (
                  ""
                )}

                <div className="">{val.name}</div>
              </div>
            </div>
          </div>
        ))
        : ""}

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
          <button className="button shadow-xl border w-20 text-white bg-orange-500 font-bold text-center hover:bg-orange-400 active:bg-orange-700  h-10">
            Clear
          </button>
          <button
            onClick={() => {
              setFav(true);
            }}
            className="button shadow-xl border w-20 text-white bg-yellow-500 font-bold text-center hover:bg-yellow-300 active:bg-yellow-700  h-10"
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

                      id: value.id 
                    }

                    setFavouriteArray(myArray);  
                    console.log(favouriteArray.id);

                    if(favouriteArray.id === value.id){

                      handleSvg();
                    }

                    else{

                    }
                  
                  }}
                  className={` fav  mx-8 w-[10%]  flex justify-center cursor-pointer`}
                >
                 {svgState}

                
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

export default ApiTodo;
